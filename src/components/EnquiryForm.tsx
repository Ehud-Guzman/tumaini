"use client";

import { useState } from "react";

type Variant = "contact" | "volunteer" | "partner" | "event";

const config: Record<Variant, { cta: string; messageLabel: string; messageOptional?: boolean; extra?: { name: string; label: string; options: string[] } }> = {
  contact: { cta: "Send message", messageLabel: "How can we help?" },
  volunteer: {
    cta: "Apply to volunteer",
    messageLabel: "Tell us about yourself and why you'd like to volunteer",
    extra: { name: "interest", label: "Area of interest", options: ["Tutoring & mentorship", "Girls' clubs", "Events & fundraising", "Skills-based (design, IT, finance)", "Other"] },
  },
  event: {
    cta: "Confirm my RSVP",
    messageLabel: "Anything we should know? (group size, accessibility needs)",
    messageOptional: true,
    extra: { name: "guests", label: "Number of guests (including you)", options: ["1", "2", "3", "4", "5 or more"] },
  },
  partner: {
    cta: "Start a conversation",
    messageLabel: "Tell us about your organisation and how you'd like to partner",
    extra: { name: "type", label: "Partnership type", options: ["Corporate partnership", "School or institution", "Community organisation", "Funder or foundation", "Other"] },
  },
};

type Errors = Partial<Record<"name" | "email" | "message" | "consent", string>>;

export function EnquiryForm({ variant = "contact" }: { variant?: Variant }) {
  const c = config[variant];
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const next: Errors = {};
    if (String(d.get("name") ?? "").trim().length < 2) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(String(d.get("email") ?? "").trim())) next.email = "Please enter a valid email address.";
    if (!c.messageOptional && String(d.get("message") ?? "").trim().length < 10) next.message = "Please write at least a short message (10+ characters).";
    if (d.get("consent") !== "on") next.consent = "Please confirm your consent so we can respond.";
    // Honeypot: bots fill hidden fields.
    if (String(d.get("website") ?? "")) return;
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  }

  if (done) {
    return (
      <div role="status" className="rounded-2xl border border-line bg-white p-8">
        <h3 className="text-2xl">Thank you!</h3>
        <p className="mt-2 text-ink-soft">
          {variant === "event" ? "This is a demonstration RSVP, so nothing has been stored or sent. On a live site you would receive a confirmation email with the details." : "This is a demonstration form, so nothing has been stored or sent. On a live site, your message would reach our team and we would reply within two working days."}
        </p>
      </div>
    );
  }

  const field = "mt-1.5 min-h-12 w-full rounded-xl border border-line bg-white px-4 text-ink focus:border-teal";
  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${k}-err`} role="alert" className="mt-1 text-sm font-medium text-clay-deep">{errors[k]}</p>
    ) : null;
  const aria = (k: keyof Errors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl border border-line bg-white p-6 sm:p-8">
      <div>
        <label htmlFor={`${variant}-name`} className="font-medium">Full name <span aria-hidden="true">*</span></label>
        <input id={`${variant}-name`} name="name" autoComplete="name" required className={field} {...aria("name")} />
        {err("name")}
      </div>
      <div>
        <label htmlFor={`${variant}-email`} className="font-medium">Email address <span aria-hidden="true">*</span></label>
        <input id={`${variant}-email`} name="email" type="email" autoComplete="email" required className={field} {...aria("email")} />
        {err("email")}
      </div>
      {c.extra && (
        <div>
          <label htmlFor={`${variant}-extra`} className="font-medium">{c.extra.label}</label>
          <select id={`${variant}-extra`} name={c.extra.name} className={field} defaultValue={c.extra.options[0]}>
            {c.extra.options.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
      )}
      <div>
        <label htmlFor={`${variant}-message`} className="font-medium">{c.messageLabel} {!c.messageOptional && <span aria-hidden="true">*</span>}</label>
        <textarea id={`${variant}-message`} name="message" rows={c.messageOptional ? 3 : 5} required={!c.messageOptional} className={`${field} py-3`} {...aria("message")} />
        {err("message")}
      </div>
      {/* Honeypot field, hidden from people and assistive tech */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div>
        <label className="flex items-start gap-3">
          <input type="checkbox" name="consent" className="mt-1 h-5 w-5 shrink-0 accent-clay" {...aria("consent")} />
          <span className="text-sm text-ink-soft">
            I agree that Tumaini Outreach may store the information I provide to respond to me, as described in the{" "}
            <a href="/privacy" className="text-teal underline underline-offset-2">privacy policy</a>.
          </span>
        </label>
        {err("consent")}
      </div>
      <button type="submit" className="min-h-12 rounded-full bg-clay px-8 font-semibold text-white hover:bg-clay-deep">
        {c.cta}
      </button>
    </form>
  );
}
