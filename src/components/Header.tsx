"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "SAX Global", href: "/sax-global" },
  { label: "Our Companies", href: "/our-companies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/brand/sax/sax-logo-primary.png"
            alt="SAX Group"
            width={150}
            height={44}
            className="h-11 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#111111] hover:text-[#C84B3A] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + language switcher */}
        <div className="hidden md:flex items-center gap-5">
          {/* EN | PT switcher */}
          <div className="flex items-center gap-1.5 text-xs font-medium">
            <Link
              href="/sax-global"
              className="text-[#111111] hover:text-[#C84B3A] transition-colors"
            >
              EN
            </Link>
            <span className="text-[#cccccc]">|</span>
            <Link
              href="/pt/sax-global"
              className="text-[#555555] hover:text-[#C84B3A] transition-colors"
            >
              PT
            </Link>
          </div>
          <Link
            href="/contact"
            className="bg-[#C84B3A] hover:bg-[#b03e2e] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#111111]"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M2 2L20 20M20 2L2 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M2 6h18M2 11h18M2 16h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#111111] hover:text-[#C84B3A] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 pt-1">
            <Link
              href="/sax-global"
              className="text-xs font-medium text-[#111111]"
              onClick={() => setMobileOpen(false)}
            >
              EN
            </Link>
            <span className="text-[#cccccc] text-xs">|</span>
            <Link
              href="/pt/sax-global"
              className="text-xs font-medium text-[#555555]"
              onClick={() => setMobileOpen(false)}
            >
              PT
            </Link>
          </div>
          <Link
            href="/contact"
            className="bg-[#C84B3A] hover:bg-[#b03e2e] text-white text-sm font-semibold px-5 py-2.5 rounded-md text-center transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Schedule a Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
