import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About SAX Group",
  description:
    "Learn more about SAX Group, our mission, vision, values, and our cross-border business focus between Latin America and the United States.",
  openGraph: {
    title: "About SAX Group",
    description:
      "Learn more about SAX Group, our mission, vision, values, and our cross-border business focus between Latin America and the United States.",
    url: "https://www.sax-us.com/about",
  },
};

const values = [
  {
    title: "Integrity",
    description:
      "We operate with transparency and honesty in everything we do. Our clients can count on us to give them an accurate picture — even when it's not what they hoped to hear.",
  },
  {
    title: "Reliability",
    description:
      "We follow through on our commitments. When we say we'll handle something, we handle it. Our clients don't have to chase us for updates.",
  },
  {
    title: "Practical Execution",
    description:
      "We are focused on results, not just advice. We help clients move from planning to action and ensure each step is executed correctly.",
  },
  {
    title: "Cross-Border Expertise",
    description:
      "We understand the real differences between Latin American and U.S. business environments. Our knowledge is grounded in direct experience, not theory.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We build relationships that last. We want to be the partner our clients return to as their business grows and their needs evolve.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C84B3A] mb-5">
            About SAX
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight mb-6">
            Who We Are
          </h1>
          <p className="text-lg text-[#555555] max-w-2xl leading-relaxed">
            SAX Group LLC is a U.S.-based platform dedicated to helping Latin American companies build a real, operational presence in the United States.
          </p>
        </div>
      </section>

      {/* About SAX */}
      <section className="bg-[#F5F5F5] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#111111] mb-6">About SAX Group</h2>
          <p className="text-[#555555] leading-relaxed mb-5">
            SAX Group was founded to address a genuine gap in the market: Latin American entrepreneurs and businesses had strong ambitions to grow in the United States, but lacked the local knowledge, professional network, and operational support to do so confidently.
          </p>
          <p className="text-[#555555] leading-relaxed mb-5">
            We bridge that gap. From company formation and banking to legal, accounting, and immigration strategy, we coordinate the full range of services that a business needs to establish itself in the U.S. — and we stay engaged as the business grows.
          </p>
          <p className="text-[#555555] leading-relaxed">
            Based in Orlando, Florida, SAX Group operates at the intersection of Latin American business culture and the U.S. regulatory and commercial environment.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-5 items-start">
            <div className="w-1 shrink-0 rounded-full bg-[#C84B3A] self-stretch min-h-[4rem]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C84B3A] mb-3">
                Mission
              </p>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">Our Mission</h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                To provide Latin American companies with the structure, support, and expertise they need to build a credible and compliant business presence in the United States.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-[#F5F5F5] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-5 items-start">
            <div className="w-1 shrink-0 rounded-full bg-[#111111] self-stretch min-h-[4rem]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-3">
                Vision
              </p>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">Our Vision</h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                To be the most trusted platform for Latin American business expansion into the United States — recognized for the quality of our execution and the depth of our client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#111111] mb-4">Our Values</h2>
            <p className="text-[#555555] max-w-xl leading-relaxed">
              These principles guide how we work and how we serve our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-[#F5F5F5] rounded-lg p-6 border border-gray-200"
              >
                <div className="w-6 h-0.5 bg-[#C84B3A] mb-4" />
                <h3 className="text-base font-semibold text-[#111111] mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#111111] mb-5">Work With Us</h2>
          <p className="text-[#555555] mb-8 leading-relaxed">
            If your company is ready to grow in the United States, we are ready to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C84B3A] hover:bg-[#b03e2e] text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
