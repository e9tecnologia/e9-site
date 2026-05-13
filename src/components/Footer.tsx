import Link from "next/link";
import Image from "next/image";

const navEmpresa = [
  { label: "Início",    href: "/" },
  { label: "Módulos",   href: "/#modulos" },
  { label: "Cases",     href: "/cases" },
  { label: "Parceiros", href: "/parceiros" },
  { label: "Blog",      href: "/blog" },
  { label: "Contato",   href: "/contato" },
];

const modulos = [
  "Financeiro",
  "Fiscal & Tributário",
  "Estoque & Almoxarifado",
  "Compras & Suprimentos",
  "Vendas & Faturamento",
  "RFID & Rastreabilidade",
  "Integração Bancária",
  "Dashboards & BI",
  "Mobile & PDA",
  "Automação Operacional",
];

export default function Footer() {
  return (
    <footer className="text-white border-t border-white/8" style={{background: "linear-gradient(180deg, #003f6b 0%, #002f52 100%)"}}>

      {/* Faixa CTA */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-white text-base">Pronto para modernizar sua operação?</p>
            <p className="text-slate-500 text-sm mt-0.5">Converse com a equipe e conheça o E9 Gestão.</p>
          </div>
          <Link
            href="/contato"
            className="flex-shrink-0 bg-[#ffcb05] text-slate-900 text-sm font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all hover:scale-105"
          >
            Solicitar demonstração →
          </Link>
        </div>
      </div>

      {/* Corpo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Marca */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-2">
              <Image src="/logos/logo-enove.png" alt="E9 Tecnologia" width={32} height={32} className="object-contain" />
              <div>
                <span className="font-bold text-white text-[15px] block leading-none">E9 Tecnologia</span>
                <span className="text-[9px] text-slate-500 font-medium tracking-widest uppercase">Plataforma ERP</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6 mt-4">
              Plataforma ERP própria para gestão financeira, fiscal, operacional e industrial. Tecnologia empresarial consolidada desde 2003.
            </p>

            {/* Contato */}
            <div className="space-y-2.5 text-sm">
              <a
                href="https://maps.google.com/?q=Rua+Pascoal+Nicholau+Purshio+398+Campinas+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-slate-500 hover:text-slate-300 transition-colors"
              >
                <span className="mt-0.5 text-slate-600 flex-shrink-0">📍</span>
                <span>Rua Pascoal Nicholau Purshio, 398<br />Campinas – SP</span>
              </a>
              <a href="tel:+551932013325" className="flex items-center gap-2.5 text-slate-500 hover:text-slate-300 transition-colors">
                <span className="text-slate-600">📞</span>
                (19) 3201-3325
              </a>
              <a href="mailto:contato@e9.com.br" className="flex items-center gap-2.5 text-slate-500 hover:text-slate-300 transition-colors">
                <span className="text-slate-600">✉️</span>
                contato@e9.com.br
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://linkedin.com/company/e9tecnologia"
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn E9 Tecnologia"
                className="group w-9 h-9 rounded-lg border border-white/10 hover:border-[#0a66c2]/60 bg-white/4 hover:bg-[#0a66c2]/15 flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 text-slate-500 group-hover:text-[#0a66c2] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/e9tecnologia"
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram E9 Tecnologia"
                className="group w-9 h-9 rounded-lg border border-white/10 hover:border-pink-500/50 bg-white/4 hover:bg-pink-500/10 flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 text-slate-500 group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-5">Empresa</p>
            <ul className="space-y-3 text-sm">
              {navEmpresa.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-500 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Módulos ERP */}
          <div className="lg:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-5">Módulos E9 Gestão</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {modulos.map((m) => (
                <div key={m} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors cursor-default">
                  <span className="w-1 h-1 rounded-full bg-[#ffcb05]/50 flex-shrink-0" />
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-white/8 mt-14 pt-7 flex flex-col sm:flex-row justify-between gap-2 text-xs text-slate-600">
          <span>© {new Date().getFullYear()} E9 Tecnologia LTDA. Todos os direitos reservados.</span>
          <span>CNPJ: 19.333.808/0001-19 · Campinas, SP</span>
        </div>
      </div>
    </footer>
  );
}
