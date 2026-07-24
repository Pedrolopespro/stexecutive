import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { microOnibusEs, navEs, footerEs, commonEs } from "@/lib/i18n";

export const metadata: Metadata = {
  title: microOnibusEs.meta.title,
  description: microOnibusEs.meta.description,
  keywords: microOnibusEs.meta.keywords,
  alternates: {
    canonical: `https://stexecutive.com.br/${microOnibusEs.canonicalPath}`,
    languages: {
      "pt-BR": "https://stexecutive.com.br/micro-onibus-executivo-brasilia/",
      en: "https://stexecutive.com.br/en/micro-onibus-executivo-brasilia/",
      es: "https://stexecutive.com.br/es/micro-onibus-executivo-brasilia/",
      "x-default": "https://stexecutive.com.br/micro-onibus-executivo-brasilia/",
    },
  },
};

export default function EsMicroOnibusPage() {
  return (
    <ServicePageTemplate content={microOnibusEs} locale="es" navDict={navEs} footerDict={footerEs} commonDict={commonEs} />
  );
}
