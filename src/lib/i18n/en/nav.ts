import type { NavDict } from "@/lib/i18n/types";

export const navEn: NavDict = {
  labels: {
    home: "Home",
    services: "Services",
    fleet: "Fleet",
    how_it_works: "How it works",
    about: "About",
    contato: "Contact",
    guia_brasilia: "Brasília Guide",
  },
  servicesDropdownLabel: "Services",
  ctaLabel: "Request a quote",
  openMenuAriaLabel: "Open menu",
  closeMenuAriaLabel: "Close menu",
  newBadge: "NEW",
  whatsappButtonLabel: "Chat on WhatsApp",
  whatsappSubtext: "Executive transportation in Brasília",
  serviceLinks: [
    { key: "vans", label: "Executive Van", desc: "Groups, teams and airport transfer." },
    { key: "minivan", label: "Executive Minivan", desc: "Small groups and VIP rides." },
    { key: "executivo", label: "Sedan/SUV Executive", desc: "Executives and special guests." },
    { key: "blindados", label: "Armored Cars", desc: "Security and discretion for authorities." },
    { key: "transfer", label: "Airport Transfer", desc: "Punctual pickups and drop-offs." },
    { key: "eventos", label: "Van for Events", desc: "Weddings, shows and corporate events." },
    { key: "microOnibus", label: "Executive Mini-Bus", desc: "Mid-size groups and corporate outings." },
    { key: "onibus", label: "Executive Bus", desc: "Large groups and large-scale events." },
    { key: "cityTour", label: "Brasília City Tour", desc: "A tour of the capital's monuments." },
  ],
};
