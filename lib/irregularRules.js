// lib/irregularRules.js — one-paragraph explanations for each irregular verb class.
// Used on verb pages and hub pages.

const IRREGULAR_RULES = {
  'ㅂ irregular': {
    summary:
      'ㅂ-irregular verbs end in 다 with a ㅂ final consonant. When a vowel suffix is added, ' +
      'the ㅂ drops and 우 is inserted (or 오 for 돕다 and 곱다). For example, 돕다 (to help) ' +
      'becomes 도와요 in the polite present instead of the expected *돕어요. ' +
      'Before consonant suffixes the ㅂ stays: 돕고, 돕지.',
    pattern: '-(ㅂ→우/오) + 어/아…',
  },
  'ㅂ irregular (adj)': {
    summary:
      'ㅂ-irregular adjectives follow the same rule as ㅂ-irregular verbs: the ㅂ changes to ' +
      '우 when a vowel suffix follows. 덥다 (to be hot) becomes 더워요; 쉽다 (to be easy) ' +
      'becomes 쉬워요. The ㅂ is kept intact before consonant suffixes: 덥고, 쉽지.',
    pattern: '-(ㅂ→우) + 어/아…',
  },
  'ㄷ irregular': {
    summary:
      'ㄷ-irregular verbs end in 다 with a ㄷ final consonant. Before a vowel, the ㄷ changes ' +
      'to ㄹ. So 듣다 (to listen) becomes 들어요 — NOT *듣어요. Before consonants the ㄷ ' +
      'stays: 듣고, 듣지. A few verbs that look like ㄷ-irregulars are actually regular (e.g. ' +
      '받다, 믿다) — there is no spelling rule; each must be memorised.',
    pattern: '-(ㄷ→ㄹ) + 어/아…',
  },
  'ㅅ irregular': {
    summary:
      'ㅅ-irregular verbs end in 다 with a ㅅ final consonant. Before a vowel suffix the ㅅ ' +
      'drops entirely, leaving no consonant. 짓다 (to build) becomes 지어요 — NOT *짓어요. ' +
      'Before consonants the ㅅ remains: 짓고, 짓지. Several ㅅ-final verbs are regular ' +
      '(e.g. 씻다, 벗다), so this must be learnt word by word.',
    pattern: '-(ㅅ drops) + 어/아…',
  },
  'ㅎ irregular': {
    summary:
      'ㅎ-irregular adjectives end in 다 with ㅎ as the final consonant. Before a vowel, the ' +
      'ㅎ drops and the preceding vowel often contracts: 그렇다 (to be so) → 그래요, ' +
      '어떻다 (how?) → 어때요. Before consonants the ㅎ stays: 그렇고, 그렇지. ' +
      'Pure verbs with ㅎ endings are rare; most are adjectives.',
    pattern: '-(ㅎ drops + vowel contraction) + 어/아…',
  },
  'ㅎ irregular (adj)': {
    summary:
      'ㅎ-irregular adjectives end in 다 with ㅎ as the final consonant. Before a vowel, the ' +
      'ㅎ drops and the preceding vowel often contracts: 노랗다 (yellow) → 노래요, ' +
      '이렇다 (like this) → 이래요. The ㅎ stays before consonant suffixes: 노랗고, 이렇지.',
    pattern: '-(ㅎ drops + vowel contraction) + 어/아…',
  },
  '르 irregular': {
    summary:
      '르-irregular verbs and adjectives end in 르다. Before the -어/-아 suffix the 르 splits: ' +
      'the ㅡ vowel drops and a ㄹ is added as the final consonant of the preceding syllable. ' +
      '모르다 (not to know) → 몰라요 (not *모르어요), 부르다 (to call) → 불러요. ' +
      'Before consonant suffixes 르 stays intact: 모르고, 부르지.',
    pattern: '-(르→ㄹ + ㄹ) + 아/어…',
  },
  '르 irregular (adj)': {
    summary:
      '르-irregular adjectives follow the same pattern as 르-irregular verbs: 르 splits before ' +
      '-어/-아 suffixes. 다르다 (to be different) → 달라요, 빠르다 (to be fast) → 빨라요. ' +
      'Before consonants 르 is unchanged: 다르고, 빠르지.',
    pattern: '-(르→ㄹ + ㄹ) + 아/어…',
  },
  '으 irregular': {
    summary:
      '으-irregular verbs end in ㅡ preceded by a consonant (e.g. 쓰다, 예쁘다). Before a ' +
      'vowel suffix, the ㅡ is dropped entirely. 쓰다 (to write) → 써요, 예쁘다 (to be ' +
      'pretty) → 예뻐요. Because ㅡ itself has no inherent "brighter" or "darker" quality, ' +
      'the vowel harmony is determined by the preceding syllable.',
    pattern: '-(ㅡ drops) + 아/어…',
  },
  '으 irregular (adj)': {
    summary:
      '으-irregular adjectives end in ㅡ before 다. The ㅡ drops when a vowel suffix is added. ' +
      '배고프다 (to be hungry) → 배고파요; 슬프다 (to be sad) → 슬퍼요. ' +
      'The resulting vowel (아 vs 어) follows the vowel of the syllable before ㅡ.',
    pattern: '-(ㅡ drops) + 아/어…',
  },
  'ㄹ stem': {
    summary:
      'ㄹ-stem verbs end in ㄹ as the final consonant. They are conjugated regularly with ' +
      'vowel suffixes (살다 → 살아요), but the ㄹ drops before certain consonant suffixes — ' +
      'specifically before ㄴ, ㅂ, ㅅ, and before the formal ending 습니다: ' +
      '살다 → 사는, 삽니다, 살지 (ㄹ kept before ㅈ). ' +
      'This is sometimes called a "ㄹ drop" or "ㄹ irregular."',
    pattern: '-(ㄹ drops before ㄴ/ㅂ/ㅅ/어요X)…',
  },
  'ㄹ stem (adj)': {
    summary:
      'ㄹ-stem adjectives follow the same pattern as ㄹ-stem verbs: the ㄹ is kept before ' +
      'vowel suffixes and drops before ㄴ, ㅂ, and 습니다. 길다 (to be long) → 길어요, ' +
      '긴, 깁니다. 멀다 (to be far) → 멀어요, 먼, 멉니다.',
    pattern: '-(ㄹ drops before ㄴ/ㅂ/ㅅ)…',
  },
  '하다 verb': {
    summary:
      '하다 verbs are formed with a Sino-Korean noun + 하다 (e.g. 공부하다 = study + do). ' +
      '하다 conjugates irregularly: the ㅏ in 하 contracts with the -아/-어 suffix to give ' +
      '해 (not *하어). Present polite: 해요; past polite: 했어요. The formal ending is ' +
      '합니다 (not *하습니다). Most noun+하다 compounds follow this pattern uniformly.',
    pattern: '하(→해) + 요/서…',
  },
  '하다 (irregular)': {
    summary:
      '하다 (to do) is the base of Korean\'s most common verb class. It conjugates irregularly: ' +
      'the ㅏ in 하 contracts with the -아/-어 ending to give 해 instead of the expected *하어. ' +
      'Present polite: 해요; past: 했어요; future: 할 거예요. The formal form is 합니다.',
    pattern: '하(→해) + 요/서…',
  },
  '하다 verb (adj)': {
    summary:
      '하다 adjectives use the same verb 하다 as a suffix to turn descriptive nouns into ' +
      'predicates (행복하다 = to be happy). They conjugate identically to 하다 verbs: ' +
      'the 하 contracts before -아/-어 suffixes to give 해. 행복해요, 행복했어요, 행복합니다.',
    pattern: '하(→해) + 요/서…',
  },
  'regular': {
    summary:
      'Regular verbs and adjectives conjugate predictably. Before 어-series suffixes, ' +
      'vowels may contract (가 + 아 → 가, 보 + 아 → 봐), but no consonant in the stem ' +
      'changes. If the final vowel of the stem is ㅏ or ㅗ, use 아; otherwise use 어. ' +
      'Consonant-final stems: 먹 + 어 → 먹어; vowel-final: 가 + 아 → 가.',
    pattern: 'stem + 아/어…',
  },
  'descriptive': {
    summary:
      'Descriptive verbs (형용사) function like adjectives in Korean and conjugate the same ' +
      'way as regular action verbs. They cannot take the progressive -고 있어요 or imperative ' +
      'forms. 좋다 (to be good) → 좋아요; 크다 (to be big) → 커요 (으-irregular).',
    pattern: 'stem + 아/어…',
  },
};

/**
 * Returns the rule object for a verb's type, or a generic fallback.
 */
function getIrregularRule(verbType) {
  return IRREGULAR_RULES[verbType] || IRREGULAR_RULES['regular'];
}

module.exports = { IRREGULAR_RULES, getIrregularRule };
