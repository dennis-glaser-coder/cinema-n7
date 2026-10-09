"use client";

import { useState, type FormEvent } from "react";

export default function InquiryForm({ model, directDelivery = true }: { model?: string; directDelivery?: boolean }) {
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<"idle" | "prepared" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (!directDelivery) {
      const subject = data.intent === "showroom" ? "Vorführung im Showroom Paderborn" : "Persönliche Beratung";
      const body = [`Name: ${data.name}`, `E-Mail: ${data.email}`, `Telefon: ${data.phone || "nicht angegeben"}`, model ? `Modell: ${model} Zoll` : "Modell: noch offen", "", data.message || "Ich möchte Sie persönlich kennenlernen und mein Heimkino mit Ihnen besprechen."].join("\n");
      window.location.href = `mailto:kontakt@cinema7.de?subject=${encodeURIComponent(`CINEMA N°7 – ${subject}`)}&body=${encodeURIComponent(body)}`;
      setResult("prepared");
      return;
    }
    setSending(true);
    setResult("idle");
    try {
      const response = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, model: model || "" }),
        signal: AbortSignal.timeout(20000),
      });
      if (!response.ok) throw new Error("Unable to deliver inquiry");
      setResult("sent");
      form.reset();
    } catch {
      setResult("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="cn7-inquiry-form" onSubmit={submit} aria-label="Persönliche Anfrage" aria-busy={sending}>
      <h2>Lassen Sie uns sprechen.</h2>
      <p className="cn7-inquiry-form-intro">Für eine erste Beratung oder Ihren Termin im Showroom.</p>
      <div className="cn7-inquiry-form-grid">
        <label>Ihr Name <input name="name" required minLength={2} maxLength={120} autoComplete="name" disabled={sending} /></label>
        <label>E-Mail-Adresse <input type="email" name="email" required maxLength={200} autoComplete="email" disabled={sending} /></label>
        <label><span>Telefon <span className="cn7-field-optional">optional</span></span><input type="tel" name="phone" maxLength={60} autoComplete="tel" disabled={sending} /></label>
        <label>Ihr Anliegen <select name="intent" defaultValue="beratung" disabled={sending}><option value="beratung">Persönliche Beratung</option><option value="showroom">Vorführung im Showroom</option></select></label>
      </div>
      <label><span>Ihre Nachricht <span className="cn7-field-optional">optional</span></span>
        <textarea name="message" rows={4} maxLength={4000} disabled={sending} placeholder="Was haben Sie im Sinn? Für einen Showroom-Termin gerne auch Ihren Wunschtermin." />
      </label>
      <div className="cn7-inquiry-hp" aria-hidden="true"><label>Website <input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <label className="cn7-inquiry-privacy"><input type="checkbox" name="privacy" value="yes" required disabled={sending} /> <span>Ich habe die <a href="/datenschutz">Datenschutzhinweise</a> zur Kenntnis genommen.</span></label>
      {!directDelivery && <p className="cn7-inquiry-form-intro">Wir öffnen Ihre Anfrage als Entwurf in Ihrem E-Mail-Programm. Dort können Sie sie versenden.</p>}
      <button type="submit" disabled={sending}>{sending ? "Wird gesendet …" : directDelivery ? "Anfrage senden" : "E-Mail-Anfrage vorbereiten"}</button>
      {result === "prepared" && <p role="status" className="cn7-inquiry-success">Bitte versenden Sie den Entwurf in Ihrem E-Mail-Programm. Falls es sich nicht geöffnet hat, erreichen Sie uns unter <a href="mailto:kontakt@cinema7.de">kontakt@cinema7.de</a>.</p>}
      {result === "sent" && <p role="status" className="cn7-inquiry-success">Vielen Dank für Ihre Anfrage. Wir melden uns persönlich bei Ihnen.</p>}
      {result === "error" && <p role="alert" className="cn7-inquiry-error">Ihre Anfrage wurde nicht übermittelt. Ihre Angaben bleiben erhalten. Versuchen Sie es erneut oder schreiben Sie an <a href="mailto:kontakt@cinema7.de">kontakt@cinema7.de</a>.</p>}
    </form>
  );
}