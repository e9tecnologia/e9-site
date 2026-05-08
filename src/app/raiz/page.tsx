import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BanknotesIcon,
  DocumentTextIcon,
  BuildingLibraryIcon,
  CubeIcon,
  ShoppingCartIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CloudArrowUpIcon,
  ChatBubbleLeftRightIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Raiz — Sistema de Gestão Online para Pequenas Empresas e MEI | E9 Tecnologia",
  description: "Sistema de gestão online para pequenas empresas, MEI e prestadores de serviço. Controle financeiro, emissão de NF-e e NFS-e, cobranças e integração bancária em uma única plataforma.",
};

const modulos = [
  {
    icon: DocumentTextIcon,
    titulo: "Vendas e Notas Fiscais",
    itens: [
      "Orçamentos e faturamento",
      "Contratos com recorrência",
      "NF-e",
      "NFS-e",
      "NFC-e",
      "Relatórios de faturamento",
    ],
  },
  {
    icon: CubeIcon,
    titulo: "Compras e Estoque",
    itens: [
      "Controle de estoque (venda/revenda)",
      "Almoxarifado (uso e consumo)",
      "Compras avulsas",
      "Importação de NF-e e CT-e",
      "Inventário e movimentações",
      "Relatórios de compras",
    ],
  },
  {
    icon: BanknotesIcon,
    titulo: "Financeiro",
    itens: [
      "Contas a pagar e receber",
      "Controle de crédito por cliente",
      "Movimentação financeira",
      "Conciliação bancária",
      "Extratos importados",
      "Relatórios financeiros",
    ],
  },
  {
    icon: BuildingLibraryIcon,
    titulo: "Fiscal e Contador",
    itens: [
      "Certificado Digital A1",
      "XML de NF-e emitidas e recebidas",
      "Plano de contas",
      "Categorias de despesas e receitas",
      "Acesso do gestor/contador",
      "Arquivos contábeis",
    ],
  },
  {
    icon: ShoppingCartIcon,
    titulo: "Integrações",
    itens: [
      "WooCommerce",
      "Mercado Livre",
    ],
  },
];

const diferenciais = [
  {
    icon: CloudArrowUpIcon,
    titulo: "100% online, sem instalação",
    desc: "Acesse de qualquer lugar pelo navegador. Nada para instalar ou manter.",
  },
  {
    icon: BoltIcon,
    titulo: "Acesso imediato",
    desc: "Cadastre sua empresa e comece a usar no mesmo dia. Sem implantação, sem espera.",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    titulo: "Suporte via chat",
    desc: "Dúvidas resolvidas pelo chat diretamente no sistema.",
  },
];

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Raiz",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Sistema de gestão online para pequenas empresas, MEI e prestadores de serviço. Controle financeiro, emissão de NF-e e NFS-e, cobranças e integração bancária.",
  "url": "https://e9.com.br/raiz",
  "offers": { "@type": "Offer", "priceCurrency": "BRL", "availability": "https://schema.org/InStock" },
  "creator": {
    "@type": "Organization",
    "name": "E9 Tecnologia",
    "url": "https://e9.com.br",
    "address": { "@type": "PostalAddress", "addressLocality": "Campinas", "addressRegion": "SP", "addressCountry": "BR" },
  },
  "featureList": [
    "Emissão de NF-e, NFS-e e NFC-e",
    "Controle financeiro e conciliação bancária",
    "Controle de estoque",
    "Faturamento recorrente",
    "Integração com WooCommerce e Mercado Livre",
    "Acesso para CPF e CNPJ",
    "Acesso do contador à plataforma",
  ],
};

