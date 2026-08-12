import type { Metadata } from "next";

/**
 * Identidade de marca compartilhada no Open Graph de todas as páginas:
 * imagem social, nome do site, tipo e idioma.
 */
const OG_BASE = {
  type: "website" as const,
  locale: "pt_BR",
  siteName: "ST Executive",
  images: [
    {
      url: "https://stexecutive.com.br/images/content/social.jpeg",
      width: 1200,
      height: 630,
      alt: "ST Executive — Transporte Executivo em Brasília",
    },
  ],
};

/**
 * Monta o openGraph de uma página usando o título dela.
 *
 * Existe porque o Next.js NÃO faz merge profundo de metadata: declarar
 * `openGraph` numa página substitui o bloco inteiro herdado do layout.
 * Sem repetir images/siteName/type/locale aqui, a página perderia a
 * imagem de compartilhamento — comprovado em build.
 *
 * Sem este helper, cada página de serviço herdava o og:title da home, e
 * todo link compartilhado no WhatsApp aparecia com o título errado.
 */
export function ogDaPagina(title: string): Metadata["openGraph"] {
  return { ...OG_BASE, title };
}
