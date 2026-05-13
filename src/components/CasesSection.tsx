"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const cases = [
  {
    resultado: "Horas → Segundos",
    titulo: "Emissão fiscal em lote",
    desc: "Empresa com +500 NF-e/dia passou de processo manual de horas para emissão automatizada em segundos — direto do ERP.",
    tags: ["Fiscal", "Automação", "NF-e"],
    metrica: "500+",
    metricaLabel: "NFs emitidas/dia",
  },
  {
    resultado: "-80% de retrabalho",
    titulo: "Conciliação bancária automática",
    desc: "Financeiro de distribuidora com 3 bancos passou de 4h/dia de conciliação manual para processamento automático em minutos.",
    tags: ["Bancário", "Financeiro", "Automação"],
    metrica: "3",
    metricaLabel: "Bancos integrados",
  },
  {
    resultado: "99,5% de precisão",
    titulo: "Inventário RFID industrial",
    desc: "Indústria com 15.000 itens no estoque eliminou divergências de inventário com implantação de leitores RFID integrados ao ERP.",
    tags: ["RFID", "Estoque", "Indústria"],
    metrica: "15K+",
    metricaLabel: "Itens rastreados",
  },
  {
    resultado: "Integração total",
    titulo: "Operação multi-empresa",
    desc: "Grupo empresarial com 8 CNPJs consolidou toda a gestão financeira, fiscal e operacional em uma única instância do E9 Gestão.",
    tags: ["Multi-CNPJ", "ERP", "Gestão"],
    metrica: "8",
    metricaLabel: "Empresas unificadas",
  },
];

export default function CasesSection() {
  return (
    <section className="bg-slate-50 py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ffcb05] mb-4">
              <span className="w-8 h-px bg-[#ffcb05]" />
              Resultados Reais
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Operações transformadas<br />com o E9 Gestão
            </h2>
          </div>
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors flex-shrink-0"
          >
            Ver todos os cases
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Grid de cases */}
        <div className="grid sm:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-slate-100 rounded-2xl p-7 hover:border-slate-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Resultado em destaque */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl font-black text-slate-900 leading-none">{c.resultado}</span>
                <div className="text-right">
                  <p className="text-xl font-black text-[#ffcb05] leading-none">{c.metrica}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{c.metricaLabel}</p>
                </div>
              </div>

              <div className="w-12 h-0.5 bg-[#ffcb05]/40 mb-4 group-hover:w-20 transition-all duration-500" />

              <h3 className="text-base font-bold text-slate-900 mb-2">{c.titulo}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">{c.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold bg-slate-50 border border-slate-100 text-slate-500 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
