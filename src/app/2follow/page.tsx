import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  EyeIcon,
  BoltIcon,
  ChartBarIcon,
  WifiIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "2Follow — Rastreamento de OS no Chão de Fábrica | E9 Tecnologia",
  description: "Coletores IoT e RFID instalados na linha de produção. Operadores apontam atividades em tempo real — gestão acompanha cada OS do início ao fim.",
};

const passos = [
  {
    numero: "01",
    titulo: "Coletor instalado na máquina",
    desc: "Hardware compacto fixado ao lado de cada posto de trabalho — touchscreen resistente e leitor RFID integrado.",
  },
  {
    numero: "02",
    titulo: "Operador aponta a OS",
    desc: "Com poucos toques, o operador inicia ou finaliza uma atividade. Sem papel, sem digitação manual no escritório.",
  },
  {
    numero: "03",
    titulo: "Gestão acompanha em tempo real",
    desc: "Cada apontamento atualiza o sistema imediatamente — status de produção, gargalos e histórico de cada OS visíveis na tela.",
  },
];

const beneficios = [
  { icon: EyeIcon,      texto: "Visibilidade total do chão de fábrica" },
  { icon: BoltIcon,     texto: "Apontamento rápido pelo operador" },
  { icon: ChartBarIcon, texto: "Relatórios de produção em tempo real" },
  { icon: WifiIcon,     texto: "Integração com o ERP via rede local" },
];

const fotos = [
  { src: "/images/2follow-coletor-04.jpg", alt: "Coletor 2Follow instalado em frente a prensas industriais" },
  { src: "/images/2follow-coletor-02.jpg", alt: "Hardware 2Follow fixado ao lado de máquina industrial" },
  { src: "/images/2follow-coletor-03.jpg", alt: "Tablet touchscreen e leitor RFID do coletor 2Follow" },
  { src: "/images/2follow-coletor-01.jpg", alt: "Sistema 2Follow mostrando OS com atividades e status de produção" },
];

export default function TwoFollowPage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="bg-slate-900 text-white pt-20 pb-24 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-44 h-14">
                <Image src="/logos/2follow.png" alt="2Follow" fill className="object-contain" priority />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
              O chão de fábrica{" "}
              <span className="text-[#ffcb05]">sob controle total.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Coletores IoT instalados na linha de produção. Operadores apontam atividades em tempo real — gestão acompanha cada OS do início ao fim, sem papel e sem retrabalho.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="http://2follow.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#ffcb05] text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Ver site completo
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
              <Link href="/contato" className="border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-center">
                Falar com a equipe
              </Link>
            </div>
          </div>
        </section>

        {/* ── Como funciona ── */}
        <section className="bg-slate-50 py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-slate-900">Como funciona</h2>
              <p className="text-slate-500 mt-3 max-w-lg mx-auto">
                Do chão de fábrica ao painel de gestão em três etapas simples.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {passos.map((p) => (
                <div key={p.numero} className="bg-white rounded-2xl border border-slate-100 p-8 hover:shadow-md transition-all duration-300">
                  <span className="text-5xl font-extrabold text-[#ffcb05]/30 leading-none block mb-4">{p.numero}</span>
                  <h3 className="font-bold text-slate-900 mb-2">{p.titulo}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Galeria ── */}
        <section className="bg-white py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Hardware real em ambiente industrial</h2>
              <p className="text-slate-500 mt-3">Coletores instalados e em operação no chão de fábrica.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {fotos.map((f) => (
                <div key={f.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefícios ── */}
        <section className="bg-slate-50 py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {beneficios.map((b) => (
                <div key={b.texto} className="bg-white rounded-2xl border border-slate-100 p-5 flex items-center gap-3">
                  <div className="bg-slate-900/5 rounded-xl p-2.5 flex-shrink-0">
                    <b.icon className="h-5 w-5 text-slate-700" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">{b.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Para quem é ── */}
        <section className="bg-slate-900 py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Para qualquer empresa com processos físicos rastreáveis
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Indústria, manufatura, manutenção, serviços de campo — qualquer operação onde você precisa saber quem fez o quê, quando e em qual etapa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="http://2follow.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#ffcb05] text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors text-lg"
              >
                Ver o projeto completo em 2follow.com.br
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
