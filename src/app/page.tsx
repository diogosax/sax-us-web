import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Company Formation",
    description:
      "We guide you through the entire process of incorporating your U.S. entity — LLC or C-Corp — with the structure that fits your business goals.",
  },
  {
    title: "Banking & Financial Setup",
    description:
      "We help you open a U.S. business bank account and establish the financial infrastructure needed to operate from day one.",
  },
  {
    title: "Legal & Accounting",
    description:
      "We coordinate with specialized U.S. attorneys and accountants to ensure your business is compliant from the start.",
  },
  {
    title: "Immigration Strategy",
    description:
      "For founders and executives relocating to the U.S., we help structure the right immigration approach for your situation.",
  },
];

const companies = [
  {
    name: "KeepsAlive",
    logo: "/images/brand/keepsalive/keepsalive-logo-primary.png",
    description: "TODO: content to be confirmed",
    status: "Coming Soon",
  },
  {
    name: "UniHub",
    logo: "/images/brand/unihub/unihub-logo-primary.png",
    description: "TODO: content to be confirmed",
    status: null,
  },
  {
    name: "Office Today",
    logo: "/images/brand/office-today/office-today-logo-primary.png",
    description: "TODO: content to be confirmed",
    status: null,
  },
];

const whySax = [
  {
    title: "Cross-Border Expertise",
    description:
      "We understand the regulatory, cultural, and operational challenges that Latin American companies face when entering the U.S. market.",
  },
  {
    title: "End-to-End Support",
    description:
      "From company formation to ongoing operations, we cover every step so you can focus on growing your business.",
  },
  {
    title: "Practical Execution",
    description:
      "We are operationally focused. We don't just advise — we help you get things done.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We build lasting relationships with our clients, adapting as your U.S. operations evolve and scale.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A2342] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Expand Your Business<br className="hidden md:block" /> to the United States
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            SAX Group helps Latin American companies establish and operate in the U.S. — from company formation to full operational setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#00BFA6] hover:bg-[#00a994] text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/sax-global"
              className="border border-white text-white hover:bg-white hover:text-[#0A2342] font-semibold px-8 py-3.5 rounded-md transition-colors text-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-4">What We Do</h2>
            <p className="text-[#475569] max-w-xl mx-auto leading-relaxed">
              We provide the structure and support that Latin American businesses need to enter and thrive in the U.S. market.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#F8FAFC] rounded-lg p-6 border border-gray-100"
              >
                <h3 className="text-base font-semibold text-[#0A2342] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Companies */}
      <section className="bg-[#F8FAFC] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-4">Our Companies</h2>
            <p className="text-[#475569] max-w-xl mx-auto leading-relaxed">
              SAX Group is home to a portfolio of companies operating across different sectors in the U.S.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {companies.map((company) => (
              <div
                key={company.name}
                className="bg-white rounded-lg p-8 border border-gray-100 flex flex-col items-center text-center gap-4"
              >
                <div className="h-12 flex items-center justify-center">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={140}
                    height={48}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                {company.status && (
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#00BFA6] bg-[#00BFA6]/10 px-3 py-1 rounded-full">
                    {company.status}
                  </span>
                )}
                <p className="text-sm text-[#475569] leading-relaxed">
                  {company.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/our-companies"
              className="text-sm font-semibold text-[#00BFA6] hover:underline"
            >
              View all companies →
            </Link>
          </div>
        </div>
      </section>

      {/* Why SAX */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-4">Why SAX</h2>
            <p className="text-[#475569] max-w-xl mx-auto leading-relaxed">
              We combine deep cross-border knowledge with hands-on operational support.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whySax.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-1.5 shrink-0 rounded-full bg-[#00BFA6] mt-1" />
                <div>
                  <h3 className="text-base font-semibold text-[#0A2342] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0A2342] py-20 px-6 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-5">
            Ready to Start Your U.S. Expansion?
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Talk to our team and find out how SAX Group can help you build a solid business foundation in the United States.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#00BFA6] hover:bg-[#00a994] text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
