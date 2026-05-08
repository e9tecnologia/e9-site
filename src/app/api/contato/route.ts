import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting simples em memória — reset a cada 60s por IP
const rateMap = new Map<string, { count: number; ts: number }>();
const RATE_LIMIT = 3;       // máx 3 envios
const RATE_WINDOW = 60_000; // por minuto

function checkRate(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.ts > RATE_WINDOW) {
    rateMap.set(ip, { count: 1, ts: now });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

const tipoLabels: Record<string, string> = {
  proposta:  "Nova proposta",
  contato:   "Novo contato",
  parceiro:  "Novo parceiro",
};

export async function POST(req: NextRequest) {
  try {
    // Honeypot — bots preenchem campos ocultos
    const body = await req.json();
    if (body._hp) {
      return NextResponse.json({ ok: true }); // descarta silenciosamente
    }

    const { nome, empresa, email, telefone, segmento, perfil, mensagem, tipo } = body;

    if (!nome || !email || !mensagem) {
      return NextResponse.json({ error: "Campos obrigatórios faltando." }, { status: 400 });
    }

    // Rate limiting por IP
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
    if (!checkRate(ip)) {
      return NextResponse.json({ error: "Muitas tentativas. Aguarde um momento." }, { status: 429 });
    }

    const assunto = `[E9 Site] ${tipoLabels[tipo] ?? "Formulário"} — ${nome}${empresa ? ` (${empresa})` : ""}`;

    const linhasExtras = [
      empresa   && `<tr><td style="color:#64748b;padding:4px 0">Empresa</td><td style="padding:4px 0"><strong>${empresa}</strong></td></tr>`,
      telefone  && `<tr><td style="color:#64748b;padding:4px 0">Telefone</td><td style="padding:4px 0"><strong>${telefone}</strong></td></tr>`,
      segmento  && `<tr><td style="color:#64748b;padding:4px 0">Segmento</td><td style="padding:4px 0"><strong>${segmento}</strong></td></tr>`,
      perfil    && `<tr><td style="color:#64748b;padding:4px 0">Perfil</td><td style="padding:4px 0"><strong>${perfil}</strong></td></tr>`,
    ].filter(Boolean).join("\n");

    const campos = [
      `Nome:     ${nome}`,
      `Email:    ${email}`,
      empresa  ? `Empresa:  ${empresa}`  : null,
      telefone ? `Telefone: ${telefone}` : null,
      segmento ? `Segmento: ${segmento}` : null,
      perfil   ? `Perfil:   ${perfil}`   : null,
    ].filter(Boolean).join("\n");

    const html = `
      <div style="font-family:monospace;max-width:600px;margin:0 auto;color:#1e293b;font-size:14px;line-height:1.7">
        <div style="border-left:4px solid #005792;padding:4px 0 4px 16px;margin-bottom:24px">
          <p style="margin:0;font-size:16px;font-weight:bold;font-family:sans-serif">${tipoLabels[tipo] ?? "Formulário"}</p>
          <p style="margin:0;color:#64748b;font-size:12px;font-family:sans-serif">e9.com.br — ${new Date().toLocaleString("pt-BR")}</p>
        </div>

        <pre style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:20px;margin:0 0 20px;white-space:pre-wrap;font-size:13px;line-height:1.8">${campos}</pre>

        <p style="margin:0 0 8px;font-weight:bold;font-family:sans-serif">Mensagem</p>
        <pre style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:20px;margin:0;white-space:pre-wrap;font-size:13px;line-height:1.8">${mensagem}</pre>

        <p style="margin:16px 0 0;font-size:11px;color:#94a3b8;font-family:sans-serif">Responda este email para contatar diretamente o remetente.</p>
      </div>
    `;

    await resend.emails.send({
      from: "E9 Site <onboarding@resend.dev>",  // trocar para no-reply@e9.com.br após verificar domínio
      to:   "thiago@e9.com.br", // trocar para contato@e9.com.br após verificar domínio no Resend
      replyTo: email,
      subject: assunto,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erro no formulário:", err);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}
