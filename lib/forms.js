// lib/forms.js — stable IDs and learner-facing labels for every displayed form.
//
// Shared by scripts/generate.js (builds the reverse-lookup index), the verb
// page (anchor IDs on each cell), and the search box (labels in results).
// IDs are part of public URLs (/conjugate/meokda#past-polite) — don't rename.

const LEVEL_KEY = { Casual: 'casual', Polite: 'polite', Formal: 'formal' };

const EXTRA_IDS = {
  'Honorific / Command|Polite (-(으)세요)': 'command',
  "Suggestion / Let's|Polite (요)": 'suggestion',
  'Question|Polite (요)': 'question',
  'Connective "and"|— (고)': 'connective-and',
  'Conditional "if"|— (면)': 'conditional-if',
  'Progressive|(고 있어요)': 'progressive',
  'Want to|(고 싶어요)': 'want-to',
  'Can / Able to|((으)ㄹ 수 있어요)': 'can',
  'Because / So|(아/어서)': 'because',
  'Noun form|— (기)': 'noun-gi',
  'Noun form|— (음)': 'noun-eum',
};

// Ordered: the index stores a form's position in this list, not its ID.
const FORMS = [
  ['present-casual', 'casual present'],
  ['present-polite', 'polite present'],
  ['present-formal', 'formal present'],
  ['past-casual', 'casual past'],
  ['past-polite', 'polite past'],
  ['past-formal', 'formal past'],
  ['future-casual', 'casual future'],
  ['future-polite', 'polite future'],
  ['future-formal', 'formal future'],
  ['command', 'polite command (-(으)세요)'],
  ['suggestion', 'polite “let’s” suggestion'],
  ['question', 'polite question'],
  ['connective-and', '“and” connective (-고)'],
  ['conditional-if', '“if” conditional (-(으)면)'],
  ['progressive', 'progressive (-고 있어요)'],
  ['want-to', '“want to” form (-고 싶어요)'],
  ['can', '“can” form (-(으)ㄹ 수 있어요)'],
  ['because', '“because / so” form (-아/어서)'],
  ['noun-gi', 'noun form (-기)'],
  ['noun-eum', 'noun form (-음)'],
];

const FORM_INDEX = Object.fromEntries(FORMS.map(([id], i) => [id, i]));

/** Anchor ID for a grid cell ({ tenseKey, level }) or an extra ({ label, level }). */
function formId(entry) {
  if (entry.tenseKey) return `${entry.tenseKey}-${LEVEL_KEY[entry.level.split(' ')[0]]}`;
  return EXTRA_IDS[`${entry.label}|${entry.level}`];
}

/** Lookup key: NFC, no whitespace, no sentence punctuation. "먹을 거예요?" → "먹을거예요" */
function normalizeForm(s) {
  return (s || '').normalize('NFC').replace(/[\s?.!,;:"'“”‘’？！。、]/g, '');
}

const SHARD_COUNT = 256;

/** Which index shard a normalized key lives in (by its first character). */
function shardOf(key) {
  return String(key.codePointAt(0) % SHARD_COUNT).padStart(3, '0');
}

module.exports = { FORMS, FORM_INDEX, formId, normalizeForm, shardOf, SHARD_COUNT };
