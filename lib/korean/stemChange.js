// stemChange.js — find the part of a conjugated form where the stem changed.
//
// The plain stem is the dictionary form minus 다 (춥다 → 춥). A form keeps its
// stem when it starts with the stem's jamo; anything else is a stem change:
//   춥다 → [추워]요   듣다 → [들]어요   하다 → [해]요   부르다 → [불러]요
//
// Ordinary vowel contractions are NOT stem changes, so regular verbs stay
// unmarked: 가+아요 → 가요, 가+았어요 → 갔어요, 마시+어요 → 마셔요, 보+아요 → 봐요.
// (Own code — not part of the AGPL Bravender module.)

const BASE = 0xac00;
const VOWELS = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ';
// Final-consonant indices
const TAIL_L = 8;   // ㄹ
const TAIL_LM = 10; // ㄻ
const TAIL_B = 17;  // ㅂ

function decompose(ch) {
  const code = ch.charCodeAt(0) - BASE;
  if (code < 0 || code > 11171) return null;
  return { lead: Math.floor(code / 588), vowel: VOWELS[Math.floor((code % 588) / 28)], tail: code % 28 };
}

// Open-syllable stem vowel → what it may contract to with a following 아/어.
const CONTRACTS = {
  'ㅏ': 'ㅏ', 'ㅓ': 'ㅓ', 'ㅐ': 'ㅐ', 'ㅔ': 'ㅔ', 'ㅕ': 'ㅕ',
  'ㅣ': 'ㅕ', 'ㅗ': 'ㅘ', 'ㅜ': 'ㅝ', 'ㅚ': 'ㅙ',
};

/** Does the form syllable `f` still contain the stem syllable `s` (allowing an ending to attach)? */
function keepsSyllable(s, f, isLast) {
  if (s === f) return true;
  if (!isLast) return false;
  const a = decompose(s), b = decompose(f);
  if (!a || !b || a.lead !== b.lead) return false;
  // Closed stem syllable: its final consonant must survive (먹 → 먹었),
  // possibly fused with the -음 noun ending (살 → 삶: ㄹ+ㅁ = ㄻ).
  if (a.tail) return a.vowel === b.vowel && (a.tail === b.tail || (a.tail === TAIL_L && b.tail === TAIL_LM));
  // Open stem syllable: an ending may add a final (가 → 갔/갑/갈/감) or contract the vowel.
  return a.vowel === b.vowel || CONTRACTS[a.vowel] === b.vowel;
}

/**
 * Split `form` into [before, changed, after] relative to the dictionary form.
 * Returns null when the stem is unchanged (nothing to highlight).
 */
function stemChange(dictionary, form) {
  const stem = [...dictionary.slice(0, -1)];
  const chars = [...form];
  const n = stem.length;

  let k = 0;
  while (k < n && k < chars.length && keepsSyllable(stem[k], chars[k], k === n - 1)) k++;
  if (k === n) return null;

  // Changed region runs from the first altered syllable to where the stem ended…
  let end = Math.min(n, chars.length);
  // …plus the 우/오 syllable a ㅂ-irregular stem turns into (춥 → 추워, 돕 → 도와).
  const last = decompose(stem[n - 1]);
  const atEnd = decompose(chars[n - 1] || '');
  const next = decompose(chars[n] || '');
  if (last && last.tail === TAIL_B && atEnd && atEnd.tail !== TAIL_B &&
      next && next.lead === 11 /* ㅇ */ && 'ㅜㅝㅗㅘ'.includes(next.vowel)) {
    end = n + 1;
  }
  if (end <= k) return null;
  return [chars.slice(0, k).join(''), chars.slice(k, end).join(''), chars.slice(end).join('')];
}

module.exports = { stemChange };
