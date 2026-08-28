import type { FooterDict } from "@/lib/i18n/types";

export const footerEs: FooterDict = {
  cadastur: {
    label: "Cadastur n.º 13.718.289/0001-20 — Ministerio de Turismo de Brasil",
    imageAlt: "Sello Cadastur del Ministerio de Turismo de Brasil — registro n.º 13.718.289/0001-20",
  },
  brandDescription: "Transporte ejecutivo en Brasília para empresas, eventos, grupos y transfer aeropuerto.",
  sectionHeaders: {
    services: "Servicios",
    company: "Empresa",
    contact: "Contacto",
  },
  serviceLinks: [
    { key: "vans", label: "Alquiler de Van en Brasília", desc: "" },
    { key: "executivo", label: "Transporte Ejecutivo", desc: "" },
    { key: "transfer", label: "Transfer Aeropuerto", desc: "" },
    { key: "eventos", label: "Van para Eventos", desc: "" },
    { key: "minivan", label: "Minivan Ejecutiva", desc: "" },
    { key: "microOnibus", label: "Micro-ómnibus Ejecutivo", desc: "" },
    { key: "onibus", label: "Ómnibus Ejecutivo", desc: "" },
    { key: "blindados", label: "Autos Blindados", desc: "" },
    { key: "cityTour", label: "City Tour Brasília", desc: "" },
  ],
  companyLinks: [
    { key: "about", label: "Nosotros", href: "#sobre" },
    { key: "fleet", label: "Flota", href: "#frota" },
    { key: "how_it_works", label: "Cómo funciona", href: "#como-funciona" },
    { key: "faq", label: "FAQ", href: "#faq" },
    { key: "guia_brasilia", label: "Guía Brasília", href: "" },
  ],
  contact: {
    whatsapp: "WhatsApp",
    address: "Brasília — DF, Brasil",
  },
  copyright: "ST Executive. Todos los derechos reservados.",
  tagline: "Más de 15 años de transporte ejecutivo en Brasília.",
};
