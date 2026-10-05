// engine.js — thin wrapper around the vendored Dan Bravender conjugator.
//
// Responsibilities:
//   1. Wire up the four Bravender modules (they expect `romanization` as a global).
//   2. Run every conjugation form for a verb.
//   3. Fix a known defect in the JS port: declarative/inquisitive/propositive
//      "present informal high" forms corrupt the stem for ㄷ-irregular verbs
//      (듣다 -> 㭤어요 instead of 들어요). The polite present is always
//      "casual present + 요", so we recompute those three from the verified
//      casual form, which is correct for every verb class.
//   4. Return a curated, human-labelled set instead of all 37 raw forms.
//
// NOTE: the vendored modules are AGPL-3.0. See ./bravender/LICENSE-AGPL.txt and
// the licensing section of the project README before deploying commercially.

const pronunciation = require('./bravender/pronunciation');
const romanization = require('./bravender/romanization');
const hangeul = require('./bravender/hangeul');
// conjugator.js references a bare `romanization` global in its display helpers.
global.romanization = romanization;
const conjugator = require('./bravender/conjugator');

// ─── Pronunciation-guide romanization (bravender system) ──────────────────────

function romanize(hangul_str) {
  try {
    const raw = romanization.romanize(pronunciation.get_pronunciation(hangul_str));
    // Future-tense forms like "먹을 거야" produce "- -" at the word boundary;
    // collapse that back to a plain space.
    return raw.replace(/- -/g, ' ').replace(/-\s*$/, '').replace(/^\s*-/, '');
  } catch (e) {
    return '';
  }
}

function fixRoman(s) {
  if (!s) return s;
  return s.replace(/- -/g, ' ').replace(/-\s*$/, '').replace(/^\s*-/, '');
}

// ─── Revised Romanization (국어의 로마자 표기법) ──────────────────────────────
// Applied to phonetically-processed Hangul so liaison / assimilation are
// already encoded in the syllable structure.

const RR_VOWEL = {
  'ㅏ': 'a',  'ㅑ': 'ya', 'ㅓ': 'eo', 'ㅕ': 'yeo',
  'ㅗ': 'o',  'ㅛ': 'yo', 'ㅜ': 'u',  'ㅠ': 'yu',
  'ㅡ': 'eu', 'ㅣ': 'i',
  'ㅐ': 'ae', 'ㅒ': 'yae','ㅔ': 'e',  'ㅖ': 'ye',
  'ㅘ': 'wa', 'ㅙ': 'wae','ㅚ': 'oe', 'ㅝ': 'wo',
  'ㅞ': 'we', 'ㅟ': 'wi', 'ㅢ': 'ui',
};

// [initial-position, final-position]
const RR_CON = {
  'ᄀ': ['g', 'k'], 'ᄂ': ['n', 'n'], 'ᄃ': ['d', 't'], 'ᄅ': ['r', 'l'],
  'ᄆ': ['m', 'm'], 'ᄇ': ['b', 'p'], 'ᄉ': ['s', 't'], 'ᄋ': ['',  'ng'],
  'ᄌ': ['j', 't'], 'ᄎ': ['ch','t'], 'ᄏ': ['k', 'k'], 'ᄐ': ['t', 't'],
  'ᄑ': ['p', 'p'], 'ᄒ': ['h', 't'],
  'ᄁ': ['kk','k'], 'ᄄ': ['tt','t'], 'ᄈ': ['pp','p'], 'ᄊ': ['ss','ss'],
  'ᄍ': ['jj','t'],
};

// Map a padchim jamo to its lead-position equivalent for the final lookup.
const PADCHIM_TO_LEAD = pronunciation.padchim_to_lead || {};

