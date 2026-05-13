"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const produtos = [
  {
    label: "E9 Gestão",
    href: "/gestao",
    desc: "Plataforma ERP completa — financeiro, fiscal, estoque, produção e RFID",
    badge: "ERP",
  },
];

const navLinks = [
  { label: "Cases",     href: "/cases" },
  { label: "Parceiros", href: "/parceiros" },
  { label: "Blog",      href: "/blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen]         = useState(false);
  const [dropOpen, setDropOpen]         = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const [scrolled, setScrolled]         = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#003f6b]/97 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30"
          : "bg-[#003f6b]/95 backdrop-blur border-b border-white/8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <Image src="/logos/logo-enove.png" alt="E9 Tecnologia" width={34} height={34} className="object-contain" />
          <span className="font-bold text-white text-[15px] tracking-tight">E9 Tecnologia</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">

          {/* Dropdown Produtos */}
          <div ref={dropRef} className="relative">
            <button
              onClick={() => setDropOpen(!dropOpen)}
              className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all"
            >
              Plataforma
              <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`} />
            </button>

            {dropOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-[#003f6b] rounded-2xl shadow-2xl border border-white/10 py-2 overflow-hidden">
                {produtos.map((p) => (
                  <Link
                    key={p.label}
                    href={p.href}
                    onClick={() => setDropOpen(false)}
                    className="flex items-start gap-3 px-4 py-3 hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#ffcb05]/15 border border-[#ffcb05]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#ffcb05] text-[10px] font-black">ERP</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">{p.label}</span>
                        {p.badge && (
                          <span className="text-[9px] font-bold bg-[#ffcb05]/20 text-[#ffcb05] px-1.5 py-0.5 rounded-full">{p.badge}</span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{p.desc}</p>
                    </div>
                  </Link>
                ))}
                <div className="mx-4 my-1.5 border-t border-white/10" />
                <Link
                  href="/#modulos"
                  onClick={() => setDropOpen(false)}
                  className="block px-4 py-2.5 text-xs font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Ver todos os módulos do ERP →
                </Link>
              </div>
            )}
          </div>

          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contato"
            className="ml-3 bg-[#ffcb05] text-slate-900 text-sm font-bold px-5 py-2 rounded-lg hover:bg-yellow-400 transition-all hover:scale-105 active:scale-100"
          >
            Solicitar demo
          </Link>
        </nav>

        <button className="md:hidden p-2 text-slate-400 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/8 bg-[#003f6b] px-4 pb-4 space-y-1 pt-2">
          <button
            onClick={() => setMobileDropOpen(!mobileDropOpen)}
            className="w-full flex items-center justify-between py-2.5 px-3 text-sm font-medium text-slate-400 rounded-lg hover:bg-white/5"
          >
            Plataforma
            <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${mobileDropOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileDropOpen && (
            <div className="ml-3 border-l-2 border-[#ffcb05]/30 pl-3 space-y-1">
              {produtos.map((p) => (
                <Link key={p.label} href={p.href} className="block py-2 px-2 rounded-lg hover:bg-white/5" onClick={() => setMenuOpen(false)}>
                  <span className="text-sm font-semibold text-white">{p.label}</span>
                  <p className="text-xs text-slate-500 mt-0.5">{p.desc}</p>
                </Link>
              ))}
            </div>
          )}

          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2.5 px-3 text-sm font-medium text-slate-400 rounded-lg hover:bg-white/5"
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
            Solicitar demonstração
          </Link>
        </div>
      )}
    </header>
  );
}
