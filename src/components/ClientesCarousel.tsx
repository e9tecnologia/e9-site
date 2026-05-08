"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const clientes = [
  { nome: "Vedabrás",  arquivo: "vedabras.png" },
  { nome: "Faro",      arquivo: "faro.png" },
  { nome: "Vivo",      arquivo: "vivo.png" },
  { nome: "FEMSA",     arquivo: "femsa.svg" },
  { nome: "Atlas",     arquivo: "atlas.png" },
  { nome: "Osesp",     arquivo: "Osesp.png" },
  { nome: "Elicon",    arquivo: "elicon.png" },
  { nome: "OSB",       arquivo: "OSB.png" },
  { nome: "Projardim", arquivo: "projardim.png" },
  { nome: "WeAudit",   arquivo: "wa.png" },
  { nome: "Found4u",   arquivo: "found4u.png" },
];

const PER_PAGE = 4;
const total = Math.ceil(clientes.length / PER_PAGE);

export default function ClientesCarousel() {
  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback((dir: 1 | -1) => {
    if (animating) return;
    setAnimating(true);
    setPage((p) => (p + dir + total) % total);
    setTimeout(() => setAnimating(false), 400);
  }, [animating]);

  useEffect(() => {
    const t = setInterval(() => go(1), 4000);
    return () => clearInterval(t);
  }, [go]);

  const visible = clientes.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <button
          onClick={() => go(-1)}
          className="flex-shrink-0 p-2 rounded-full border border-slate-200 text-slate-400 hover:text-slate-700 hover:border-slate-300 transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>

        <div className="flex-1 overflow-hidden">
          <div
            className="grid grid-cols-4 gap-10 transition-opacity duration-300"
            style={{ opacity: animating ? 0 : 1 }}
          >
            {visible.map((c) => (
              <div
                key={c.nome}
                className="relative h-20 flex items-center justify-center"
                title={c.nome}
              >
                <Image
                  src={`/clientes/${c.arquivo}`}
                  alt={c.nome}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => go(1)}
          className="flex-shrink-0 p-2 rounded-full border border-slate-200 text-slate-400 hover:text-slate-700 hover:border-slate-300 transition-colors"
          aria-label="Próximo"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>

      {/* dots */}
      <div className="flex justify-center gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${i === page ? "bg-slate-400" : "bg-slate-200"}`}
            aria-label={`Página ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
