// lib/indexable.js — determines whether a verb page should be indexed by search engines.
//
// A page is non-indexable if its English definition signals it is a secondary
// form (dialectal, alternative spelling, contraction, conjugated form, etc.)
// rather than a primary dictionary entry worth ranking independently.
//
// Rules are intentionally conservative: prefer to include than exclude when
// a definition is ambiguous.

const NON_INDEXABLE_PHRASES = [
  'alternative form',
  'alternative spelling',
  'dialect',
  'form of',
  'misspelling',
  'nonstandard',
  'contraction of',
  'North Korea',
  // Korean dialect regions
  'Pyongan',
  'Gyeongsang',
  'Jeolla',
  'Hamgyong',
  'Yukjin',
  'Hwanghae',
  'Chungcheong',
  'Gangwon',
  'Russia',
  'Yanbian',
  // Derived / honorific / causative forms that have their own primary entry
  'honorific of',
  'humble form of',
  'causative of',
  'subject honorific',
];

// Hangul endings that signal an already-conjugated form, not a dictionary entry.
const CONJUGATED_ENDINGS = ['습니다', 'ㅂ니다', '었다', '았다', '합니다'];

// Vulgar slang — manual override list (keep small).
const VULGAR_SLUGS = new Set([
  'ssibalda', // 씨발다 — extreme vulgar
]);

/**
 * Returns true if the verb should be indexed and included in sitemap.xml.
 * @param {{ hangul: string, slug: string, en: string, indexable?: boolean }} verb
 */
function isIndexable(verb) {
  // Allow hard overrides in the data file.
  if (typeof verb.indexable === 'boolean') return verb.indexable;

  if (VULGAR_SLUGS.has(verb.slug)) return false;

  // Already-conjugated entries (e.g. 감사합니다, 없었다).
  if (CONJUGATED_ENDINGS.some((e) => verb.hangul.endsWith(e))) return false;

  const def = (verb.en || '').toLowerCase();
  if (NON_INDEXABLE_PHRASES.some((p) => def.includes(p.toLowerCase()))) return false;

  return true;
}

module.exports = { isIndexable };
