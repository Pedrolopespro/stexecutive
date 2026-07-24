import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { blindadosEn, navEn, footerEn, commonEn } from "@/lib/i18n";

export const metadata: Metadata = {
  title: blindadosEn.meta.title,
  description: blindadosEn.meta.description,
  keywords: blindadosEn.meta.keywords,
  alternates: {
    canonical: `https://stexecutive.com.br/${blindadosEn.canonicalPath}`,
    languages: {
      "pt-BR": "https://stexecutive.com.br/carros-blindados-brasilia/",
      en: "https://stexecutive.com.br/en/carros-blindados-brasilia/",
      es: "https://stexecutive.com.br/es/carros-blindados-brasilia/",
      "x-default": "https://stexecutive.com.br/carros-blindados-brasilia/",
    },
  },
};

export default function EnCarrosBlindadosPage() {
  return (
    <ServicePageTemplate content={blindadosEn} locale="en" navDict={navEn} footerDict={footerEn} commonDict={commonEn} />
  );
}
