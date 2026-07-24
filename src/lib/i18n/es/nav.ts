import type { NavDict } from "@/lib/i18n/types";

export const navEs: NavDict = {
  labels: {
    home: "Inicio",
    services: "Servicios",
    fleet: "Flota",
    how_it_works: "Cómo funciona",
    about: "Nosotros",
    contato: "Contacto",
    guia_brasilia: "Guía Brasília",
  },
  servicesDropdownLabel: "Servicios",
  ctaLabel: "Solicitar presupuesto",
  openMenuAriaLabel: "Abrir menú",
  closeMenuAriaLabel: "Cerrar menú",
  newBadge: "NUEVO",
  whatsappButtonLabel: "Hablar por WhatsApp",
  whatsappSubtext: "Transporte ejecutivo en Brasília",
  serviceLinks: [
    { key: "vans", label: "Van Ejecutiva", desc: "Grupos, equipos y transfer aeropuerto." },
    { key: "minivan", label: "Minivan Ejecutiva", desc: "Grupos pequeños y traslados VIP." },
    { key: "executivo", label: "Sedán/SUV Ejecutivo", desc: "Ejecutivos e invitados especiales." },
    { key: "blindados", label: "Autos Blindados", desc: "Seguridad y discreción para autoridades." },
    { key: "transfer", label: "Transfer Aeropuerto", desc: "Llegadas y salidas puntuales." },
    { key: "eventos", label: "Van para Eventos", desc: "Bodas, shows y eventos corporativos." },
    { key: "microOnibus", label: "Micro-ómnibus Ejecutivo", desc: "Grupos medianos y excursiones corporativas." },
    { key: "onibus", label: "Ómnibus Ejecutivo", desc: "Grupos grandes y eventos de gran porte." },
    { key: "cityTour", label: "City Tour Brasília", desc: "Paseo por los monumentos de la capital." },
  ],
};
