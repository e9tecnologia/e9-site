import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";

export const metadata: Metadata = {
  title: "NF-e, NFS-e, CT-e, MDF-e: o que cada documento fiscal significa para sua operação — E9 Blog",
  description: "Guia prático sobre os principais documentos fiscais eletrônicos: quando cada um é obrigatório e o que acontece na sua operação quando é emitido.",
};

export default function Post() {
  return (
    <BlogPostLayout
      titulo="NF-e, NFS-e, CT-e, MDF-e: o que cada documento fiscal significa para a sua operação"
      tag="Fiscal"
      data="2026-06-10"
      leitura="7 min"
      resumo="Guia prático sobre os principais documentos fiscais eletrônicos — quando cada um é obrigatório e o que acontece automaticamente na operação quando é emitido."
      cover="/images/blog/documentos-fiscais-cover.jpg"
      coverAlt="Documentos fiscais eletrônicos"
    >
      <p>Conteúdo em breve.</p>
    </BlogPostLayout>
  );
}
