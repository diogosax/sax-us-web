import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms and conditions governing the use of the SAX Group LLC website.",
  alternates: {
    canonical: "https://www.sax-us.com/terms-of-service",
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

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C84B3A] mb-5">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-[#777777]">Last updated: March 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F5F5F5] py-20 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg border border-gray-200 p-8 md:p-12 flex flex-col gap-10">

          <Section title="1. Introduction">
            <p>
              These Terms of Service ("Terms") govern your access to and use of the website located at{" "}
              <a href="https://www.sax-us.com" className="text-[#C84B3A] underline">
                https://www.sax-us.com
              </a>{" "}
              (the "Website"), operated by SAX Group LLC ("SAX Group", "we", "us", or "our").
            </p>
            <p>
              By accessing or using the Website, you agree to be bound by these Terms. If you do not agree, please do not use the Website.
            </p>
          </Section>

          <Section title="2. Use of the Website">
            <p>You agree to use the Website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
            <ul className="list-disc list-inside flex flex-col gap-1.5 ml-2">
              <li>Use the Website in any way that violates applicable local, national, or international laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the Website or its related systems</li>
              <li>Transmit any unsolicited or unauthorized advertising material</li>
              <li>Introduce malicious code, viruses, or any material that is harmful or disruptive</li>
            </ul>
            <p>
              We reserve the right to restrict or terminate access to the Website at our sole discretion, without notice, for any violation of these Terms.
            </p>
          </Section>

          <Section title="3. Intellectual Property">
            <p>
              All content on the Website — including text, graphics, logos, images, and code — is the property of SAX Group LLC or its content suppliers and is protected by applicable intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative works from any content on the Website without our prior written permission.
            </p>
          </Section>

          <Section title="4. Disclaimer">
            <p>
              The Website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied.
            </p>
            <p>
              SAX Group LLC makes no warranties regarding the accuracy, completeness, or reliability of any information on the Website. Information published on the Website is for general informational purposes only and does not constitute legal, financial, accounting, or professional advice.
            </p>
            <p>
              We reserve the right to modify or discontinue any part of the Website at any time without notice.
            </p>
          </Section>

          <Section title="5. Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, SAX Group LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Website, even if we have been advised of the possibility of such damages.
            </p>
            <p>
              Our total liability to you for any claim arising out of or relating to these Terms or the Website shall not exceed the amount you paid us, if any, in the twelve months preceding the claim.
            </p>
          </Section>

          <Section title="6. Third-Party Links">
            <p>
              The Website may contain links to third-party websites. These links are provided for your convenience only. SAX Group LLC has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
            </p>
            <p>
              Inclusion of any link does not imply endorsement by SAX Group LLC.
            </p>
          </Section>

          <Section title="7. Changes to the Terms">
            <p>
              We may revise these Terms at any time by updating this page. The date of the most recent revision is shown at the top of this page. Your continued use of the Website after any changes constitutes your acceptance of the revised Terms.
            </p>
            <p>
              We encourage you to review these Terms periodically.
            </p>
          </Section>

          <Section title="8. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law provisions.
            </p>
            <p>
              Any dispute arising from or relating to these Terms or the Website shall be subject to the exclusive jurisdiction of the courts located in the State of Florida.
            </p>
            <p>
              If you have any questions regarding these Terms, please contact us at{" "}
              <a href="mailto:contact@sax-us.com" className="text-[#C84B3A] underline">
                contact@sax-us.com
              </a>.
            </p>
          </Section>

        </div>
      </section>
    </>
  );
}
