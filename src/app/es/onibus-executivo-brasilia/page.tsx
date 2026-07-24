import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { onibusEs, navEs, footerEs, commonEs } from "@/lib/i18n";

export const metadata: Metadata = {
  title: onibusEs.meta.title,
  description: onibusEs.meta.description,
  keywords: onibusEs.meta.keywords,
  alternates: {
    canonical: `https://stexecutive.com.br/${onibusEs.canonicalPath}`,
    languages: {
      "pt-BR": "https://stexecutive.com.br/onibus-executivo-brasilia/",
      en: "https://stexecutive.com.br/en/onibus-executivo-brasilia/",
      es: "https://stexecutive.com.br/es/onibus-executivo-brasilia/",
      "x-default": "https://stexecutive.com.br/onibus-executivo-brasilia/",
    },
  },
};

export default function EsOnibusPage() {
  return (
    <ServicePageTemplate content={onibusEs} locale="es" navDict={navEs} footerDict={footerEs} commonDict={commonEs} />
  );
}
