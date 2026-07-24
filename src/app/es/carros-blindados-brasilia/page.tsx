import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { blindadosEs, navEs, footerEs, commonEs } from "@/lib/i18n";

export const metadata: Metadata = {
  title: blindadosEs.meta.title,
  description: blindadosEs.meta.description,
  keywords: blindadosEs.meta.keywords,
  alternates: {
    canonical: `https://stexecutive.com.br/${blindadosEs.canonicalPath}`,
    languages: {
      "pt-BR": "https://stexecutive.com.br/carros-blindados-brasilia/",
      en: "https://stexecutive.com.br/en/carros-blindados-brasilia/",
      es: "https://stexecutive.com.br/es/carros-blindados-brasilia/",
      "x-default": "https://stexecutive.com.br/carros-blindados-brasilia/",
    },
  },
};

export default function EsCarrosBlindadosPage() {
  return (
    <ServicePageTemplate content={blindadosEs} locale="es" navDict={navEs} footerDict={footerEs} commonDict={commonEs} />
  );
}
