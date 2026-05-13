"use client";

import { motion, type Variants } from "framer-motion";
import {
  BanknotesIcon, DocumentTextIcon, CubeIcon,
  ShoppingCartIcon, TruckIcon, WrenchScrewdriverIcon,
  WifiIcon, BuildingLibraryIcon, ChartBarSquareIcon,
  CommandLineIcon, DevicePhoneMobileIcon, BoltIcon,
} from "@heroicons/react/24/outline";

const modulos = [
  {
    icon: BanknotesIcon,
    titulo: "Financeiro",
    desc: "Automação financeira integrada à operação empresarial — conciliação, fluxo de caixa e controle de receitas e despesas em tempo real.",
    cor: "#ffcb05",
  },
  {
    icon: DocumentTextIcon,
    titulo: "Fiscal & Tributário",
    desc: "NF-e, NFS-e, CT-e, NFC-e, MDF-e e SPED totalmente integrados. Obrigações fiscais automatizadas e auditáveis.",
    cor: "#3b82f6",
  },
  {
    icon: CubeIcon,
    titulo: "Estoque & Almoxarifado",
    desc: "Controle de entrada, saída e saldo em múltiplos depósitos. Integrado à produção, compras e vendas em tempo real.",
    cor: "#10b981",
  },
  {
    icon: ShoppingCartIcon,
    titulo: "Compras & Suprimentos",
    desc: "Pedidos de compra automatizados com análise de estoque mínimo, cotação de fornecedores e aprovação por alçadas.",
    cor: "#f59e0b",
  },
  {
    icon: TruckIcon,
    titulo: "Vendas & Faturamento",
    desc: "Pipeline comercial, pedidos de venda, faturamento em lote e integração com e-commerce e marketplaces.",
    cor: "#8b5cf6",
  },
  {
    icon: WrenchScrewdriverIcon,
    titulo: "Produção & Manufatura",
    desc: "Ordens de produção, controle de chão de fábrica, apontamento de mão de obra e rastreabilidade do processo produtivo.",
    cor: "#ef4444",
  },
  {
    icon: WifiIcon,
    titulo: "RFID & Rastreabilidade",
    desc: "Identificação automática por radiofrequência integrada ao ERP — inventário, rastreamento e automação logística com PDA Android.",
    cor: "#06b6d4",
  },
  {
    icon: BuildingLibraryIcon,
    titulo: "Integração Bancária",
    desc: "Conciliação bancária automatizada, remessas de pagamento e retornos de cobrança processados diretamente no ERP — sem dupla operação.",
    cor: "#ffcb05",
  },
  {
    icon: ChartBarSquareIcon,
    titulo: "Dashboards & BI",
    desc: "Painéis gerenciais em tempo real com KPIs financeiros, operacionais e fiscais — decisões baseadas em dados concretos.",
    cor: "#3b82f6",
  },
  {
    icon: CommandLineIcon,
    titulo: "APIs & Integrações",
    desc: "Arquitetura aberta com APIs REST para integração com ERPs externos, marketplaces, contabilidade e sistemas legados.",
    cor: "#10b981",
  },
  {
    icon: DevicePhoneMobileIcon,
    titulo: "Mobile & PDA",
    desc: "Aplicativos Android para coletores industriais, força de vendas, ordem de serviço e operações em campo offline-first.",
    cor: "#8b5cf6",
  },
  {
    icon: BoltIcon,
    titulo: "Contabilidade",
    desc: "Plano de contas integrado à operação — classificação contábil dinâmica iniciada no lançamento, balancete e DRE em tempo real sem reclassificações manuais.",
    cor: "#f59e0b",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ModulosERP() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6" id="modulos">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ffcb05] mb-4">
            <span className="w-8 h-px bg-[#ffcb05]" />
            Plataforma Modular
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-4">
            Um ERP completo para cada área da sua empresa
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Módulos integrados que eliminam retrabalho, reduzem erros e automatizam os processos mais críticos da sua operação.
          </p>
        </div>

        {/* Grid de módulos */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {modulos.map((m) => (
            <motion.div
              key={m.titulo}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative bg-white border border-slate-100 rounded-2xl p-6 hover:border-slate-200 hover:shadow-xl transition-all duration-300 cursor-default"
            >
              {/* Ícone */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${m.cor}18` }}
              >
                <m.icon className="h-5 w-5" style={{ color: m.cor }} />
              </div>

              {/* Conteúdo */}
              <h3 className="text-sm font-bold text-slate-900 mb-2">{m.titulo}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>

              {/* Linha decorativa no hover */}
              <div
                className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: m.cor }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA inferior */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Todos os módulos integrados em uma única plataforma — sem necessidade de múltiplos sistemas
          </p>
          <a
            href="/gestao"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 bg-[#ffcb05] px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all hover:scale-105"
          >
            Ver plataforma completa →
          </a>
        </div>
      </div>
    </section>
  );
}
