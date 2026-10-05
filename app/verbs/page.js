import { verbs } from '@/data/verbs';
import { isIndexable } from '@/lib/indexable';
import { SITE } from '@/lib/site';

const PAGE_SIZE = 100;

export const metadata = {
  title: 'All Korean Verbs — Full Index',
  description: `Browse all ${verbs.filter(isIndexable).length} Korean verbs on ${SITE.name}, alphabetically, with links to full conjugation tables.`,
  alternates: { canonical: `${SITE.url}/verbs` },
};

export default function VerbsPage({ searchParams }) {
  const indexableVerbs = verbs.filter(isIndexable);
  const q = (searchParams?.q || '').trim().toLowerCase();

  const filtered = q
    ? indexableVerbs.filter(
        (v) =>
          v.hangul.includes(q) ||
          v.slug.includes(q) ||
          v.en.toLowerCase().includes(q) ||
          v.type.toLowerCase().includes(q)
      )
    : indexableVerbs;

  const sorted = [...filtered].sort((a, b) => a.en.localeCompare(b.en));

  const page = Math.max(1, parseInt(searchParams?.page || '1', 10));
  const totalPages = Math.ceil(sorted.length / PAGE_SIZE);
  const pageVerbs = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const pageUrl = (p) => `/verbs?page=${p}${q ? `&q=${encodeURIComponent(q)}` : ''}`;

  return (
    <main className="wrap">
      <nav className="crumbs">
        <a href="/">Home</a> &nbsp;/&nbsp; All verbs
      </nav>

      <h1
        className="hero-sub"
        style={{
          fontSize: 'clamp(28px,5vw,44px)',
          margin: '12px 0 8px',
          fontFamily: 'var(--font-display)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
        }}
      >
        Korean verb index
      </h1>
      <p style={{ color: 'var(--ink-soft)', marginBottom: 24, fontSize: 16 }}>
        {sorted.length.toLocaleString()} verb{sorted.length !== 1 ? 's' : ''}
        {q ? ` matching "${q}"` : ''} — page {page} of {totalPages}
      </p>

      <form method="get" action="/verbs" style={{ marginBottom: 24 }}>
        <input
          className="search"
          type="search"
          name="q"
          defaultValue={q}
          placeholder={'Search — 먹다, meokda, “to eat”…'}
          aria-label="Search Korean verbs"
        />
      </form>

      <div className="verb-grid">
        {pageVerbs.map((v) => (
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

      {totalPages > 1 && (
        <nav className="page-nav" aria-label="Page navigation">
          {page > 1 && <a href={pageUrl(page - 1)}>← Prev</a>}
          {Array.from({ length: Math.min(totalPages, 9) }, (_, i) => {
            // Show pages around current + first + last
            const p = i + 1;
            return (
              <a
                key={p}
                href={pageUrl(p)}
                className={p === page ? 'active' : ''}
                aria-current={p === page ? 'page' : undefined}
              >
                {p}
              </a>
            );
          })}
          {totalPages > 9 && page < totalPages && <span>…</span>}
          {totalPages > 9 && (
            <a href={pageUrl(totalPages)} className={page === totalPages ? 'active' : ''}>
              {totalPages}
            </a>
          )}
          {page < totalPages && <a href={pageUrl(page + 1)}>Next →</a>}
        </nav>
      )}
    </main>
  );
}
