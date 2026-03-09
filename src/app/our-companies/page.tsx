import Image from "next/image";
import Link from "next/link";

const companies = [
  {
    name: "KeepsAlive",
    logo: "/images/brand/keepsalive/keepsalive-logo-primary.png",
    description: "TODO: content to be confirmed",
    status: "Coming Soon",
    href: null,
  },
  {
    name: "UniHub",
    logo: "/images/brand/unihub/unihub-logo-primary.png",
    description: "TODO: content to be confirmed",
    status: null,
    href: null,
  },
  {
    name: "Office Today",
    logo: "/images/brand/office-today/office-today-logo-primary.png",
    description: "TODO: content to be confirmed",
    status: null,
    href: null,
  },
];

export default function OurCompaniesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C84B3A] mb-5">
            Our Companies
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight mb-6">
            The SAX Ecosystem
          </h1>
          <p className="text-lg text-[#555555] max-w-2xl leading-relaxed">
            SAX Group brings together a portfolio of companies operating across different sectors in the United States. Each company is built with the same commitment to execution and quality.
          </p>
        </div>
      </section>

      {/* Companies */}
      <section className="bg-[#F5F5F5] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companies.map((company) => (
              <div
                key={company.name}
                className="bg-white rounded-lg border border-gray-200 p-8 flex flex-col gap-5"
              >
                {/* Logo */}
                <div className="h-14 flex items-center">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={160}
                    height={56}
                    className="h-12 w-auto object-contain"
                  />
                </div>

                {/* Status badge */}
                {company.status && (
                  <span className="self-start text-xs font-semibold uppercase tracking-widest text-[#C84B3A] bg-[#C84B3A]/10 px-3 py-1 rounded-full">
                    {company.status}
                  </span>
                )}

                {/* Description */}
                <p className="text-sm text-[#555555] leading-relaxed flex-1">
                  {company.description}
                </p>

                {/* Link */}
                {company.href ? (
                  <Link
                    href={company.href}
                    className="text-sm font-semibold text-[#C84B3A] hover:underline"
                  >
                    Learn more →
                  </Link>
                ) : company.status === "Coming Soon" ? (
                  <span className="text-xs text-[#555555]">
                    More details coming soon.
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#111111] mb-5">
            Interested in Working With SAX?
          </h2>
          <p className="text-[#555555] mb-8 leading-relaxed">
            If you are a Latin American company looking to expand to the United States, we&apos;d like to hear from you.
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
