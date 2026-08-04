/**
 * Gerador do image-sitemap.xml — ST Executive
 *
 * Roda DEPOIS do `next build` (npm postbuild), varrendo o HTML já gerado
 * em ./out. Ler o HTML final (em vez dos dicionários .ts) garante três
 * coisas de graça:
 *   1. Só entram imagens que realmente aparecem numa página publicada.
 *   2. Só entram imagens que realmente existem no disco (checagem abaixo),
 *      então nenhuma URL do sitemap devolve 404.
 *   3. Página nova ou imagem nova é incluída automaticamente, sem precisar
 *      editar este script.
 *
 * Artigos do Guia Brasília servidos pelo PHP/MySQL não entram aqui — as
 * imagens deles vêm do banco e são geradas por admin/sitemap-generator.php
 * dentro de sitemap-articles.xml. Os 5 artigos que ainda são HTML estático
 * (lista STATIC_ARTICLE_SLUGS) entram normalmente.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const SITE = "https://stexecutive.com.br";
const OUT_DIR = path.join(process.cwd(), "out");

// Mesma lista do .htaccess: artigos que NÃO foram para o banco e continuam
// sendo servidos pelo HTML estático do Next.js.
const STATIC_ARTICLE_SLUGS = [
  "primeira-vez-em-brasilia",
  "onde-ficar-em-brasilia",
  "viagem-a-trabalho-para-brasilia",
  "eventos-em-brasilia",
  "o-que-fazer-em-brasilia-em-poucas-horas",
];

// Imagens que aparecem em quase todas as páginas (selo do rodapé, etc.)
// são listadas só nas 3 homes, para não repetir a mesma imagem em dezenas
// de blocos <url> sem ganho nenhum de indexação.
const HOME_URLS = new Set(["/", "/en/", "/es/"]);
const CHROME_THRESHOLD = 0.5;

// ── Helpers ────────────────────────────────────────────────────────────────

function xmlEscape(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Codifica só os caracteres inválidos em URL, preservando as barras. */
function encodePath(p) {
  return p
    .split("/")
    .map((seg) => encodeURIComponent(decodeURIComponent(seg)))
    .join("/");
}

