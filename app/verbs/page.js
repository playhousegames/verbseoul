import { verbs } from '@/data/verbs';
import { isIndexable } from '@/lib/indexable';
import { SITE } from '@/lib/site';
import SearchBox from '@/components/SearchBox';

const PAGE_SIZE = 100;

export const metadata = {
  title: 'All Korean Verbs — Full Index',
  description: `Browse all ${verbs.filter(isIndexable).length} Korean verbs on ${SITE.name}, most common first, with links to full conjugation tables.`,
  alternates: { canonical: `${SITE.url}/verbs` },
};

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Rank a matched verb for a given query (lower = better). */
function rankVerb(v, q, enWordRe) {
  // Exact Korean or romanization
  if (v.hangul === q || v.slug === q) return 0;
  // Hangul or romanization starts with the query (strong partial romanization)
  if (v.hangul.startsWith(q) || v.slug.startsWith(q)) return 1;
  // Hangul contains query (Korean substring)
  if (v.hangul.includes(q)) return 2;
  // English word appears in primary meaning (before first comma/semicolon/paren)
  const primary = v.en.toLowerCase().split(/[,;(]/)[0].trim();
  if (enWordRe.test(primary)) return 3;
  // English word appears elsewhere in definition
  if (enWordRe.test(v.en)) return 4;
  // Romanization substring — lowest priority (can overlap English words like ppaeatda/eat)
  return 5;
}

export default function VerbsPage({ searchParams }) {
  const indexableVerbs = verbs.filter(isIndexable);
  const q = (searchParams?.q || '').trim().toLowerCase();

  // For English definitions, require whole-word matches so "eat" doesn't
  // surface "threaten", "treat", "repeat", etc.
  const enWordRe = q ? new RegExp(`\\b${escapeRe(q)}\\b`, 'i') : null;

  const filtered = q
    ? indexableVerbs.filter((v) => {
        // Korean/romanization: substring (users type partial syllables)
        if (v.hangul.includes(q) || v.slug.includes(q)) return true;
        // English: whole-word only
        return enWordRe.test(v.en);
      })
    : indexableVerbs;

  // When a query is present, sort by relevance rank then alphabetically within rank.
  // Without a query, keep seed-list order: curated, then by usage frequency.
  const sorted = q
    ? [...filtered].sort((a, b) => {
        const dr = rankVerb(a, q, enWordRe) - rankVerb(b, q, enWordRe);
        return dr !== 0 ? dr : a.en.localeCompare(b.en);
      })
    : filtered;

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
        {q ? ` matching "${q}"` : ''}
        {totalPages > 0 && ` — page ${page} of ${totalPages}`}
      </p>

      <div style={{ marginBottom: 24 }}>
        <SearchBox defaultValue={searchParams?.q || ''} />
      </div>

      {pageVerbs.length > 0 && (
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
      )}

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
