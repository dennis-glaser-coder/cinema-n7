import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Mail.Send must be granted as Microsoft Graph APPLICATION permission.
// Restrict mailbox access in Exchange Online to info@cinema7.de.
const sender = "info@cinema7.de";

function text(value: unknown, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

export async function POST(request: Request) {
  const tenant = process.env.M365_TENANT_ID;
  const client = process.env.M365_CLIENT_ID;
  const secret = process.env.M365_CLIENT_SECRET;
  if (!tenant || !client || !secret) {
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

  // Quietly discard bot submissions without sending mail.
  if (text(payload.website, 300)) return NextResponse.json({ ok: true });

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
  const body = [
    `Anliegen: ${topic}`, `Name: ${name}`, `E-Mail: ${email}`,
    `Telefon: ${phone || "nicht angegeben"}`,
    validModel ? `Modell: ${model} Zoll` : "Modell: offen",
    "", message || "Keine weitere Nachricht angegeben."
  ].join("\n");

  try {
    const tokenResponse = await fetch(
      `https://login.microsoftonline.com/${encodeURIComponent(tenant)}/oauth2/v2.0/token`,
      {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: client,
          client_secret: secret,
          scope: "https://graph.microsoft.com/.default",
          grant_type: "client_credentials",
        }),
        cache: "no-store",
        signal: AbortSignal.timeout(12000),
      }
    );
    if (!tokenResponse.ok) {
      console.error("CINEMA N7 Microsoft token acquisition failed:", tokenResponse.status);
      return NextResponse.json({ error: "Übermittlung fehlgeschlagen." }, { status: 502 });
    }
    const tokenData: unknown = await tokenResponse.json();
    const accessToken = (tokenData as { access_token?: unknown }).access_token;
    if (typeof accessToken !== "string") throw new Error("No access token");

    const response = await fetch(
      `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${accessToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          message: {
            subject,
            body: { contentType: "Text", content: body },
            toRecipients: [{ emailAddress: { address: sender } }],
            replyTo: [{ emailAddress: { address: email, name } }],
          },
          saveToSentItems: true,
        }),
        cache: "no-store",
        signal: AbortSignal.timeout(15000),
      }
    );

    if (!response.ok) {
      console.error("CINEMA N7 Microsoft Graph sendMail failed:", response.status);
      return NextResponse.json({ error: "Übermittlung fehlgeschlagen." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("CINEMA N7 mail transport error:", error instanceof Error ? error.name : "unknown");
    return NextResponse.json({ error: "Übermittlung fehlgeschlagen." }, { status: 502 });
  }
}
