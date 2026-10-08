"use client";

import { useState, type FormEvent } from "react";

export default function InquiryForm({ model }: { model?: string }) {
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<"idle" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    setResult("idle");
    try {
      const data = Object.fromEntries(new FormData(form));
      const response = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, model: model || "" }),
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
    <form className="cn7-inquiry-form" onSubmit={submit} aria-label="Projektanfrage senden">
      <h2>Erzählen Sie uns von Ihrem Projekt.</h2>
      {model && <p className="cn7-inquiry-context">Ihre Auswahl: CINEMA N°7 {model} Zoll</p>}
      <div className="cn7-inquiry-form-grid">
        <label>Ihr Name <input name="name" required minLength={2} maxLength={120} autoComplete="name" /></label>
        <label>E-Mail-Adresse <input type="email" name="email" required maxLength={200} autoComplete="email" /></label>
      </div>
      <label>Worum geht es bei Ihrem Projekt?
        <textarea name="message" rows={5} maxLength={4000} required placeholder="Zum Beispiel: gewünschte Größe, Raum und geplanter Zeitraum." />
      </label>
      <div className="cn7-inquiry-hp" aria-hidden="true"><label>Website <input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <label className="cn7-inquiry-privacy"><input type="checkbox" name="privacy" value="yes" required /> Ich habe die <a href="/datenschutz">Datenschutzhinweise</a> zur Kenntnis genommen.</label>
      <button type="submit" disabled={sending}>{sending ? "Wird gesendet …" : "Anfrage absenden"}</button>
      {result === "sent" && <p role="status" className="cn7-inquiry-success">Vielen Dank! Ihre Anfrage wurde übermittelt.</p>}
      {result === "error" && <p role="alert" className="cn7-inquiry-error">Die Anfrage konnte nicht gesendet werden. Bitte kontaktieren Sie uns direkt per Telefon oder E-Mail.</p>}
    </form>
  );
}
