// ============================================
// ST Executive — Project Constants
// ============================================

export const WHATSAPP_NUMBER = "556184097971";

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
