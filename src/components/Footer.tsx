import Image from "next/image";
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
    <footer className="bg-[#0A2342] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/brand/sax/sax-logo-white.png"
              alt="SAX Group"
              width={120}
              height={40}
              className="h-9 w-auto"
            />
            <p className="text-sm text-slate-300 leading-relaxed max-w-xs">
              SAX Group helps Latin American companies establish and grow their operations in the United States.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-[#00BFA6] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Get in Touch
            </h4>
            <p className="text-sm text-slate-300 mb-3">
              Orlando, Florida<br />
              United States
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#00BFA6] hover:bg-[#00a994] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} SAX Group LLC. All rights reserved.
          </p>
          <Link
            href="/pt/sax-global"
            className="text-xs text-slate-400 hover:text-[#00BFA6] transition-colors"
          >
            Ver em Português
          </Link>
        </div>
      </div>
    </footer>
  );
}
