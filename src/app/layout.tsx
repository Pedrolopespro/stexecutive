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
        url: "https://stexecutive.com.br/images/content/social.jpeg",
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
    images: ["https://stexecutive.com.br/images/content/social.jpeg"],
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
        {/* Schema.org — LocalBusiness + TransportationService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["LocalBusiness", "TransportationService"],
                  "@id": "https://www.stexecutive.com.br/#business",
                  "name": "ST Executive",
                  "alternateName": "ST Executive by Saulo Transportes",
                  "url": "https://www.stexecutive.com.br",
                  "logo": "https://www.stexecutive.com.br/og-image.svg",
                  "image": "https://www.stexecutive.com.br/images/content/social.jpeg",
                  "description": "A ST Executive é especializada em transporte executivo em Brasília e região. Todos os serviços são realizados exclusivamente com motorista profissional. Não realizamos locação de carros, SUVs, vans, minivans, micro-ônibus ou ônibus sem motorista. Atendemos empresas, embaixadas, eventos corporativos e transfer aeroporto.",
                  "telephone": "+55-61-99163-3714",
                  "email": "contato@stexecutive.com.br",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Brasília",
                    "addressRegion": "DF",
                    "addressCountry": "BR"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": -15.7801,
                    "longitude": -47.9292
                  },
                  "areaServed": [
                    { "@type": "City", "name": "Brasília" },
                    { "@type": "State", "name": "Distrito Federal" }
                  ],
                  "serviceType": [
                    "Transfer Aeroporto Brasília",
                    "Transporte Executivo",
                    "Van Executiva",
                    "Mini Van Executiva",
                    "SUV Executiva",
                    "Micro-ônibus Executivo",
                    "Ônibus Executivo",
                    "Transporte Corporativo",
                    "Transporte para Eventos",
                    "City Tour Brasília"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Serviços de Transporte Executivo",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transfer Aeroporto Internacional Juscelino Kubitschek" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Van Executiva para Eventos em Brasília" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SUV e Sedan Executivo com Motorista" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Micro-ônibus Executivo para Grupos" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ônibus Executivo para Eventos e Congressos" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "City Tour em Brasília com Motorista Profissional" } }
                    ]
                  },
                  "sameAs": [
                    "https://www.instagram.com/stexecutive"
                  ],
                  "priceRange": "$$",
                  "currenciesAccepted": "BRL",
                  "paymentAccepted": "Pix, Transferência Bancária, Cartão de Crédito",
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                    "opens": "00:00",
                    "closes": "23:59"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.stexecutive.com.br/#website",
                  "url": "https://www.stexecutive.com.br",
                  "name": "ST Executive — Transporte Executivo em Brasília",
                  "publisher": { "@id": "https://www.stexecutive.com.br/#business" }
                }
              ]
            })
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
