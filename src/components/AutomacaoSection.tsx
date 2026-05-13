"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const recursos = [
  {
    titulo: "Conciliação Bancária Automática",
    desc: "Extratos importados e conciliados automaticamente com o contas a receber e pagar — sem conferência manual linha a linha.",
  },
  {
    titulo: "Classificação Contábil em Tempo Real",
    desc: "A classificação contábil começa no próprio lançamento e se propaga de forma dinâmica — sem reclassificações manuais no fim do período.",
  },
  {
    titulo: "Pagamentos e Cobranças Integrados",
    desc: "Remessas de pagamento e retornos de cobrança processados diretamente no ERP — integrado ao contas a pagar com aprovação por alçadas.",
  },
  {
    titulo: "Automação de Lançamentos",
    desc: "Regras de categorização automática para movimentações recorrentes — redução expressiva de lançamentos manuais na operação diária.",
  },
];

export default function AutomacaoSection() {
  return (
    <section className="bg-slate-50 py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/equipe03.jpg"
                alt="Equipe analisando dados financeiros e operacionais"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Badge flutuante */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-3 bg-white border border-slate-100 rounded-xl px-4 py-3 shadow-lg"
            >
              <p className="text-[10px] text-slate-400 font-semibold">Redução de trabalho manual</p>
              <p className="text-xl font-black text-slate-900">-80%</p>
            </motion.div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#005792] mb-6">
              <span className="w-8 h-px bg-[#005792]" />
              Automação Financeira & Bancária
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-6">
              Seu financeiro no piloto automático
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              O E9 automatiza a operação financeira de ponta a ponta — da conciliação bancária à classificação contábil dinâmica em tempo real, sem retrabalho entre departamentos.
            </p>

            <div className="space-y-5">
              {recursos.map((r, i) => (
                <motion.div
                  key={r.titulo}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#005792]/8 border border-[#005792]/15 flex items-center justify-center group-hover:bg-[#005792]/15 transition-colors">
                    <span className="text-[#005792] text-xs font-black">0{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-1">{r.titulo}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
