"use client";

import { useState } from "react";

export function Newsletter() {
  const [state, setState] = useState<"idle" | "error" | "done">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const consent = data.get("consent") === "on";
    if (!/^\S+@\S+\.\S+$/.test(email) || !consent) return setState("error");
    // Demo only: Phase 3 wires this to the database + email provider.
    setState("done");
  }

  if (state === "done") {
    return (
      <p role="status" className="rounded-xl bg-white/10 p-4 text-white">
        Thank you! (Demo: nothing was stored or sent.)
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Newsletter signup">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="nl-email" className="sr-only">Email address</label>
        <input
          id="nl-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={state === "error"}
          aria-describedby={state === "error" ? "nl-error" : undefined}
          className="min-h-12 flex-1 rounded-full border border-white/30 bg-white px-5 text-ink placeholder:text-ink-soft"
        />
        <button type="submit" className="min-h-12 rounded-full bg-clay px-7 font-semibold text-white hover:bg-clay-deep">
          Subscribe
        </button>
      </div>
      <label className="mt-3 flex items-start gap-2 text-sm text-white/80">
        <input type="checkbox" name="consent" className="mt-1 h-5 w-5 shrink-0 accent-clay" />
        <span>I agree to receive updates and understand I can unsubscribe at any time.</span>
      </label>
      {state === "error" && (
        <p id="nl-error" role="alert" className="mt-2 text-sm text-gold">
          Please enter a valid email and tick the consent box.
        </p>
      )}
    </form>
  );
}
