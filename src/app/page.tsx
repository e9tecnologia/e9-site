import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroERP from "@/components/HeroERP";
import NumerosImpacto from "@/components/NumerosImpacto";
import ClientesSection from "@/components/ClientesSection";
import ModulosERP from "@/components/ModulosERP";
import RFIDSection from "@/components/RFIDSection";
import AutomacaoSection from "@/components/AutomacaoSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import CasesSection from "@/components/CasesSection";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "E9 Tecnologia — Plataforma ERP para Operações Empresariais",
  description:
    "Plataforma ERP própria com módulos de financeiro, fiscal, estoque, produção, RFID, automação bancária e integração operacional. Tecnologia empresarial consolidada desde 2003.",
  alternates: { canonical: "https://e9.com.br" },
  openGraph: {
    title: "E9 Tecnologia — ERP e Automação para Operações Empresariais",
    description:
      "Plataforma ERP completa para gestão financeira, fiscal, operacional e industrial. Integração bancária, RFID e automação sem gargalos.",
    type: "website",
    locale: "pt_BR",
  },
  keywords: [
    "ERP empresarial",
    "sistema ERP",
    "gestão empresarial",
    "software ERP",
    "automação empresarial",
    "integração bancária ERP",
    "RFID industrial",
    "rastreabilidade ERP",
    "ERP financeiro",
    "ERP fiscal",
    "ERP para indústria",
    "plataforma ERP Brasil",
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* 1 — Hero */}
        <HeroERP />

        {/* 2 — Logos de clientes */}
        <ClientesSection />

        {/* 3 — Números de impacto */}
        <NumerosImpacto />

        {/* 4 — Módulos do ERP */}
        <ModulosERP />

        {/* 5 — RFID & Rastreabilidade */}
        <RFIDSection />

        {/* 6 — Automação financeira */}
        <AutomacaoSection />

        {/* 7 — Diferenciais */}
        <DiferenciaisSection />

        {/* 8 — Cases */}
        <CasesSection />

        {/* 9 — CTA final */}
        <section className="relative py-28 px-4 sm:px-6 overflow-hidden" style={{background: "linear-gradient(135deg, #003f6b 0%, #005792 60%, #006aaf 100%)"}}>
          <div className="absolute inset-0 grid-overlay" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,rgba(255,203,5,0.06),transparent)]" />
          <div className="relative max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ffcb05] mb-6">
              <span className="w-8 h-px bg-[#ffcb05]" />
              Pronto para começar
              <span className="w-8 h-px bg-[#ffcb05]" />
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Transforme sua operação com um ERP que foi feito para isso
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Agende uma demonstração e veja como o E9 Gestão resolve os gargalos da sua operação — do financeiro ao chão de fábrica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 bg-[#ffcb05] text-slate-900 font-black px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all hover:scale-105 glow-yellow-sm text-base"
              >
                Solicitar demonstração gratuita
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link
                href="/gestao"
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-slate-300 font-semibold px-8 py-4 rounded-xl hover:border-white/30 hover:text-white transition-all text-base"
              >
                Conhecer o E9 Gestão
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
