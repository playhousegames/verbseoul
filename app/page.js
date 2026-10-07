import { verbs } from '@/data/verbs';
import { isIndexable } from '@/lib/indexable';
import { HUBS, hubPath, hubForType } from '@/lib/hubs';
import SearchBox from '@/components/SearchBox';

const TOP_50_SLUGS = [
  'meokda','gada','oda','boda','hada','sada','jada','juda','batda','ikda',
  'sseuda','deutda','geotda','mutda','salda','alda','moreuda','bureuda',
  'masida','baeuda','gareuchida','ilhada','gongbuhada','saranghada','joahada',
  'mannada','gidarida','nolda','ulda','utda','antda','seoda','nupda','dopda',
  'chupda','deopda','swipda','eoryeopda','yeppeuda','bappeuda','apeuda',
  'keuda','nappeuda','jota','masitda','jaemiitda','yeolda','datda','palda','ipda',
];

export default function Home() {
  const top50 = TOP_50_SLUGS
    .map((slug) => verbs.find((v) => v.slug === slug))
    .filter(Boolean);

  // Count verbs per hub for display
  const hubCounts = {};
  for (const v of verbs) {
    const hub = isIndexable(v) && hubForType(v.type);
    if (hub) hubCounts[hub.slug] = (hubCounts[hub.slug] || 0) + 1;
  }

  return (
    <main>
      <section className="hero">
        <div className="hero-watermark kr" aria-hidden="true">다</div>
        <div className="wrap hero-inner">
          <div className="eyebrow rise">The Korean verb conjugator</div>
          <h1 className="hero-title rise">
            Every form of <em>every</em> Korean verb.
          </h1>
          <p className="hero-sub rise rise-2">
            Casual, polite, and formal. Present, past, and future. Find any verb and see
            the whole table — with pronunciation and Revised Romanization — in one place.
          </p>
          <div className="search-row rise rise-3">
            <SearchBox autoComplete="off" />
          </div>
        </div>
      </section>

      <section className="wrap top50-section">
        <h2 className="grid-title">50 most common Korean verbs</h2>
        <div className="top50-grid">
          {top50.map((v) => (
            <a className="verb-cell" key={v.slug} href={`/conjugate/${v.slug}`}>
              <span className="vk kr">
                {v.hangul}
                <span className="arrow">→</span>
              </span>
              <span className="ve">{v.en.length > 40 ? v.en.slice(0, 38) + '…' : v.en}</span>
              <span className="vt">{v.type}</span>
            </a>
          ))}
        </div>
        <p style={{ marginTop: 18, fontSize: 14, color: 'var(--ink-faint)', fontStyle: 'italic' }}>
          <a href="/verbs" style={{ color: 'var(--accent-deep)' }}>Browse the full index →</a>
          &nbsp; {verbs.filter(isIndexable).length.toLocaleString()} verbs total
        </p>
      </section>

      <section className="wrap" style={{ marginTop: 56 }}>
        <h2 className="grid-title">Irregular verb types</h2>
        <p style={{ color: 'var(--ink-soft)', marginBottom: 18, fontSize: 16 }}>
          Korean has several groups of verbs that change their stem before vowel endings.
          Each hub explains the rule and lists every verb in that class.
        </p>
        <div className="hub-cards">
          {HUBS.map((h) => (
            <a className="hub-card" key={h.slug} href={hubPath(h)}>
              <span className="hc-label kr">{h.label}</span>
              <span className="hc-name">{h.name}</span>
              <span className="hc-count">{(hubCounts[h.slug] || 0)} verbs · {h.desc}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
