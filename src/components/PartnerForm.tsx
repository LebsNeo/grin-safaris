"use client";

import { useActionState } from "react";
import { submitPartnerEnquiry } from "@/app/actions";

const initial = { status: "idle" as const };

export function PartnerForm() {
  const [state, formAction, pending] = useActionState(
    submitPartnerEnquiry,
    initial,
  );

  if (state.status === "ok") {
    return (
      <div className="rounded-2xl border border-forest-200 bg-forest-50 p-8 text-forest-900">
        <h3 className="font-display text-2xl mb-3">Thank you.</h3>
        <p className="text-forest-700 leading-relaxed">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <Field label="Name" name="name" required />
      <Field label="Company / lodge" name="company" />
      <Field label="Email" name="email" type="email" required />
      <Field label="Message" name="message" textarea required />

      {state.status === "error" && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-forest-800 hover:bg-forest-700 disabled:bg-forest-800/60 text-cream-soft px-7 py-3.5 text-sm font-medium tracking-wide transition-colors"
      >
        {pending ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const base =
    "w-full rounded-lg border border-forest-200 bg-cream-soft/60 px-4 py-3 text-charcoal placeholder-stone-muted focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent transition";
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.15em] text-stone-text mb-2">
        {label}
        {required && <span className="text-ochre"> *</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={4}
          className={base}
          placeholder="Tell us about your operation and how we could work together…"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          className={base}
          autoComplete={
            name === "email" ? "email" : name === "name" ? "name" : "off"
          }
        />
      )}
    </label>
  );
}
