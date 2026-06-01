'use client';
import { useMemo, useState } from 'react';

export default function VerbIndex({ verbs }) {
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return verbs;
    return verbs.filter(
      (v) =>
        v.hangul.includes(t) ||
        v.slug.includes(t) ||
        v.en.toLowerCase().includes(t) ||
        v.type.toLowerCase().includes(t)
    );
  }, [q, verbs]);

  return (
    <>
      <div className="search-row rise rise-2">
        <input
          className="search"
          type="text"
          placeholder="Search a verb — 먹다, meokda, “to eat”…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search Korean verbs"
        />
      </div>
      <div className="count">
        {filtered.length} verb{filtered.length === 1 ? '' : 's'}
        {q ? ` matching “${q}”` : ' and growing'}
      </div>

      <div className="verb-grid">
        {filtered.map((v) => (
          <a className="verb-cell" key={v.slug} href={`/conjugate/${v.slug}`}>
            <span className="vk kr">
              {v.hangul}
              <span className="arrow">→</span>
            </span>
            <span className="ve">{v.en}</span>
            <span className="vt">{v.type}</span>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="lede" style={{ marginTop: 24 }}>
          No verbs match yet — this is a seed set. Add more in <code>data/verbs.js</code>.
        </p>
      )}
    </>
  );
}
