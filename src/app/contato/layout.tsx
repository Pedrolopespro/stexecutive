import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | ST Executive — Transporte Executivo em Brasília",
  description:
    "Entre em contato com a ST Executive para solicitar orçamento de transporte executivo em Brasília. Atendimento via WhatsApp, e-mail e formulário.",
  alternates: {
    canonical: "https://stexecutive.com.br/contato/",
  },
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
