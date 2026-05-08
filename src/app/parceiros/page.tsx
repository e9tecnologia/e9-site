import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContatoForm from "@/components/ContatoForm";
import {
  ComputerDesktopIcon,
  DocumentArrowDownIcon,
  ArchiveBoxArrowDownIcon,
  PaperClipIcon,
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Parceiros E9 — Portal do Contador e Programa de Parceria",
  description: "Acesso facilitado para contadores: baixa em lote de documentos fiscais, de-para contábil e comprovantes integrados. Saiba também sobre nosso programa de indicação.",
};

const funcionalidades = [
  {
    icon: ComputerDesktopIcon,
    titulo: "Acesso ao sistema do cliente",
    desc: "O contador faz login diretamente no E9 Gestão para consultar dados contábeis, fiscais e financeiros do seu cliente — sem depender de exportações manuais.",
  },
  {
    icon: ArrowsRightLeftIcon,
    titulo: "De-Para contábil",
    desc: "Exportação do relatório contábil mapeada para o formato do escritório — sem retrabalho de reclassificação ou adaptação manual.",
  },
  {
    icon: PaperClipIcon,
    titulo: "Comprovantes e anexos",
    desc: "Comprovantes de pagamento, transferências e documentos de suporte ficam anexados diretamente nos lançamentos — acessíveis a qualquer momento.",
  },
  {
    icon: DocumentArrowDownIcon,
    titulo: "Documentos fiscais centralizados",
    desc: "NF-e, NFS-e, NFC-e, CT-e e MDF-e emitidos e recebidos disponíveis em um único lugar, com filtros por período, tipo e status.",
  },
  {
    icon: ArchiveBoxArrowDownIcon,
    titulo: "Baixa em lote por período",
    desc: "Selecione o mês e baixe todos os documentos do período em um arquivo compactado. Simples, rápido e sem precisar abrir nota por nota.",
  },
];

const beneficiosParceiro = [
  "Retorno financeiro por indicação de novos clientes",
  "Participação recorrente conforme modelo negociado",
  "Suporte técnico para adaptar o sistema ao cliente indicado",
  "Módulos customizados para operações específicas",
  "Relacionamento direto com a equipe E9",
];

export default function ParceirosPage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="bg-slate-900 text-white pt-20 pb-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-[#ffcb05]/20 text-[#ffcb05] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              Programa de Parceiros
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Para contadores e gestores{" "}
              <span className="text-[#ffcb05]">que querem ir além.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Acesso facilitado ao sistema dos seus clientes, ferramentas pensadas para o dia a dia contábil e uma parceria comercial com retorno real.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#portal" className="bg-[#ffcb05] text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors">
                Ver o Portal do Contador
              </a>
              <a href="#parceria" className="border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Programa de indicação
              </a>
            </div>
          </div>
        </section>

        {/* ── Portal do Contador ── */}
        <section id="portal" className="bg-slate-50 py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block bg-[#005792]/10 text-[#005792] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                Portal do Contador
              </span>
              <h2 className="text-3xl font-bold text-slate-900">Tudo que o contador precisa, sem burocracia</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">
                Acesso direto ao sistema do cliente com ferramentas específicas para a rotina contábil — sem depender de e-mails, planilhas ou exportações manuais.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {funcionalidades.map((f) => (
                <div key={f.titulo} className="bg-white rounded-2xl border border-slate-100 p-7 hover:shadow-md hover:border-[#005792]/20 transition-all duration-300">
                  <div className="bg-[#005792]/8 rounded-xl p-3 w-fit mb-4">
                    <f.icon className="h-6 w-6 text-[#005792]" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{f.titulo}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}

              {/* Card destaque — baixa em lote */}
              <div className="bg-[#005792] rounded-2xl p-7 flex flex-col justify-between md:col-span-2 lg:col-span-1">
                <div>
                  <div className="bg-[#ffcb05]/20 rounded-xl p-3 w-fit mb-4">
                    <ArchiveBoxArrowDownIcon className="h-6 w-6 text-[#ffcb05]" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Exemplo prático</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Contador precisa de todas as notas emitidas em março? Seleciona o período e baixa tudo em um arquivo ZIP — em segundos, sem abrir nota por nota.
                  </p>
                </div>
                <div className="mt-6 bg-white/10 rounded-xl px-4 py-3 text-sm text-white/80 font-mono">
                  📅 Período: mar/2025 → <span className="text-[#ffcb05] font-bold">↓ ZIP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Parceria comercial ── */}
        <section id="parceria" className="bg-white py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div>
                <span className="inline-block bg-[#ffcb05]/20 text-slate-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                  Parceria comercial
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Indique clientes e tenha retorno real
                </h2>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Contadores e gestores financeiros que conhecem os desafios dos seus clientes são parceiros naturais da E9. Se você identifica uma operação que precisa de um ERP robusto e flexível, podemos construir essa parceria juntos.
                </p>
                <ul className="space-y-3">
                  {beneficiosParceiro.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-[#005792] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    icon: CurrencyDollarIcon,
                    titulo: "Retorno financeiro",
                    desc: "Modelo de comissão e/ou recorrência definido conforme a parceria — sem tabela engessada.",
                  },
                  {
                    icon: WrenchScrewdriverIcon,
                    titulo: "Sistema adaptado ao cliente",
                    desc: "Desenvolvemos módulos específicos para atender as demandas operacionais dos clientes que você indica.",
                  },
                  {
                    icon: HandRaisedIcon,
                    titulo: "Suporte direto",
                    desc: "Relacionamento próximo com a equipe E9 — sem call center, sem ticket genérico.",
                  },
                ].map((item) => (
                  <div key={item.titulo} className="flex gap-4 bg-slate-50 rounded-2xl p-5 border border-slate-100">
                    <div className="bg-white rounded-xl p-2.5 h-fit shadow-sm border border-slate-100">
                      <item.icon className="h-5 w-5 text-[#005792]" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm mb-1">{item.titulo}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Formulário ── */}
        <section id="contato-parceiro" className="bg-slate-50 py-20 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">Quero ser parceiro</h2>
              <p className="text-slate-500 mt-3">
                Fale com a equipe E9 e entendemos como estruturar a melhor parceria para o seu perfil.
              </p>
            </div>
            <ContatoForm tipo="parceiro" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
