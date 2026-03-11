"use client";

import { useState, useEffect } from "react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const INQUIRY_OPTIONS = [
  "U.S. Business Setup",
  "Legal & Accounting",
  "Logistics",
  "Immigration",
  "General Inquiry",
];

const inputClass =
  "border border-gray-200 rounded-md px-4 py-3 text-sm text-[#111111] placeholder:text-[#aaaaaa] focus:outline-none focus:ring-2 focus:ring-[#C84B3A] focus:border-transparent transition";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
    consentComm: false,
    consentMarketing: false,
  });

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

  useEffect(() => {
    if (!siteKey) return;
    const scriptId = "recaptcha-script";
    if (document.getElementById(scriptId)) return;
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    document.head.appendChild(script);
  }, [siteKey]);

  function set(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    let recaptchaToken = "";
    if (siteKey) {
      try {
        await new Promise<void>((resolve) => window.grecaptcha.ready(resolve));
        recaptchaToken = await window.grecaptcha.execute(siteKey, {
          action: "contact",
        });
      } catch {
        setStatus("error");
        setErrorMsg("reCAPTCHA failed. Please refresh the page and try again.");
        return;
      }
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        inquiryType: "",
        message: "",
        consentComm: false,
        consentMarketing: false,
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-lg font-semibold text-[#111111]">Message sent</h2>
        <p className="text-sm text-[#555555] max-w-sm">
          Thank you for reaching out. A member of our team will be in touch shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-[#C84B3A] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-lg border border-gray-200 p-8 flex flex-col gap-6"
    >
      {/* First name + Last name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="firstName" className="text-sm font-medium text-[#111111]">
            First name <span className="text-[#C84B3A]">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={form.firstName}
            onChange={(e) => set("firstName", e.target.value)}
            placeholder="First name"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lastName" className="text-sm font-medium text-[#111111]">
            Last name <span className="text-[#C84B3A]">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={form.lastName}
            onChange={(e) => set("lastName", e.target.value)}
            placeholder="Last name"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-[#111111]">
          Email <span className="text-[#C84B3A]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder="your@email.com"
          className={inputClass}
        />
      </div>

      {/* Phone (optional) */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-[#111111]">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => set("phone", e.target.value)}
          placeholder="+1 (555) 000-0000"
          className={inputClass}
        />
      </div>

      {/* Company (optional) */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="company" className="text-sm font-medium text-[#111111]">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={form.company}
          onChange={(e) => set("company", e.target.value)}
          placeholder="Your company name"
          className={inputClass}
        />
      </div>

      {/* Inquiry type */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="inquiryType" className="text-sm font-medium text-[#111111]">
          What do you need help with? <span className="text-[#C84B3A]">*</span>
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          required
          value={form.inquiryType}
          onChange={(e) => set("inquiryType", e.target.value)}
          className={`${inputClass} bg-white`}
        >
          <option value="">Select an option</option>
          {INQUIRY_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-[#111111]">
          Message <span className="text-[#C84B3A]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Tell us about your business and how we can help"
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Consent checkboxes */}
      <div className="flex flex-col gap-4">
        {/* Required */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={form.consentComm}
            onChange={(e) => set("consentComm", e.target.checked)}
            className="mt-0.5 accent-[#C84B3A] w-4 h-4 shrink-0"
          />
          <span className="text-sm text-[#333333]">
            I agree to receive communication from SAX Global regarding my inquiry.{" "}
            <span className="text-[#C84B3A]">*</span>
          </span>
        </label>

        {/* Optional marketing */}
        <div className="flex flex-col gap-1.5">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.consentMarketing}
              onChange={(e) => set("consentMarketing", e.target.checked)}
              className="mt-0.5 accent-[#C84B3A] w-4 h-4 shrink-0"
            />
            <span className="text-sm text-[#333333]">
              I agree to receive occasional updates from SAX Global via WhatsApp or SMS.
            </span>
          </label>
          <p className="text-xs text-[#777777] ml-7">
            You may receive up to 4 messages per month. Standard messaging rates may apply. Reply STOP to unsubscribe.
          </p>
        </div>
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-4 py-3">
          {errorMsg}
        </p>
      )}

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto bg-[#C84B3A] hover:bg-[#b03e2e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm"
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>
        <p className="mt-3 text-xs text-[#777777]">
          This site is protected by reCAPTCHA. Google{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>
    </form>
  );
}
