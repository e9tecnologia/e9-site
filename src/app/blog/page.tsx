import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description: "Conteúdo sobre gestão financeira, fiscal e boas práticas para PMEs.",
};

// Posts virão de arquivos MDX em src/content/blog/
// Por enquanto, mock de exemplo
const posts = [
  {
    slug: "controle-financeiro-sem-planilha",
    titulo: "Por que sua empresa não pode mais depender de planilhas para o financeiro",
    resumo: "Planilhas funcionaram por muito tempo. Mas existe um ponto em que elas se tornam o maior risco do seu negócio.",
    data: "2026-05-01",
    tag: "Gestão Financeira",
  },
  {
    slug: "multi-cnpj-como-gerenciar",
    titulo: "Holding com múltiplos CNPJs: como ter visão consolidada sem perder o controle individual",
    resumo: "Gerir 3, 5 ou 10 empresas em sistemas separados é caro, lento e arriscado. Existe uma forma melhor.",
    data: "2026-04-20",
    tag: "Gestão Empresarial",
  },
  {
    slug: "integracao-bancaria-erp",
    titulo: "Integração bancária no ERP: o que muda na prática",
    resumo: "Quando você para de fazer operações manuais no banco e começa a conciliar diretamente no sistema, o tempo e os erros diminuem drasticamente.",
    data: "2026-04-10",
    tag: "Financeiro",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-white py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-slate-900 mb-3">Blog</h1>
              <p className="text-slate-600">
                Gestão financeira, fiscal e boas práticas para empresas que querem crescer com controle.
              </p>
            </div>
            <div className="space-y-6">
              {posts.map((post) => (
                <article key={post.slug} className="border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#005792]/10 text-[#005792] text-xs font-semibold px-3 py-1 rounded-full">
                      {post.tag}
                    </span>
                    <time className="text-slate-400 text-xs">
                      {new Date(post.data).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}
                    </time>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2 hover:text-[#005792] transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.titulo}</Link>
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.resumo}</p>
                  <Link href={`/blog/${post.slug}`} className="text-[#005792] text-sm font-semibold hover:underline">
                    Ler artigo →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
