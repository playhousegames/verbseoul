// scripts/generate.js
// Runs as plain Node (CommonJS, non-strict) so the vendored sloppy-mode
// conjugator works without bundler interference. Precomputes every verb's
// conjugation into data/conjugations.json, which the Next pages import as
// static data — keeping the engine out of the client/server bundle entirely.

const fs = require('fs');
const path = require('path');
const { verbs } = require('../data/verbs');
const { conjugate } = require('../lib/korean/engine');

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
