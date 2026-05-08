import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Cases de Sucesso — Projetos e Resultados",
  description: "Conheça como a E9 Tecnologia resolve desafios reais de gestão, fiscal e operação em diferentes segmentos de mercado.",
};

const cases = [
  {
    segmento: "Indústria",
    titulo: "Gestão fiscal e financeira multi-CNPJ",
    desafio: "Empresa industrial com múltiplos CNPJs precisava unificar o controle fiscal, financeiro e de estoque em uma única plataforma, eliminando retrabalho entre sistemas.",
    solucao: "Implantação do E9 Gestão com módulos multi-empresa, emissão de NF-e e CT-e integrados ao financeiro e conciliação bancária automatizada.",
    resultados: [
      "Emissão fiscal unificada para todos os CNPJs",
      "Conciliação bancária sem operação manual",
      "Relatórios gerenciais consolidados por empresa",
    ],
    cor: "border-slate-200",
    badge: "E9 Gestão",
  },
  {
    segmento: "Serviços recorrentes",
    titulo: "Faturamento automático em escala",
    desafio: "Empresa com centenas de contratos mensais gastava dias inteiros emitindo NFS-e e boletos manualmente, com alto índice de erros e atrasos.",
    solucao: "Automação completa do ciclo de faturamento: geração de cobranças, emissão de NFS-e em lote e integração bancária para baixa automática.",
    resultados: [
      "Faturamento de centenas de contratos em minutos",
      "NFS-e emitida automaticamente por competência",
      "Inadimplência reduzida com cobrança automatizada",
    ],
    cor: "border-[#ffcb05]/40",
    badge: "E9 Gestão",
  },
  {
    segmento: "Cultura & Entretenimento",
    titulo: "DRE por evento e controle de projetos",
    desafio: "Entidade cultural com múltiplos eventos simultâneos precisava de DRE individualizado por projeto e controle de receitas de diferentes fontes.",
    solucao: "E9 Gestão com plano de contas customizado, centros de custo por evento e emissão massiva de NFS-e para patrocinadores e parceiros.",
    resultados: [
      "DRE por evento gerado em tempo real",
      "Prestação de contas automatizada",
      "Visão consolidada de todos os projetos",
    ],
    cor: "border-slate-200",
    badge: "E9 Gestão",
  },
  {
    segmento: "Agronegócio",
    titulo: "Módulo customizado para venda de animais",
    desafio: "Haras precisava de um módulo específico para controlar a venda de embriões e animais, integrado ao financeiro e com emissão de NF-e rural.",
    solucao: "Desenvolvimento de módulo sob medida integrado ao E9 Gestão: cadastro de animais, contratos de venda, NF-e rural e recebimentos automáticos.",
    resultados: [
      "Módulo 100% integrado ao financeiro e fiscal",
      "NF-e rural emitida diretamente no fluxo de venda",
      "Controle de estoque de animais e embriões",
    ],
    cor: "border-[#ffcb05]/40",
    badge: "Sob medida",
  },
  {
    segmento: "Distribuição",
    titulo: "Volume fiscal em operação logística",
    desafio: "Distribuidora com alto volume de documentos fiscais (NF-e, CT-e, MDF-e) precisava de uma solução robusta integrada à operação logística e ao financeiro.",
    solucao: "Sistema fiscal integrado com emissão de NF-e, CT-e e MDF-e diretamente no fluxo de expedição, com conciliação financeira automática.",
    resultados: [
      "Milhões de documentos processados sem falhas",
      "Integração entre fiscal, logística e financeiro",
      "Redução de retrabalho operacional",
    ],
    cor: "border-slate-200",
    badge: "E9 Gestão",
  },
  {
    segmento: "Chão de fábrica",
    titulo: "Rastreamento de OS com IoT e RFID",
    desafio: "Indústria sem visibilidade do andamento das ordens de serviço no chão de fábrica, com gargalos não identificados e produção descontrolada.",
    solucao: "Implantação do 2Follow com dispositivos IoT e leitores RFID instalados em pontos estratégicos da linha de produção, integrado ao ERP.",
    resultados: [
      "Rastreamento em tempo real de cada OS",
      "Identificação automática de gargalos",
      "Integração direta com o sistema de gestão",
    ],
    cor: "border-[#ffcb05]/40",
    badge: "2Follow",
  },
];

const badgeColors: Record<string, string> = {
  "E9 Gestão":  "bg-[#005792]/10 text-[#005792]",
  "Sob medida": "bg-slate-100 text-slate-600",
  "2Follow":    "bg-[#ffcb05]/20 text-slate-700",
};

export default function CasesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="bg-slate-900 pt-20 pb-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-[#ffcb05]/20 text-[#ffcb05] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              Resultados reais
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Desafios resolvidos,{" "}
              <span className="text-[#ffcb05]">operações transformadas</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Empresas de diferentes segmentos que superaram limitações operacionais com sistemas desenvolvidos e implantados pela E9 Tecnologia.
            </p>
          </div>
        </section>

        {/* Cases */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map((c) => (
                <div
                  key={c.titulo}
                  className={`bg-white rounded-2xl border-2 ${c.cor} p-7 flex flex-col hover:shadow-lg transition-all duration-300`}
                >
                  {/* Segmento + badge produto */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {c.segmento}
                    </span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${badgeColors[c.badge]}`}>
                      {c.badge}
                    </span>
                  </div>

                  <h2 className="text-base font-bold text-slate-900 mb-5 leading-snug">{c.titulo}</h2>

                  <div className="space-y-4 mb-6 flex-1">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">Desafio</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{c.desafio}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">Solução</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{c.solucao}</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2.5">Resultados</p>
                    <ul className="space-y-1.5">
                      {c.resultados.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircleIcon className="h-4 w-4 text-[#ffcb05] flex-shrink-0 mt-0.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#ffcb05] py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Sua empresa pode ser o próximo case
            </h2>
            <p className="text-slate-700 text-lg mb-8">
              Conte seu desafio. A E9 analisa sua operação e propõe a solução certa.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-700 transition-colors text-lg"
            >
              Falar com a equipe
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
