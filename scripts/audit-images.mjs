/**
 * Auditoria de imagens — ST Executive
 * Varre o HTML gerado em ./out e reporta problemas de SEO/performance:
 * alt ausente, falta de width/height (CLS), falta de lazy loading,
 * formato não-WebP, arquivo inexistente e peso excessivo.
 *
 * Uso: node scripts/audit-images.mjs
 */

import { readdir, readFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "out");

function getAttr(tag, name) {
  const m =
    tag.match(new RegExp(`\\b${name}\\s*=\\s*"([^"]*)"`, "i")) ||
    tag.match(new RegExp(`\\b${name}\\s*=\\s*'([^']*)'`, "i"));
  return m ? m[1] : null;
}

async function walkHtml(dir, acc = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walkHtml(full, acc);
    else if (entry.isFile() && entry.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

const rows = new Map(); // src -> dados agregados
const issues = { semAlt: [], semDimensoes: [], semLazy: [], naoWebp: [], inexistente: [], pesada: [] };

const files = await walkHtml(OUT_DIR);
let totalTags = 0;

for (const file of files) {
  const rel = "/" + path.relative(OUT_DIR, file).split(path.sep).join("/");
  const html = await readFile(file, "utf8");

  const tags = html.match(/<img\b[^>]*>/gi) || [];
  for (const tag of tags) {
    const src = getAttr(tag, "src");
    if (!src || !src.startsWith("/") || src.startsWith("/_next/")) continue;
    totalTags++;

    const alt = getAttr(tag, "alt");
    const width = getAttr(tag, "width");
    const height = getAttr(tag, "height");
    const loading = getAttr(tag, "loading");
    const fetchpriority = getAttr(tag, "fetchpriority");

    if (!rows.has(src)) rows.set(src, { src, pages: new Set(), alt, width, height, loading, fetchpriority });
    rows.get(src).pages.add(rel);

    if (alt === null || alt.trim() === "") issues.semAlt.push(`${src} (em ${rel})`);

    // next/image com `fill` não declara width/height por design: o elemento é
    // absoluto dentro de um pai com dimensão definida, então não há CLS.
    const isNextFill = /data-nimg=["']fill["']/i.test(tag);
    if (!isNextFill && (!width || !height)) issues.semDimensoes.push(`${src} (em ${rel})`);

    // Não cobramos lazy de imagens que devem carregar adiantado de propósito:
    // hero marcado com fetchpriority=high; next/image com `priority` (o Next
    // simplesmente omite loading nesse caso, e a imagem é o LCP da página);
    // e ícones/logos SVG, minúsculos e acima da dobra.
    const isSvg = src.toLowerCase().endsWith(".svg");
    const isNextPriority = /data-nimg=/i.test(tag) && !loading;
    const isPriority = fetchpriority === "high" || isNextPriority;
    if (!loading && !isPriority && !isSvg) issues.semLazy.push(`${src} (em ${rel})`);
  }
}

for (const [src, info] of rows) {
  const lower = src.toLowerCase();
  if (lower.endsWith(".svg")) continue;

  const diskPath = path.join(OUT_DIR, decodeURIComponent(src));
  if (!existsSync(diskPath)) {
    issues.inexistente.push(src);
    continue;
  }
  if (!lower.endsWith(".webp")) issues.naoWebp.push(src);

  const { size } = await stat(diskPath);
  info.size = size;
  if (size > 300 * 1024) issues.pesada.push(`${src} (${(size / 1024).toFixed(0)} KB)`);
}

const uniq = (arr) => [...new Set(arr)];

console.log("═══ AUDITORIA DE IMAGENS ═══");
console.log(`Páginas HTML analisadas : ${files.length}`);
console.log(`Tags <img> encontradas  : ${totalTags}`);
console.log(`Imagens únicas          : ${rows.size}`);
console.log("");

const report = [
  ["Sem alt text", uniq(issues.semAlt)],
  ["Sem width/height (risco de CLS)", uniq(issues.semDimensoes)],
  ["Sem lazy loading", uniq(issues.semLazy)],
  ["Fora do formato WebP", uniq(issues.naoWebp)],
  ["Arquivo inexistente (quebrada)", uniq(issues.inexistente)],
  ["Acima de 300 KB", uniq(issues.pesada)],
];

for (const [label, list] of report) {
  console.log(`── ${label}: ${list.length}`);
  for (const item of list.slice(0, 15)) console.log(`   • ${item}`);
  if (list.length > 15) console.log(`   … e mais ${list.length - 15}`);
  console.log("");
}
