"use client";

import { useEffect, useRef, useState } from "react";
import {
  DocumentTextIcon, BanknotesIcon, BuildingLibraryIcon,
  CreditCardIcon, ChartBarIcon, ShoppingCartIcon,
  DevicePhoneMobileIcon, CubeIcon, WifiIcon,
} from "@heroicons/react/24/outline";

const recursos = [
  {
    icon: DocumentTextIcon,
    titulo: "Faturamento automatizado",
    desc: "Faturamento por importação de dados, controle de contratos ou individualmente. Faça milhares de faturamentos em segundos.",
  },
  {
    icon: CreditCardIcon,
    titulo: "Integração bancária",
    desc: "Contas a Pagar e Receber integrados com o banco sem necessidade de operar em 2 sistemas.",
  },
  {
    icon: BuildingLibraryIcon,
    titulo: "Documentos eletrônicos",
    desc: "NF-e, CT-e, NFS-e, NFC-e, MDF-e. Envio de faturamento e busca de documentos emitidos contra seu CNPJ.",
  },
  {
    icon: BanknotesIcon,
    titulo: "Gestão financeira",
    desc: "Conciliação de valores, despesas recorrentes, contratos e automação bancária. Tenha o fluxo de caixa na mão.",
  },
  {
    icon: ShoppingCartIcon,
    titulo: "Integração e-commerce",
    desc: "Receba pedidos de vários marketplaces e do próprio e-commerce, gerenciando o estoque direto no sistema.",
  },
  {
    icon: DevicePhoneMobileIcon,
    titulo: "App para processos remotos",
    desc: "Ordem de serviço ou entrega com o seu fluxo de processo no app, integrado direto no sistema.",
  },
  {
    icon: ChartBarIcon,
    titulo: "Gestão orçamentária",
    desc: "Confecção, negociação e execução de orçamento com plano de contas próprio e acompanhamento com forecast.",
  },
  {
    icon: CubeIcon,
    titulo: "Gestão de estoque e compras",
    desc: "Necessidades de compra para revenda, consumo e produção gerenciadas com mínimos, máximos e inteligência artificial.",
  },
  {
    icon: WifiIcon,
    titulo: "Chão de fábrica com IoT",
    desc: "Através de dispositivos IoT desenvolvidos por nós, fazemos o rastreamento da produção com RFID.",
  },
];

export default function RecursosAnimados() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {recursos.map((r, i) => (
        <div
          key={r.titulo}
          className="bg-white rounded-xl border border-slate-100 p-5 flex items-start gap-4 hover:shadow-md hover:border-[#ffcb05]/40 transition-all duration-300"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            transition: `opacity 0.5s ease ${i * 70}ms, transform 0.5s ease ${i * 70}ms, box-shadow 0.2s, border-color 0.2s`,
          }}
        >
          <div className="bg-[#ffcb05]/10 rounded-lg p-2.5 flex-shrink-0 group-hover:bg-[#ffcb05]/20 transition-colors">
            <r.icon className="h-5 w-5 text-slate-700" />
          </div>
          <div>
            <p className="font-semibold text-slate-900 text-sm">{r.titulo}</p>
            <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{r.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
