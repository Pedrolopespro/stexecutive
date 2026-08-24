// ============================================
// ST Executive — Project Constants
// ============================================

export const WHATSAPP_NUMBER = "5561984097971";

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá venho do site ST Executive, gostaria de um orçamento"
);

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const CONTACT_EMAIL = "stexecutivebsb@hotmail.com";
export const CONTACT_PHONE_DISPLAY = "(61) 9 8409-7971";

/**
 * Mesmo número do display, no formato E.164 exigido pelo href="tel:".
 * O número aparecia só como texto solto: no celular ninguém consegue
 * ligar sem copiar e colar, e o comprador corporativo costuma preferir
 * o telefone ao WhatsApp.
 */
export const CONTACT_PHONE_TEL = "+5561984097971";

/**
 * Reputacao real do perfil Google Meu Negocio da ST Executive.
 *
 * Conferido em 24/08/2026 de duas formas independentes: o painel do dono
 * (print) e a propria pagina publica do perfil, que traz "5,0" e o endereco.
 *
 * ATENCAO AO MANTER: a diretriz do Google exige que o aggregateRating do
 * schema seja igual ao numero EXIBIDO na pagina. Os dois saem daqui, entao
 * basta atualizar este bloco — mas atualize os dois campos juntos, e revise
 * a cada trimestre. Publicar nota que nao corresponde a realidade pode
 * gerar acao manual por rich snippet enganoso.
 */
export const GOOGLE_REVIEWS = {
  nota: "5,0",
  quantidade: 40,
  /** Abre o perfil para LER as avaliacoes. */
  urlLeitura: "https://maps.google.com/?cid=553959846508562903",
  /** Abre direto o formulario de escrever avaliacao. */
  urlEscrita: "https://g.page/r/CdcJ-Z6LD7AHEBI/review",
  conferidoEm: "2026-08-24",
} as const;

/**
 * Endereco comercial, o mesmo publicado no perfil do Google. Entra nos dados
 * estruturados: o LocalBusiness estava sem streetAddress e sem postalCode, o
 * que enfraquece a empresa na busca local.
 */
export const ENDERECO = {
  logradouro: "Quadra 05 Conj. G lote 47",
  bairro: "Sobradinho",
  cidade: "Brasília",
  uf: "DF",
  cep: "73030-057",
} as const;

/**
 * Codigos de pais oferecidos no campo de WhatsApp do formulario.
 *
 * Cada pais aparece com o nome NA PROPRIA LINGUA dele. Isso evita ter que
 * manter a lista traduzida em tres dicionarios e, na pratica, e mais legivel
 * para o estrangeiro do que ver o proprio pais escrito em portugues.
 *
 * Sem bandeirinha de proposito: o Windows nao tem glifo de bandeira e
 * renderiza "BR", "US" no lugar do desenho, o que fica pior que so o nome.
 *
 * A lista cobre o publico real da ST — embaixadas em Brasilia, turnes e
 * congressos. Brasil vem primeiro por ser a maioria.
 */
export const DDI_PAISES = [
  { ddi: "+55", nome: "Brasil" },
  { ddi: "+1", nome: "United States / Canada" },
  { ddi: "+54", nome: "Argentina" },
  { ddi: "+56", nome: "Chile" },
  { ddi: "+57", nome: "Colombia" },
  { ddi: "+52", nome: "México" },
  { ddi: "+51", nome: "Perú" },
  { ddi: "+598", nome: "Uruguay" },
  { ddi: "+595", nome: "Paraguay" },
  { ddi: "+591", nome: "Bolivia" },
  { ddi: "+58", nome: "Venezuela" },
  { ddi: "+351", nome: "Portugal" },
  { ddi: "+34", nome: "España" },
  { ddi: "+33", nome: "France" },
  { ddi: "+49", nome: "Deutschland" },
  { ddi: "+39", nome: "Italia" },
  { ddi: "+44", nome: "United Kingdom" },
  { ddi: "+31", nome: "Nederland" },
  { ddi: "+41", nome: "Schweiz / Suisse" },
  { ddi: "+46", nome: "Sverige" },
  { ddi: "+7", nome: "Россия" },
  { ddi: "+90", nome: "Türkiye" },
  { ddi: "+972", nome: "ישראל" },
  { ddi: "+971", nome: "الإمارات" },
  { ddi: "+966", nome: "السعودية" },
  { ddi: "+91", nome: "भारत" },
  { ddi: "+86", nome: "中国" },
  { ddi: "+81", nome: "日本" },
  { ddi: "+82", nome: "대한민국" },
  { ddi: "+61", nome: "Australia" },
  { ddi: "+27", nome: "South Africa" },
  { ddi: "+244", nome: "Angola" },
  { ddi: "+258", nome: "Moçambique" },
] as const;

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "#servicos" },
  { label: "Frota", href: "#frota" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "/contato/" },
  { label: "Guia Brasília", href: "/guia-brasilia/" },
] as const;

