import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact SAX Group",
  description:
    "Get in touch with SAX Group to discuss your U.S. business expansion and operational support needs.",
  openGraph: {
    title: "Contact SAX Group",
    description:
      "Get in touch with SAX Group to discuss your U.S. business expansion and operational support needs.",
    url: "https://www.sax-us.com/contact",
  },
  alternates: {
    canonical: "https://www.sax-us.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C84B3A] mb-5">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-[#555555] max-w-2xl leading-relaxed">
            Ready to expand your business to the United States? Fill out the form below and a member of our team will be in touch.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#F5F5F5] py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Location note */}
      <section className="bg-white py-12 px-6 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-[#555555]">
            <span className="font-semibold text-[#111111]">SAX Group LLC</span>
            {" · "}Orlando, Florida, United States
          </p>
        </div>
      </section>
    </>
  );
}
