// scripts/generate.js
// Runs as plain Node (CommonJS, non-strict) so the vendored sloppy-mode
// conjugator works without bundler interference. Precomputes every verb's
// conjugation into data/conjugations.json, which the Next pages import as
// static data — keeping the engine out of the client/server bundle entirely.

const fs = require('fs');
const path = require('path');
const { verbs } = require('../data/verbs');
const { verbContent } = require('../data/verb-content');
const { conjugate } = require('../lib/korean/engine');
const { FORM_INDEX, formId, normalizeForm, shardOf } = require('../lib/forms');

const out = {};
let problems = 0;
for (const v of verbs) {
  const data = conjugate(v.hangul);
  const blob = JSON.stringify(data);
  if (blob.includes('\u3b64') || data.grid.length < 9) {
    console.warn('  ! check verb', v.hangul, v.slug, '(grid', data.grid.length + ')');
    problems++;
  }
  out[v.slug] = data;
}

const dest = path.join(__dirname, '..', 'data', 'conjugations.json');
fs.writeFileSync(dest, JSON.stringify(out));
console.log(`Generated ${Object.keys(out).length} conjugations -> data/conjugations.json`);
if (problems) {
  console.error(`Aborting: ${problems} verb(s) failed validation.`);
  process.exit(1);
}

// ─── Hand-written content: every example must contain the form it illustrates ─
const CONTENT_FORMS = [...out.meokda.grid.map(formId), 'command'];
const contentErrors = [];
for (const [slug, entry] of Object.entries(verbContent)) {
  if (!out[slug]) { contentErrors.push(`${slug}: not in data/verbs.js`); continue; }
  const forms = Object.fromEntries(
    [...out[slug].grid, ...out[slug].extras].map((f) => [formId(f), f.hangul])
  );
  for (const id of CONTENT_FORMS) {
    const ex = entry.examples?.[id];
    if (!ex) contentErrors.push(`${slug}: missing example for ${id}`);
    else if (!ex[0].includes(forms[id])) contentErrors.push(`${slug} ${id}: "${ex[0]}" does not contain ${forms[id]}`);
  }
  if (!entry.usage || !entry.mistake) contentErrors.push(`${slug}: missing usage or mistake`);
}
if (contentErrors.length) {
  console.error('verb-content.js problems:\n  ' + contentErrors.join('\n  '));
  process.exit(1);
}
console.log(`Verb content OK: ${Object.keys(verbContent).length} verbs`);

// ─── Reverse-lookup index: conjugated form → base verb(s) + form ─────────────
// Sharded by the form's first character so a search fetches one small file.
// Shard shape: { v: { verbIdx: [slug, hangul, en] }, f: { key: [[verbIdx, formIdx, display?]] } }
// `display` is only stored when the form contains a space (keys have none).

const zlib = require('zlib');
const { isIndexable } = require('../lib/indexable');

const shards = {};
verbs.forEach((v, vi) => {
  const { grid, extras } = out[v.slug];
  for (const entry of [...grid, ...extras]) {
    const fi = FORM_INDEX[formId(entry)];
    if (fi === undefined) throw new Error(`No form ID for ${v.slug} ${entry.label || entry.tense} ${entry.level}`);
    const key = normalizeForm(entry.hangul);
    if (!key) continue;
    const shard = (shards[shardOf(key)] ||= { v: {}, f: {} });
    shard.v[vi] = [v.slug, v.hangul, v.en.length > 60 ? v.en.slice(0, 58) + '…' : v.en];
    const hit = [vi, fi];
    const display = entry.hangul.replace(/[?.!]+$/, '');
    if (display !== key) hit.push(display);
    (shard.f[key] ||= []).push(hit);
  }
});

// Indexable (primary) verbs first, then seed-list order (curated, then by frequency).
const rank = (vi) => (isIndexable(verbs[vi]) ? 0 : verbs.length) + vi;
const formsDir = path.join(__dirname, '..', 'public', 'forms');
fs.rmSync(formsDir, { recursive: true, force: true });
fs.mkdirSync(formsDir, { recursive: true });
let raw = 0, gz = 0, largest = 0, keys = 0;
for (const [name, shard] of Object.entries(shards)) {
  for (const hits of Object.values(shard.f)) hits.sort((a, b) => rank(a[0]) - rank(b[0]));
  keys += Object.keys(shard.f).length;
  const json = JSON.stringify(shard);
  const size = Buffer.byteLength(json);
  raw += size;
  largest = Math.max(largest, zlib.gzipSync(json).length);
  gz += zlib.gzipSync(json).length;
  fs.writeFileSync(path.join(formsDir, `${name}.json`), json);
}
const kb = (n) => (n / 1024).toFixed(0) + ' KB';
console.log(
  `Form index: ${keys} unique forms in ${Object.keys(shards).length} shards -> public/forms/ ` +
    `(${kb(raw)} raw, ${kb(gz)} gzip total; largest shard ${kb(largest)} gzip)`
);
