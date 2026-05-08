"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const produtos = [
  {
    label: "E9 Gestão",
    href: "/gestao",
    desc: "ERP para PMEs com operação complexa",
    badge: "Principal",
  },
];

const navLinks = [
  { label: "Início",    href: "/" },
  { label: "Soluções",  href: "/#sistemas" },
  { label: "Cases",     href: "/cases" },
  { label: "Parceiros", href: "/parceiros" },
  { label: "Blog",      href: "/blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <Image src="/logos/logo-enove.png" alt="E9 Tecnologia" width={34} height={34} className="object-contain" />
          <span className="font-bold text-slate-900 text-[15px] tracking-tight">E9 Tecnologia</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">

          {/* Dropdown Produtos */}
          <div ref={dropRef} className="relative">
            <button
              onClick={() => setDropOpen(!dropOpen)}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-3 py-2 rounded-md transition-all"
            >
              Produtos
              <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`} />
            </button>

            {dropOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 overflow-hidden">
                {produtos.map((p) => (
                  <Link
                    key={p.label}
                    href={p.href}
                    target={p.external ? "_blank" : undefined}
                    rel={p.external ? "noopener noreferrer" : undefined}
                    onClick={() => setDropOpen(false)}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-900 group-hover:text-slate-900">{p.label}</span>
                        {p.badge && (
                          <span className="text-[10px] font-bold bg-[#ffcb05]/20 text-slate-700 px-1.5 py-0.5 rounded-full">{p.badge}</span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{p.desc}</p>
                    </div>
                  </Link>
                ))}
                <div className="mx-4 my-2 border-t border-slate-100" />
                <Link
                  href="/#sistemas"
                  onClick={() => setDropOpen(false)}
                  className="block px-4 py-2.5 text-xs font-semibold text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Desenvolvimento sob medida →
                </Link>
              </div>
            )}
          </div>

          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-3 py-2 rounded-md transition-all"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contato"
            className="ml-3 bg-[#ffcb05] text-slate-900 text-sm font-bold px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Fale conosco
          </Link>
        </nav>

        <button className="md:hidden p-2 text-slate-600" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pb-4 space-y-1 pt-2">

          {/* Produtos mobile */}
          <button
            onClick={() => setMobileDropOpen(!mobileDropOpen)}
            className="w-full flex items-center justify-between py-2.5 px-3 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-50"
          >
            Produtos
            <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${mobileDropOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileDropOpen && (
            <div className="ml-3 border-l-2 border-[#ffcb05]/40 pl-3 space-y-1">
              {produtos.map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  target={p.external ? "_blank" : undefined}
                  rel={p.external ? "noopener noreferrer" : undefined}
                  className="block py-2 px-2 rounded-md hover:bg-slate-50"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-sm font-semibold text-slate-800">{p.label}</span>
                  <p className="text-xs text-slate-500">{p.desc}</p>
                </Link>
              ))}
            </div>
          )}

          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2.5 px-3 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-50"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contato"
            className="block mt-2 text-center bg-[#ffcb05] text-slate-900 text-sm font-bold px-4 py-2.5 rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            Fale conosco
          </Link>
        </div>
      )}
    </header>
  );
}
