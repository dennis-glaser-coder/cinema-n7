import { NextResponse } from "next/server";

export const runtime = "nodejs";

const recipient = process.env.RESEND_TO_EMAIL || "info@cinema7.de";

function text(value: unknown, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    return NextResponse.json({ error: "Kontaktformular ist nicht eingerichtet." }, { status: 503 });
  }

  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  try {
    if (origin && host && new URL(origin).host !== host) {
      return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  let payload: Record<string, unknown>;
  try {
    const data: unknown = await request.json();
    if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("Invalid payload");
    payload = data as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  if (text(payload.website, 300)) {
    return NextResponse.json({ ok: true });
  }

  const name = text(payload.name, 120);
  const email = text(payload.email, 200);
  const message = text(payload.message, 4000);
  const model = text(payload.model, 8);
  const phone = text(payload.phone, 60);
  const intent = text(payload.intent, 30) || "beratung";
  const privacy = payload.privacy === "yes";
  const validModel = /^(136|163|190|217|244|271)$/.test(model);

  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !privacy || !["beratung", "showroom"].includes(intent)) {
    return NextResponse.json({ error: "Bitte prüfen Sie Ihre Angaben." }, { status: 400 });
  }
  const topic = intent === "showroom" ? "Vorführung im Showroom" : "Persönliche Beratung";
  const subject = `CINEMA N°7 – ${topic}${validModel ? ` – ${model} Zoll` : ""}`;
  const body = [`Anliegen: ${topic}`, `Name: ${name}`, `E-Mail: ${email}`, `Telefon: ${phone || "nicht angegeben"}`, validModel ? `Modell: ${model} Zoll` : "Modell: offen", "", message || "Keine weitere Nachricht angegeben."].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL,
        to: [recipient],
        reply_to: email,
        subject,
        text: body,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) {
      return NextResponse.json({ error: "Übermittlung fehlgeschlagen." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Übermittlung fehlgeschlagen." }, { status: 502 });
  }
}