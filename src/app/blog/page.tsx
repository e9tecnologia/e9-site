import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Blog — E9 Tecnologia",
  description: "Gestão financeira, fiscal e boas práticas para empresas que precisam de controle operacional real.",
};

const posts = [
  {
    slug: "controle-financeiro-sem-planilha",
    titulo: "Por que sua empresa não pode mais depender de planilhas para o financeiro",
    resumo: "Planilhas funcionaram por muito tempo. Mas existe um ponto em que elas se tornam o maior risco do seu negócio.",
    data: "2026-05-01",
    tag: "Gestão Financeira",
    destaque: true,
  },
  {
    slug: "multi-cnpj-como-gerenciar",
    titulo: "Múltiplos CNPJs, filiais e unidades de negócio: como ter visão consolidada sem perder o controle individual",
    resumo: "Gerir várias empresas, filiais ou unidades de negócio em sistemas separados é caro, lento e arriscado. Existe uma forma melhor.",
    data: "2026-04-20",
    tag: "Gestão Empresarial",
    destaque: false,
  },
  {
    slug: "integracao-bancaria-erp",
    titulo: "Integração bancária no ERP: o que muda na prática",
    resumo: "Quando você para de fazer operações manuais no banco e começa a conciliar diretamente no sistema, o tempo e os erros diminuem drasticamente.",
    data: "2026-04-10",
    tag: "Financeiro",
    destaque: false,
  },
];

const tagColors: Record<string, string> = {
  "Gestão Financeira":  "bg-[#005792]/8 text-[#005792]",
  "Gestão Empresarial": "bg-violet-50 text-violet-700",
  "Financeiro":         "bg-sky-50 text-sky-700",
};

export default function BlogPage() {
  const [destaque, ...demais] = posts;

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section
          className="text-white pt-20 pb-20 px-4 sm:px-6"
          style={{ background: "linear-gradient(135deg, #003f6b 0%, #005792 60%, #006aaf 100%)" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-6">
              <span className="w-6 h-px bg-cyan-400" />
              Blog E9 Tecnologia
              <span className="w-6 h-px bg-cyan-400" />
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
              Gestão empresarial{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ffcb05 0%, #ffd740 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                na prática
              </span>
            </h1>
            <p className="text-white/65 text-lg max-w-xl mx-auto">
              Financeiro, fiscal e boas práticas para empresas que querem crescer com controle real.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="bg-slate-50 py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">

            {/* Post destaque */}
            {destaque && (
              <Link
                href={`/blog/${destaque.slug}`}
                className="block bg-white rounded-2xl border border-slate-100 p-8 mb-6 hover:shadow-md hover:border-[#005792]/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${tagColors[destaque.tag] ?? "bg-slate-100 text-slate-600"}`}>
                    {destaque.tag}
                  </span>
                  <span className="bg-[#ffcb05]/20 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full">
                    Mais recente
                  </span>
                  <time className="text-slate-400 text-xs ml-auto">
                    {new Date(destaque.data).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}
                  </time>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 leading-snug group-hover:text-[#005792] transition-colors">
                  {destaque.titulo}
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">{destaque.resumo}</p>
                <span className="inline-flex items-center gap-1.5 text-[#005792] text-sm font-bold">
                  Ler artigo <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>
            )}

            {/* Demais posts */}
            <div className="space-y-4">
              {demais.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex gap-6 bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-md hover:border-[#005792]/20 transition-all duration-300 group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${tagColors[post.tag] ?? "bg-slate-100 text-slate-600"}`}>
                        {post.tag}
                      </span>
                      <time className="text-slate-400 text-xs">
                        {new Date(post.data).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}
                      </time>
                    </div>
                    <h2 className="text-base font-black text-slate-900 mb-2 leading-snug group-hover:text-[#005792] transition-colors">
                      {post.titulo}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{post.resumo}</p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <ArrowRightIcon className="h-5 w-5 text-slate-300 group-hover:text-[#005792] transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