function rrChar(character) {
  if (!hangeul.is_hangeul(character)) return character;
  const l = hangeul.lead(character);
  const v = hangeul.vowel(character);
  const p = hangeul.padchim(character);
  const lStr = RR_CON[l] ? RR_CON[l][0] : '';
  const vStr = RR_VOWEL[v] || '';
  let pStr = '';
  if (p) {
    if (RR_CON[p]) {
      pStr = RR_CON[p][1];
    } else if (PADCHIM_TO_LEAD[p] && RR_CON[PADCHIM_TO_LEAD[p]]) {
      pStr = RR_CON[PADCHIM_TO_LEAD[p]][1];
    }
  }
  return lStr + vStr + pStr;
}

function romanizeRR(hangul_str) {
  try {
    const phon = pronunciation.get_pronunciation(hangul_str);
    return phon.split(' ').map((word) =>
      word.split('').map(rrChar).join('')
    ).join(' ');
  } catch (e) {
    return '';
  }
}

// ─── Raw conjugation map ──────────────────────────────────────────────────────

// Raw map of every form name -> { hangul, romanized }
function rawForms(verb) {
  const map = {};
  conjugator.each_conjugation(verb, false, (r) => {
    map[r.conjugation_name] = { hangul: r.conjugated, romanized: fixRoman(r.romanized) };
  });
  return map;
}

// Forms whose stem the JS port corrupts for ㄷ-irregulars. The polite present
// is "casual present + 요" for every verb, so rebuild them safely.
function patchPolitePresent(map) {
  const casual = map['declarative present informal low'];
  if (!casual) return map;
  const stem = casual.hangul; // e.g. 들어, 먹어, 해, 가
  const overrides = {
    'declarative present informal high': stem + '요',
    'propositive present informal high': stem + '요',
    'inquisitive present informal high': stem + '요?',
  };
  for (const [name, hangulForm] of Object.entries(overrides)) {
    if (map[name]) map[name] = { hangul: hangulForm, romanized: romanize(hangulForm) };
  }
  return map;
}

// ─── Display sets ─────────────────────────────────────────────────────────────

// Curated display set: [rawName, label, speechLevel, tense]
const DISPLAY = [
  ['declarative present informal low', 'Present', 'Casual (반말)', 'present'],
  ['declarative present informal high', 'Present', 'Polite (요)', 'present'],
  ['declarative present formal high', 'Present', 'Formal (합니다)', 'present'],
  ['declarative past informal low', 'Past', 'Casual (반말)', 'past'],
  ['declarative past informal high', 'Past', 'Polite (요)', 'past'],
  ['declarative past formal high', 'Past', 'Formal (합니다)', 'past'],
  ['declarative future informal low', 'Future', 'Casual (반말)', 'future'],
  ['declarative future informal high', 'Future', 'Polite (요)', 'future'],
  ['declarative future formal high', 'Future', 'Formal (합니다)', 'future'],
];

// Extra useful forms shown below the main grid.
// Sentinels (prefix __) are computed by conjugate() rather than looked up in map.
const EXTRAS = [
  ['imperative present informal high', 'Honorific / Command', 'Polite (-(으)세요)'],
  ['propositive present informal high', "Suggestion / Let's", 'Polite (요)'],
  ['inquisitive present informal high', 'Question', 'Polite (요)'],
  ['connective and', 'Connective "and"', '— (고)'],
  ['connective if', 'Conditional "if"', '— (면)'],
  ['__progressive', 'Progressive', '(고 있어요)'],
  ['__want', 'Want to', '(고 싶어요)'],
  ['__can', 'Can / Able to', '((으)ㄹ 수 있어요)'],
  ['__because', 'Because / So', '(아/어서)'],
  // __nom_gi sentinel: conjugate() computes verb.slice(0,-1)+'기' directly.
  ['__nom_gi', 'Noun form', '— (기)'],
  ['nominal ing', 'Noun form', '— (음)'],
];

// ─── Main conjugate function ──────────────────────────────────────────────────

function makeForm(hangulForm) {
  return {
    hangul: hangulForm,
    romanized: romanize(hangulForm),
    rr: romanizeRR(hangulForm),
  };
}

