"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const badges = [
  "+20 anos de experiência",
  "ERP Próprio",
  "Integração Bancária",
  "RFID & Rastreabilidade",
  "Automação Fiscal",
];


/* Cartão flutuante que aparece sobre a foto */
function FloatingCard({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <div className={`absolute bg-white rounded-xl shadow-xl border border-slate-100 px-4 py-3 ${className}`}>
      {children}
    </div>
  );
}

export default function HeroERP() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Decoração sutil de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_30%_-10%,rgba(0,87,146,0.05),transparent)]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50/80 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Coluna esquerda — texto ── */}
          <div>
            {/* Eyebrow badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 bg-[#005792]/6 border border-[#005792]/15 text-[#005792] text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#005792]" />
                  {b}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6"
            >
              ERP e automação para{" "}
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, #005792 0%, #006aaf 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                operações empresariais
              </span>{" "}
              sem gargalos.
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Plataforma ERP própria que integra financeiro, fiscal, estoque, produção, RFID e automação bancária em um único sistema — para empresas que operam em ambientes críticos e exigentes.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 bg-[#ffcb05] text-slate-900 font-bold px-7 py-3.5 rounded-xl hover:bg-yellow-400 transition-all hover:scale-105 active:scale-100 text-base shadow-lg shadow-yellow-200/50"
              >
                Solicitar demonstração
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/gestao"
                className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-600 font-semibold px-7 py-3.5 rounded-xl hover:border-[#005792]/30 hover:text-[#005792] transition-all text-base"
              >
                Conhecer o E9 Gestão
              </Link>
            </motion.div>

          </div>

          {/* ── Coluna direita — foto de pessoa ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Container da foto */}
            <div className="relative w-full h-[520px] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">

              <Image
                src="/images/equipe01.jpg"
                alt="Equipe E9 Tecnologia — gestão empresarial"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay gradiente suave na base */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Card flutuante — KPI */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -bottom-5 -left-6 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3"
            >
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-1">Fluxo de Caixa</p>
              <div className="flex items-baseline gap-2">
                <p className="text-xl font-black text-slate-900">R$ 2,84M</p>
                <span className="text-xs font-bold text-green-500">+8,3%</span>
              </div>
              <div className="flex items-end gap-0.5 mt-2 h-6">
                {[40, 65, 52, 80, 70, 88].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      background: i === 5 ? "#ffcb05" : "#005792",
                      opacity: i === 5 ? 1 : 0.25 + i * 0.1,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Card flutuante — módulos */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3"
            >
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-2">Módulos ativos</p>
              <div className="flex flex-wrap gap-1.5">
                {["Financeiro", "Fiscal", "RFID", "Estoque"].map((m) => (
                  <span key={m} className="text-[9px] font-bold bg-[#005792]/8 text-[#005792] px-2 py-1 rounded-full">
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Divisor suave para a próxima seção */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}
