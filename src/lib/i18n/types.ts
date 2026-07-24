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
    specs?: SpecItem[];
    checklist?: string[];
    tagsLabel?: string;
    tags?: LabeledItem[];
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
    items: string[];
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
    subtitle?: string;
    factors?: string[];
    note?: string;
    ctaLabel?: string;
  };

  comparisonCards?: {
    eyebrow: string;
    heading: string;
    subtitle?: string;
    theme?: "light" | "dark";
    left: { label: string; items: string[] };
    right: { label: string; items: string[] };
  };

  contextSection?: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    stats: { number: string; label: string }[];
  };
}

// ─────────────────────────────────────────────
// Home
// ─────────────────────────────────────────────

export interface IconedItem {
  title: string;
  sub: string;
}

export interface ServiceItem {
  title: string;
  shortText: string;
  description: string;
  highlights: string[];
  ctaText: string;
  serviceKey?: import("@/lib/constants").ServiceKey;
  contatoFallback?: boolean;
  featured?: boolean;
}

export interface FleetItem {
  src: string;
  imgPos: string;
  label: string;
  capacity: string;
  model: string;
  desc: string;
  serviceKey: import("@/lib/constants").ServiceKey;
}

export interface TestimonialItem {
  text: string;
  name: string;
  company: string;
}

export interface AudienceItem {
  title: string;
  text: string;
  bullets: string[];
}

export interface HomeContentDict {
  meta: Meta;

  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleEmphasis: string;
    subtitle: string;
    supportText: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaSecondaryMobile: string;
    ctaPrimaryMobile: string;
    microcopy: string;
  };

  featuresBar: IconedItem[];

  clientsBar: {
    label: string;
  };

  services: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: ServiceItem[];
    moreLabel: string;
  };

  vansSection: {
    badge: string;
    heading: string;
    paragraph: string;
    bullets: string[];
    ctaLabel: string;
  };

  fleetSection: {
    badge: string;
    heading: string;
    subtitleParts: { plain: string; emphasis: string }[];
    differentials: IconedItem[];
    items: FleetItem[];
    moreLabel: string;
    ctaLabel: string;
  };

  testimonialsSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    stats: IconedItem[];
    items: TestimonialItem[];
    googleCta: {
      title: string;
      subtitle: string;
      buttonLabel: string;
    };
  };

  audienceSection: {
    eyebrow: string;
    heading: string;
    subtitlePlain: string;
    subtitleEmphasis: string;
    items: AudienceItem[];
  };

  processSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    steps: ProcessStep[];
    ctaBar: {
      title: string;
      subtitle: string;
      buttonLabel: string;
    };
  };

  aboutSection: {
    badge: string;
    heading: string;
    paragraphs: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    yearsBadgeLine1: string;
    yearsBadgeLine2: string;
    differentials: IconedItem[];
    ctaBar: {
      title: string;
      subtitle: string;
      buttonLabel: string;
    };
  };

  semanticBlock: string;

  faqSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    buttonLabel: string;
    items: FaqItem[];
  };

  ctaFinal: {
    title: string;
    subtitle: string;
    ctaText: string;
    microcopy: string;
  };
}

// ─────────────────────────────────────────────
// Contato
// ─────────────────────────────────────────────

export interface ContatoContentDict {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  form: {
    heading: string;
    requiredNote: string;
    requiredWord: string;
    labels: {
      nome: string;
      empresa: string;
      email: string;
      telefone: string;
      tipoServico: string;
      motoristaBilingue: string;
      localEmbarque: string;
      localDesembarque: string;
      observacao: string;
    };
    placeholders: {
      nome: string;
      empresa: string;
      email: string;
      telefone: string;
      localEmbarque: string;
      localDesembarque: string;
      observacao: string;
    };
    selectPlaceholder: string;
    tipoServicoOptions: { value: string; label: string }[];
    simNaoOptions: { value: string; label: string }[];
    submitLabel: string;
    submitSendingLabel: string;
    consentText: string;
    errorMessage: string;
    successTitle: string;
    successMessage: string;
    successWhatsappLabel: string;
  };
  sidebar: {
    whatsappLabel: string;
    whatsappSubtext: string;
    phoneLabel: string;
    phoneSubtext: string;
    emailLabel: string;
    emailSubtext: string;
    noteLabel: string;
    noteText: string;
  };
}
