import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { minivanEn, navEn, footerEn, commonEn } from "@/lib/i18n";

export const metadata: Metadata = {
  title: minivanEn.meta.title,
  description: minivanEn.meta.description,
  keywords: minivanEn.meta.keywords,
  alternates: {
    canonical: `https://stexecutive.com.br/${minivanEn.canonicalPath}`,
    languages: {
      "pt-BR": "https://stexecutive.com.br/minivan-executiva-brasilia/",
      en: "https://stexecutive.com.br/en/minivan-executiva-brasilia/",
      es: "https://stexecutive.com.br/es/minivan-executiva-brasilia/",
      "x-default": "https://stexecutive.com.br/minivan-executiva-brasilia/",
    },
  },
};

export default function EnMinivanPage() {
  return (
    <ServicePageTemplate content={minivanEn} locale="en" navDict={navEn} footerDict={footerEn} commonDict={commonEn} />
  );
}
