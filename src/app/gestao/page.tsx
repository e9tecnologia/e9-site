import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContatoForm from "@/components/ContatoForm";
import {
  BanknotesIcon, DocumentTextIcon, BuildingLibraryIcon,
  CubeIcon, BuildingOffice2Icon, UserGroupIcon,
  PuzzlePieceIcon, CheckCircleIcon, ArrowRightIcon,
  LinkIcon, RectangleStackIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "E9 Gestão — ERP Flexível para Operações Reais",
  description: "ERP com financeiro, fiscal, contábil, estoque e módulos personalizados integrados. Para empresas com operação complexa que precisam de controle e automação real.",
};

const modulos = [
  {
    icon: BanknotesIcon,
    titulo: "Gestão Financeira",
    subtitulo: "Controle completo com visão integrada entre pagamentos, recebimentos, orçamento e fluxo de caixa.",
    itens: [
      "Contas a pagar e receber",
      "Fluxo de caixa em tempo real",
      "Conciliação bancária",
      "Budget e Forecast",
      "Gestão por centro de custo e projetos",
    ],
  },
  {
    icon: DocumentTextIcon,
    titulo: "Fiscal e Emissão de Documentos",
    subtitulo: "Automação fiscal integrada diretamente à operação da empresa.",
    itens: [
      "NF-e", "NFS-e", "NFC-e", "CT-e", "MDF-e",
      "SPED Fiscal",
      "Baixa automática de NF-e",
      "Captura automática de DF-e",
      "Certificado Digital A1",
    ],
  },
  {
    icon: BuildingLibraryIcon,
    titulo: "Contabilidade Integrada",
    subtitulo: "A contabilidade acontece junto com a operação — não depois dela.",
    itens: [
      "DRE em tempo real",
      "DRE por projeto",
      "DFC",
      "Balancete",
      "Plano de contas integrado",
      "Classificação contábil automática",
      "Encerramento contábil por período",
      "Lançamentos integrados ao financeiro e fiscal",
    ],
  },
  {
    icon: CubeIcon,
    titulo: "Estoque, Compras e Almoxarifado",
    subtitulo: "Controle operacional totalmente integrado ao financeiro e fiscal.",
    itens: [
      "Pedido e cotação de compra",
      "Controle de estoque",
      "Inventário",
      "Movimentações de estoque",
      "Controle de almoxarifado",
      "Solicitação de materiais",
      "Entrada de produtos e serviços",
      "Relatórios gerenciais",
    ],
  },
  {
    icon: BuildingOffice2Icon,
    titulo: "Gestão Multiempresa",
    subtitulo: "Múltiplos CNPJs em uma única plataforma, com controle individual e visão consolidada.",
    itens: [
      "Multiempresa e multi-CNPJ",
      "Controle separado por empresa",
      "Visão consolidada de grupo",
      "Troca rápida entre operações",
    ],
  },
  {
    icon: UserGroupIcon,
    titulo: "Usuários e Permissões",
    subtitulo: "Estrutura hierárquica de acesso para maior segurança e governança operacional.",
    itens: [
      "Usuários e perfis de acesso",
      "Controle por área e setor",
      "Permissões específicas por função",
      "Auditoria operacional",
    ],
  },
];

const criterios = [
  "Operações complexas",
  "Múltiplos setores integrados",
  "Grande volume financeiro",
  "Necessidade de personalização",
  "Processos específicos do negócio",
  "Múltiplos CNPJs",
  "Demandas fiscais e contábeis avançadas",
];

const segmentos = [
  "Serviços recorrentes",
  "Produção de eventos",
  "Indústria",
  "Holdings e grupos",
  "Agronegócio",
  "Educação",
  "Operações multiempresa",
  "Empresas com processos específicos",
];

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "E9 Gestão",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "ERP com financeiro, fiscal, contábil, estoque e módulos personalizados integrados. Para empresas com operação complexa que precisam de controle e automação real.",
  "url": "https://e9.com.br/gestao",
  "offers": { "@type": "Offer", "priceCurrency": "BRL", "availability": "https://schema.org/InStock" },
  "creator": {
    "@type": "Organization",
    "name": "E9 Tecnologia",
    "url": "https://e9.com.br",
    "address": { "@type": "PostalAddress", "addressLocality": "Campinas", "addressRegion": "SP", "addressCountry": "BR" },
  },
  "featureList": [
    "Gestão financeira", "Emissão de NF-e, NFS-e, NFC-e, CT-e, MDF-e",
    "Contabilidade integrada", "Controle de estoque e compras",
    "Gestão multiempresa", "Módulos customizados",
  ],
};

