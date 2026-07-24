import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { onibusEn, navEn, footerEn, commonEn } from "@/lib/i18n";

export const metadata: Metadata = {
  title: onibusEn.meta.title,
  description: onibusEn.meta.description,
  keywords: onibusEn.meta.keywords,
  alternates: {
    canonical: `https://stexecutive.com.br/${onibusEn.canonicalPath}`,
    languages: {
      "pt-BR": "https://stexecutive.com.br/onibus-executivo-brasilia/",
      en: "https://stexecutive.com.br/en/onibus-executivo-brasilia/",
      es: "https://stexecutive.com.br/es/onibus-executivo-brasilia/",
      "x-default": "https://stexecutive.com.br/onibus-executivo-brasilia/",
    },
  },
};

export default function EnOnibusPage() {
  return (
    <ServicePageTemplate content={onibusEn} locale="en" navDict={navEn} footerDict={footerEn} commonDict={commonEn} />
  );
}
