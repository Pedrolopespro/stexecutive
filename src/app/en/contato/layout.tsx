import type { Metadata } from "next";
import { contatoEn } from "@/lib/i18n";

export const metadata: Metadata = {
  title: contatoEn.meta.title,
  description: contatoEn.meta.description,
  alternates: {
    canonical: "https://stexecutive.com.br/en/contato/",
    languages: {
      "pt-BR": "https://stexecutive.com.br/contato/",
      en: "https://stexecutive.com.br/en/contato/",
      es: "https://stexecutive.com.br/es/contato/",
      "x-default": "https://stexecutive.com.br/contato/",
    },
  },
};

export default function EnContatoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
