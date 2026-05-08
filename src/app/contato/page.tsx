import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContatoForm from "@/components/ContatoForm";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a equipe da E9 Tecnologia.",
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-white py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">Fale com a gente</h1>
              <p className="text-slate-600 leading-relaxed mb-8">
                Tem uma dúvida, quer conhecer melhor os sistemas ou precisa de uma solução personalizada? Nossa equipe responde rápido.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="h-5 w-5 text-[#005792]" />
                  <span className="text-slate-700 text-sm">contato@e9.com.br</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 text-[#005792]" />
                  <span className="text-slate-700 text-sm">A definir</span>
                </div>
              </div>
              <div className="mt-8 bg-[#ffcb05]/10 border border-[#ffcb05]/30 rounded-xl p-5">
                <p className="font-semibold text-[#005792] mb-1">Já é cliente?</p>
                <p className="text-slate-600 text-sm">O suporte está incluso na sua mensalidade. Entre em contato diretamente pelo canal de atendimento da sua conta.</p>
              </div>
            </div>
            <ContatoForm tipo="contato" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
