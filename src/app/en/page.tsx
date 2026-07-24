import type { Metadata } from "next";
import HomeContent from "@/app/HomeContent";
import { homeEn, navEn, footerEn, commonEn } from "@/lib/i18n";

export const metadata: Metadata = {
  title: homeEn.meta.title,
  description: homeEn.meta.description,
  keywords: homeEn.meta.keywords,
  alternates: {
    canonical: "https://stexecutive.com.br/en/",
    languages: {
      "pt-BR": "https://stexecutive.com.br/",
      en: "https://stexecutive.com.br/en/",
      "x-default": "https://stexecutive.com.br/",
    },
  },
};

export default function EnHomePage() {
  return (
    <HomeContent
      locale="en"
      content={homeEn}
      navDict={navEn}
      footerDict={footerEn}
      commonDict={commonEn}
    />
  );
}
