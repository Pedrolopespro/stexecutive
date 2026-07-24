import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { cityTourEn, navEn, footerEn, commonEn } from "@/lib/i18n";

export const metadata: Metadata = {
  title: cityTourEn.meta.title,
  description: cityTourEn.meta.description,
  keywords: cityTourEn.meta.keywords,
  alternates: {
    canonical: `https://stexecutive.com.br/${cityTourEn.canonicalPath}`,
    languages: {
      "pt-BR": "https://stexecutive.com.br/city-tour-brasilia/",
      en: "https://stexecutive.com.br/en/city-tour-brasilia/",
      es: "https://stexecutive.com.br/es/city-tour-brasilia/",
      "x-default": "https://stexecutive.com.br/city-tour-brasilia/",
    },
  },
};

export default function EnCityTourPage() {
  return (
    <ServicePageTemplate content={cityTourEn} locale="en" navDict={navEn} footerDict={footerEn} commonDict={commonEn} />
  );
}
