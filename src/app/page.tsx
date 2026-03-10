import Link from "next/link";

const services = [
  {
    title: "Entity Formation",
    description:
      "LLC or C-Corp — we determine the right structure for your business profile and handle the full incorporation process across the appropriate U.S. state.",
  },
  {
    title: "Banking & Financial Access",
    description:
      "A U.S. bank account is foundational. We navigate the process with you, preparing your documentation and connecting you with the right financial institutions.",
  },
  {
    title: "Legal & Accounting Coordination",
    description:
      "We work alongside specialized U.S. attorneys and CPAs to ensure your business is structured correctly and compliant from the outset.",
  },
  {
    title: "Immigration Planning",
    description:
      "For founders and executives planning to relocate, we coordinate with immigration attorneys to evaluate the right visa path for your situation.",
  },
];

const companies = [
  {
    name: "KeepsAlive",
    logo: "/images/brand/keepsalive/keepsalive-logo-primary.svg",
    logoClassName: "h-12 w-auto object-contain",
    description:
      "An asset monitoring and operational intelligence initiative currently in development.",
    status: "Coming Soon",
  },
  {
    name: "UniHub",
    logo: "/images/brand/unihub/unihub-logo-primary.svg",
    logoClassName: "h-15 w-auto object-contain",
    description:
      "An education and international business integration platform supporting cross-border opportunities for academic and professional growth.",
    status: null,
  },
  {
    name: "Office Today",
    logo: "/images/brand/office-today/office-today-logo-primary.svg",
    logoClassName: "h-16 w-auto object-contain",
    description:
      "Technical support and operational solutions for managed print environments and office infrastructure.",
    status: null,
  },
];

const whySax = [
  {
    title: "Operational, Not Just Advisory",
    description:
      "Most consultants tell you what to do. We work alongside you to make sure it actually gets done — from entity formation and banking to compliance and day-to-day operational setup.",
  },
  {
    title: "Built Around Latin American Businesses",
    description:
      "We understand the regulatory, banking, and structural differences that Latin American companies face when entering the U.S. Our approach is grounded in direct cross-border experience.",
  },
  {
    title: "One Coordinated Process",
    description:
      "Legal, accounting, banking, and immigration rarely happen in isolation. We coordinate across all disciplines so your U.S. setup moves forward as a single organized effort.",
  },
  {
    title: "Present Beyond the Launch",
    description:
      "We don't close the file after incorporation. We remain a consistent point of support as your U.S. business grows and its operational needs evolve.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-24 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C84B3A] mb-5">
            SAX Group
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight mb-6">
            The U.S. Business Platform<br className="hidden md:block" /> for Latin American Companies
          </h1>
          <p className="text-lg text-[#555555] mb-10 max-w-2xl leading-relaxed">
            We handle the structure — entity formation, banking, legal coordination, accounting, and operational setup — so your company can enter the U.S. market with the right foundation in place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-[#C84B3A] hover:bg-[#b03e2e] text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm inline-block"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/sax-global"
              className="border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm inline-block"
            >
              How We Work
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-[#F5F5F5] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#111111] mb-4">What We Do</h2>
            <p className="text-[#555555] max-w-xl leading-relaxed">
              Entering the U.S. market requires more than ambition. It requires the right legal structure, financial infrastructure, and local coordination. That is what we build with you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <div className="w-6 h-0.5 bg-[#C84B3A] mb-4" />
                <h3 className="text-base font-semibold text-[#111111] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Companies */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#111111] mb-4">Our Companies</h2>
            <p className="text-[#555555] max-w-xl leading-relaxed">
              SAX Group is home to a portfolio of companies and initiatives operating across different sectors in the United States.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {companies.map((company) => (
              <div
                key={company.name}
                className="bg-[#F5F5F5] rounded-lg p-8 border border-gray-200 flex flex-col items-start gap-5"
              >
		<div className="min-h-[56px] flex items-center">
		  <img
  		     src={company.logo}
  		     alt={company.name}
		     className={company.logoClassName}
		  />
                </div>
                {company.status && (
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C84B3A] bg-[#C84B3A]/10 px-3 py-1 rounded-full">
                    {company.status}
                  </span>
                )}
                <p className="text-sm text-[#555555] leading-relaxed">
                  {company.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/our-companies"
              className="text-sm font-semibold text-[#C84B3A] hover:underline"
            >
              View all companies →
            </Link>
          </div>
        </div>
      </section>

      {/* Why SAX */}
      <section className="bg-[#F5F5F5] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#111111] mb-4">Why SAX</h2>
            <p className="text-[#555555] max-w-xl leading-relaxed">
              We work with Latin American companies at every stage of U.S. market entry — from the first legal question to ongoing operational management.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whySax.map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-base font-semibold text-[#111111] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20 px-6 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#111111] mb-5">
            Ready to Build Your U.S. Presence?
          </h2>
          <p className="text-[#555555] mb-8 leading-relaxed">
            Talk to our team. We will assess your situation and explain how SAX Group can support your U.S. market entry from day one.
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
