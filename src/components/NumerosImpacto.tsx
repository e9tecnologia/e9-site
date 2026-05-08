"use client";

import { useEffect, useRef, useState } from "react";

const FUNDACAO = 2003;

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

type NumeroItem = { valor: number; sufixo: string; label: string; detalhe: string };

function Numero({ valor, sufixo, label, detalhe, active }: NumeroItem & { active: boolean }) {
  const count = useCountUp(valor, active);
  return (
    <div className="flex flex-col items-center text-center px-6 py-2">
      <span className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
        {count}
        <span className="text-[#ffcb05]">{sufixo}</span>
      </span>
      <span className="mt-3 text-sm font-semibold text-white/90 uppercase tracking-wider">{label}</span>
      <span className="mt-1 text-xs text-slate-400">{detalhe}</span>
    </div>
  );
}

export default function NumerosImpacto() {
  const anos = new Date().getFullYear() - FUNDACAO;
  const numeros = [
    { valor: anos, sufixo: "+",   label: "Anos de experiência",        detalhe: "Desde 2003 no mercado" },
    { valor: 100,  sufixo: "mi+", label: "Documentos fiscais emitidos", detalhe: "NF-e, NFS-e, CT-e, MDF-e e SPED" },
    { valor: 320,  sufixo: "+",   label: "Cidades com emissão NFS-e",  detalhe: "Cobertura nacional" },
    { valor: 27,   sufixo: "",    label: "Estados atendidos",           detalhe: "Presença em todo o Brasil" },
  ];

  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative bg-slate-900 overflow-hidden py-16 px-4 sm:px-6">
      {/* faixa decorativa amarela */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#ffcb05]" />

      {/* grade sutil de fundo */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div ref={ref} className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-800">
          {numeros.map((n) => (
            <Numero key={n.label} {...n} active={active} />
          ))}
        </div>
      </div>

      {/* faixa decorativa amarela inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ffcb05]" />
    </section>
  );
}
