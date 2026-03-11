import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how SAX Group LLC collects, uses, and protects your personal information.",
  alternates: {
    canonical: "https://www.sax-us.com/privacy-policy",
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-[#111111]">{title}</h2>
      <div className="flex flex-col gap-3 text-[#444444] leading-relaxed text-sm">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C84B3A] mb-5">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#777777]">Last updated: March 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F5F5F5] py-20 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg border border-gray-200 p-8 md:p-12 flex flex-col gap-10">

          <Section title="1. Introduction">
            <p>
              SAX Group LLC ("SAX Group", "we", "us", or "our") operates the website located at{" "}
              <a href="https://www.sax-us.com" className="text-[#C84B3A] underline">
                https://www.sax-us.com
              </a>{" "}
              (the "Website"). This Privacy Policy explains how we collect, use, and protect your personal information when you visit or interact with our Website.
            </p>
            <p>
              By using the Website, you agree to the collection and use of information described in this policy.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>
              <strong className="font-semibold text-[#111111]">Contact form data.</strong> When you submit our contact form, we collect the following information:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-1.5 ml-2">
              <li>First and last name</li>
              <li>Email address</li>
              <li>Phone number (optional)</li>
              <li>Company name (optional)</li>
              <li>Inquiry type and message content</li>
              <li>Consent preferences</li>
            </ul>
            <p>
              <strong className="font-semibold text-[#111111]">Technical data.</strong> We may automatically collect certain technical data when you access the Website, including:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-1.5 ml-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring URL and pages visited</li>
              <li>Date and time of access</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc list-inside flex flex-col gap-1.5 ml-2">
              <li>To respond to your inquiries and requests</li>
              <li>To communicate with you about our services</li>
              <li>To send operational updates if you have consented to receive them</li>
              <li>To improve the functionality and content of the Website</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </Section>

          <Section title="4. Cookies">
            <p>
              Our Website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device.
            </p>
            <p>
              We may use the following types of cookies:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-1.5 ml-2">
              <li>
                <strong className="font-semibold text-[#111111]">Essential cookies:</strong> Required for the Website to function properly.
              </li>
              <li>
                <strong className="font-semibold text-[#111111]">Analytics cookies:</strong> Used to understand how visitors interact with the Website (see Section 5).
              </li>
            </ul>
            <p>
              You can control cookie settings through your browser. Disabling certain cookies may affect Website functionality.
            </p>
          </Section>

          <Section title="5. Third-Party Services">
            <p>
              <strong className="font-semibold text-[#111111]">Google Analytics.</strong> We may use Google Analytics to collect anonymous usage statistics. Google Analytics sets cookies to report on visitor interactions. Data collected is processed by Google according to their{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#C84B3A] underline">
                Privacy Policy
              </a>.
            </p>
            <p>
              <strong className="font-semibold text-[#111111]">Google reCAPTCHA.</strong> Our contact form uses Google reCAPTCHA v3 to protect against spam and abuse. reCAPTCHA collects hardware and software information, including data about your device and interactions with the Website, to evaluate whether you are a human. This data is processed by Google under their{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#C84B3A] underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#C84B3A] underline">
                Terms of Service
              </a>.
            </p>
          </Section>

          <Section title="6. Data Protection">
            <p>
              We take reasonable technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction.
            </p>
            <p>
              However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes described in this policy or as required by applicable law.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside flex flex-col gap-1.5 ml-2">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of inaccurate data</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to withdraw consent at any time (where processing is based on consent)</li>
              <li>The right to opt out of marketing communications</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at the address below.
            </p>
          </Section>

          <Section title="8. Contact Information">
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us:
            </p>
            <address className="not-italic flex flex-col gap-1">
              <span className="font-semibold text-[#111111]">SAX Group LLC</span>
              <span>Orlando, Florida, United States</span>
              <a href="mailto:contact@sax-us.com" className="text-[#C84B3A] underline">
                contact@sax-us.com
              </a>
            </address>
          </Section>

        </div>
      </section>
    </>
  );
}
