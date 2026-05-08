import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "E9 Tecnologia — Fábrica de Software em Campinas | ERP, Apps e Sistemas sob Medida",
    template: "%s | E9 Tecnologia",
  },
  description: "Fábrica de software em Campinas, SP. Desenvolvemos ERPs, sistemas de gestão, aplicativos e soluções sob medida para empresas. Especialistas em fiscal, financeiro e automação. Desde 2003.",
  metadataBase: new URL("https://e9.com.br"),
  canonical: "https://e9.com.br",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://e9.com.br",
    siteName: "E9 Tecnologia",
    title: "E9 Tecnologia — Fábrica de Software em Campinas",
    description: "Desenvolvemos ERPs, sistemas de gestão, aplicativos e soluções sob medida para empresas. Especialistas em fiscal, financeiro e automação desde 2003.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "E9 Tecnologia — Fábrica de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E9 Tecnologia — Fábrica de Software em Campinas",
    description: "ERPs, sistemas de gestão e soluções sob medida para empresas. Especialistas em fiscal e financeiro.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  keywords: [
    "fábrica de software", "sistema de gestão", "ERP", "software sob medida",
    "desenvolvimento de sistemas", "Campinas", "São Paulo",
    "NF-e", "NFS-e", "fiscal", "financeiro", "aplicativo empresarial",
    "E9 Gestão", "E9 Tecnologia", "IoT", "RFID",
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
  description: "Fábrica de software especializada em sistemas de gestão, aplicativos e soluções sob medida para empresas.",
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
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
