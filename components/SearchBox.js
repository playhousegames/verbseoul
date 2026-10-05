'use client';
import { useEffect, useState } from 'react';
import { FORMS, normalizeForm, shardOf } from '@/lib/forms';

// Shards of public/forms/ are fetched lazily, only once a Hangul query is typed.
const shardCache = new Map();
function loadShard(name) {
  if (!shardCache.has(name)) {
    const p = fetch(`/forms/${name}.json`)
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null);
    shardCache.set(name, p);
    // Don't cache failures — let the next keystroke retry.
    p.then((s) => s || shardCache.delete(name));
  }
  return shardCache.get(name);
}

const HANGUL = /[가-힣]/;

/** Look up a conjugated form. Resolves to [{ slug, hangul, en, display, forms: [formIdx] }] grouped by verb. */
async function lookupForm(query) {
  const key = normalizeForm(query);
  if (!key || !HANGUL.test(key)) return [];
  const shard = await loadShard(shardOf(key));
  const hits = shard?.f[key];
  if (!hits) return [];
  const byVerb = new Map();
  for (const [vi, fi, display] of hits) {
    if (!byVerb.has(vi)) {
      const [slug, hangul, en] = shard.v[vi];
      byVerb.set(vi, { slug, hangul, en, display: display || key, forms: [] });
    }
    byVerb.get(vi).forms.push(fi);
  }
  return [...byVerb.values()];
}

function joinOr(items) {
  return items.flatMap((x, i) => [
    i === 0 ? null : i === items.length - 1 ? ' or ' : ', ',
    x,
  ]);
}

function MatchLine({ m, standalone }) {
  const href = (fi) => `/conjugate/${m.slug}#${FORMS[fi][0]}`;
  const labels = m.forms.map((fi) => (
    <a key={fi} href={href(fi)} className="fm-form">
      {FORMS[fi][1]}
    </a>
  ));
  return (
    <>
      {standalone && (
        <>
          <b className="kr">{m.display}</b> is the{' '}
        </>
      )}
      {!standalone && 'the '}
      {joinOr(labels)} of{' '}
      <a href={href(m.forms[0])} className="fm-verb">
        <span className="kr">{m.hangul}</span> ({m.en})
      </a>
    </>
  );
}

export function FormMatch({ query }) {
  const [state, setState] = useState({ query: '', matches: [] });

  useEffect(() => {
    let live = true;
    const t = setTimeout(() => {
      lookupForm(query).then((matches) => live && setState({ query, matches }));
    }, 120);
    return () => {
      live = false;
      clearTimeout(t);
    };
  }, [query]);

  const { matches } = state;
  return (
    <div aria-live="polite">
      {matches.length === 1 && (
        <p className="form-match">
          <MatchLine m={matches[0]} standalone />
        </p>
      )}
      {matches.length > 1 && (
        <div className="form-match">
          <b className="kr">{matches[0].display}</b> can be:
          <ul>
            {matches.map((m) => (
              <li key={m.slug}>
                <MatchLine m={m} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function SearchBox({ defaultValue = '', autoComplete }) {
  const [q, setQ] = useState(defaultValue);
  return (
    <>
      <form action="/verbs" method="get">
        <input
          className="search"
          type="search"
          name="q"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={'Search — 먹다, 먹었어요, meokda, "to eat"…'}
          aria-label="Search Korean verbs or conjugated forms"
          autoComplete={autoComplete}
        />
      </form>
      <FormMatch query={q} />
    </>
  );
}