export const SERVICE_PAGES = {
  vans: "/aluguel-de-van-brasilia/",
  transfer: "/transfer-aeroporto-brasilia/",
  executivo: "/transporte-executivo-brasilia/",
  eventos: "/van-para-eventos-brasilia/",
  minivan: "/minivan-executiva-brasilia/",
  microOnibus: "/micro-onibus-executivo-brasilia/",
  onibus: "/onibus-executivo-brasilia/",
  blindados: "/carros-blindados-brasilia/",
  cityTour: "/city-tour-brasilia/",
} as const;

export const GUIA_BRASILIA_PATH = "/guia-brasilia/";

// ============================================
// i18n — PT (padrão, sem prefixo) + EN + ES
// ============================================

export type Locale = "pt" | "en" | "es";
export const DEFAULT_LOCALE: Locale = "pt";
export const LOCALES: Locale[] = ["pt", "en", "es"];

/** "" para pt (sem prefixo, preserva as URLs atuais), "/en", "/es" */
export function localePrefix(locale: Locale): string {
  return locale === "pt" ? "" : `/${locale}`;
}

/** Chave estável — substitui comparação frágil por string de label traduzida */
export type NavKey =
  | "home"
  | "services"
  | "fleet"
  | "how_it_works"
  | "about"
  | "contato"
  | "guia_brasilia";

interface NavStructureItem {
  key: NavKey;
  path: string;
}

// Âncoras (#servicos etc.) só existem na home de cada idioma — nunca prefixadas
//
// A ordem deste array é a ordem exibida no menu — vale para o header do
// desktop e para o menu hambúrguer, nos 3 idiomas, porque ambos iteram
// sobre buildNavLinks(). O rótulo de cada item vem do dicionário pela
// `key`, então reordenar aqui não afeta tradução nem destino.
const NAV_STRUCTURE: NavStructureItem[] = [
  { key: "guia_brasilia", path: "/guia-brasilia/" },
  { key: "home", path: "/" },
  { key: "services", path: "#servicos" },
  { key: "fleet", path: "#frota" },
  { key: "how_it_works", path: "#como-funciona" },
  { key: "about", path: "#sobre" },
  { key: "contato", path: "/contato/" },
];

export interface NavLinkBuilt {
  key: NavKey;
  href: string;
}

export function buildNavLinks(locale: Locale): NavLinkBuilt[] {
  const prefix = localePrefix(locale);
  return NAV_STRUCTURE.map(({ key, path }) => ({
    key,
    href: path.startsWith("#") ? path : `${prefix}${path}`,
  }));
}

export type ServiceKey =
  | "vans"
  | "transfer"
  | "executivo"
  | "eventos"
  | "minivan"
  | "microOnibus"
  | "onibus"
  | "blindados"
  | "cityTour";

const SERVICE_SLUGS: Record<ServiceKey, string> = {
  vans: "aluguel-de-van-brasilia",
  transfer: "transfer-aeroporto-brasilia",
  executivo: "transporte-executivo-brasilia",
  eventos: "van-para-eventos-brasilia",
  minivan: "minivan-executiva-brasilia",
  microOnibus: "micro-onibus-executivo-brasilia",
  onibus: "onibus-executivo-brasilia",
  blindados: "carros-blindados-brasilia",
  cityTour: "city-tour-brasilia",
};

export function buildServicePages(locale: Locale): Record<ServiceKey, string> {
  const prefix = localePrefix(locale);
  return Object.fromEntries(
    Object.entries(SERVICE_SLUGS).map(([key, slug]) => [key, `${prefix}/${slug}/`])
  ) as Record<ServiceKey, string>;
}

/**
 * O Guia é servido pelo PHP (adm/guia-brasilia/), que trata ?lang= via
 * rewrite do .htaccess — os três idiomas apontam para o Guia no próprio
 * idioma.
 *
 * Em espanhol ainda não há artigos no banco, então a listagem aparece com a
 * mensagem "Todavía no hay artículos publicados" até que algum seja
 * cadastrado pelo painel.
 */
export function guiaBrasiliaPath(locale: Locale): string {
  return `${localePrefix(locale)}${GUIA_BRASILIA_PATH}`;
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
