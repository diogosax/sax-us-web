import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const REQUIRED = ["firstName", "lastName", "email", "message", "inquiryType"];

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Validate required fields
  for (const field of REQUIRED) {
    if (!body[field] || typeof body[field] !== "string" || !(body[field] as string).trim()) {
      return NextResponse.json({ error: `Missing required field: ${field}.` }, { status: 400 });
    }
  }

  if (!body.consentComm) {
    return NextResponse.json({ error: "Communication consent is required." }, { status: 400 });
  }

  // Basic email format check
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(body.email as string)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // Verify reCAPTCHA v3
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (secretKey) {
    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${body.recaptchaToken ?? ""}`,
    });
    const verifyData = await verifyRes.json();
    if (!verifyData.success || verifyData.score < 0.5) {
      return NextResponse.json({ error: "reCAPTCHA verification failed." }, { status: 400 });
    }
  }

  const firstName = (body.firstName as string).trim();
  const lastName = (body.lastName as string).trim();
  const email = (body.email as string).trim();
  const phone = ((body.phone as string) ?? "").trim() || "—";
  const company = ((body.company as string) ?? "").trim() || "—";
  const inquiryType = (body.inquiryType as string).trim();
  const message = (body.message as string).trim();
  const consentMarketing = body.consentMarketing ? "Yes" : "No";
  const timestamp = new Date().toUTCString();

  const html = `
<table style="font-family:sans-serif;font-size:14px;color:#111;max-width:600px;width:100%;border-collapse:collapse">
  <tr><td colspan="2" style="padding:20px 0;border-bottom:2px solid #C84B3A">
    <strong style="font-size:18px">New Website Inquiry — SAX Global</strong>
  </td></tr>
  <tr><td style="padding:12px 0;color:#555;width:160px;vertical-align:top">Name</td>
      <td style="padding:12px 0">${firstName} ${lastName}</td></tr>
  <tr><td style="padding:12px 0;color:#555;vertical-align:top">Email</td>
      <td style="padding:12px 0"><a href="mailto:${email}">${email}</a></td></tr>
  <tr><td style="padding:12px 0;color:#555;vertical-align:top">Phone</td>
      <td style="padding:12px 0">${phone}</td></tr>
  <tr><td style="padding:12px 0;color:#555;vertical-align:top">Company</td>
      <td style="padding:12px 0">${company}</td></tr>
  <tr><td style="padding:12px 0;color:#555;vertical-align:top">Inquiry type</td>
      <td style="padding:12px 0">${inquiryType}</td></tr>
  <tr><td style="padding:12px 0;color:#555;vertical-align:top">Marketing consent</td>
      <td style="padding:12px 0">${consentMarketing}</td></tr>
  <tr><td style="padding:12px 0;color:#555;vertical-align:top">Message</td>
      <td style="padding:12px 0;white-space:pre-wrap">${message}</td></tr>
  <tr><td style="padding:12px 0;color:#555;vertical-align:top">Submitted</td>
      <td style="padding:12px 0;color:#777">${timestamp}</td></tr>
</table>
`.trim();

  try {
    await resend.emails.send({
      from: "SAX Website <noreply@sax-us.com>",
      to: "contact@sax-us.com",
      replyTo: email,
      subject: "New website inquiry – SAX Global",
      html,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
