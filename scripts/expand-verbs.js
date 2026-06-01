#!/usr/bin/env node
// scripts/expand-verbs.js
//
// Expands data/verbs.js by pulling Korean verbs + English glosses from the
// machine-readable Wiktionary extract (kaikki.org) and ranking them by real
// usage frequency (hermitdave OpenSubtitles list). Your existing seed verbs are
// preserved verbatim (same slugs, same order) so no indexed URLs ever change —
// new verbs are appended, ranked, deduped, and each one is validated through the
// conjugation engine before it's written.
//
// Usage:
//   node scripts/expand-verbs.js                 # auto-download sources, limit 1500
//   node scripts/expand-verbs.js --limit 3000    # more pages
//   node scripts/expand-verbs.js --input ko.jsonl --freq ko_50k.txt   # use local files
//   node scripts/expand-verbs.js --no-freq       # skip frequency ranking
//
// Tip: the kaikki dump is large (hundreds of MB). To avoid re-downloading on
// each run, fetch it once and pass it with --input:
//   curl -L https://kaikki.org/dictionary/Korean/kaikki.org-dictionary-Korean.jsonl -o ko.jsonl

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { Readable } = require('stream');
const { pipeline } = require('stream/promises');

const { conjugate, classify } = require('../lib/korean/engine');
const { verbs: existingVerbs } = require('../data/verbs');

const KAIKKI_URL = 'https://kaikki.org/dictionary/Korean/kaikki.org-dictionary-Korean.jsonl';
const FREQ_URL =
  'https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2018/ko/ko_50k.txt';

// ---------- args ----------
const args = process.argv.slice(2);
function flag(name, fallback) {
  const i = args.indexOf(name);
  if (i === -1) return fallback;
  const next = args[i + 1];
  return next && !next.startsWith('--') ? next : true;
}
const LIMIT = parseInt(flag('--limit', '1500'), 10);
const INPUT = flag('--input', null);
const FREQ = flag('--freq', null);
const NO_FREQ = args.includes('--no-freq');

// ---------- revised-romanization slug ----------
const INI = ['g','kk','n','d','tt','r','m','b','pp','s','ss','','j','jj','ch','k','t','p','h'];
const MED = ['a','ae','ya','yae','eo','e','yeo','ye','o','wa','wae','oe','yo','u','wo','we','wi','yu','eu','ui','i'];
const FIN = ['','k','k','k','n','n','n','t','l','k','m','l','l','l','p','l','m','p','p','t','t','ng','t','t','k','t','p','t'];

function romanizeSlug(hangul) {
  let out = '';
  for (const ch of hangul) {
    const cp = ch.codePointAt(0) - 0xac00;
    if (cp < 0 || cp > 11171) continue;
    out += INI[Math.floor(cp / 588)] + MED[Math.floor((cp % 588) / 28)] + FIN[cp % 28];
  }
  return out.toLowerCase().replace(/[^a-z]/g, '');
}

