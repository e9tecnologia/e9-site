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
  title: "Parceiros — E9 Tecnologia",
  description: "Portal do contador e programa de parceria. Acesso direto ao sistema do cliente, baixa em lote de documentos e retorno financeiro por indicação.",
};

const funcionalidades = [
  {
    icon: ComputerDesktopIcon,
    titulo: "Acesso ao sistema do cliente",
    desc: "O contador faz login diretamente no E9 Gestão para consultar dados contábeis, fiscais e financeiros — sem depender de exportações manuais.",
  },
  {
    icon: ArrowsRightLeftIcon,
    titulo: "De-Para contábil",
    desc: "Exportação do relatório contábil mapeada para o formato do escritório — sem retrabalho de reclassificação ou adaptação manual.",
  },
  {
    icon: PaperClipIcon,
    titulo: "Comprovantes e anexos",
    desc: "Comprovantes de pagamento e documentos de suporte ficam anexados diretamente nos lançamentos — acessíveis a qualquer momento.",
  },
  {
    icon: DocumentArrowDownIcon,
    titulo: "Documentos fiscais centralizados",
    desc: "NF-e, NFS-e, NFC-e, CT-e e MDF-e emitidos e recebidos em um único lugar, com filtros por período, tipo e status.",
  },
  {
    icon: ArchiveBoxArrowDownIcon,
    titulo: "Baixa em lote por período",
    desc: "Selecione o mês e baixe todos os documentos do período em um arquivo compactado. Sem abrir nota por nota.",
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

        {/* Hero */}
        <section
          className="text-white pt-20 pb-24 px-4 sm:px-6"
          style={{ background: "linear-gradient(135deg, #003f6b 0%, #005792 60%, #006aaf 100%)" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-6">
              <span className="w-6 h-px bg-cyan-400" />
              Programa de Parceiros
              <span className="w-6 h-px bg-cyan-400" />
            </span>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-5">
              Para contadores e gestores{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ffcb05 0%, #ffd740 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                que querem ir além.
              </span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Acesso facilitado ao sistema dos seus clientes, ferramentas pensadas para o dia a dia contábil e uma parceria comercial com retorno real.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#portal"
                className="inline-flex items-center justify-center bg-[#ffcb05] text-[#003f6b] font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-colors"
              >
                Ver o Portal do Contador
              </a>
              <a
                href="#parceria"
                className="inline-flex items-center justify-center border border-white/25 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                Programa de indicação
              </a>
            </div>
          </div>
        </section>

        {/* Portal do Contador */}
        <section id="portal" className="bg-white py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#005792] mb-3">
                Portal do Contador
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
                Tudo que o contador precisa, sem burocracia
              </h2>
              <p className="text-slate-400 mt-3 max-w-xl mx-auto">
                Acesso direto ao sistema do cliente com ferramentas específicas para a rotina contábil — sem depender de e-mails, planilhas ou exportações manuais.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {funcionalidades.map((f) => (
                <div
                  key={f.titulo}
                  className="bg-slate-50 rounded-2xl border border-slate-100 p-7 hover:shadow-md hover:border-[#005792]/20 transition-all duration-300"
                >
                  <div
                    className="rounded-xl p-3 w-fit mb-4"
                    style={{ background: "#00579210" }}
                  >
                    <f.icon className="h-6 w-6 text-[#005792]" />
                  </div>
                  <h3 className="font-black text-slate-900 mb-2">{f.titulo}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}

              {/* Card destaque */}
              <div
                className="rounded-2xl p-7 flex flex-col justify-between"
                style={{ background: "linear-gradient(135deg, #003f6b 0%, #005792 100%)" }}
              >
                <div>
                  <div className="bg-[#ffcb05]/15 rounded-xl p-3 w-fit mb-4">
                    <ArchiveBoxArrowDownIcon className="h-6 w-6 text-[#ffcb05]" />
                  </div>
                  <h3 className="font-bold text-white mb-2">Exemplo prático</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Contador precisa de todas as notas emitidas em março? Seleciona o período e baixa tudo em um arquivo ZIP — em segundos, sem abrir nota por nota.
                  </p>
                </div>
                <div className="mt-6 bg-white/8 rounded-xl px-4 py-3 text-sm text-white/75 font-mono">
                  📅 mar/2025 → <span className="text-[#ffcb05] font-bold">↓ ZIP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parceria comercial */}
        <section id="parceria" className="bg-slate-50 py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#005792] mb-4">
                  Parceria comercial
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
                  Indique clientes e tenha retorno real
                </h2>
                <p className="text-slate-400 leading-relaxed mb-6">
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
                  <div
                    key={item.titulo}
                    className="flex gap-4 bg-white rounded-2xl p-5 border border-slate-100 hover:border-[#005792]/20 hover:shadow-sm transition-all"
                  >
                    <div className="bg-slate-50 rounded-xl p-2.5 h-fit border border-slate-100">
                      <item.icon className="h-5 w-5 text-[#005792]" />
                    </div>
                    <div>
                      <p className="font-black text-slate-900 text-sm mb-1">{item.titulo}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Formulário */}
        <section id="contato-parceiro" className="bg-white py-20 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#005792] mb-3">
                Vamos conversar
              </span>
              <h2 className="text-3xl font-black text-slate-900">Quero ser parceiro</h2>
              <p className="text-slate-400 mt-3">
                Fale com a equipe E9 e estruturamos a melhor parceria para o seu perfil.
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
