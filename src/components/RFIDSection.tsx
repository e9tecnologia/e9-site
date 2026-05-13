"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const diferenciais = [
  {
    titulo: "Rastreio de OS por etapa de fabricação",
    desc: "Cada ordem de serviço passa por etapas sequenciais no chão de fábrica — o sistema sabe em qual etapa cada OS está em tempo real.",
  },
  {
    titulo: "Dupla identificação: OS + funcionário",
    desc: "Cada evento registra a tag RFID/NFC da ordem de serviço e a tag do funcionário que executou — rastreabilidade completa de quem fez o quê e quando.",
  },
  {
    titulo: "Movimentação automática de estoque",
    desc: "Ao finalizar cada etapa, o estoque no ERP é movimentado automaticamente — sem digitação manual, sem atraso entre chão de fábrica e sistema.",
  },
  {
    titulo: "Coletores Android via WiFi",
    desc: "PDAs Android com o app E9 conectados por WiFi aos coletores de cada etapa — integração nativa ao ERP sem exportações de arquivos.",
  },
];

const etapas = [
  { id: 1, nome: "Separar Forma",       status: "done",    func: "João S.",   hora: "07:12" },
  { id: 2, nome: "Iniciar Prensada",    status: "done",    func: "João S.",   hora: "07:34" },
  { id: 3, nome: "Finalizar Prensada",  status: "done",    func: "João S.",   hora: "08:51" },
  { id: 4, nome: "Iniciar Vulcanizar",  status: "done",    func: "Carlos M.", hora: "09:03" },
  { id: 5, nome: "Finalizar Vulcanizar",status: "active",  func: "Carlos M.", hora: "—" },
  { id: 6, nome: "Peso e Validação",    status: "pending", func: "—",         hora: "—" },
  { id: 7, nome: "Iniciar Acabamento",  status: "pending", func: "—",         hora: "—" },
  { id: 8, nome: "Finalizar Acabamento",status: "pending", func: "—",         hora: "—" },
  { id: 9, nome: "Finalizar OS",        status: "pending", func: "—",         hora: "—" },
];

export default function RFIDSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden" style={{background: "linear-gradient(135deg, #003f6b 0%, #005792 60%, #006aaf 100%)"}}>
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,rgba(6,180,212,0.06),transparent)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Coluna esquerda — texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-6">
              <span className="w-8 h-px bg-cyan-400" />
              RFID & Chão de Fábrica
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
              Cada etapa da produção{" "}
              <span className="text-cyan-400">registrada e integrada ao ERP</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              A E9 integra coletores RFID/NFC ao chão de fábrica — cada etapa de uma ordem de serviço é registrada com a tag da OS e a tag do funcionário, movimentando o estoque automaticamente no ERP sem nenhuma digitação.
            </p>

            <div className="space-y-6">
              {diferenciais.map((d, i) => (
                <motion.div
                  key={d.titulo}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <span className="text-cyan-400 text-xs font-black">0{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{d.titulo}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{d.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coluna direita — painel OS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative space-y-4"
          >
            {/* Foto chão de fábrica */}
            <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/pexels-tiger-lily-4481256.jpg"
                alt="Operador em chão de fábrica com coletor Android — RFID integrado ao ERP"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003f6b]/60 to-transparent" />
            </div>

            {/* Painel OS */}
            <div className="bg-[#002f52] border border-white/10 rounded-2xl p-5 shadow-2xl">
              {/* Cabeçalho OS */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    OS-2024-0438
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Retentores de borracha — lote 120 un</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-yellow-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                  Em produção
                </span>
              </div>

              {/* Etapas */}
              <div className="space-y-1.5">
                {etapas.map((etapa) => (
                  <div
                    key={etapa.id}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                      etapa.status === "active"
                        ? "bg-yellow-500/10 border border-yellow-500/20"
                        : etapa.status === "done"
                        ? "bg-green-500/5"
                        : "opacity-40"
                    }`}
                  >
                    {/* Indicador */}
                    <div
                      className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                        etapa.status === "done"
                          ? "bg-green-500"
                          : etapa.status === "active"
                          ? "bg-yellow-400"
                          : "bg-white/10"
                      }`}
                    >
                      {etapa.status === "done" && (
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10">
                          <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                      {etapa.status === "active" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </div>

                    {/* Nome da etapa */}
                    <span
                      className={`text-xs flex-1 ${
                        etapa.status === "active"
                          ? "font-bold text-yellow-300"
                          : etapa.status === "done"
                          ? "text-slate-300"
                          : "text-slate-600"
                      }`}
                    >
                      {etapa.id}. {etapa.nome}
                    </span>

                    {/* Funcionário + hora */}
                    {etapa.status !== "pending" && (
                      <div className="text-right">
                        <p className="text-[9px] text-cyan-400 font-semibold">{etapa.func}</p>
                        <p className="text-[9px] text-slate-600 font-mono">{etapa.hora}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Rodapé — último evento */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <p className="text-[10px] text-slate-500">
                  Tag OS: <span className="font-mono text-slate-400">NFC-OS-0438</span>
                  {" · "}
                  Tag func: <span className="font-mono text-slate-400">NFC-F-019</span>
                  {" · "}
                  Estoque movimentado automaticamente
                </p>
              </div>
            </div>

            {/* Badge WiFi */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-[#002f52] border border-cyan-500/30 rounded-xl px-3 py-2 shadow-xl"
            >
              <p className="text-[10px] text-slate-400">Coletor Android</p>
              <p className="text-sm font-bold text-cyan-400">Conectado via WiFi</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
