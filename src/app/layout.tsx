import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  verification: {
    google: "ejiWTOXEFJ1GCK3Ezg1M6DiewNW7EbTiRWuTNddwc1Q",
  },
  title: "Transporte Executivo em Brasília | ST Executive",
  description:
    "Transporte executivo em Brasília para empresas, eventos, grupos, embaixadas e transfer aeroporto. Vans, SUVs executivas e motoristas profissionais.",
  keywords: [
    "transporte executivo brasília",
    "vans executivas brasília",
    "aluguel de van brasília",
    "SUV executiva brasília",
    "transfer aeroporto brasília",
    "transporte para eventos brasília",
    "transporte corporativo brasília",
    "transporte para embaixadas brasília",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Transporte Executivo em Brasília | ST Executive",
    description:
      "Transporte executivo em Brasília para empresas, eventos, grupos, embaixadas e transfer aeroporto. Vans, SUVs executivas e motoristas profissionais.",
    siteName: "ST Executive",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "ST Executive — Transporte Executivo em Brasília",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transporte Executivo em Brasília | ST Executive",
    description:
      "Transporte executivo em Brasília para empresas, eventos, grupos, embaixadas e transfer aeroporto.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
