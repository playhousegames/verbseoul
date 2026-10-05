import { notFound } from 'next/navigation';
import { verbs } from '@/data/verbs';
import conjugations from '@/data/conjugations.json';
import { SITE } from '@/lib/site';
import { isIndexable } from '@/lib/indexable';
import { getIrregularRule } from '@/lib/irregularRules';
import { formId } from '@/lib/forms';
import { stemChange } from '@/lib/korean/stemChange';
import SpeakButton from '@/components/SpeakButton';

export const dynamicParams = false; // only build seed verbs; 404 the rest

function findVerb(slug) {
  return verbs.find((v) => v.slug === slug) || null;
}

export function generateStaticParams() {
  return verbs.map((v) => ({ verb: v.slug }));
}

export function generateMetadata({ params }) {
  const v = findVerb(params.verb);
  if (!v) return {};
  const { grid } = conjugations[v.slug];
  const polite = grid.find((g) => g.tenseKey === 'present' && g.level.startsWith('Polite'));
  const title = `Conjugate ${v.hangul} (${v.slug}) — "${v.en}"`;
  const description = `How to conjugate the Korean verb ${v.hangul} (${v.slug}), meaning "${v.en}". Present ${polite ? polite.hangul : ''}, past, and future in casual, polite, and formal speech, with romanization.`;
  const url = `${SITE.url}/conjugate/${v.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} · ${SITE.name}`, description, url, type: 'article' },
    robots: isIndexable(v) ? undefined : { index: false, follow: true },
  };
}

// Map verb type → irregular hub slug
const HUB_SLUG = {
  'ㅂ irregular':       'ㅂ',
  'ㅂ irregular (adj)': 'ㅂ',
  'ㄷ irregular':       'ㄷ',
  'ㅅ irregular':       'ㅅ',
  'ㅅ irregular (adj)': 'ㅅ',
  'ㅎ irregular':       'ㅎ',
  'ㅎ irregular (adj)': 'ㅎ',
  '르 irregular':       '르',
  '르 irregular (adj)': '르',
  '으 irregular':       '으',
  '으 irregular (adj)': '으',
  'ㄹ stem':            'ㄹ-stem',
  'ㄹ stem (adj)':      'ㄹ-stem',
  '하다 verb':          '하다',
  '하다 (irregular)':   '하다',
  '하다 verb (adj)':    '하다',
};

// A form with the changed stem syllable(s) marked: 춥다 → [추워]요
function Form({ verb, hangul }) {
  const parts = stemChange(verb, hangul);
  if (!parts) return hangul;
  return (
    <>
      {parts[0]}
      <mark className="chg">{parts[1]}</mark>
      {parts[2]}
    </>
  );
}

