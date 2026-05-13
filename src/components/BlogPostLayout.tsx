import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

interface Props {
  titulo: string;
  tag: string;
  data: string;
  leitura: string;
  resumo: string;
  cover?: string;
  coverAlt?: string;
  children: React.ReactNode;
}

export default function BlogPostLayout({
  titulo,
  tag,
  data,
  leitura,
  resumo,
  cover,
  coverAlt,
  children,
}: Props) {
  const [ano, mes, dia] = data.split("-").map(Number);
  const dataFormatada = new Date(ano, mes - 1, dia).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Hero do post */}
        <section
          className="pt-20 pb-14 px-4 sm:px-6"
          style={{ background: "linear-gradient(135deg, #003f6b 0%, #005792 60%, #006aaf 100%)" }}
        >
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/50 hover:text-white/80 transition-colors mb-8"
            >
              <ArrowLeftIcon className="h-3.5 w-3.5" />
              Blog
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-white/10 border border-white/20 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full">
                {tag}
              </span>
              <span className="text-white/40 text-xs">{dataFormatada}</span>
              <span className="text-white/40 text-xs">· {leitura} de leitura</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
              {titulo}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed border-l-4 border-cyan-400/50 pl-5">
              {resumo}
            </p>
          </div>
        </section>

        {/* Cover image */}
        {cover && (
          <div className="bg-slate-900">
            <div className="max-w-3xl mx-auto">
              <div className="relative w-full h-72 sm:h-96">
                <Image
                  src={cover}
                  alt={coverAlt ?? titulo}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        )}

        {/* Conteúdo */}
        <section className="bg-white py-16 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div
              className="
                prose prose-slate prose-lg max-w-none

                prose-headings:font-black prose-headings:text-slate-900 prose-headings:leading-snug
                prose-h2:text-2xl prose-h2:mt-14 prose-h2:mb-5 prose-h2:pb-3 prose-h2:border-b prose-h2:border-slate-100
                prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4

                prose-p:text-slate-600 prose-p:leading-[1.85] prose-p:text-[1.0625rem]

                prose-strong:text-slate-800 prose-strong:font-semibold

                prose-ul:my-6 prose-ul:space-y-2
                prose-ol:my-6 prose-ol:space-y-2
                prose-li:text-slate-600 prose-li:leading-relaxed prose-li:marker:text-[#005792]

                prose-blockquote:my-10 prose-blockquote:not-italic
                prose-blockquote:border-l-[3px] prose-blockquote:border-[#005792]
                prose-blockquote:bg-slate-50 prose-blockquote:rounded-r-xl
                prose-blockquote:py-5 prose-blockquote:px-6
                prose-blockquote:text-slate-700 prose-blockquote:text-[1.0625rem] prose-blockquote:leading-[1.85]

                prose-a:text-[#005792] prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              "
            >
              {children}
            </div>

            {/* CTA fim do post */}
            <div
              className="mt-16 rounded-2xl p-8 text-white text-center"
              style={{ background: "linear-gradient(135deg, #003f6b 0%, #005792 100%)" }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">E9 Gestão</p>
              <p className="text-xl font-black mb-3 leading-snug">
                Quer ver como isso funciona na prática?
              </p>
              <p className="text-white/60 text-sm mb-6">
                Fale com a equipe e entenda como o E9 Gestão resolve esse problema na sua operação.
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 bg-[#ffcb05] text-[#003f6b] font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-colors"
              >
                Solicitar demonstração
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>

            {/* Voltar ao blog */}
            <div className="mt-10 pt-8 border-t border-slate-100">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#005792] hover:text-[#004a7c] transition-colors"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                Ver todos os artigos
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
