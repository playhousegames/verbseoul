import { notFound } from 'next/navigation';
import { verbs } from '@/data/verbs';
import { SITE } from '@/lib/site';
import { IRREGULAR_RULES } from '@/lib/irregularRules';
import { isIndexable } from '@/lib/indexable';
import { HUBS, hubBySlug, hubPath } from '@/lib/hubs';

export const dynamicParams = false;

export function generateStaticParams() {
  return HUBS.map((h) => ({ type: h.slug }));
}

export function generateMetadata({ params }) {
  const meta = hubBySlug(params.type);
  if (!meta) return {};
  const url = `${SITE.url}${hubPath(meta)}`;
  return {
    title: `${meta.title} — Korean conjugation`,
    description: `List of all ${meta.title} in Korean with conjugation tables. Learn the ${meta.name} pattern and practice with every verb in this class.`,
    alternates: { canonical: url },
    openGraph: { title: `${meta.title} · ${SITE.name}`, url, type: 'website' },
  };
}

export default function IrregularHubPage({ params }) {
  const meta = hubBySlug(params.type);
  if (!meta) notFound();

  const hubVerbs = verbs.filter((v) => meta.types.includes(v.type) && isIndexable(v));
  const rule = IRREGULAR_RULES[meta.ruleKey];

  // Links to other hubs
  const otherHubs = HUBS.filter((h) => h !== meta);

  return (
    <main className="wrap">
      <nav className="crumbs">
        <a href="/">All verbs</a> &nbsp;/&nbsp; Irregular hubs &nbsp;/&nbsp;{' '}
        <span className="kr">{meta.name}</span>
      </nav>

      <div className="badge rise">{meta.name}</div>
      <h1 className="hero-sub" style={{ fontSize: 'clamp(28px,5vw,48px)', margin: '8px 0 0', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
        {meta.title}
      </h1>

      {rule && (
        <div className="rule-box rise" style={{ marginTop: 28 }}>
          <strong>The {meta.name} pattern:</strong> {rule.summary}
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
          {otherHubs.map((h) => (
            <a className="chip" key={h.slug} href={hubPath(h)}>
              <span className="ck kr">{h.name}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
