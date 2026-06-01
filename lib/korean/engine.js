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
// conjugator.js references a bare `romanization` global in its display helpers.
global.romanization = romanization;
const conjugator = require('./bravender/conjugator');

function romanize(hangul) {
  try {
    return romanization.romanize(pronunciation.get_pronunciation(hangul));
  } catch (e) {
    return '';
  }
}

// Raw map of every form name -> { hangul, romanized }
function rawForms(verb) {
  const map = {};
  conjugator.each_conjugation(verb, false, (r) => {
    map[r.conjugation_name] = { hangul: r.conjugated, romanized: r.romanized };
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
  for (const [name, hangul] of Object.entries(overrides)) {
    if (map[name]) map[name] = { hangul, romanized: romanize(hangul) };
  }
  return map;
}

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
const EXTRAS = [
  ['imperative present informal high', 'Command', 'Polite (세요)'],
  ['propositive present informal high', "Suggestion / Let's", 'Polite (요)'],
  ['inquisitive present informal high', 'Question', 'Polite (요)'],
  ['connective and', 'Connective “and”', '— (고)'],
  ['connective if', 'Conditional “if”', '— (면)'],
  ['nominal ing', 'Noun form', '— (기)'],
];

/**
 * Conjugate a Korean dictionary-form verb (e.g. "먹다").
 * Returns a structured object ready for rendering.
 */
function conjugate(verb) {
  const map = patchPolitePresent(rawForms(verb));

  const grid = DISPLAY.map(([name, tenseLabel, level, tense]) => ({
    tense: tenseLabel,
    tenseKey: tense,
    level,
    hangul: map[name] ? map[name].hangul : '',
    romanized: map[name] ? map[name].romanized : '',
  })).filter((f) => f.hangul);

  const extras = EXTRAS.map(([name, label, level]) => ({
    label,
    level,
    hangul: map[name] ? map[name].hangul : '',
    romanized: map[name] ? map[name].romanized : '',
  })).filter((f) => f.hangul);

  return { verb, grid, extras };
}

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

module.exports = { conjugate, rawForms, classify };
