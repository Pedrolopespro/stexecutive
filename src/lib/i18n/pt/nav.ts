import type { NavDict } from "@/lib/i18n/types";

export const navPt: NavDict = {
  labels: {
    home: "Início",
    services: "Serviços",
    fleet: "Frota",
    how_it_works: "Como funciona",
    about: "Sobre",
    contato: "Contato",
    guia_brasilia: "Guia Brasília",
  },
  servicesDropdownLabel: "Serviços",
  ctaLabel: "Solicitar orçamento",
  openMenuAriaLabel: "Abrir menu",
  closeMenuAriaLabel: "Fechar menu",
  newBadge: "NOVO",
  whatsappButtonLabel: "Falar no WhatsApp",
  whatsappSubtext: "Transporte executivo em Brasília",
  serviceLinks: [
    { key: "vans", label: "Van Executiva", desc: "Grupos, equipes e transfer aeroporto." },
    { key: "minivan", label: "Minivan Executiva", desc: "Pequenos grupos e deslocamentos VIP." },
    { key: "executivo", label: "Sedan/SUV Executivo", desc: "Executivos e convidados especiais." },
    { key: "blindados", label: "Carros Blindados", desc: "Segurança e discrição para autoridades." },
    { key: "transfer", label: "Transfer Aeroporto", desc: "Embarques e desembarques pontuais." },
    { key: "eventos", label: "Van para Eventos", desc: "Casamentos, shows e eventos corporativos." },
    { key: "microOnibus", label: "Micro-ônibus Executivo", desc: "Grupos médios e excursões corporativas." },
    { key: "onibus", label: "Ônibus Executivo", desc: "Grandes grupos e eventos de grande porte." },
    { key: "cityTour", label: "City Tour Brasília", desc: "Passeio pelos monumentos da capital." },
  ],
};
