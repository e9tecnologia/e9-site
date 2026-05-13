import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "E9 Tecnologia — Plataforma ERP para Operações Empresariais | Desde 2003",
    template: "%s | E9 Tecnologia",
  },
  description: "Plataforma ERP própria para gestão financeira, fiscal, estoque, produção, RFID e automação bancária. Tecnologia empresarial consolidada desde 2003. Campinas, SP.",
  metadataBase: new URL("https://e9.com.br"),
  alternates: { canonical: "https://e9.com.br" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://e9.com.br",
    siteName: "E9 Tecnologia",
    title: "E9 Tecnologia — Plataforma ERP para Operações Empresariais",
    description: "Plataforma ERP completa com módulos de financeiro, fiscal, estoque, RFID e automação bancária. Tecnologia empresarial consolidada desde 2003.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "E9 Tecnologia — Plataforma ERP para Operações Empresariais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E9 Tecnologia — Plataforma ERP para Operações Empresariais",
    description: "ERP completo: financeiro, fiscal, estoque, produção, RFID e automação bancária. Desde 2003.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  keywords: [
    "ERP empresarial", "plataforma ERP", "sistema de gestão", "software ERP",
    "automação empresarial", "integração bancária ERP", "RFID industrial",
    "rastreabilidade ERP", "ERP financeiro", "ERP fiscal", "ERP para indústria",
    "gestão empresarial", "Campinas", "São Paulo", "E9 Gestão", "E9 Tecnologia",
  ],
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "E9 Tecnologia",
  legalName: "E9 Tecnologia LTDA",
  url: "https://e9.com.br",
  logo: "https://e9.com.br/logo-enove.png",
  foundingDate: "2003",
  description: "Plataforma ERP própria para gestão financeira, fiscal, operacional e industrial. Tecnologia empresarial consolidada desde 2003.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Pascoal Nicholau Purshio, 398",
    addressLocality: "Campinas",
    addressRegion: "SP",
    postalCode: "13000-000",
    addressCountry: "BR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-19-3201-3325",
    email: "contato@e9.com.br",
    contactType: "customer service",
    availableLanguage: "Portuguese",
    hoursAvailable: "Mo-Fr 08:00-18:00",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [
    "https://linkedin.com/company/e9tecnologia",
    "https://instagram.com/e9tecnologia",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0M8PD9WK72"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-0M8PD9WK72');`}
        </Script>
      </body>
    </html>
  );
}
