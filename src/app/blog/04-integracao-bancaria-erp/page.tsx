import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";

export const metadata: Metadata = {
  title: "Integração bancária no ERP: o que muda na prática — E9 Blog",
  description: "Quando você para de fazer operações manuais no banco e começa a conciliar diretamente no sistema, o tempo e os erros diminuem drasticamente.",
};

export default function Post() {
  return (
    <BlogPostLayout
      titulo="Integração bancária no ERP: o que muda na prática"
      tag="Financeiro"
      data="2026-04-10"
      leitura="5 min"
      resumo="Quando você para de fazer operações manuais no banco e começa a conciliar diretamente no sistema, o tempo e os erros diminuem drasticamente."
      cover="/images/blog/integracao-bancaria-cover.jpg"
      coverAlt="Gestão bancária integrada ao ERP"
    >
      <p>Conteúdo em breve.</p>
    </BlogPostLayout>
  );
}
