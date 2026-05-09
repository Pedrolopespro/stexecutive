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
    hero: "/images/content/hero site.png",
    heroMobile: "/images/content/hero site mobile.png",
    passenger1: "/images/content/PASSAGEIRO 01.png",
    passenger2: "/images/content/PASSAGEIRO 02.png",
    passenger3: "/images/content/PASSAGEIRO 03.png",
  },

  fleet: {
    van: "/images/content/van.png",
    miniVan: "/images/content/mini van.png",
    bus: "/images/content/onibus.png",
    sedanBlindada: "/images/content/sedan blindada .png",
    sedaExecutivo: "/images/content/seda executivo.png",
    royalTulip: "/images/content/roayl tulip.png",
    commanders: "/images/content/comanders.png",
  },

  icons: {
    // Add custom icons here when available
  },
} as const;

export type ImagePaths = typeof IMAGES;
