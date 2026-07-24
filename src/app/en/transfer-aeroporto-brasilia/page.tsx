import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { transferEn, navEn, footerEn, commonEn } from "@/lib/i18n";

export const metadata: Metadata = {
  title: transferEn.meta.title,
  description: transferEn.meta.description,
  keywords: transferEn.meta.keywords,
  alternates: {
    canonical: `https://stexecutive.com.br/${transferEn.canonicalPath}`,
    languages: {
      "pt-BR": "https://stexecutive.com.br/transfer-aeroporto-brasilia/",
      en: "https://stexecutive.com.br/en/transfer-aeroporto-brasilia/",
      "x-default": "https://stexecutive.com.br/transfer-aeroporto-brasilia/",
    },
  },
};

export default function EnTransferAeroportoPage() {
  return (
    <ServicePageTemplate
      content={transferEn}
      locale="en"
      navDict={navEn}
      footerDict={footerEn}
      commonDict={commonEn}
    />
  );
}
