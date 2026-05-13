import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";

export const metadata: Metadata = {
  title: "Múltiplos CNPJs, filiais e unidades de negócio: como ter visão consolidada — E9 Blog",
  description: "Gerir várias empresas ou unidades em sistemas separados é caro, lento e arriscado. Existe uma forma melhor.",
};

export default function Post() {
  return (
    <BlogPostLayout
      titulo="Múltiplos CNPJs, filiais e unidades de negócio: como ter visão consolidada sem perder o controle individual"
      tag="Gestão Empresarial"
      data="2026-04-20"
      leitura="5 min"
      resumo="Gerir 3, 5 ou 10 empresas — ou dividir a operação de um único CNPJ em unidades distintas — em sistemas separados é caro, lento e arriscado."
      cover="/images/blog/multi-cnpj-cover.jpg"
      coverAlt="Gestor coordenando múltiplas operações de negócio"
    >
      <p>Conteúdo em breve.</p>
    </BlogPostLayout>
  );
}
