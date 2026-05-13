"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CubeTransparentIcon, ShieldCheckIcon, BoltIcon,
  ArrowsPointingOutIcon, WrenchScrewdriverIcon, ChatBubbleLeftRightIcon,
  CalculatorIcon,
} from "@heroicons/react/24/outline";

const diferenciais = [
  {
    icon: ShieldCheckIcon,
    titulo: "Mais de 20 anos operando",
    desc: "Duas décadas em ambientes críticos — o sistema foi moldado pela operação real de empresas, não por especificações de produto.",
  },
  {
    icon: CubeTransparentIcon,
    titulo: "Plataforma com código próprio",
    desc: "Arquitetura desenvolvida e mantida internamente. Evoluímos o sistema conforme a operação dos clientes muda — sem depender de terceiros.",
  },
  {
    icon: BoltIcon,
    titulo: "Módulos que se comunicam nativamente",
    desc: "Financeiro, fiscal, estoque e produção compartilham o mesmo núcleo. Um lançamento no financeiro reflete no fiscal e no contábil automaticamente.",
  },
  {
    icon: CalculatorIcon,
    titulo: "Classificação contábil dinâmica",
    desc: "A contabilização começa no próprio lançamento e se propaga em tempo real — plano de contas sempre consistente, sem reclassificações manuais.",
  },
  {
    icon: ArrowsPointingOutIcon,
    titulo: "Multi-empresa, filiais e unidades de negócio",
    desc: "Múltiplos CNPJs, operação via CPF ou unidades de negócio dentro de um mesmo CNPJ — cada entidade com controle individual e visão consolidada do grupo.",
  },
  {
    icon: WrenchScrewdriverIcon,
    titulo: "Parametrização profunda",
    desc: "Fluxos de trabalho, regras fiscais e processos específicos configurados diretamente na plataforma — não contornados com planilhas.",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    titulo: "Suporte por quem desenvolve",
    desc: "A mesma equipe que constrói o sistema atende os clientes. Sem scripts de suporte — problemas resolvidos com acesso direto ao código.",
  },
];

export default function DiferenciaisSection() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-5 gap-16 items-start">

          {/* Coluna de texto + foto — 2 colunas */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#005792] mb-5">
                <span className="w-8 h-px bg-[#005792]" />
                Por que a E9
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-5">
                Construída sobre décadas de operação real
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                O E9 Gestão não nasceu de um roadmap de produto. Nasceu das necessidades reais de empresas com operações complexas — e continua evoluindo assim.
              </p>

              {/* Foto — substitua por imagem do Pexels */}
              {/* Sugestão de busca no Pexels: "business team meeting office" ou "manager dashboard computer" */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                <Image
                src="/images/equipe02.jpg"
                alt="Equipe E9 Tecnologia em reunião de trabalho"
                fill
                className="object-cover"
              />
              </div>

              {/* Barra de credenciais */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { valor: "2003", label: "Fundação" },
                  { valor: "100%", label: "Código próprio" },
                  { valor: "Multi", label: "Empresa & CNPJ" },
                  { valor: "24/7", label: "Monitoramento" },
                ].map((item) => (
                  <div key={item.label} className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center">
                    <p className="text-xl font-black text-[#005792] mb-0.5">{item.valor}</p>
                    <p className="text-xs text-slate-400 font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Lista de diferenciais — 3 colunas */}
          <div className="lg:col-span-3 space-y-4">
            {diferenciais.map((d, i) => (
              <motion.div
                key={d.titulo}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="group flex gap-4 bg-slate-50 border border-slate-100 rounded-xl p-5 hover:bg-white hover:border-[#005792]/20 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#005792]/8 border border-[#005792]/12 flex items-center justify-center group-hover:bg-[#005792]/12 transition-colors">
                  <d.icon className="h-5 w-5 text-[#005792]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 mb-1">{d.titulo}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
