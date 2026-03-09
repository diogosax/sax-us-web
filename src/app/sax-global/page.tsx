import Link from "next/link";

const coreServices = [
  {
    title: "Company Formation",
    description:
      "We handle LLC and C-Corp incorporation in the U.S., selecting the right structure and state based on your business profile and goals.",
  },
  {
    title: "U.S. Banking Support",
    description:
      "Opening a U.S. business bank account is one of the most critical early steps. We facilitate the process and help you meet bank requirements.",
  },
  {
    title: "Accounting & Tax Structure",
    description:
      "We coordinate with U.S.-based CPAs and accounting firms to ensure your financials are organized and compliant from the beginning.",
  },
  {
    title: "Legal Coordination",
    description:
      "From operating agreements to contracts and compliance, we connect you with the right legal professionals for your needs.",
  },
  {
    title: "Immigration Strategy",
    description:
      "For founders and executives planning to relocate, we help evaluate visa options and coordinate with immigration attorneys.",
  },
  {
    title: "Operational Setup",
    description:
      "We help with the practical elements of running a U.S. business: registered agents, business address, EIN, and more.",
  },
];

const whoWeHelp = [
  "Latin American companies entering the U.S. market for the first time",
  "Founders relocating to the United States",
  "Businesses looking to formalize their U.S. presence",
  "Companies needing ongoing compliance and operational support",
];

const differentiators = [
  {
    title: "We Know Both Worlds",
    description:
      "Our team has direct experience working across Latin American and U.S. business environments. We bridge the gap between the two.",
  },
  {
    title: "Coordinated Execution",
    description:
      "We don't hand you a checklist. We work alongside you, coordinating the legal, financial, and operational moving parts.",
  },
  {
    title: "Reliable Network",
    description:
      "We work with trusted attorneys, CPAs, and service providers in the U.S. to deliver quality results for our clients.",
  },
  {
    title: "Long-Term Focus",
    description:
      "We are invested in your success over time — not just the setup. We stay engaged as your business grows.",
  },
];

export default function SaxGlobalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C84B3A] mb-5">
            SAX Global
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight mb-6">
            Your Platform for<br className="hidden md:block" /> U.S. Market Entry
          </h1>
          <p className="text-lg text-[#555555] max-w-2xl leading-relaxed mb-8">
            SAX Global is the business unit of SAX Group dedicated to helping Latin American companies establish, structure, and operate in the United States.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-[#C84B3A] hover:bg-[#b03e2e] text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm inline-block"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/pt/sax-global"
              className="border border-gray-300 text-[#555555] hover:border-[#111111] hover:text-[#111111] font-medium px-8 py-3.5 rounded-md transition-colors text-sm inline-block"
            >
              Ver em Português
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F5F5F5] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#111111] mb-6">What is SAX Global?</h2>
          <p className="text-[#555555] leading-relaxed mb-5">
            SAX Global is designed for Latin American entrepreneurs and companies that want to build a real presence in the United States — not just a registered entity, but a fully operational business.
          </p>
          <p className="text-[#555555] leading-relaxed">
            We combine strategic guidance with practical execution, working with legal, financial, and operational specialists to ensure your U.S. business is set up correctly from day one.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#111111] mb-4">Core Services</h2>
            <p className="text-[#555555] max-w-xl leading-relaxed">
              We cover the full range of services required to launch and run a U.S. business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service) => (
              <div
                key={service.title}
                className="bg-[#F5F5F5] rounded-lg p-6 border border-gray-200"
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

      {/* Who We Help */}
      <section className="bg-[#F5F5F5] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#111111] mb-8">Who We Help</h2>
          <ul className="flex flex-col gap-4">
            {whoWeHelp.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C84B3A] shrink-0" />
                <span className="text-[#555555] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Work With SAX Global */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#111111] mb-4">
              Why Work With SAX Global
            </h2>
            <p className="text-[#555555] max-w-xl leading-relaxed">
              We offer more than a service. We become a reliable partner in your U.S. journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-[#F5F5F5] rounded-lg p-6 border border-gray-200">
                <h3 className="text-base font-semibold text-[#111111] mb-2">{item.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#111111] mb-5">Let&apos;s Get Started</h2>
          <p className="text-[#555555] mb-8 leading-relaxed">
            Ready to build your U.S. business the right way? Talk to our team and take the first step.
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