export default function GestaoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
      <Header />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="bg-slate-900 text-white pt-20 pb-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#ffcb05]/20 text-[#ffcb05] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                ERP | Sistema de Gestão
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
                ERP que se adapta{" "}
                <span className="text-[#ffcb05]">à sua operação.</span>
              </h1>
              <p className="text-white/85 leading-relaxed mb-3">
                O E9 Gestão é uma plataforma ERP desenvolvida para empresas que precisam de controle, automação e flexibilidade operacional. Financeiro, fiscal, contábil, estoque, compras e relatórios integrados em uma única solução — com módulos altamente customizáveis para atender processos específicos do seu negócio.
              </p>
              <p className="border-l-2 border-[#ffcb05]/50 pl-3 text-white/50 text-sm italic leading-relaxed mb-7">
                Enquanto sistemas tradicionais limitam sua operação a processos padronizados, o E9 Gestão evolui junto com a sua empresa.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                {[
                  "Financeiro, fiscal e contábil integrados",
                  "NF-e, NFS-e, NFC-e, CT-e e MDF-e",
                  "Baixa automática de documentos fiscais",
                  "Integrações bancárias nativas",
                  "Controle de estoque e almoxarifado",
                  "Gestão orçamentária e DRE em tempo real",
                  "Controle hierárquico de usuários",
                  "Módulos personalizados integrados",
                  "Plataforma escalável",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffcb05] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#proposta" className="bg-[#ffcb05] text-[#005792] font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors text-center">
                  Solicitar proposta
                </a>
                <a href="#modulos" className="border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-center">
                  Ver funcionalidades
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center py-4 pb-8">
              <div className="relative w-full max-w-lg">
                {/* Browser chrome */}
                <div className="bg-slate-800 rounded-t-2xl px-4 py-2.5 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="flex-1 bg-slate-700 rounded px-3 py-0.5 ml-2">
                    <span className="text-slate-400 text-xs">app.e9gestao.com.br</span>
                  </div>
                </div>
                {/* Screenshot */}
                <div className="relative overflow-hidden rounded-b-2xl shadow-2xl border border-slate-700 border-t-0">
                  <Image
                    src="/images/e9gestao-dashboard.png"
                    alt="Dashboard do E9 Gestão — fluxo de caixa e documentos fiscais"
                    width={640}
                    height={420}
                    className="w-full object-cover object-top"
                    priority
                  />
                  {/* Gradient fade at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>
                {/* Logo badge overlay */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl px-5 py-2 shadow-lg">
                  <div className="relative w-36 h-10">
                    <Image
                      src="/logos/e9gestao.svg"
                      alt="E9 Gestão"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Módulos ── */}
        <section id="modulos" className="bg-slate-50 py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-slate-900">Tudo que sua operação precisa</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">
                Os módulos do E9 Gestão funcionam de forma integrada, permitindo que informações financeiras, fiscais, operacionais e contábeis conversem em tempo real.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {modulos.map((m) => (
                <div key={m.titulo} className="bg-white rounded-2xl border border-slate-100 p-7 hover:shadow-md hover:border-[#005792]/20 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-[#005792]/8 rounded-xl p-2.5 flex-shrink-0">
                      <m.icon className="h-6 w-6 text-[#005792]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">{m.titulo}</h3>
                      <p className="text-slate-500 text-sm mt-0.5 leading-relaxed">{m.subtitulo}</p>
                    </div>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-4 border-t border-slate-50 pt-4">
                    {m.itens.map((item) => (
                      <li key={item} className="flex items-center gap-1.5 text-sm text-slate-600">
                        <span className="w-1 h-1 rounded-full bg-[#005792]/40 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Customização ── */}
        <section className="bg-white py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#005792] rounded-3xl p-10 sm:p-14 text-white">
              <div className="max-w-2xl mx-auto text-center mb-12">
                <span className="inline-block bg-[#ffcb05]/20 text-[#ffcb05] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                  Grande diferencial
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  ERP altamente customizável
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Desenvolvemos módulos específicos que se integram nativamente à plataforma — automatizando processos únicos sem sistemas paralelos.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                {[
                  {
                    icon: PuzzlePieceIcon,
                    titulo: "Módulo específico",
                    desc: "Desenvolvido sob medida para o processo único da sua operação",
                  },
                  {
                    icon: LinkIcon,
                    titulo: "Integração nativa",
                    desc: "Conectado ao financeiro, fiscal e contábil sem intermediários",
                  },
                  {
                    icon: RectangleStackIcon,
                    titulo: "Plataforma única",
                    desc: "Tudo dentro de um só sistema — sem paralelos, sem retrabalho",
                  },
                ].map((item) => (
                  <div key={item.titulo} className="bg-white/10 hover:bg-white/15 transition-colors rounded-2xl p-7 flex flex-col items-center text-center gap-4">
                    <div className="bg-[#ffcb05]/20 rounded-xl p-3">
                      <item.icon className="h-7 w-7 text-[#ffcb05]" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-base mb-1.5">{item.titulo}</p>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Para quem é ── */}
        <section className="bg-slate-50 py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Para empresas que precisam de controle real</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white rounded-2xl border border-slate-100 p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-5">O E9 Gestão atende empresas que possuem</p>
                <ul className="space-y-3">
                  {criterios.map((c) => (
                    <li key={c} className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-[#005792] flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-slate-100 p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-5">Segmentos atendidos</p>
                <ul className="grid grid-cols-2 gap-3">
                  {segmentos.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#005792] flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#005792] py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tecnologia alinhada à sua operação
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              Mais do que um ERP padrão, o E9 Gestão é uma plataforma preparada para crescer junto com o seu negócio.
            </p>
            <a
              href="#proposta"
              className="inline-flex items-center gap-2 bg-[#ffcb05] text-[#005792] font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors text-lg"
            >
              Solicitar demonstração
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* ── Formulário ── */}
        <section id="proposta" className="bg-white py-20 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">Solicite uma proposta</h2>
              <p className="text-slate-500 mt-3">
                Preencha o formulário e nossa equipe entra em contato em até 1 dia útil.
              </p>
            </div>
            <ContatoForm tipo="proposta" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