export default function RaizPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
      <Header />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="bg-slate-900 text-white pt-20 pb-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white rounded-xl px-4 py-2.5 mb-6">
                <div className="relative w-28 h-10">
                  <Image src="/logos/raiz-logo.png" alt="Raiz — sistema de gestão para pequenas empresas e MEI" fill className="object-contain" priority />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
                Sistema de gestão online para{" "}
                <span className="text-[#ffcb05]">pequenas empresas e MEI.</span>
              </h1>
              <p className="text-white/70 leading-relaxed mb-6">
                Chega de planilha. Emita NF-e e NFS-e, controle financeiro, estoque e relatórios automáticos — para CPF e CNPJ, com acesso do seu contador direto na plataforma.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Para CPF (autônomo) e CNPJ",
                  "NF-e, NFS-e e NFC-e integrados",
                  "Contratos com faturamento recorrente",
                  "Conciliação e integração bancária",
                  "Integração com WooCommerce e Mercado Livre",
                  "Seu contador acessa e te ajuda direto no sistema",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/80">
                    <CheckCircleIcon className="h-4 w-4 text-[#ffcb05] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://sistema.raiz.com.br/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#ffcb05] text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors">
                Acessar o Raiz
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>

            {/* Dashboard mockup */}
            <div className="flex items-center justify-center py-4 pb-8">
              <div className="relative w-full max-w-lg">
                <div className="bg-slate-800 rounded-t-2xl px-4 py-2.5 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="flex-1 bg-slate-700 rounded px-3 py-0.5 ml-2">
                    <span className="text-slate-400 text-xs">sistema.raiz.com.br</span>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-b-2xl shadow-2xl border border-slate-700 border-t-0">
                  <Image
                    src="/images/raiz-dashboard.png"
                    alt="Dashboard do Raiz — financeiro e fluxo de caixa"
                    width={640}
                    height={420}
                    className="w-full object-cover object-top"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl px-5 py-2 shadow-lg">
                  <div className="relative w-24 h-8">
                    <Image src="/logos/raiz-logo.png" alt="Raiz" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Diferenciais SaaS ── */}
        <section className="bg-white border-b border-slate-100 py-8 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-4">
            {diferenciais.map((d) => (
              <div key={d.titulo} className="flex items-center gap-3">
                <div className="bg-[#ffcb05]/15 rounded-xl p-2.5 flex-shrink-0">
                  <d.icon className="h-5 w-5 text-slate-700" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{d.titulo}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Módulos ── */}
        <section id="modulos" className="bg-slate-50 py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-slate-900">O que está incluído</h2>
              <p className="text-slate-500 mt-3 max-w-lg mx-auto">
                Um sistema completo para o dia a dia da pequena empresa — sem módulos que você não vai usar.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {modulos.map((m) => (
                <div
                  key={m.titulo}
                  className={`bg-white rounded-2xl border border-slate-100 p-7 hover:shadow-md hover:border-[#ffcb05]/40 transition-all duration-300${m.titulo === "Integrações" ? " sm:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-[#ffcb05]/15 rounded-xl p-2.5">
                      <m.icon className="h-5 w-5 text-slate-700" />
                    </div>
                    <h3 className="font-bold text-slate-900">{m.titulo}</h3>
                  </div>
                  <ul className="space-y-2">
                    {m.itens.map((item) => (
                      <li key={item} className="flex items-center gap-1.5 text-sm text-slate-600">
                        <span className="w-1 h-1 rounded-full bg-[#ffcb05] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Raiz vs E9 Gestão ── */}
        <section className="bg-white py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Qual produto é o certo para você?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">

              {/* Raiz */}
              <div className="rounded-2xl border-2 border-[#ffcb05] p-8">
                <div className="relative w-28 h-10 mb-5">
                  <Image src="/logos/raiz-logo.png" alt="Raiz" fill className="object-contain object-left" />
                </div>
                <p className="text-slate-500 text-sm mb-5">Ideal para pequenas empresas que precisam de gestão completa sem complexidade.</p>
                <ul className="space-y-2.5">
                  {[
                    "Empresa pequena ou em início de operação",
                    "Precisa de NF-e, NFS-e e financeiro",
                    "Quer começar a usar hoje",
                    "Suporte via chat é suficiente",
                    "Operação padrão, sem customizações",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircleIcon className="h-4 w-4 text-[#ffcb05] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* E9 Gestão */}
              <div className="rounded-2xl border-2 border-[#005792] p-8 bg-white">
                <div className="relative w-36 h-10 mb-5">
                  <Image src="/logos/e9gestao.svg" alt="E9 Gestão" fill className="object-contain object-left" />
                </div>
                <p className="text-slate-500 text-sm mb-5">Para empresas com operação mais complexa que precisam de customização e suporte próximo.</p>
                <ul className="space-y-2.5">
                  {[
                    "Operação complexa ou múltiplos CNPJs",
                    "Necessidade de módulos customizados",
                    "Implantação e treinamento incluídos",
                    "Suporte direto com a equipe E9",
                    "Processos específicos do negócio",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircleIcon className="h-4 w-4 text-[#005792] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="/gestao" className="inline-flex items-center gap-1.5 text-[#005792] text-sm font-semibold mt-6 hover:gap-3 transition-all">
                  Conhecer o E9 Gestão <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ── CTA final ── */}
        <section className="bg-[#ffcb05] py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Pronto para começar?</h2>
            <p className="text-slate-700 mb-8">Acesse agora e comece a usar o Raiz hoje mesmo.</p>
            <a
              href="https://sistema.raiz.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-700 transition-colors text-lg"
            >
              Acessar o Raiz
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
