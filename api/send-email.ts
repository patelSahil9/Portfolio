import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY;
const toAddress = process.env.CONTACT_TO_EMAIL || process.env.VITE_CONTACT_TO_EMAIL || "";

const resend = new Resend(resendApiKey ?? "");

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  if (!resendApiKey || !toAddress) {
    return res.status(500).json({ error: "Server email config missing" });
  }

  try {
    const { name, email, message } = req.body ?? {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const subject = `New message from ${name}`;
    const text = `From: ${name} <${email}>

Message:
${message}`;

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [toAddress],
      reply_to: email,
      subject,
      text,
    } as any);

    if (error) {
      return res.status(500).json({ error: error.message || "Failed to send" });
    }

    return res.status(200).json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return res.status(500).json({ error: message });
  }
}



