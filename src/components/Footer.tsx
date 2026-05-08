import Link from "next/link";
import Image from "next/image";

const navEmpresa = [
  { label: "Início",    href: "/" },
  { label: "Soluções",  href: "/#sistemas" },
  { label: "Cases",     href: "/cases" },
  { label: "Parceiros", href: "/parceiros" },
  { label: "Blog",      href: "/blog" },
  { label: "Contato",   href: "/contato" },
];

const navProdutos = [
  { label: "E9 Gestão",    href: "/gestao",              desc: "ERP para PMEs" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      {/* Faixa CTA */}
      <div className="border-t-2 border-[#ffcb05] bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-300 text-sm">
            Tem um projeto ou quer conhecer melhor nossos produtos?
          </p>
          <Link
            href="/contato"
            className="flex-shrink-0 bg-[#ffcb05] text-slate-900 text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Fale com a equipe →
          </Link>
        </div>
      </div>

      {/* Corpo do rodapé */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Marca — 2 colunas */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logos/logo-enove.png" alt="E9 Tecnologia" width={32} height={32} className="object-contain" />
              <span className="font-bold text-white text-[15px]">E9 Tecnologia</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Fábrica de software especializada em sistemas de gestão, aplicativos e soluções sob medida para empresas. Desde 2003.
            </p>

            {/* Contato */}
            <div className="space-y-2 text-sm">
              <a
                href="https://maps.google.com/?q=Rua+Pascoal+Nicholau+Purshio+398+Campinas+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-slate-500 hover:text-slate-300 transition-colors group"
              >
                <span className="mt-0.5 text-slate-600 group-hover:text-[#ffcb05] transition-colors">📍</span>
                <span>Rua Pascoal Nicholau Purshio, 398<br />Campinas – SP</span>
              </a>
              <a href="tel:+551932013325" className="flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors group">
                <span className="text-slate-600 group-hover:text-[#ffcb05] transition-colors">📞</span>
                (19) 3201-3325
              </a>
              <a href="mailto:contato@e9.com.br" className="flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors group">
                <span className="text-slate-600 group-hover:text-[#ffcb05] transition-colors">✉️</span>
                contato@e9.com.br
              </a>
              <p className="flex items-center gap-2 text-slate-600">
                <span>🕐</span>
                Seg–Sex, 8h–18h
              </p>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://linkedin.com/company/e9tecnologia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-white border border-slate-700 hover:border-slate-500 px-3 py-1.5 rounded-lg transition-all"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/e9tecnologia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-white border border-slate-700 hover:border-slate-500 px-3 py-1.5 rounded-lg transition-all"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">Empresa</p>
            <ul className="space-y-2.5 text-sm">
              {navEmpresa.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">Produtos</p>
            <ul className="space-y-3 text-sm">
              {navProdutos.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group block"
                  >
                    <span className="text-slate-400 group-hover:text-white transition-colors font-medium">{item.label}</span>
                    <span className="block text-xs text-slate-600 mt-0.5">{item.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Especialidades */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">Especialidades</p>
            <ul className="space-y-2 text-sm text-slate-500">
              {[
                "Sistemas de Gestão (ERP)",
                "Desenvolvimento sob medida",
                "Aplicativos web e mobile",
                "Integrações fiscais",
                "Automação financeira",
                "IoT & RFID",
              ].map((s) => (
                <li key={s} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#ffcb05]/50 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-slate-600">
          <span>© {new Date().getFullYear()} E9 Tecnologia LTDA. Todos os direitos reservados.</span>
          <span>CNPJ: 19.333.808/0001-19</span>
        </div>
      </div>
    </footer>
  );
}
