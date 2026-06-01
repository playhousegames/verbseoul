# Verbseoul — Korean verb conjugator

A free, fast Korean verb conjugator built as a programmatic-SEO site. Every verb
gets its own statically-generated page showing the full conjugation table —
present / past / future across casual, polite, and formal speech levels — plus
extra forms (command, suggestion, question, connectives) and romanization.

The strategy: each page is a genuinely useful interactive reference, not thin
content. That's the kind of page AI Overviews summarize but can't replace, and
it earns links because people bookmark and share a tool that works.

---

## Quick start

```bash
npm install
npm run dev        # regenerates conjugations, then starts the dev server
# open http://localhost:3000
```

Build for production:

```bash
npm run build      # runs the generator (prebuild), then next build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, "New Project" → import the repo. Framework auto-detects as Next.js.
3. No environment variables are required. Deploy.

The `prebuild` script regenerates `data/conjugations.json` on every Vercel build,
so adding verbs and pushing is all it takes to publish new pages.

Before going live, set your real domain in **`lib/site.js`** (the `url` field is
used for canonical tags, Open Graph, the sitemap, and robots).

---

## How it works (architecture)

```
data/verbs.js              seed list — the single source of truth for what pages exist
scripts/generate.js        plain-Node build step: runs the engine over every verb,
                           writes data/conjugations.json
lib/korean/engine.js       wrapper: curates forms + fixes the polite-present bug
lib/korean/bravender/*     vendored conjugation algorithm (AGPL — see Licensing)
data/conjugations.json     GENERATED. precomputed output the pages import
app/conjugate/[verb]/      the page template, statically rendered per verb (SSG)
app/page.js                homepage + searchable verb index
app/sitemap.js, robots.js  auto-generated from the verb list
```

Why precompute into JSON instead of calling the engine inside the app? The
conjugation library is written in old-style ("sloppy mode") JavaScript that a
modern bundler can't compile directly. Running it once in plain Node at build
time sidesteps that entirely and keeps the algorithm out of the shipped bundle —
smaller, faster, and the pages just read static data.

### The polite-present fix

The JavaScript port of the conjugator corrupts the stem of ㄷ-irregular verbs in
the polite present form (e.g. 듣다 → `㭤어요` instead of 들어요). Because the
polite present is always "casual present + 요" for every verb class,
`lib/korean/engine.js` rebuilds those three forms from the verified casual form.
The generator fails the build if the corruption marker ever appears, so a bad
form can't ship silently.

---

## Adding verbs (this is the growth lever)

Open **`data/verbs.js`** and add an entry:

```js
{ hangul: '읽다', slug: 'ikda', en: 'to read', type: 'regular' },
```

- `hangul` — dictionary form, must end in 다.
- `slug` — unique, ASCII, used in the URL (`/conjugate/ikda`). Revised
  romanization is the convention here; just keep it unique.
- `en` — concise meaning. This drives "how to say X in Korean" search intent.
- `type` — grammatical class label (display only; conjugation is automatic).

Then `npm run generate` (or just build/deploy). The new page, its sitemap entry,
and its internal links appear automatically.

To scale to thousands of verbs, generate `data/verbs.js` from a source like the
Wiktionary Korean verb category plus a TOPIK frequency list, prioritising the
words people actually search. Keep the file as plain data — everything
downstream is automatic.

---

## Suggested next builds

1. A **Korean name generator** (English → Korean name + meaning). Pure link-bait;
   the shareable top-of-funnel that earns the backlinks an SEO tool needs.
2. A **hand-written grammar hub** (speech levels, irregular verbs explained).
   This is the E-E-A-T / human-expert layer — the right home for authentic voice.
3. **Audio** — pre-generate TTS clips per form so each page has native
   pronunciation. Store as static files and reference by form.
4. **Monetisation** once traffic exists: textbook/app affiliate links, display
   ads, and a small premium tier (saved verb lists, spaced-repetition practice).

---

## Licensing — read before commercial launch

The conjugation algorithm in `lib/korean/bravender/` is **© Dan Bravender,
licensed under AGPL-3.0** (see `LICENSE-AGPL.txt` and `COPYRIGHT` in that folder).
The two files modified for strict-mode/bundler compatibility are marked inline.

AGPL-3.0 includes a **network-use clause (section 13)**: if users interact with
this software over a network (i.e. a public website), you must offer them the
**complete corresponding source code** of the AGPL-covered portion, including any
modifications.

Practical compliance, kept simple:

- Keep the conjugator isolated in `lib/korean/` (it already is).
- Add a visible link in your site footer to a public repo containing that source
  and your modifications, e.g. "Conjugation engine source".
- Retain the copyright and license files as-is.

This does **not** force you to open-source your whole site — only the AGPL'd
module and changes to it. If you'd prefer no copyleft obligation at all, replace
`lib/korean/bravender/` with a clean-room conjugator and update `engine.js`
accordingly (more work, and conjugation correctness is the hard part).

Your own code in this project (everything outside `lib/korean/bravender/`) is
yours to license as you wish.
