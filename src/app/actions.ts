"use server";

import { Resend } from "resend";
import { BRAND } from "@/lib/contact";

type ContactState =
  | { status: "idle" }
  | { status: "ok"; message: string }
  | { status: "error"; message: string };

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function submitPartnerEnquiry(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("website") ?? "").trim();

  if (honeypot) return { status: "ok", message: "Thanks — we'll be in touch." };

  if (!name || name.length < 2)
    return { status: "error", message: "Please enter your name." };
  if (!email || !isEmail(email))
    return { status: "error", message: "Please enter a valid email." };
  if (!message || message.length < 10)
    return {
      status: "error",
      message: "Tell us a little more about your enquiry (min 10 chars).",
    };

  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.CONTACT_INBOX ?? BRAND.email;
  if (!apiKey) {
    console.error("[partner-enquiry] RESEND_API_KEY missing");
    return { status: "error", message: "Server is not configured. Please email us directly." };
  }

  try {
    const resend = new Resend(apiKey);
    const subject = `Partner enquiry — ${company || name}`;
    const html = `
      <h2 style="font-family:Georgia,serif">New partner enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company) || "—"}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>
    `;
    const { error } = await resend.emails.send({
      from: "Grin Safaris <onboarding@resend.dev>",
      to: [inbox],
      replyTo: email,
      subject,
      html,
    });
    if (error) {
      console.error("[partner-enquiry] resend error:", error);
      return { status: "error", message: "Couldn't send right now. Please try WhatsApp or email." };
    }
  } catch (err) {
    console.error("[partner-enquiry] unexpected:", err);
    return { status: "error", message: "Something went wrong. Please try again." };
  }

  return {
    status: "ok",
    message: "Thanks — we've got your message and will be in touch within 24 hours.",
  };
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
