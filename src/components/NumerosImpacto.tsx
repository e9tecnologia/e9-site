"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const FUNDACAO = 2003;

function useCountUp(target: number, active: boolean, duration = 1800) {
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

type NumItem = { valor: number; sufixo: string; label: string; detalhe: string };

function Numero({ valor, sufixo, label, detalhe, active }: NumItem & { active: boolean }) {
  const count = useCountUp(valor, active);
  return (
    <div className="flex flex-col items-center text-center px-6 py-2">
      <span className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none">
        {count}
        <span className="text-[#ffcb05]">{sufixo}</span>
      </span>
      <span className="mt-3 text-xs font-bold text-white/80 uppercase tracking-wider">{label}</span>
      <span className="mt-1 text-xs text-slate-500">{detalhe}</span>
    </div>
  );
}

export default function NumerosImpacto() {
  const anos = new Date().getFullYear() - FUNDACAO;
  const numeros: NumItem[] = [
    { valor: anos, sufixo: "+",   label: "Anos de mercado",              detalhe: "Desde 2003 em operação" },
    { valor: 100,  sufixo: "mi+", label: "Documentos fiscais processados", detalhe: "NF-e, NFS-e, CT-e, MDF-e, SPED" },
    { valor: 320,  sufixo: "+",   label: "Municípios com NFS-e",          detalhe: "Cobertura nacional" },
    { valor: 27,   sufixo: "",    label: "Estados atendidos",              detalhe: "Presença em todo o Brasil" },
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
    <section className="relative overflow-hidden py-20 px-4 sm:px-6" style={{background: "linear-gradient(135deg, #003f6b 0%, #005792 100%)"}}>
      {/* Topo decorativo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffcb05]/40 to-transparent" />

      {/* Grade sutil */}
      <div className="absolute inset-0 grid-overlay" />

      {/* Gradiente radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(255,203,5,0.04),transparent)]" />

      <div ref={ref} className="relative max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-12"
        >
          Plataforma E9 em números
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/5">
          {numeros.map((n) => (
            <Numero key={n.label} {...n} active={active} />
          ))}
        </div>
      </div>

      {/* Base decorativa */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffcb05]/40 to-transparent" />
    </section>
  );
}
