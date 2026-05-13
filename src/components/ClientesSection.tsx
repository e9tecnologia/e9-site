"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clientes = [
  { src: "/clientes/vedabras.png", alt: "Vedabrás" },
  { src: "/clientes/faro.png",     alt: "Faro" },
  { src: "/clientes/vivo.png",     alt: "Vivo" },
  { src: "/clientes/femsa.svg",    alt: "FEMSA" },
  { src: "/clientes/atlas.png",    alt: "Atlas" },
  { src: "/clientes/Osesp.png",    alt: "Osesp" },
  { src: "/clientes/elicon.png",   alt: "Elicon" },
  { src: "/clientes/OSB.png",      alt: "OSB" },
  { src: "/clientes/projardim.png",alt: "Projardim" },
  { src: "/clientes/wa.png",       alt: "WeAudit" },
  { src: "/clientes/found4u.png",  alt: "Found4u" },
  { src: "/clientes/bamko.png",    alt: "Bamko" },
];

export default function ClientesSection() {
  return (
    <section className="bg-white border-y border-slate-100 py-14 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-10">
          Empresas que confiam na plataforma E9
        </p>

        <div className="relative">
          {/* Fades laterais */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Carrossel infinito com CSS */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              className="flex gap-12 items-center"
              style={{ width: "max-content" }}
            >
              {[...clientes, ...clientes].map((c, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 h-8 w-28 relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={c.src}
                    alt={c.alt}
                    fill
                    className="object-contain"
                    onError={() => {}}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
