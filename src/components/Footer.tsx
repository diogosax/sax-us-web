import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "SAX Global", href: "/sax-global" },
  { label: "Our Companies", href: "/our-companies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white border-t-2 border-[#C84B3A]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-5 items-start">
            <img
              src="/images/brand/sax/sax-logo-white.png"
              alt="SAX Group"
              className="block h-16 w-auto object-contain"
            />
            <p className="max-w-xs text-sm leading-relaxed text-[#999999]">
              SAX Group helps Latin American companies establish and grow their
              operations in the United States.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-[#555555]">
              Navigation
            </h4>

            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#CCCCCC] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-[#555555]">
              Get in touch
            </h4>

            <p className="mb-6 text-sm leading-relaxed text-[#CCCCCC]">
              Orlando, Florida
              <br />
              United States
            </p>

            <a
              href="#"
              className="inline-block rounded-md bg-[#C84B3A] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#b33f30]"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>

	<div className="mt-12 flex flex-col gap-3 border-t border-[#2a2a2a] pt-6 text-xs text-[#777777] md:flex-row md:items-center md:justify-between">
  	  <span>© 2026 SAX Group LLC. All rights reserved.</span>
  	  <span>Made with ❤️ in Orlando, Florida</span>
  	  <span>EN | PT</span>
	</div>

      </div>
    </footer>
  );
}
