import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContatoForm from "@/components/ContatoForm";
import {
  BanknotesIcon, DocumentTextIcon, BuildingLibraryIcon,
  CubeIcon, BuildingOffice2Icon, UserGroupIcon,
  PuzzlePieceIcon, CheckCircleIcon, ArrowRightIcon,
  LinkIcon, RectangleStackIcon, ShoppingCartIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "E9 Gestão — ERP Completo: Financeiro, Fiscal, Contábil e Operacional",
  description: "Plataforma ERP com classificação contábil dinâmica, integração fiscal nativa, automação financeira e módulos customizados. Para empresas com operação complexa.",
};

const modulos = [
  {
    icon: BanknotesIcon,
    color: "#005792",
    titulo: "Financeiro",
    itens: ["Contas a pagar e a receber", "Fluxo de caixa em tempo real", "Conciliação bancária", "Budget e Forecast", "Boleto e cobrança integrados", "Retenções de impostos"],
  },
  {
    icon: DocumentTextIcon,
    color: "#0369a1",
    titulo: "Fiscal e Documentos",
    itens: ["NF-e (produto)", "NFS-e — emissão nacional", "NFC-e, CT-e, MDF-e", "SPED Fiscal", "Captura automática DF-e", "Certificado digital A1"],
  },
  {
    icon: BuildingLibraryIcon,
    color: "#047857",
    titulo: "Contabilidade",
    itens: ["Classificação contábil dinâmica", "DRE em tempo real", "Balancete e DFC", "Plano de contas configurável", "Encerramento de período", "Lançamentos integrados"],
  },
  {
    icon: CubeIcon,
    color: "#b45309",
    titulo: "Estoque e Compras",
    itens: ["Cotação RFQ multi-fornecedor", "Pedido de compra", "Controle de estoque", "Almoxarifado e requisição", "Inventário com ajuste", "Baixa automática via XML"],
  },
  {
    icon: ShoppingCartIcon,
    color: "#7c3aed",
    titulo: "Vendas e Faturamento",
    itens: ["Orçamento e proposta", "Pedido de venda", "Faturamento com NF-e", "Contratos recorrentes", "Faturamento automático", "Boleto e título automáticos"],
  },
  {
    icon: ChartBarIcon,
    color: "#dc2626",
    titulo: "Gestão Orçamentária",
    itens: ["Budget por CC e projeto", "Forecast periódico", "Realizado vs. planejado", "Análise de desvios"],
  },
  {
    icon: BuildingOffice2Icon,
    color: "#0f766e",
    titulo: "Multi-Empresa e Unidades de Negócio",
    itens: ["Múltiplos CNPJs em uma instância", "Operação via CPF (pessoa física)", "Unidades de negócio dentro de um CNPJ", "Divisão de operação por unidade", "Visão consolidada do grupo", "Troca rápida entre entidades"],
  },
  {
    icon: UserGroupIcon,
    color: "#6d28d9",
    titulo: "Usuários e Governança",
    itens: ["Perfis com permissões granulares", "Controle por área e função", "Auditoria operacional completa", "Notificações internas e e-mail"],
  },
];

const fluxos = [
  {
    titulo: "Ciclo de Venda e Faturamento",
    passos: [
      "Orçamento / Proposta",
      "Pedido de Venda aprovado",
      "Faturamento — NF-e emitida e transmitida à Sefaz",
      "Baixa automática do estoque",
      "Título no Contas a Receber",
      "Boleto gerado (se aplicável)",
      "Retorno bancário → baixa automática",
      "Lançamento contábil de receita",
    ],
    nota: "Contratos recorrentes: faturamento automático por competência sem ação manual.",
  },
  {
    titulo: "Ciclo de Compra",
    passos: [
      "Solicitação de material (área/almoxarifado)",
      "Cotação multi-fornecedor (RFQ)",
      "Pedido de Compra aprovado",
      "Entrada de produtos / recebimento",
      "XML da NF-e capturado via DF-e",
      "Baixa automática no estoque",
      "Título no Contas a Pagar",
      "Remessa bancária → retorno → baixa automática",
    ],
    nota: "A NF-e do fornecedor é capturada automaticamente — sem digitação manual.",
  },
  {
    titulo: "Conciliação Bancária",
    passos: [
      "Importação do extrato bancário",
      "Sistema identifica movimentos já lançados",
      "Conciliação automática dos títulos",
      "Movimentos não reconhecidos: conciliação manual",
      "Lançamento contábil automático",
      "Fluxo de caixa atualizado",
    ],
    nota: "Bancos suportados: Bradesco, Itaú, Banco do Brasil, Sicoob.",
  },
];

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "E9 Gestão",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Plataforma ERP com classificação contábil dinâmica, integração fiscal nativa, automação financeira e módulos customizados.",
  "url": "https://e9.com.br/gestao",
  "offers": { "@type": "Offer", "priceCurrency": "BRL", "availability": "https://schema.org/InStock" },
  "creator": {
    "@type": "Organization",
    "name": "E9 Tecnologia",
    "url": "https://e9.com.br",
  },
  "featureList": [
    "Classificação contábil dinâmica",
    "Integração fiscal NF-e NFS-e CT-e MDF-e",
    "Automação financeira bancária",
    "Gestão multiempresa",
    "Módulos verticais customizados",
  ],
};