export default function ConjugatePage({ params }) {
  const v = findVerb(params.verb);
  if (!v) notFound();

  const { grid, extras } = conjugations[v.slug];

  // group flat grid into tense rows × politeness columns
  const tenses = ['Present', 'Past', 'Future'];
  const levels = ['Casual (반말)', 'Polite (요)', 'Formal (합니다)'];
  const cell = (tense, level) =>
    grid.find((g) => g.tense === tense && g.level === level) || { hangul: '', romanized: '', rr: '' };

  const polite = cell('Present', 'Polite (요)');
  const hasStemChange = [...grid, ...extras].some((f) => stemChange(v.hangul, f.hangul));

  // related verbs: a few neighbours for internal linking
  const idx = verbs.findIndex((x) => x.slug === v.slug);
  const related = [];
  for (let d = 1; related.length < 6 && d < verbs.length; d++) {
    if (verbs[idx - d]) related.push(verbs[idx - d]);
    if (verbs[idx + d] && related.length < 6) related.push(verbs[idx + d]);
  }

  const rule = getIrregularRule(v.type);
  const hubSlug = HUB_SLUG[v.type];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Verbs', item: SITE.url },
          {
            '@type': 'ListItem',
            position: 2,
            name: `Conjugate ${v.hangul}`,
            item: `${SITE.url}/conjugate/${v.slug}`,
          },
        ],
      },
      {
        '@type': 'WebPage',
        name: `Conjugate ${v.hangul} (${v.slug})`,
        inLanguage: 'en',
        about: {
          '@type': 'DefinedTerm',
          name: v.hangul,
          description: `Korean verb meaning "${v.en}"`,
          inDefinedTermSet: 'Korean',
        },
      },
    ],
  };

  return (
    <main className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="crumbs">
        <a href="/">All verbs</a> &nbsp;/&nbsp; <span className="kr">{v.hangul}</span>
      </nav>

      <div className="badge rise">
        {hubSlug ? (
          <a href={`/irregular/${encodeURIComponent(hubSlug)}`} className="badge-link">
            {v.type}
          </a>
        ) : (
          v.type
        )}
      </div>
      <header className="verb-head rise">
        <span className="big kr">
          {v.hangul}
          <SpeakButton text={v.hangul} />
        </span>
        <span className="meta">
          <span className="rom">{v.slug}</span>
          <span className="en">"{v.en}"</span>
        </span>
      </header>

      <p className="lede rise rise-2">
        To say <b>{v.en}</b> politely in the present tense, use{' '}
        <b className="kr">{polite.hangul}</b>{' '}
        <span className="rom">({polite.romanized})</span>
        {polite.rr && polite.rr !== polite.romanized && (
          <> · <span className="rr">{polite.rr}</span></>
        )}
        . Below is the full conjugation of <b className="kr">{v.hangul}</b> across the three
        tenses and three everyday speech levels.
      </p>

      {rule && (
        <div className="rule-box rise">
          <strong>Grammar note ({v.type}):</strong> {rule.summary}
        </div>
      )}

      <h2 className="grid-title">Conjugation table</h2>
      <p className="rom-key">
        <span className="rom-swatch">pron.</span> = pronunciation guide &nbsp;·&nbsp;
        <span className="rr-swatch">RR</span> = Revised Romanization
      </p>
      {hasStemChange && (
        <p className="chg-legend">
          <mark className="chg">Highlighted</mark> = where the stem changes
        </p>
      )}
      <div className="ctable-scroll">
        <table className="ctable">
          <thead>
            <tr>
              <th>Tense</th>
              {levels.map((l) => (
                <th key={l}>{l}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tenses.map((t) => (
              <tr key={t} id={t.toLowerCase()}>
                <td className="rowlabel">{t}</td>
                {levels.map((l) => {
                  const c = cell(t, l);
                  return (
                    <td key={l} id={c.hangul ? formId(c) : undefined}>
                      <div className="cell">
                        <div className="form kr">
                          {c.hangul ? <Form verb={v.hangul} hangul={c.hangul} /> : '—'}
                          {c.hangul && <SpeakButton text={c.hangul} />}
                        </div>
                        {c.romanized && <div className="formrom rom">{c.romanized}</div>}
                        {c.rr && c.rr !== c.romanized && <div className="formrr rr">{c.rr}</div>}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="grid-title" style={{ marginTop: 40 }}>
        Other useful forms
      </h2>
      <div className="extras">
        {extras.map((e) => (
          <div className="extra" key={e.label + e.level} id={formId(e)}>
            <span className="lab">{e.label}</span> <span className="lvl">{e.level}</span>
            <div className="form kr">
              <Form verb={v.hangul} hangul={e.hangul} />
              <SpeakButton text={e.hangul} />
            </div>
            {e.romanized && <div className="formrom rom">{e.romanized}</div>}
            {e.rr && e.rr !== e.romanized && <div className="formrr rr">{e.rr}</div>}
          </div>
        ))}
      </div>

      <section className="related">
        <h2 className="grid-title">More verbs to conjugate</h2>
        <div className="related-links">
          {related.map((r) => (
            <a className="chip" key={r.slug} href={`/conjugate/${r.slug}`}>
              <span className="ck kr">{r.hangul}</span> — {r.en}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
