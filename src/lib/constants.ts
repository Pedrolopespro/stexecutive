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
const NAV_STRUCTURE: NavStructureItem[] = [
  { key: "home", path: "/" },
  { key: "services", path: "#servicos" },
  { key: "fleet", path: "#frota" },
  { key: "how_it_works", path: "#como-funciona" },
  { key: "about", path: "#sobre" },
  { key: "contato", path: "/contato/" },
  { key: "guia_brasilia", path: "/guia-brasilia/" },
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
 * Guia Brasília é servido pelo PHP (adm/guia-brasilia/), que já trata
 * ?lang=en|es via rewrite do .htaccess.
 */
export function guiaBrasiliaPath(locale: Locale): string {
  return `${localePrefix(locale)}${GUIA_BRASILIA_PATH}`;
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
