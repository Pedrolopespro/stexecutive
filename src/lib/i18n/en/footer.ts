import type { FooterDict } from "@/lib/i18n/types";

export const footerEn: FooterDict = {
  brandDescription:
    "Executive transportation in Brasília for companies, events, groups and airport transfer.",
  sectionHeaders: {
    services: "Services",
    company: "Company",
    contact: "Contact",
  },
  serviceLinks: [
    { key: "vans", label: "Van Rental in Brasília", desc: "" },
    { key: "executivo", label: "Executive Transportation", desc: "" },
    { key: "transfer", label: "Airport Transfer", desc: "" },
    { key: "eventos", label: "Van for Events", desc: "" },
    { key: "minivan", label: "Executive Minivan", desc: "" },
    { key: "microOnibus", label: "Executive Mini-Bus", desc: "" },
    { key: "onibus", label: "Executive Bus", desc: "" },
    { key: "blindados", label: "Armored Cars", desc: "" },
    { key: "cityTour", label: "Brasília City Tour", desc: "" },
  ],
  companyLinks: [
    { key: "about", label: "About", href: "#sobre" },
    { key: "fleet", label: "Fleet", href: "#frota" },
    { key: "how_it_works", label: "How it works", href: "#como-funciona" },
    { key: "faq", label: "FAQ", href: "#faq" },
    { key: "guia_brasilia", label: "Brasília Guide", href: "" },
  ],
  contact: {
    whatsapp: "WhatsApp",
    address: "Brasília — DF, Brazil",
  },
  copyright: "ST Executive. All rights reserved.",
  tagline: "Over 15 years of executive transportation in Brasília.",
};
