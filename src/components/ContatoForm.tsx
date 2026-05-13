"use client";

import { useState } from "react";

interface Props {
  tipo?: "proposta" | "contato" | "parceiro";
}

export default function ContatoForm({ tipo = "contato" }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, tipo }),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-green-100 border border-green-300 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-black text-green-900 text-lg mb-1">Mensagem recebida!</p>
        <p className="text-green-700 text-sm">Nossa equipe entra em contato em até 1 dia útil.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
      {/* Honeypot — invisível para humanos, bots preenchem */}
      <input name="_hp" type="text" tabIndex={-1} aria-hidden="true" style={{ display: "none" }} />
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Nome *</label>
          <input
            name="nome"
            required
            placeholder="Seu nome"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#005792] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Empresa *</label>
          <input
            name="empresa"
            required
            placeholder="Nome da empresa"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#005792] focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">E-mail *</label>
          <input
            name="email"
            type="email"
            required
            placeholder="seu@email.com"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#005792] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Telefone</label>
          <input
            name="telefone"
            type="tel"
            placeholder="(00) 00000-0000"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#005792] focus:border-transparent"
          />
        </div>
      </div>

      {tipo === "parceiro" && (
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Perfil</label>
          <select
            name="perfil"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#005792] focus:border-transparent bg-white"
          >
            <option value="">Selecione...</option>
            <option>Contador / Escritório contábil</option>
            <option>Gestor financeiro</option>
            <option>Consultor de gestão</option>
            <option>Outro</option>
          </select>
        </div>
      )}

      {tipo === "proposta" && (
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Segmento da empresa</label>
          <select
            name="segmento"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#005792] focus:border-transparent bg-white"
          >
            <option value="">Selecione...</option>
            <option>Serviços recorrentes</option>
            <option>Eventos</option>
            <option>Indústria</option>
            <option>Holding / Grupo empresarial</option>
            <option>Agronegócio</option>
            <option>Educação</option>
            <option>Outro</option>
          </select>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          {tipo === "proposta" ? "Conte sobre sua operação" : tipo === "parceiro" ? "Como podemos estruturar a parceria?" : "Mensagem *"}
        </label>
        <textarea
          name="mensagem"
          required
          rows={4}
          placeholder={
            tipo === "proposta"
              ? "Quantas empresas/CNPJs? Qual o principal desafio hoje?"
              : tipo === "parceiro"
              ? "Quantos clientes atende? Qual o perfil de operação deles?"
              : "Como podemos ajudar?"
          }
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#005792] focus:border-transparent resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">Ocorreu um erro. Tente novamente ou envie um e-mail para contato@e9.com.br.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#ffcb05] text-[#003f6b] font-bold py-3.5 rounded-xl hover:bg-yellow-400 transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : tipo === "proposta" ? "Solicitar proposta" : tipo === "parceiro" ? "Quero ser parceiro" : "Enviar mensagem"}
      </button>
    </form>
  );
}
