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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5GVMZZQJ');`,
          }}
        />
        {/* Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18160577429" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18160577429');
            `,
          }}
        />
        {/* Google Ads — Conversão: Enviar formulário de lead */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-18160577429/qaJ_CIyCrKwcEJXX0dND',
                  'value': 1.0,
                  'currency': 'BRL',
                  'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5GVMZZQJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
