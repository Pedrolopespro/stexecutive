import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { vansEn, navEn, footerEn, commonEn } from "@/lib/i18n";

export const metadata: Metadata = {
  title: vansEn.meta.title,
  description: vansEn.meta.description,
  keywords: vansEn.meta.keywords,
  alternates: {
    canonical: `https://stexecutive.com.br/${vansEn.canonicalPath}`,
    languages: {
      "pt-BR": "https://stexecutive.com.br/aluguel-de-van-brasilia/",
      en: "https://stexecutive.com.br/en/aluguel-de-van-brasilia/",
      "x-default": "https://stexecutive.com.br/aluguel-de-van-brasilia/",
    },
  },
};

export default function EnAluguelDeVanBrasiliaPage() {
  return (
    <ServicePageTemplate
      content={vansEn}
      locale="en"
      navDict={navEn}
      footerDict={footerEn}
      commonDict={commonEn}
    />
  );
}
