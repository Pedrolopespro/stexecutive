import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { microOnibusEn, navEn, footerEn, commonEn } from "@/lib/i18n";

export const metadata: Metadata = {
  title: microOnibusEn.meta.title,
  description: microOnibusEn.meta.description,
  keywords: microOnibusEn.meta.keywords,
  alternates: {
    canonical: `https://stexecutive.com.br/${microOnibusEn.canonicalPath}`,
    languages: {
      "pt-BR": "https://stexecutive.com.br/micro-onibus-executivo-brasilia/",
      en: "https://stexecutive.com.br/en/micro-onibus-executivo-brasilia/",
      es: "https://stexecutive.com.br/es/micro-onibus-executivo-brasilia/",
      "x-default": "https://stexecutive.com.br/micro-onibus-executivo-brasilia/",
    },
  },
};

export default function EnMicroOnibusPage() {
  return (
    <ServicePageTemplate content={microOnibusEn} locale="en" navDict={navEn} footerDict={footerEn} commonDict={commonEn} />
  );
}
