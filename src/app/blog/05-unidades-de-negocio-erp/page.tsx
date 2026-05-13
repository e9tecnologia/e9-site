import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";

export const metadata: Metadata = {
  title: "Unidades de negócio dentro de um mesmo CNPJ: quando faz sentido e como controlar — E9 Blog",
  description: "Você não precisa abrir outro CNPJ para ter controle separado por operação. Entenda o conceito de unidades de negócio e como aplicar no ERP.",
};

export default function Post() {
  return (
    <BlogPostLayout
      titulo="Unidades de negócio dentro de um mesmo CNPJ: quando faz sentido e como controlar"
      tag="Gestão Empresarial"
      data="2026-06-01"
      leitura="5 min"
      resumo="Você não precisa abrir outro CNPJ para ter controle separado por operação. Entenda o conceito de unidades de negócio e como o ERP pode gerenciar isso."
      cover="/images/blog/unidades-negocio-cover.jpg"
      coverAlt="Empresário gerenciando múltiplas unidades de negócio"
    >
      <p>Conteúdo em breve.</p>
    </BlogPostLayout>
  );
}
