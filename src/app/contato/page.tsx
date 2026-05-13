import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContatoForm from "@/components/ContatoForm";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Contato — E9 Tecnologia",
  description: "Fale com a equipe da E9 Tecnologia. Tire dúvidas sobre o E9 Gestão, solicite uma demonstração ou conheça como podemos resolver os desafios da sua operação.",
};

const passos = [
  {
    icon: ChatBubbleLeftRightIcon,
    titulo: "Resposta em até 1 dia útil",
    desc: "Nossa equipe entra em contato para entender sua operação e tirar todas as dúvidas.",
  },
  {
    icon: MagnifyingGlassIcon,
    titulo: "Análise da operação",
    desc: "Avaliamos os processos, o volume e os desafios específicos da sua empresa.",
  },
  {
    icon: DocumentCheckIcon,
    titulo: "Proposta personalizada",
    desc: "Apresentamos a solução mais adequada — com escopo, módulos e implantação definidos.",
  },
];

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section
          className="text-white pt-20 pb-16 px-4 sm:px-6"
          style={{ background: "linear-gradient(135deg, #003f6b 0%, #005792 60%, #006aaf 100%)" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-5">
              <span className="w-6 h-px bg-cyan-400" />
              Fale com a E9
              <span className="w-6 h-px bg-cyan-400" />
            </span>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4">
              Vamos entender sua{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ffcb05 0%, #ffd740 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                operação
              </span>
            </h1>
            <p className="text-white/65 text-lg max-w-xl mx-auto">
              Tem dúvidas, quer conhecer o E9 Gestão ou precisa de uma solução sob medida? Nossa equipe responde rápido.
            </p>
          </div>
        </section>

        {/* Conteúdo principal */}
        <section className="bg-white py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-start">

            {/* Coluna esquerda */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-2">Fale com a equipe</h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Empresa com operação complexa, múltiplos CNPJs, unidades de negócio dentro de um CNPJ, demanda fiscal avançada ou processo único que precisa de módulo customizado — a E9 tem experiência com tudo isso.
              </p>

              {/* Contatos */}
              <div className="space-y-3 mb-8">
                <a
                  href="mailto:contato@e9.com.br"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-[#005792]/25 hover:bg-slate-50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#005792]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#005792]/12 transition-colors">
                    <EnvelopeIcon className="h-5 w-5 text-[#005792]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">E-mail</p>
                    <p className="text-sm font-semibold text-slate-800">contato@e9.com.br</p>
                  </div>
                </a>

                <a
                  href="tel:+551932013325"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-[#005792]/25 hover:bg-slate-50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#005792]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#005792]/12 transition-colors">
                    <PhoneIcon className="h-5 w-5 text-[#005792]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">Telefone</p>
                    <p className="text-sm font-semibold text-slate-800">(19) 3201-3325</p>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=Rua+Pascoal+Nicholau+Purshio+398+Campinas+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-[#005792]/25 hover:bg-slate-50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#005792]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#005792]/12 transition-colors">
                    <MapPinIcon className="h-5 w-5 text-[#005792]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">Endereço</p>
                    <p className="text-sm font-semibold text-slate-800">Rua Pascoal Nicholau Purshio, 398</p>
                    <p className="text-xs text-slate-400">Campinas – SP</p>
                  </div>
                </a>
              </div>

              {/* O que acontece depois */}
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
                  O que acontece depois do envio
                </p>
                <div className="space-y-5">
                  {passos.map((passo, i) => (
                    <div key={passo.titulo} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#005792]/8 border border-[#005792]/15 flex items-center justify-center">
                        <span className="text-[#005792] text-xs font-black">0{i + 1}</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 mb-0.5">{passo.titulo}</p>
                        <p className="text-xs text-slate-400 leading-relaxed">{passo.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Já é cliente */}
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <p className="text-sm font-black text-amber-800 mb-1">Já é cliente E9?</p>
                <p className="text-xs text-amber-700 leading-relaxed">
                  O suporte está incluso na sua mensalidade. Entre em contato diretamente pelo canal de atendimento da sua conta — não pelo formulário ao lado.
                </p>
              </div>
            </div>

            {/* Formulário */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#005792] mb-4">
                Envie uma mensagem
              </p>
              <ContatoForm tipo="contato" />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