export default function GestaoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
      <Header />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section
          className="text-white pt-20 pb-24 px-4 sm:px-6"
          style={{ background: "linear-gradient(135deg, #003f6b 0%, #005792 60%, #006aaf 100%)" }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            {/* Coluna esquerda */}
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-6">
                <span className="w-6 h-px bg-cyan-400" />
                E9 Gestão — Plataforma ERP
              </span>
              <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-5">
                Gestão empresarial com a{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #ffcb05 0%, #ffd740 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  profundidade que sua operação precisa
                </span>
              </h1>
              <p className="text-white/75 leading-relaxed mb-8 text-lg">
                O E9 Gestão é uma plataforma web construída pela E9 Tecnologia a partir de décadas de experiência com operações reais — reunindo as principais dores de clientes em módulos integrados de financeiro, fiscal, contábil, estoque e vendas. Classificação contábil dinâmica, automação fiscal nativa e módulos customizados para processos únicos.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-9">
                {[
                  "Financeiro, fiscal e contábil integrados",
                  "NF-e, NFS-e, NFC-e, CT-e e MDF-e",
                  "Classificação contábil dinâmica",
                  "Baixa automática de documentos fiscais",
                  "DRE e Balancete em tempo real",
                  "Controle de estoque e almoxarifado",
                  "Multi-CNPJ, CPF e unidades de negócio",
                  "Módulos verticais customizados",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/80">
                    <CheckCircleIcon className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#proposta"
                  className="inline-flex items-center justify-center gap-2 bg-[#ffcb05] text-[#003f6b] font-bold px-7 py-3.5 rounded-xl hover:bg-yellow-400 transition-colors"
                >
                  Solicitar demonstração
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a
                  href="#funcionalidades"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  Ver módulos
                </a>
              </div>
            </div>

            {/* Coluna direita — screenshot com chrome */}
            <div className="flex items-center justify-center pb-8">
              <div className="relative w-full max-w-lg">
                <div className="bg-[#002f52] rounded-t-2xl px-4 py-2.5 flex items-center gap-2 border border-white/10 border-b-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  <div className="flex-1 bg-white/5 rounded px-3 py-1 ml-2">
                    <span className="text-white/40 text-xs">app.e9gestao.com.br</span>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-b-2xl shadow-2xl border border-white/10 border-t-0">
                  <Image
                    src="/images/e9gestao-dashboard.png"
                    alt="Dashboard E9 Gestão — DRE e fluxo de caixa em tempo real"
                    width={640}
                    height={420}
                    className="w-full object-cover object-top"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#005792]/80 to-transparent" />
                </div>
                {/* Logo badge centralizado */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-xl px-5 py-2.5 shadow-xl border border-white/20">
                  <div className="relative w-32 h-8">
                    <Image src="/logos/e9gestao.svg" alt="E9 Gestão" fill className="object-contain" />
                  </div>
                </div>
                {/* Floating badge DRE */}
                <div className="absolute -top-4 -right-4 bg-[#002f52] border border-cyan-500/30 rounded-xl px-3 py-2 shadow-xl">
                  <p className="text-[10px] text-slate-400">Contabilidade</p>
                  <p className="text-sm font-bold text-cyan-400">DRE em tempo real</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Como o ERP flui: Contas a Receber e Contas a Pagar ── */}
        <section className="bg-white py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#005792] mb-3">
                Fluxo financeiro integrado
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
                Do faturamento ao bancário — tudo dentro do ERP
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Cada ciclo financeiro dispara automaticamente o próximo. Sem reexportações, sem lançamentos manuais duplicados.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">

              {/* Contas a Receber */}
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 rounded-full bg-[#005792]" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#005792]">Contas a Receber</p>
                    <p className="text-sm text-slate-400">Do faturamento à baixa bancária</p>
                  </div>
                </div>
                <ol className="space-y-2.5">
                  {[
                    { step: "Venda aprovada → Pedido de Venda",        auto: false },
                    { step: "Faturamento: NF-e emitida e transmitida à Sefaz", auto: false },
                    { step: "Baixa automática do estoque",              auto: true  },
                    { step: "Título gerado no Contas a Receber",        auto: true  },
                    { step: "Boleto gerado e enviado ao cliente",       auto: true  },
                    { step: "Retorno bancário: pagamento confirmado",   auto: false },
                    { step: "Baixa automática do título",               auto: true  },
                    { step: "Lançamento contábil de receita",           auto: true  },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#005792]/10 border border-[#005792]/25 flex items-center justify-center mt-0.5">
                        <span className="text-[#005792] text-[9px] font-black">{i + 1}</span>
                      </div>
                      <div className="flex items-start gap-2 flex-1">
                        <span className="text-sm text-slate-600 leading-relaxed flex-1">{item.step}</span>
                        {item.auto && (
                          <span className="flex-shrink-0 text-[9px] font-bold text-green-600 bg-green-50 border border-green-200 rounded px-1.5 py-0.5 mt-0.5">auto</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-400 italic">
                  Contratos recorrentes: faturamento e boleto gerados automaticamente por competência.
                </p>
              </div>

              {/* Contas a Pagar */}
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 rounded-full bg-amber-500" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-600">Contas a Pagar</p>
                    <p className="text-sm text-slate-400">Da entrada do documento ao bancário</p>
                  </div>
                </div>
                <ol className="space-y-2.5">
                  {[
                    { step: "NF-e do fornecedor capturada automaticamente (DF-e)", auto: true  },
                    { step: "Título gerado no Contas a Pagar",                     auto: true  },
                    { step: "Aprovação por alçada (se configurada)",               auto: false },
                    { step: "Remessa bancária gerada (CNAB)",                      auto: false },
                    { step: "Arquivo enviado ao banco",                            auto: false },
                    { step: "Retorno do banco: pagamento confirmado",              auto: false },
                    { step: "Baixa automática do título",                          auto: true  },
                    { step: "Lançamento contábil de despesa",                      auto: true  },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/25 flex items-center justify-center mt-0.5">
                        <span className="text-amber-600 text-[9px] font-black">{i + 1}</span>
                      </div>
                      <div className="flex items-start gap-2 flex-1">
                        <span className="text-sm text-slate-600 leading-relaxed flex-1">{item.step}</span>
                        {item.auto && (
                          <span className="flex-shrink-0 text-[9px] font-bold text-green-600 bg-green-50 border border-green-200 rounded px-1.5 py-0.5 mt-0.5">auto</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-400 italic">
                  Pagamentos avulsos: lançamento direto com opção de anexar comprovante. Banco retorna confirmação → baixa automática.
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  <span className="text-amber-500 font-semibold">Nota:</span> hoje o envio do arquivo de remessa ao banco é feito pelo portal do banco. Integração via API bancária está em desenvolvimento — eliminará essa etapa manual.
                </p>
              </div>
            </div>

            {/* Contabilidade centralizada */}
            <div
              className="rounded-2xl p-6 text-white text-center"
              style={{ background: "linear-gradient(135deg, #003f6b 0%, #005792 100%)" }}
            >
              <p className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-1">CONTABILIDADE</p>
              <p className="text-base font-bold mb-1">Ambos os fluxos geram lançamentos contábeis automaticamente</p>
              <p className="text-white/55 text-sm">DRE · Balancete · DFC — atualizados em tempo real, sem reclassificação manual</p>
            </div>
          </div>
        </section>

        {/* ── Módulos ── */}
        <section id="funcionalidades" className="bg-slate-50 py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#005792] mb-3">
                Módulos
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
                Tudo que sua operação precisa
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Oito módulos funcionando de forma integrada. As informações financeiras, fiscais, operacionais e contábeis conversam em tempo real.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {modulos.map((m) => (
                <div
                  key={m.titulo}
                  className="bg-white rounded-2xl border border-slate-100 p-5 hover:shadow-md hover:border-[#005792]/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="rounded-xl p-2 flex-shrink-0"
                      style={{ background: `${m.color}12` }}
                    >
                      <m.icon className="h-5 w-5" style={{ color: m.color }} />
                    </div>
                    <h3 className="font-black text-slate-900 text-sm">{m.titulo}</h3>
                  </div>
                  <ul className="space-y-1.5 border-t border-slate-50 pt-3">
                    {m.itens.map((item) => (
                      <li key={item} className="flex items-start gap-1.5 text-xs text-slate-500">
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5"
                          style={{ background: `${m.color}70` }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Classificação Contábil Dinâmica ── */}
        <section
          className="py-20 px-4 sm:px-6 text-white"
          style={{ background: "linear-gradient(135deg, #003f6b 0%, #005792 60%, #006aaf 100%)" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Coluna esquerda — texto */}
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-6">
                  <span className="w-6 h-px bg-cyan-400" />
                  Diferencial central
                </span>
                <h2 className="text-3xl sm:text-4xl font-black leading-tight mb-6">
                  Classificação contábil{" "}
                  <span className="text-cyan-400">começa no lançamento</span>
                </h2>
                <p className="text-white/70 leading-relaxed mb-8 text-lg">
                  No E9 Gestão, a contabilização não é uma etapa posterior ao financeiro — ela acontece junto. Cada operação (emissão de NF-e, pagamento, recebimento) gera o lançamento contábil automaticamente no mesmo momento.
                </p>
                <div className="space-y-5">
                  {[
                    {
                      titulo: "DRE e Balancete sempre atualizados",
                      desc: "Qualquer lançamento financeiro ou fiscal reflete na DRE em tempo real — sem esperar o fechamento mensal.",
                    },
                    {
                      titulo: "Não existe fechamento demorado",
                      desc: "Como a contabilidade acontece continuamente, o fechamento de período é apenas um bloqueio de competência — não um retrabalho de reclassificação.",
                    },
                    {
                      titulo: "Financeiro e contábil nunca dessincronizados",
                      desc: "O saldo do financeiro bate com o contábil porque nascem do mesmo movimento. Zero conciliação manual entre os dois.",
                    },
                    {
                      titulo: "Parametrização por empresa",
                      desc: "Cada empresa tem seu plano de contas e regras de classificação configuradas de forma independente.",
                    },
                  ].map((item, i) => (
                    <div key={item.titulo} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                        <span className="text-cyan-400 text-xs font-black">0{i + 1}</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white mb-1">{item.titulo}</p>
                        <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna direita — mockup DRE */}
              <div className="relative">
                <div className="bg-[#002f52] border border-white/10 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">DRE — Maio 2026</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">Atualizado agora</p>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs text-green-400 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Tempo real
                    </span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { conta: "Receita Bruta", valor: "R$ 2.841.200", tipo: "receita" },
                      { conta: "(-) Deduções e Impostos", valor: "(R$ 398.900)", tipo: "deducao" },
                      { conta: "Receita Líquida", valor: "R$ 2.442.300", tipo: "total" },
                      { conta: "(-) Custo dos Serviços", valor: "(R$ 1.104.100)", tipo: "deducao" },
                      { conta: "Lucro Bruto", valor: "R$ 1.338.200", tipo: "total" },
                      { conta: "(-) Despesas Operacionais", valor: "(R$ 612.400)", tipo: "deducao" },
                      { conta: "EBITDA", valor: "R$ 725.800", tipo: "destaque" },
                    ].map((linha) => (
                      <div
                        key={linha.conta}
                        className={`flex justify-between items-center px-3 py-2 rounded-lg ${
                          linha.tipo === "destaque"
                            ? "bg-cyan-500/10 border border-cyan-500/20"
                            : linha.tipo === "total"
                            ? "bg-white/5"
                            : ""
                        }`}
                      >
                        <span
                          className={`text-xs ${
                            linha.tipo === "destaque"
                              ? "font-bold text-cyan-400"
                              : linha.tipo === "total"
                              ? "font-semibold text-white"
                              : "text-slate-400"
                          }`}
                        >
                          {linha.conta}
                        </span>
                        <span
                          className={`text-xs font-mono font-semibold ${
                            linha.tipo === "destaque"
                              ? "text-cyan-400"
                              : linha.tipo === "deducao"
                              ? "text-red-400"
                              : "text-white"
                          }`}
                        >
                          {linha.valor}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <p className="text-[10px] text-slate-500">
                      Lançamento contábil gerado automaticamente às 14:32 — NF-e 000.041.872
                    </p>
                  </div>
                </div>

                {/* Badge flutuante */}
                <div className="absolute -top-4 -right-4 bg-[#003f6b] border border-[#ffcb05]/30 rounded-xl px-3 py-2 shadow-xl">
                  <p className="text-[10px] text-slate-400">Plano de contas</p>
                  <p className="text-sm font-bold text-[#ffcb05]">Parametrizado por empresa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Fluxos Operacionais ── */}
        <section className="bg-white py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#005792] mb-3">
                Fluxos operacionais
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
                Do faturamento ao bancário — ciclo operacional integrado
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Veja como os principais ciclos operacionais funcionam dentro do E9 Gestão — com cada etapa gerando automaticamente a próxima.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {fluxos.map((fluxo) => (
                <div
                  key={fluxo.titulo}
                  className="bg-slate-50 rounded-2xl border border-slate-100 p-7 hover:shadow-md hover:border-[#005792]/20 transition-all duration-300"
                >
                  <h3 className="font-black text-slate-900 text-base mb-6">{fluxo.titulo}</h3>
                  <ol className="space-y-3">
                    {fluxo.passos.map((passo, i) => (
                      <li key={passo} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#005792]/10 border border-[#005792]/20 flex items-center justify-center mt-0.5">
                          <span className="text-[#005792] text-[9px] font-black">{i + 1}</span>
                        </div>
                        <span className="text-sm text-slate-600 leading-relaxed">{passo}</span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-400 italic leading-relaxed">
                    {fluxo.nota}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Fiscal ── */}
        <section className="bg-slate-50 py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#005792] mb-4">
                  Fiscal e documentos
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-5">
                  Todos os documentos fiscais — integrados à operação
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  A emissão de qualquer documento fiscal no E9 Gestão dispara automaticamente as ações nos outros módulos: baixa de estoque, geração de título financeiro e lançamento contábil. Sem reprocessamentos, sem exportações.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      titulo: "NF-e — Nota Fiscal de Produto",
                      desc: "Emissão individual e em lote, cancelamento, inutilização e carta de correção. Baixa automática de estoque.",
                    },
                    {
                      titulo: "NFS-e — Nota Fiscal de Serviço",
                      desc: "Emissão para ambiente nacional. Retenções de imposto calculadas automaticamente na emissão.",
                    },
                    {
                      titulo: "CT-e e MDF-e",
                      desc: "Conhecimento de transporte e manifesto de documentos para operações logísticas.",
                    },
                    {
                      titulo: "Captura DF-e automática",
                      desc: "NF-e de fornecedores capturadas automaticamente via DF-e — sem necessidade de importar XML manualmente.",
                    },
                    {
                      titulo: "SPED Fiscal",
                      desc: "Arquivo SPED gerado a partir dos documentos do período, sem retrabalho.",
                    },
                  ].map((item) => (
                    <div key={item.titulo} className="flex gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-[#005792] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-slate-900">{item.titulo}</p>
                        <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cards de integração */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Sefaz",
                    sub: "NF-e, CT-e, MDF-e",
                    color: "bg-blue-50 border-blue-200",
                    text: "text-blue-700",
                  },
                  {
                    label: "Prefeituras",
                    sub: "NFS-e (ambiente nacional)",
                    color: "bg-sky-50 border-sky-200",
                    text: "text-sky-700",
                  },
                  {
                    label: "Bancos",
                    sub: "Bradesco, Itaú, BB, Sicoob",
                    color: "bg-[#005792]/6 border-[#005792]/15",
                    text: "text-[#005792]",
                  },
                  {
                    label: "Certificado A1",
                    sub: "Gerenciado por empresa",
                    color: "bg-green-50 border-green-200",
                    text: "text-green-700",
                  },
                  {
                    label: "WhatsApp",
                    sub: "Cobrança integrada",
                    color: "bg-emerald-50 border-emerald-200",
                    text: "text-emerald-700",
                  },
                  {
                    label: "E-commerce",
                    sub: "Pedidos integrados",
                    color: "bg-violet-50 border-violet-200",
                    text: "text-violet-700",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`${item.color} border rounded-2xl p-5 flex flex-col gap-1`}
                  >
                    <p className={`text-sm font-black ${item.text}`}>{item.label}</p>
                    <p className="text-xs text-slate-500">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Customização / Módulos Verticais ── */}
        <section className="bg-white py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className="rounded-3xl p-10 sm:p-14 text-white"
              style={{ background: "linear-gradient(135deg, #003f6b 0%, #005792 100%)" }}
            >
              <div className="max-w-2xl mx-auto text-center mb-12">
                <span className="inline-block bg-[#ffcb05]/20 text-[#ffcb05] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                  Módulos verticais
                </span>
                <h2 className="text-3xl sm:text-4xl font-black mb-4">
                  Processos únicos, dentro do mesmo ERP
                </h2>
                <p className="text-white/65 leading-relaxed">
                  O E9 Gestão suporta módulos desenvolvidos para processos específicos do seu segmento — integrados ao núcleo do ERP, sem sistemas paralelos ou integrações externas frágeis.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                {[
                  {
                    icon: PuzzlePieceIcon,
                    titulo: "Módulo específico",
                    desc: "Desenvolvido sob medida para o processo único da sua operação — workflows de aprovação, OS específicas, dashboards executivos.",
                  },
                  {
                    icon: LinkIcon,
                    titulo: "Integração nativa",
                    desc: "Conectado ao financeiro, fiscal e contábil sem middleware — a mesma base de dados, os mesmos cadastros.",
                  },
                  {
                    icon: RectangleStackIcon,
                    titulo: "Plataforma única",
                    desc: "Tudo dentro de um só sistema. Sem exportações entre sistemas, sem retrabalho de digitação.",
                  },
                ].map((item) => (
                  <div
                    key={item.titulo}
                    className="bg-white/8 hover:bg-white/12 transition-colors rounded-2xl p-7 flex flex-col items-center text-center gap-4"
                  >
                    <div className="bg-[#ffcb05]/15 rounded-xl p-3">
                      <item.icon className="h-7 w-7 text-[#ffcb05]" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-base mb-1.5">{item.titulo}</p>
                      <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-white/10 grid sm:grid-cols-3 gap-4 text-center">
                {[
                  { exemplo: "Módulo Equino", desc: "Cadastro de equinos, genealogia, venda de embriões" },
                  { exemplo: "Módulo RFID", desc: "Inventário automatizado, rastreabilidade de produção" },
                  { exemplo: "Módulo OS", desc: "Ordem de serviço com faturamento e contrato integrados" },
                ].map((ex) => (
                  <div key={ex.exemplo}>
                    <p className="text-xs font-bold text-cyan-400 mb-1">{ex.exemplo}</p>
                    <p className="text-xs text-white/45 leading-relaxed">{ex.desc}</p>
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
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#005792] mb-3">
                Para quem é
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                Empresas que precisam de controle real
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-slate-100 p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">
                  O E9 Gestão atende empresas com
                </p>
                <ul className="space-y-3">
                  {[
                    "Operações complexas e alto volume transacional",
                    "Múltiplos setores que precisam conversar",
                    "Grande volume financeiro e fiscal",
                    "Necessidade de personalização real",
                    "Processos únicos do negócio",
                    "Múltiplos CNPJs, filiais ou unidades de negócio",
                    "Demandas fiscais e contábeis avançadas",
                  ].map((c) => (
                    <li key={c} className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-[#005792] flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-slate-100 p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">
                  Segmentos atendidos
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {[
                    "Serviços recorrentes",
                    "Produção de eventos",
                    "Indústria",
                    "Holdings e grupos",
                    "Agronegócio",
                    "Educação",
                    "Operações multiempresa",
                    "Empresas com processos específicos",
                  ].map((s) => (
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
        <section
          className="py-16 px-4 sm:px-6"
          style={{ background: "linear-gradient(135deg, #003f6b 0%, #005792 100%)" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-4">
              Pronto para conhecer o E9 Gestão?
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              Fale com nossa equipe e veja como o E9 funciona para a realidade da sua operação.
            </p>
            <a
              href="#proposta"
              className="inline-flex items-center gap-2 bg-[#ffcb05] text-[#003f6b] font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors text-lg"
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
              <h2 className="text-3xl font-black text-slate-900">Solicite uma demonstração</h2>
              <p className="text-slate-400 mt-3">
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
