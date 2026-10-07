// lib/hubs.js — the irregular-verb hub pages: one source of truth for their
// URLs, labels, and which verb types belong to each.
//
// Slugs are ASCII so the static params always match the request path.
// `legacy` is the old Korean slug (/irregular/ㅂ); next.config.mjs 301s it here.

const HUBS = [
  {
    slug: 'b-irregular', legacy: 'ㅂ', label: 'ㅂ', name: 'ㅂ irregular', desc: 'ㅂ→우 before vowels',
    title: 'ㅂ-irregular verbs', ruleKey: 'ㅂ irregular',
    types: ['ㅂ irregular', 'ㅂ irregular (adj)'],
  },
  {
    slug: 'd-irregular', legacy: 'ㄷ', label: 'ㄷ', name: 'ㄷ irregular', desc: 'ㄷ→ㄹ before vowels',
    title: 'ㄷ-irregular verbs', ruleKey: 'ㄷ irregular',
    types: ['ㄷ irregular', 'ㄷ irregular (adj)'],
  },
  {
    slug: 's-irregular', legacy: 'ㅅ', label: 'ㅅ', name: 'ㅅ irregular', desc: 'ㅅ drops before vowels',
    title: 'ㅅ-irregular verbs', ruleKey: 'ㅅ irregular',
    types: ['ㅅ irregular', 'ㅅ irregular (adj)'],
  },
  {
    slug: 'h-irregular', legacy: 'ㅎ', label: 'ㅎ', name: 'ㅎ irregular', desc: 'ㅎ drops + contraction',
    title: 'ㅎ-irregular adjectives', ruleKey: 'ㅎ irregular (adj)',
    types: ['ㅎ irregular', 'ㅎ irregular (adj)'],
  },
  {
    slug: 'reu-irregular', legacy: '르', label: '르', name: '르 irregular', desc: '르 splits: ㄹ+ㄹ',
    title: '르-irregular verbs', ruleKey: '르 irregular',
    types: ['르 irregular', '르 irregular (adj)'],
  },
  {
    slug: 'eu-irregular', legacy: '으', label: '으', name: '으 irregular', desc: 'ㅡ drops before vowels',
    title: '으-irregular verbs', ruleKey: '으 irregular',
    types: ['으 irregular', '으 irregular (adj)'],
  },
  {
    slug: 'l-stem', legacy: 'ㄹ-stem', label: 'ㄹ', name: 'ㄹ stem', desc: 'ㄹ drops before ㄴ/ㅂ/ㅅ',
    title: 'ㄹ-stem verbs', ruleKey: 'ㄹ stem',
    types: ['ㄹ stem', 'ㄹ stem (adj)'],
  },
  {
    slug: 'hada', legacy: '하다', label: '하', name: '하다 verb', desc: '하→해 before 아/어',
    title: '하다 verbs', ruleKey: '하다 verb',
    types: ['하다 verb', '하다 (irregular)', '하다 verb (adj)'],
  },
];

const hubPath = (hub) => `/irregular/${hub.slug}`;

/** The hub a verb type belongs to (e.g. 'ㅂ irregular (adj)' → b-irregular), or null. */
function hubForType(type) {
  return HUBS.find((h) => h.types.includes(type)) || null;
}

function hubBySlug(slug) {
  return HUBS.find((h) => h.slug === slug) || null;
}

/** 301s from the old Korean URLs, as both raw and percent-encoded sources. */
function legacyHubRedirects() {
  return HUBS.flatMap((h) => {
    const encoded = encodeURIComponent(h.legacy);
    const sources = [...new Set([h.legacy, encoded, encoded.toLowerCase()])];
    // statusCode, not `permanent: true` — that sends 308, and we want a classic 301.
    return sources.map((s) => ({ source: `/irregular/${s}`, destination: hubPath(h), statusCode: 301 }));
  });
}

module.exports = { HUBS, hubPath, hubForType, hubBySlug, legacyHubRedirects };
