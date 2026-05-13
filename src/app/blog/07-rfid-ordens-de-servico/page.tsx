import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";

export const metadata: Metadata = {
  title: "RFID no chão de fábrica: como rastrear ordens de serviço sem planilha — E9 Blog",
  description: "Como a identificação por RFID/NFC integrada ao ERP elimina o papel e as planilhas no acompanhamento de ordens de serviço na produção.",
};

export default function Post() {
  return (
    <BlogPostLayout
      titulo="RFID no chão de fábrica: como rastrear ordens de serviço sem planilha e sem retrabalho"
      tag="Produção & RFID"
      data="2026-06-20"
      leitura="6 min"
      resumo="Saber onde está cada ordem de serviço no processo produtivo, quem executou cada etapa e quando — sem planilha, sem papel, integrado ao ERP em tempo real."
      cover="/images/blog/rfid-fabrica-cover.jpg"
      coverAlt="Operador com coletor RFID no chão de fábrica"
    >
      <p>Conteúdo em breve.</p>
    </BlogPostLayout>
  );
}
