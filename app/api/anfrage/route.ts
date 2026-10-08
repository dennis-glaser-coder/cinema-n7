import { NextResponse } from "next/server";

export const runtime = "nodejs";

const recipient = process.env.RESEND_TO_EMAIL || "kontakt@cinema7.de";

function text(value: unknown, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    return NextResponse.json({ error: "Kontaktformular ist nicht eingerichtet." }, { status: 503 });
  }

  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host && new URL(origin).host !== host) {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 403 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
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
  const privacy = payload.privacy === "yes";
  const validModel = /^(136|163|190|217|244|271)$/.test(model);

  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 8 || !privacy) {
    return NextResponse.json({ error: "Bitte prüfen Sie Ihre Angaben." }, { status: 400 });
  }
  const subject = validModel ? `CINEMA N°7 Anfrage – ${model} Zoll` : "CINEMA N°7 Projektanfrage";
  const body = [`Name: ${name}`, `E-Mail: ${email}`, validModel ? `Modell: ${model} Zoll` : "Modell: offen", "", message].join("\n");

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
    });
    if (!response.ok) {
      return NextResponse.json({ error: "Übermittlung fehlgeschlagen." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Übermittlung fehlgeschlagen." }, { status: 502 });
  }
}
