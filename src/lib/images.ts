/**
 * Image paths configuration
 * Centralized image paths for easy maintenance
 */

export const IMAGES = {
  logo: {
    full: "/images/logo/SVG/logo full.svg",
    white: "/images/logo/SVG/logo white.svg",
    black: "/images/logo/SVG/logo black.svg",
    blue: "/images/logo/SVG/logo blue.svg",
    gold: "/images/logo/SVG/logo gold.svg",
    grey: "/images/logo/SVG/logo grey.svg",
    offwhite: "/images/logo/SVG/logo offwhite.svg",
    monogram: "/images/logo/SVG/monograma.svg",
    rectangleBlackGold: "/images/logo/SVG/logo retangulo black gold.svg",
    rectangleBlue: "/images/logo/SVG/logo retangulo blue.svg",
    rectangleOffwhite: "/images/logo/SVG/logo retangulo offwhite.svg",
  },

  content: {
    hero: "/images/content/hero site.webp",
    heroMobile: "/images/content/hero site mobile.webp",
    passenger1: "/images/content/PASSAGEIRO 01.webp",
    passenger2: "/images/content/PASSAGEIRO 02.webp",
    passenger3: "/images/content/PASSAGEIRO 03.webp",
  },

  fleet: {
    van: "/images/content/van.webp",
    miniVan: "/images/content/mini van.webp",
    bus: "/images/content/onibus.webp",
    sedanBlindada: "/images/content/sedan blindada .webp",
    sedaExecutivo: "/images/content/seda executivo.webp",
    royalTulip: "/images/content/roayl tulip.webp",
    commanders: "/images/content/commander.webp",
  },

  icons: {
    // Add custom icons here when available
  },
} as const;

export type ImagePaths = typeof IMAGES;
