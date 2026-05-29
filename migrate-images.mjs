#!/usr/bin/env node
/**
 * One-shot migration: download all Manus-CDN images into client/public/assets/
 * and rewrite the source to reference local paths instead of the CDN.
 *
 * Run once, locally, from the project root:
 *     node migrate-images.mjs
 *
 * After it succeeds, the site no longer depends on Manus's CDN.
 * Requires Node 18+ (uses built-in fetch). Safe to re-run.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const CDN_BASE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663488690227/895rg4FQazWBsi7DRhtfWX";
const SRC_DIR = "client/src";
const OUT_DIR = "client/public/assets";
const LOCAL_PREFIX = "/assets"; // works for a custom-domain / root site

// Recursively collect all .tsx/.ts files under SRC_DIR
function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if ([".tsx", ".ts"].includes(extname(p))) out.push(p);
  }
  return out;
}

const files = walk(SRC_DIR);
const filenames = new Set();

// Find every image filename referenced from the CDN, in either form:
//   ${CDN}/some-file.webp        (CDN const = the base url)
//   https://...cloudfront.net/.../some-file.jpg   (full literal url)
const cdnConstRe = /\$\{CDN\}\/([^"'`\s)]+\.(?:webp|jpg|jpeg|png|gif|svg))/gi;
const fullUrlRe = new RegExp(
  CDN_BASE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
    "\\/([^\"'`\\s)]+\\.(?:webp|jpg|jpeg|png|gif|svg))",
  "gi"
);

for (const f of files) {
  const txt = readFileSync(f, "utf8");
  let m;
  while ((m = cdnConstRe.exec(txt))) filenames.add(m[1]);
  while ((m = fullUrlRe.exec(txt))) filenames.add(m[1]);
}

console.log(`Found ${filenames.size} image(s) to download.`);
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

let ok = 0;
for (const name of filenames) {
  const url = `${CDN_BASE}/${name}`;
  const dest = join(OUT_DIR, name);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(dest, buf);
    ok++;
    console.log(`  ✓ ${name} (${buf.length} bytes)`);
  } catch (e) {
    console.error(`  ✗ ${name} — ${e.message}`);
  }
}

if (ok !== filenames.size) {
  console.error(
    `\nSome downloads failed. Source files left UNCHANGED so the CDN keeps working. Fix connectivity and re-run.`
  );
  process.exit(1);
}

// Rewrite source: point the CDN constant and any full literal URLs at /assets
for (const f of files) {
  let txt = readFileSync(f, "utf8");
  const before = txt;
  // const CDN = "https://...cloudfront.../<id>";  ->  const CDN = "/assets";
  txt = txt.replace(
    new RegExp(`(["'\\\`])${CDN_BASE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\1`, "g"),
    `"${LOCAL_PREFIX}"`
  );
  // Any remaining full literal URLs -> /assets/<file>
  txt = txt.replace(fullUrlRe, `${LOCAL_PREFIX}/$1`);
  if (txt !== before) {
    writeFileSync(f, txt);
    console.log(`  ↻ rewrote ${f}`);
  }
}

console.log(
  `\nDone. ${ok} images saved to ${OUT_DIR} and source updated to use ${LOCAL_PREFIX}.`
);
console.log(
  `If you deploy to a PROJECT page (github.io/<repo>/) rather than a custom domain,\nchange LOCAL_PREFIX paths accordingly or set up a base-aware asset import.`
);
