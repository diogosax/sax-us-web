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
    <footer className="bg-[#111111] text-white border-t-2 border-[#C84B3A]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Image
              src="/images/brand/sax/sax-logo-white.png"
              alt="SAX Group"
              width={500}
              height={200}
              className="h-14 w-auto"
            />
            <p className="text-sm text-[#999999] leading-relaxed max-w-xs">
              SAX Group helps Latin American companies establish and grow their operations in the United States.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[#555555] mb-5">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#888888] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[#555555] mb-5">
              Get in Touch
            </h4>
            <p className="text-sm text-[#888888] mb-1">Orlando, Florida</p>
            <p className="text-sm text-[#888888] mb-6">United States</p>
            <Link
              href="/contact"
              className="inline-block bg-[#C84B3A] hover:bg-[#b03e2e] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#222222] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#555555]">
            © {new Date().getFullYear()} SAX Group LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs">
            <Link href="/sax-global" className="text-[#555555] hover:text-white transition-colors">
              EN
            </Link>
            <span className="text-[#333333]">|</span>
            <Link href="/pt/sax-global" className="text-[#555555] hover:text-white transition-colors">
              PT
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
