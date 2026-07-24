import type { FooterDict } from "@/lib/i18n/types";

export const footerPt: FooterDict = {
  brandDescription:
    "Transporte executivo em Brasília para empresas, eventos, grupos e transfer aeroporto.",
  sectionHeaders: {
    services: "Serviços",
    company: "Empresa",
    contact: "Contato",
  },
  serviceLinks: [
    { key: "vans", label: "Aluguel de Van em Brasília", desc: "" },
    { key: "executivo", label: "Transporte Executivo", desc: "" },
    { key: "transfer", label: "Transfer Aeroporto", desc: "" },
    { key: "eventos", label: "Van para Eventos", desc: "" },
    { key: "minivan", label: "Minivan Executiva", desc: "" },
    { key: "microOnibus", label: "Micro-ônibus Executivo", desc: "" },
    { key: "onibus", label: "Ônibus Executivo", desc: "" },
    { key: "blindados", label: "Carros Blindados", desc: "" },
    { key: "cityTour", label: "City Tour Brasília", desc: "" },
  ],
  companyLinks: [
    { key: "about", label: "Sobre", href: "#sobre" },
    { key: "fleet", label: "Frota", href: "#frota" },
    { key: "how_it_works", label: "Como funciona", href: "#como-funciona" },
    { key: "faq", label: "FAQ", href: "#faq" },
    { key: "guia_brasilia", label: "Guia Brasília", href: "" },
  ],
  contact: {
    whatsapp: "WhatsApp",
    address: "Brasília — DF",
  },
  copyright: "ST Executive. Todos os direitos reservados.",
  tagline: "Mais de 15 anos de transporte executivo em Brasília.",
};
