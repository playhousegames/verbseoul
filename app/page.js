import { verbs } from '@/data/verbs';
import { isIndexable } from '@/lib/indexable';

const TOP_50_SLUGS = [
  'meokda','gada','oda','boda','hada','sada','jada','juda','batda','ikda',
  'sseuda','deutda','geotda','mutda','salda','alda','moreuda','bureuda',
  'masida','baeuda','gareuchida','ilhada','gongbuhada','saranghada','joahada',
  'mannada','gidarida','nolda','ulda','utda','antda','seoda','nupda','dopda',
  'chupda','deopda','swipda','eoryeopda','yeppeuda','bappeuda','apeuda',
  'keuda','nappeuda','jota','masitda','jaemiitda','yeolda','datda','palda','ipda',
];

const HUB_CARDS = [
  { slug: 'ㅂ',      label: 'ㅂ',  name: 'ㅂ irregular',    desc: 'ㅂ→우 before vowels' },
  { slug: 'ㄷ',      label: 'ㄷ',  name: 'ㄷ irregular',    desc: 'ㄷ→ㄹ before vowels' },
  { slug: 'ㅅ',      label: 'ㅅ',  name: 'ㅅ irregular',    desc: 'ㅅ drops before vowels' },
  { slug: 'ㅎ',      label: 'ㅎ',  name: 'ㅎ irregular',    desc: 'ㅎ drops + contraction' },
  { slug: '르',      label: '르',  name: '르 irregular',    desc: '르 splits: ㄹ+ㄹ' },
  { slug: '으',      label: '으',  name: '으 irregular',    desc: 'ㅡ drops before vowels' },
  { slug: 'ㄹ-stem', label: 'ㄹ',  name: 'ㄹ stem',         desc: 'ㄹ drops before ㄴ/ㅂ/ㅅ' },
  { slug: '하다',    label: '하',  name: '하다 verb',        desc: '하→해 before 아/어' },
];

export default function Home() {
  const top50 = TOP_50_SLUGS
    .map((slug) => verbs.find((v) => v.slug === slug))
    .filter(Boolean);

  // Count verbs per hub for display
  const HUB_TYPES = {
    'ㅂ':      ['ㅂ irregular', 'ㅂ irregular (adj)'],
    'ㄷ':      ['ㄷ irregular', 'ㄷ irregular (adj)'],
    'ㅅ':      ['ㅅ irregular', 'ㅅ irregular (adj)'],
    'ㅎ':      ['ㅎ irregular', 'ㅎ irregular (adj)'],
    '르':      ['르 irregular', '르 irregular (adj)'],
    '으':      ['으 irregular', '으 irregular (adj)'],
    'ㄹ-stem': ['ㄹ stem', 'ㄹ stem (adj)'],
    '하다':    ['하다 verb', '하다 (irregular)', '하다 verb (adj)'],
  };
  const hubCounts = {};
  for (const v of verbs) {
    if (!isIndexable(v)) continue;
    for (const [slug, types] of Object.entries(HUB_TYPES)) {
      if (types.includes(v.type)) {
        hubCounts[slug] = (hubCounts[slug] || 0) + 1;
        break;
      }
    }
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
            <form action="/verbs" method="get">
              <input
                className="search"
                type="search"
                name="q"
                placeholder={'Search — 먹다, meokda, "to eat"…'}
                aria-label="Search Korean verbs"
                autoComplete="off"
              />
            </form>
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
          {HUB_CARDS.map((h) => (
            <a className="hub-card" key={h.slug} href={`/irregular/${encodeURIComponent(h.slug)}`}>
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