/**
 * Conjugate a Korean dictionary-form verb (e.g. "먹다").
 * Returns a structured object ready for rendering.
 */
function conjugate(verb) {
  const map = patchPolitePresent(rawForms(verb));

  const grid = DISPLAY.map(([name, tenseLabel, level, tense]) => {
    const f = map[name];
    if (!f || !f.hangul) return null;
    return {
      tense: tenseLabel,
      tenseKey: tense,
      level,
      hangul: f.hangul,
      romanized: f.romanized,
      rr: romanizeRR(f.hangul),
    };
  }).filter(Boolean);

  // -기 nominalizer: replace final 다 with 기 (no stem changes for any class).
  const nomGi = verb.slice(0, -1) + '기';
  // -아/어서: append 서 to the casual present stem.
  const casualPres = map['declarative present informal low'];
  const becauseHangul = casualPres ? casualPres.hangul + '서' : '';
  // -고 있어요 (progressive) and -고 싶어요 (want): append to connective-and form.
  const connAnd = map['connective and'];
  const progressiveHangul = connAnd ? connAnd.hangul + ' 있어요' : '';
  const wantHangul = connAnd ? connAnd.hangul + ' 싶어요' : '';
  // -(으)ㄹ 수 있어요 (can): future base + 수 있어요.
  const futBase = map['future base'];
  const canHangul = futBase ? futBase.hangul + ' 수 있어요' : '';

  const extras = EXTRAS.map(([name, label, level]) => {
    let f;
    if (name === '__nom_gi') f = makeForm(nomGi);
    else if (name === '__progressive') f = becauseHangul ? makeForm(progressiveHangul) : null;
    else if (name === '__want') f = wantHangul ? makeForm(wantHangul) : null;
    else if (name === '__can') f = canHangul ? makeForm(canHangul) : null;
    else if (name === '__because') f = becauseHangul ? makeForm(becauseHangul) : null;
    else {
      const raw = map[name];
      f = raw && raw.hangul ? { hangul: raw.hangul, romanized: raw.romanized, rr: romanizeRR(raw.hangul) } : null;
    }
    if (!f || !f.hangul) return null;
    return { label, level, hangul: f.hangul, romanized: f.romanized, rr: f.rr };
  }).filter(Boolean);

  return { verb, grid, extras };
}

// ─── Classify ─────────────────────────────────────────────────────────────────

/**
 * Derive a verb's grammatical class from the conjugator's own transformation
 * "reasons" — accurate by construction, no spelling guesswork. `pos` is the
 * part of speech from the dictionary source ('verb' or 'adj'); Korean
 * adjectives are descriptive verbs and conjugate the same way.
 */
function classify(verb, pos) {
  const reasons = new Set();
  conjugator.each_conjugation(verb, false, (r) => {
    (r.reasons || []).forEach((x) => reasons.add(x));
  });
  const all = [...reasons].join(' | ');

  let cls;
  if (/ㄷ irregular/.test(all)) cls = 'ㄷ irregular';
  else if (/ㅂ irregular/.test(all)) cls = 'ㅂ irregular';
  else if (/ㅅ irregular/.test(all)) cls = 'ㅅ irregular';
  else if (/ㅎ irregular/.test(all)) cls = 'ㅎ irregular';
  else if (/르 irregular/.test(all)) cls = '르 irregular';
  else if (/drop ㄹ|drop ᆯ/.test(all)) cls = 'ㄹ stem';
  else if (/contraction \[ㅡ/.test(all)) cls = '으 irregular';
  else if (verb.endsWith('하다')) cls = '하다 verb';
  else cls = 'regular';

  const adj = pos === 'adj' || pos === 'adjective';
  if (adj) return cls === 'regular' ? 'descriptive' : `${cls} (adj)`;
  return cls;
}

module.exports = { conjugate, rawForms, classify, romanizeRR };