function decodeHtmlEntities(str) {
  return String(str)
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function stripTags(html) {
  return decodeHtmlEntities(html.replace(/<[^>]*>/g, "")).replace(/\s+/g, " ").trim();
}

function getAttr(tag, name) {
  const m =
    tag.match(new RegExp(`\\b${name}\\s*=\\s*"([^"]*)"`, "i")) ||
    tag.match(new RegExp(`\\b${name}\\s*=\\s*'([^']*)'`, "i"));
  return m ? decodeHtmlEntities(m[1]) : "";
}

async function walkHtml(dir, acc = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walkHtml(full, acc);
    else if (entry.isFile() && entry.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

/** out/foo/index.html → /foo/ ; out/index.html → / */
function fileToUrlPath(file) {
  const rel = path.relative(OUT_DIR, file).split(path.sep).join("/");
  if (rel === "404.html") return null;
  if (rel.endsWith("/404.html")) return null;
  if (!rel.endsWith("index.html")) return null;
  const dir = rel.slice(0, -"index.html".length);
  return "/" + dir;
}

/** Páginas cujo conteúdo real é servido pelo PHP, não por este HTML. */
function isPhpServedPage(urlPath) {
  const m = urlPath.match(/^\/(?:en\/|es\/)?guia-brasilia\/(.*)$/);
  if (!m) return false;
  const rest = m[1].replace(/\/$/, "");
  if (rest === "") return true; // a listagem /guia-brasilia/ é o index.php
  return !STATIC_ARTICLE_SLUGS.includes(rest);
}

function shouldSkipImage(src) {
  if (!src) return "sem src";
  if (!src.startsWith("/")) return "externa ou data URI";
  const lower = src.toLowerCase();
  if (lower.endsWith(".svg")) return "SVG (logo/ícone)";
  if (lower.includes("favicon") || lower.includes("fav icon")) return "favicon";
  if (lower.startsWith("/admin/")) return "área administrativa";
  if (lower.startsWith("/_next/")) return "asset interno do build";
  return null;
}

// ── Coleta ─────────────────────────────────────────────────────────────────

async function collect() {
  if (!existsSync(OUT_DIR)) {
    throw new Error(`Pasta ${OUT_DIR} não existe — rode "next build" antes.`);
  }

  const files = await walkHtml(OUT_DIR);
  const pages = [];
  const skipped = new Map();
  const imagePageCount = new Map();

  const noteSkip = (reason, src) => {
    if (!skipped.has(reason)) skipped.set(reason, new Set());
    skipped.get(reason).add(src);
  };

  for (const file of files) {
    const urlPath = fileToUrlPath(file);
    if (!urlPath) continue;
    if (isPhpServedPage(urlPath)) {
      noteSkip("página servida pelo PHP (imagens vêm do banco)", urlPath);
      continue;
    }

    const html = await readFile(file, "utf8");

    if (/<meta[^>]+name=["']robots["'][^>]+noindex/i.test(html)) {
      noteSkip("página noindex", urlPath);
      continue;
    }

    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const pageTitle = titleMatch ? stripTags(titleMatch[1]) : "";
    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h1 = h1Match ? stripTags(h1Match[1]) : "";

    const seen = new Set();
    const images = [];

    for (const tag of html.match(/<img\b[^>]*>/gi) || []) {
      const src = getAttr(tag, "src");
      const reason = shouldSkipImage(src);
      if (reason) {
        noteSkip(reason, src || "(vazio)");
        continue;
      }

      const diskPath = path.join(OUT_DIR, decodeURIComponent(src));
      if (!existsSync(diskPath)) {
        noteSkip("arquivo inexistente no build", src);
        continue;
      }

      if (seen.has(src)) continue; // mesma imagem repetida na mesma página
      seen.add(src);

      images.push({ src, alt: getAttr(tag, "alt").trim() });
      imagePageCount.set(src, (imagePageCount.get(src) || 0) + 1);
    }

    if (images.length) pages.push({ urlPath, pageTitle, h1, images });
  }

  return { pages, skipped, imagePageCount };
}

// ── Geração do XML ─────────────────────────────────────────────────────────

function buildTitleAndCaption(image, page) {
  const context = page.h1 || page.pageTitle;
  // Muitos alts já terminam com a marca; repetir isso na legenda junto com o
  // título da página gera "A — ST Executive — Título da página".
  const alt = image.alt.replace(/\s*[—–-]\s*ST Executive\s*$/i, "").trim();

  const title = image.alt || context || "ST Executive — transporte executivo em Brasília";

  // Só acrescenta o contexto da página quando o alt é curto demais para
  // funcionar sozinho como legenda.
  const needsContext = alt.length > 0 && alt.length < 45 && context;
  const caption = needsContext ? `${alt} — ${context}` : alt || context || title;

  return { title, caption };
}

function buildXml(pages, imagePageCount, totalPages) {
  const chromeCutoff = Math.max(2, Math.floor(totalPages * CHROME_THRESHOLD));

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n\n';

  let imageCount = 0;
  let chromeDeduped = 0;

  for (const page of pages) {
    const usable = page.images.filter((img) => {
      const isChrome = (imagePageCount.get(img.src) || 0) >= chromeCutoff;
      if (isChrome && !HOME_URLS.has(page.urlPath)) {
        chromeDeduped++;
        return false;
      }
      return true;
    });

    if (!usable.length) continue;

    xml += "  <url>\n";
    xml += `    <loc>${xmlEscape(SITE + page.urlPath)}</loc>\n`;
    for (const img of usable) {
      const { title, caption } = buildTitleAndCaption(img, page);
      xml += "    <image:image>\n";
      xml += `      <image:loc>${xmlEscape(SITE + encodePath(img.src))}</image:loc>\n`;
      xml += `      <image:title>${xmlEscape(title)}</image:title>\n`;
      xml += `      <image:caption>${xmlEscape(caption)}</image:caption>\n`;
      xml += "    </image:image>\n";
      imageCount++;
    }
    xml += "  </url>\n\n";
  }

  xml += "</urlset>\n";
  return { xml, imageCount, chromeDeduped };
}

// ── Main ───────────────────────────────────────────────────────────────────

async function main() {
  const { pages, skipped, imagePageCount } = await collect();
  const { xml, imageCount, chromeDeduped } = buildXml(pages, imagePageCount, pages.length);

  await writeFile(path.join(OUT_DIR, "image-sitemap.xml"), xml, "utf8");

  console.log("─── image-sitemap.xml gerado ───");
  console.log(`Páginas com imagens : ${pages.length}`);
  console.log(`Imagens indexadas   : ${imageCount}`);
  console.log(`Imagens únicas      : ${imagePageCount.size}`);
  if (chromeDeduped) {
    console.log(`Repetições de rodapé/cabeçalho omitidas: ${chromeDeduped}`);
  }
  for (const [reason, set] of skipped) {
    console.log(`Ignoradas (${reason}): ${set.size}`);
  }
}

main().catch((err) => {
  console.error("Falha ao gerar image-sitemap.xml:", err.message);
  process.exit(1);
});
