/**
 * Pós-build — corrige, no HTML já exportado:
 *
 *  1. o atributo `lang` das páginas /en e /es (o export estático só tem um
 *     root layout, que fixa pt-BR; até então o idioma só era ajustado depois
 *     que o JavaScript carregava, tarde demais para leitor de tela e crawler);
 *  2. as tags `hreflang`, ligando as três versões de cada página.
 *
 * O Guia Brasília fica de fora de propósito: aquelas rotas são servidas pelo
 * PHP (o .htaccess reescreve /guia-brasilia/* para os scripts do painel), que
 * já emite o próprio hreflang. O HTML que o Next.js gera ali nunca é servido.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const OUT = "out";
const BASE = "https://stexecutive.com.br";
const LOCALES = ["pt", "en", "es"];
const HREFLANG = { pt: "pt-BR", en: "en", es: "es" };

/** Caminhos que não recebem tratamento (servidos pelo PHP ou sem tradução). */
const IGNORAR = [/^404(\.html)?$/, /^guia-brasilia(\/|$)/];

async function listarHtml(dir) {
  const encontrados = [];
  for (const entrada of await readdir(dir, { withFileTypes: true })) {
    const caminho = join(dir, entrada.name);
    if (entrada.isDirectory()) encontrados.push(...(await listarHtml(caminho)));
    else if (entrada.name.endsWith(".html")) encontrados.push(caminho);
  }
  return encontrados;
}

/** "out/en/contato/index.html" → { locale: "en", rota: "contato" } */
function analisar(arquivo) {
  const rel = relative(OUT, arquivo).split(sep).join("/");
  const semIndex = rel.replace(/(^|\/)index\.html$/, "$1").replace(/\/$/, "");
  const partes = semIndex ? semIndex.split("/") : [];
  const locale = LOCALES.includes(partes[0]) && partes[0] !== "pt" ? partes[0] : "pt";
  const rota = locale === "pt" ? partes.join("/") : partes.slice(1).join("/");
  return { rel: semIndex, locale, rota };
}

function urlDe(locale, rota) {
  const prefixo = locale === "pt" ? "" : `/${locale}`;
  return `${BASE}${prefixo}/${rota ? rota + "/" : ""}`;
}

const arquivos = await listarHtml(OUT);

// Quais rotas existem em quais idiomas — a base para montar o hreflang.
const rotasPorIdioma = new Map();
for (const arquivo of arquivos) {
  const { rel, locale, rota } = analisar(arquivo);
  if (IGNORAR.some((re) => re.test(rel))) continue;
  if (!rotasPorIdioma.has(rota)) rotasPorIdioma.set(rota, new Set());
  rotasPorIdioma.get(rota).add(locale);
}

let langCorrigido = 0;
let hreflangInjetado = 0;
let ignorados = 0;

for (const arquivo of arquivos) {
  const { rel, locale, rota } = analisar(arquivo);
  if (IGNORAR.some((re) => re.test(rel))) {
    ignorados++;
    continue;
  }

  let html = readFileSync(arquivo, "utf8");
  const original = html;

  // 1. atributo lang
  if (locale !== "pt") {
    html = html.replace(/<html lang="[^"]*"/, `<html lang="${HREFLANG[locale]}"`);
    if (html !== original) langCorrigido++;
  }

  // 2. hreflang — só quando a página existe em mais de um idioma e ainda
  //    não tem as tags (evita duplicar se o script rodar duas vezes).
  const idiomas = [...(rotasPorIdioma.get(rota) ?? [])];
  if (idiomas.length > 1 && !html.includes('rel="alternate" hreflang=')) {
    const tags = LOCALES.filter((l) => idiomas.includes(l))
      .map((l) => `<link rel="alternate" hreflang="${HREFLANG[l]}" href="${urlDe(l, rota)}"/>`)
      .join("");
    const xDefault = idiomas.includes("pt")
      ? `<link rel="alternate" hreflang="x-default" href="${urlDe("pt", rota)}"/>`
      : "";
    html = html.replace("</head>", `${tags}${xDefault}</head>`);
    hreflangInjetado++;
  }

  if (html !== original) writeFileSync(arquivo, html, "utf8");
}

console.log("─── lang + hreflang ───");
console.log(`Páginas com lang corrigido : ${langCorrigido}`);
console.log(`Páginas com hreflang       : ${hreflangInjetado}`);
console.log(`Ignoradas (404 / Guia PHP) : ${ignorados}`);
