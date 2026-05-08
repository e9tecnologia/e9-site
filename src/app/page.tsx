import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientesCarousel from "@/components/ClientesCarousel";
import TypewriterText from "@/components/TypewriterText";
import RecursosAnimados from "@/components/RecursosAnimados";
import NumerosImpacto from "@/components/NumerosImpacto";
import {
  DevicePhoneMobileIcon, CubeIcon,
  CommandLineIcon, ArrowRightIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "E9 Tecnologia — Fábrica de Software em Campinas | ERP e Sistemas sob Medida",
  description: "Desenvolvemos ERPs, sistemas de gestão financeira, fiscal e contábil, aplicativos e soluções sob medida para empresas em todo o Brasil. Campinas, SP. Desde 2003.",
  alternates: { canonical: "https://e9.com.br" },
};



const pilares = [
  {
    icon: CubeIcon,
    titulo: "Sistemas de Gestão",
    descricao: "ERPs e soluções já validadas no mercado, com implantação rápida e possibilidade de customização para atender processos específicos da sua operação.",
  },
  {
    icon: CommandLineIcon,
    titulo: "Desenvolvimento Sob Medida",
    descricao: "Análise, arquitetura e desenvolvimento de sistemas personalizados para empresas que precisam de tecnologia alinhada ao próprio fluxo operacional.",
  },
  {
    icon: DevicePhoneMobileIcon,
    titulo: "Aplicativos, Integrações e IoT",
    descricao: "Aplicativos web e mobile integrados a processos empresariais, automação operacional, dispositivos IoT, RFID e soluções para coleta e rastreabilidade de dados.",
  },
];


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="relative bg-white overflow-hidden pt-16 pb-20 px-4 sm:px-6">
          {/* fundo decorativo sutil */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,203,5,0.12),transparent)]" />

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <span className="inline-flex items-center gap-1.5 bg-[#ffcb05]/15 text-slate-700 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffcb05] inline-block" />
                Fábrica de Software · Campinas, SP
              </span>

              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.15] mb-5">
                Sistemas e aplicativos{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">do jeito que sua empresa precisa.</span>
                  <span className="absolute inset-x-0 bottom-1 h-3 bg-[#ffcb05]/40 -z-10 rounded" />
                </span>
              </h1>

              <TypewriterText />

              <div className="text-slate-500 mb-8 leading-relaxed max-w-lg space-y-4">
                <p>
                  Desenvolvemos sistemas de gestão, aplicativos e soluções sob medida para empresas que precisam de tecnologia adaptada à sua operação — e não o contrário.
                </p>
                <p>
                  Somos especializados no desenvolvimento de softwares personalizados, com forte experiência nas áreas financeira, fiscal e gestão empresarial. Criamos soluções que automatizam processos, integram setores e ajudam empresas a ganhar produtividade, controle e escalabilidade.
                </p>
                <p>
                  Do ERP à automação de processos, desenvolvemos sistemas modernos, seguros e alinhados à realidade do seu negócio.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contato" className="inline-flex items-center justify-center gap-2 bg-[#ffcb05] text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-colors">
                  Falar com a equipe
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link href="/gestao" className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-600 font-semibold px-6 py-3 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-colors">
                  Conheça o E9 Gestão
                </Link>
              </div>

            </div>

            {/* Ilustração hero */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-slate-50 to-[#ffcb05]/10 border border-slate-200 flex items-center justify-center overflow-hidden p-8">
                <Image
                  src="/images/hero.svg"
                  alt="E9 Tecnologia — sistemas e aplicativos"
                  fill
                  className="object-contain p-8"
                  priority
                />
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#ffcb05]/10 rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#ffcb05]/10 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Clientes ── */}
        <section className="bg-slate-50 border-y border-slate-100 py-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
              Empresas que confiam na E9 Tecnologia
            </p>
            <div className="relative">
              <ClientesCarousel />
            </div>
          </div>
        </section>

        <NumerosImpacto />

        {/* ── Pilares ── */}
        <section id="sistemas" className="bg-white py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Como trabalhamos
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Soluções flexíveis para diferentes necessidades — da implantação de sistemas prontos ao desenvolvimento de plataformas totalmente sob medida.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pilares.map((p, i) => (
                <div key={p.titulo} className="group relative bg-white rounded-2xl border border-slate-200 p-7 hover:border-[#ffcb05] hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-5">
                    <div className="bg-[#ffcb05]/10 group-hover:bg-[#ffcb05]/20 transition-colors rounded-xl p-3">
                      <p.icon className="h-6 w-6 text-slate-700" />
                    </div>
                    <span className="text-slate-200 font-bold text-4xl group-hover:text-[#ffcb05]/30 transition-colors">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{p.titulo}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Recursos ── */}
        <section className="bg-slate-50 py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                O que nossos sistemas entregam
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Funcionalidades desenvolvidas, testadas e em produção. Prontas para se encaixar na sua operação.
              </p>
            </div>
            <RecursosAnimados />
          </div>
        </section>

        {/* ── Produto E9 Gestão ── */}
        <section className="bg-white py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-900 rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-10 sm:p-14">
                  <span className="inline-block bg-[#ffcb05]/20 text-[#ffcb05] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                    Produto E9
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                    ERP flexível para{" "}
                    <span className="text-[#ffcb05]">operações reais</span>
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-3">
                    O E9 Gestão une financeiro, fiscal, contábil e operação em uma plataforma desenvolvida para empresas que precisam de controle, automação e processos personalizados.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-7">
                    Enquanto ERPs tradicionais obrigam sua empresa a se adaptar ao sistema, o E9 Gestão evolui junto com a sua operação.
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {[
                      "Gestão multiempresa e multi-CNPJ",
                      "Fiscal completo e integrado",
                      "Integrações bancárias e automação financeira",
                      "Relatórios contábeis e gerenciais",
                      "Controle de estoque e movimentações",
                      "Hierarquia de usuários e permissões de acesso",
                      "Módulos sob demanda integrados ao ERP",
                      "Plataforma escalável e integrada",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-slate-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffcb05] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/gestao"
                    className="inline-flex items-center gap-2 bg-[#ffcb05] text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-colors"
                  >
                    Conhecer o E9 Gestão
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-white flex items-center justify-center min-h-64 md:min-h-0 p-10 border-4 border-[#005792] rounded-r-3xl">
                  <div className="relative w-full max-w-sm h-48">
                    <Image
                      src="/logos/e9gestao.svg"
                      alt="E9 Gestão — ERP | Sistema de Gestão"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA final ── */}
        <section className="bg-[#ffcb05] py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Tem um projeto em mente?
            </h2>
            <p className="text-slate-700 text-lg mb-8">
              Fale com a nossa equipe. Analisamos sua necessidade sem compromisso.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-700 transition-colors text-lg"
            >
              Iniciar conversa
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
