import { notFound } from 'next/navigation';
import { verbs } from '@/data/verbs';
import { SITE } from '@/lib/site';
import { IRREGULAR_RULES } from '@/lib/irregularRules';
import { isIndexable } from '@/lib/indexable';

// Map hub slug → the verb.type strings that belong to this hub
const HUB_TYPES = {
  'ㅂ':       ['ㅂ irregular', 'ㅂ irregular (adj)'],
  'ㄷ':       ['ㄷ irregular', 'ㄷ irregular (adj)'],
  'ㅅ':       ['ㅅ irregular', 'ㅅ irregular (adj)'],
  'ㅎ':       ['ㅎ irregular', 'ㅎ irregular (adj)'],
  '르':       ['르 irregular', '르 irregular (adj)'],
  '으':       ['으 irregular', '으 irregular (adj)'],
  'ㄹ-stem':  ['ㄹ stem', 'ㄹ stem (adj)'],
  '하다':     ['하다 verb', '하다 (irregular)', '하다 verb (adj)'],
};

const HUB_META = {
  'ㅂ':      { title: 'ㅂ-irregular verbs',     headline: 'ㅂ irregular',     ruleKey: 'ㅂ irregular' },
  'ㄷ':      { title: 'ㄷ-irregular verbs',     headline: 'ㄷ irregular',     ruleKey: 'ㄷ irregular' },
  'ㅅ':      { title: 'ㅅ-irregular verbs',     headline: 'ㅅ irregular',     ruleKey: 'ㅅ irregular' },
  'ㅎ':      { title: 'ㅎ-irregular adjectives', headline: 'ㅎ irregular',    ruleKey: 'ㅎ irregular (adj)' },
  '르':      { title: '르-irregular verbs',     headline: '르 irregular',     ruleKey: '르 irregular' },
  '으':      { title: '으-irregular verbs',     headline: '으 irregular',     ruleKey: '으 irregular' },
  'ㄹ-stem': { title: 'ㄹ-stem verbs',          headline: 'ㄹ stem',          ruleKey: 'ㄹ stem' },
  '하다':    { title: '하다 verbs',             headline: '하다 verb',        ruleKey: '하다 verb' },
};

const ALL_HUB_SLUGS = Object.keys(HUB_TYPES);

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_HUB_SLUGS.map((t) => ({ type: t }));
}

export function generateMetadata({ params }) {
  const meta = HUB_META[params.type];
  if (!meta) return {};
  const url = `${SITE.url}/irregular/${encodeURIComponent(params.type)}`;
  return {
    title: `${meta.title} — Korean conjugation`,
    description: `List of all ${meta.title} in Korean with conjugation tables. Learn the ${meta.headline} pattern and practice with every verb in this class.`,
    alternates: { canonical: url },
    openGraph: { title: `${meta.title} · ${SITE.name}`, url, type: 'website' },
  };
}

export default function IrregularHubPage({ params }) {
  const hubSlug = params.type;
  const meta = HUB_META[hubSlug];
  if (!meta) notFound();

  const types = HUB_TYPES[hubSlug];
  const hubVerbs = verbs.filter((v) => types.includes(v.type) && isIndexable(v));
  const rule = IRREGULAR_RULES[meta.ruleKey];

  // Links to other hubs
  const otherHubs = ALL_HUB_SLUGS.filter((s) => s !== hubSlug);

  return (
    <main className="wrap">
      <nav className="crumbs">
        <a href="/">All verbs</a> &nbsp;/&nbsp; Irregular hubs &nbsp;/&nbsp;{' '}
        <span className="kr">{meta.headline}</span>
      </nav>

      <div className="badge rise">{meta.headline}</div>
      <h1 className="hero-sub" style={{ fontSize: 'clamp(28px,5vw,48px)', margin: '8px 0 0', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
        {meta.title}
      </h1>

      {rule && (
        <div className="rule-box rise" style={{ marginTop: 28 }}>
          <strong>The {meta.headline} pattern:</strong> {rule.summary}
        </div>
      )}

      <p className="hub-intro">
        {hubVerbs.length} {meta.title} in our dictionary. Click any verb to see
        its full conjugation table, pronunciation guide, and Revised Romanization.
      </p>

      <h2 className="grid-title">Verbs in this class</h2>
      <div className="hub-grid">
        {hubVerbs.map((v) => (
          <a className="hub-verb" key={v.slug} href={`/conjugate/${v.slug}`}>
            <span className="hk kr">{v.hangul}</span>
            <span className="he">{v.en.length > 50 ? v.en.slice(0, 47) + '…' : v.en}</span>
          </a>
        ))}
      </div>

      <section style={{ marginTop: 56 }}>
        <h2 className="grid-title">Other irregular verb types</h2>
        <div className="hub-hubs">
          {otherHubs.map((s) => (
            <a className="chip" key={s} href={`/irregular/${encodeURIComponent(s)}`}>
              <span className="ck kr">{s}</span> irregular
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
