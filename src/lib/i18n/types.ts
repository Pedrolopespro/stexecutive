import type { NavKey, ServiceKey } from "@/lib/constants";

// ─────────────────────────────────────────────
// Compartilhado — Header / MobileMenu / Footer
// ─────────────────────────────────────────────

export interface ServiceLinkDict {
  key: ServiceKey;
  label: string;
  desc: string;
}

export interface NavDict {
  labels: Record<NavKey, string>;
  servicesDropdownLabel: string;
  ctaLabel: string;
  serviceLinks: ServiceLinkDict[];
  openMenuAriaLabel: string;
  closeMenuAriaLabel: string;
  newBadge: string;
  whatsappButtonLabel: string;
  whatsappSubtext: string;
}

export interface FooterDict {
  brandDescription: string;
  sectionHeaders: {
    services: string;
    company: string;
    contact: string;
  };
  serviceLinks: ServiceLinkDict[];
  companyLinks: { key: NavKey | "faq"; label: string; href: string }[];
  contact: {
    whatsapp: string;
    address: string;
  };
  copyright: string;
  tagline: string;
}

export interface CommonDict {
  whatsappMessage: string;
  eyebrowBrand: string;
  whatsappFloatingAriaLabel: string;
  whatsappFloatingLabel: string;
}

// ─────────────────────────────────────────────
// Página de serviço (template compartilhado)
// ─────────────────────────────────────────────

export interface Meta {
  title: string;
  description: string;
  keywords: string[];
}

export interface LabeledItem {
  label: string;
  desc: string;
}

export interface NumberedItem {
  number: string;
  title: string;
  desc: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  text: string;
}

export interface SpecItem {
  spec: string;
  value: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ServicePageContent {
  meta: Meta;
  canonicalPath: string; // ex: "aluguel-de-van-brasilia/" — sem barra inicial, com barra final

  hero: {
    image: string;
    imageAlt: string;
    titleLine1: string;
    titleEmphasis: string;
    titleLine2?: string;
    subtitle: string;
    ctaLabel: string;
    microcopy: string;
  };

  whatIs: {
    eyebrow: string;
    heading: string;
    paragraph: string;
  };

  fleet: {
    image: string;
    imageAlt: string;
    eyebrow: string;
    heading: string;
    paragraph: string;
    specs: SpecItem[];
    ctaLabel: string;
  };

  useCases: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: LabeledItem[];
  };

  differentials: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: NumberedItem[];
  };

  process: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    steps: ProcessStep[];
    ctaLabel: string;
  };

  gallery?: {
    eyebrow: string;
    heading: string;
    images: GalleryImage[];
  };

  coverage?: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    locations: string[];
  };

  faq: {
    eyebrow: string;
    heading: string;
    items: FaqItem[];
  };

  semanticBlock: string; // texto sr-only para SEO/IA

  cta: {
    title: string;
    subtitle: string;
    ctaText: string;
    microcopy: string;
  };

  // ── Seções opcionais específicas de algumas páginas ──
  eventTypes?: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: LabeledItem[];
  };
  commonSituations?: {
    eyebrow: string;
    heading: string;
    items: NumberedItem[];
  };
  comparisonTable?: {
    eyebrow: string;
    heading: string;
    headers: string[];
    rows: string[][];
  };
  companyBenefits?: {
    eyebrow: string;
    heading: string;
    items: LabeledItem[];
  };
  price?: {
    eyebrow: string;
    heading: string;
    paragraph: string;
  };
}