// ---------- fetch helpers ----------
async function downloadToFile(url, dest, label) {
  process.stdout.write(`Downloading ${label}… `);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${label}: HTTP ${res.status}`);
  await pipeline(Readable.fromWeb(res.body), fs.createWriteStream(dest));
  console.log('done.');
  return dest;
}

async function loadFrequency() {
  if (NO_FREQ) return null;
  let file = FREQ;
  if (!file) {
    file = path.join(__dirname, '.ko_freq.tmp.txt');
    await downloadToFile(FREQ_URL, file, 'frequency list');
  }
  const map = new Map();
  const rl = readline.createInterface({ input: fs.createReadStream(file), crlfDelay: Infinity });
  for await (const line of rl) {
    const sp = line.lastIndexOf(' ');
    if (sp === -1) continue;
    const word = line.slice(0, sp);
    const count = parseInt(line.slice(sp + 1), 10);
    if (word && count) map.set(word, count);
  }
  if (!FREQ && fs.existsSync(file)) fs.unlinkSync(file);
  return map;
}

// ---------- parse kaikki dump ----------
const IS_VERB = /^[가-힣]+다$/;
function cleanGloss(g) {
  if (!g) return '';
  return g.split(/[;\u2192]/)[0].replace(/\s+/g, ' ').replace(/\.$/, '').trim().slice(0, 70);
}

async function parseDump(file, onEntry) {
  const rl = readline.createInterface({ input: fs.createReadStream(file), crlfDelay: Infinity });
  let n = 0;
  for await (const line of rl) {
    if (!line) continue;
    let e;
    try { e = JSON.parse(line); } catch { continue; }
    const pos = e.pos;
    if (pos !== 'verb' && pos !== 'adj') continue;
    const word = e.word;
    if (!word || !IS_VERB.test(word)) continue;
    const gloss = cleanGloss(e.senses && e.senses[0] && (e.senses[0].glosses || [])[0]);
    if (!gloss) continue;
    onEntry({ hangul: word, pos, en: gloss });
    if (++n % 5000 === 0) process.stdout.write(`  parsed ${n} dictionary entries…\r`);
  }
  if (n) process.stdout.write(`  parsed ${n} dictionary entries.    \n`);
}

// ---------- main ----------
(async () => {
  const freq = await loadFrequency();
  if (freq) console.log(`Frequency entries: ${freq.size.toLocaleString()}`);

  let dumpFile = INPUT;
  if (!dumpFile) {
    dumpFile = path.join(__dirname, '.ko_dump.tmp.jsonl');
    await downloadToFile(KAIKKI_URL, dumpFile, 'Korean dictionary (large — be patient)');
  }

  const existingHangul = new Set(existingVerbs.map((v) => v.hangul));
  const usedSlugs = new Set(existingVerbs.map((v) => v.slug));
  const seen = new Set();
  const candidates = [];

  await parseDump(dumpFile, ({ hangul, pos, en }) => {
    if (existingHangul.has(hangul) || seen.has(hangul)) return;
    seen.add(hangul);
    candidates.push({ hangul, pos, en });
  });
  if (!INPUT && fs.existsSync(dumpFile)) fs.unlinkSync(dumpFile);
  console.log(`Candidate new verbs: ${candidates.length.toLocaleString()}`);

  // validate (conjugate) + classify + score by summed frequency of own forms
  const valid = [];
  let dropped = 0;
  for (const c of candidates) {
    let data;
    try { data = conjugate(c.hangul); } catch { dropped++; continue; }
    const blob = JSON.stringify(data);
    if (blob.includes('\u3b64') || data.grid.length < 9) { dropped++; continue; }

    let score = 0;
    if (freq) {
      for (const f of [...data.grid, ...data.extras]) {
        const key = f.hangul.replace(/\s+/g, '');
        score += freq.get(key) || freq.get(f.hangul) || 0;
      }
      score += freq.get(c.hangul) || 0;
    }
    valid.push({ ...c, score, type: classify(c.hangul, c.pos) });
  }
  console.log(`Valid & conjugable: ${valid.length.toLocaleString()} (dropped ${dropped})`);

  valid.sort((a, b) => b.score - a.score);

  const room = Math.max(0, LIMIT - existingVerbs.length);
  const chosen = valid.slice(0, room);

  for (const v of chosen) {
    let slug = romanizeSlug(v.hangul) || 'verb';
    if (usedSlugs.has(slug)) {
      let i = 2;
      while (usedSlugs.has(`${slug}-${i}`)) i++;
      slug = `${slug}-${i}`;
    }
    usedSlugs.add(slug);
    v.slug = slug;
  }

  // ---------- write merged data/verbs.js ----------
  const line = (v) =>
    `  { hangul: ${JSON.stringify(v.hangul)}, slug: ${JSON.stringify(v.slug)}, ` +
    `en: ${JSON.stringify(v.en)}, type: ${JSON.stringify(v.type)} },`;

  const body = [
    '// data/verbs.js — seed dictionary. Expand with scripts/expand-verbs.js.',
    '// Entries above the marker are hand-curated; entries below are generated',
    '// (ranked by usage frequency) and safe to regenerate.',
    '',
    'const verbs = [',
    '  // --- curated ---',
    ...existingVerbs.map(line),
    '  // --- generated ---',
    ...chosen.map(line),
    '];',
    '',
    'module.exports = { verbs };',
    '',
  ].join('\n');

  const dest = path.join(__dirname, '..', 'data', 'verbs.js');
  fs.writeFileSync(dest, body);
  console.log(
    `\nWrote ${dest}\n  curated:   ${existingVerbs.length}\n  generated: ${chosen.length}\n  total:     ${existingVerbs.length + chosen.length}`
  );
  console.log('\nNext: npm run generate && npm run build  (then git diff data/verbs.js to review)');
})().catch((e) => {
  console.error('\nFailed:', e.message);
  process.exit(1);
});
