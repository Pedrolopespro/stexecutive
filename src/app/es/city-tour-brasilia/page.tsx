import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { cityTourEs, navEs, footerEs, commonEs } from "@/lib/i18n";

export const metadata: Metadata = {
  title: cityTourEs.meta.title,
  description: cityTourEs.meta.description,
  keywords: cityTourEs.meta.keywords,
  alternates: {
    canonical: `https://stexecutive.com.br/${cityTourEs.canonicalPath}`,
    languages: {
      "pt-BR": "https://stexecutive.com.br/city-tour-brasilia/",
      en: "https://stexecutive.com.br/en/city-tour-brasilia/",
      es: "https://stexecutive.com.br/es/city-tour-brasilia/",
      "x-default": "https://stexecutive.com.br/city-tour-brasilia/",
    },
  },
};

export default function EsCityTourPage() {
  return (
    <ServicePageTemplate content={cityTourEs} locale="es" navDict={navEs} footerDict={footerEs} commonDict={commonEs} />
  );
}
