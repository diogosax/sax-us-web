import type { Metadata } from "next";

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

// TODO: connect form submission

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
          <form className="bg-white rounded-lg border border-gray-200 p-8 flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-sm font-medium text-[#111111]"
              >
                Name <span className="text-[#C84B3A]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                className="border border-gray-200 rounded-md px-4 py-3 text-sm text-[#111111] placeholder:text-[#aaaaaa] focus:outline-none focus:ring-2 focus:ring-[#C84B3A] focus:border-transparent transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#111111]"
              >
                Email <span className="text-[#C84B3A]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className="border border-gray-200 rounded-md px-4 py-3 text-sm text-[#111111] placeholder:text-[#aaaaaa] focus:outline-none focus:ring-2 focus:ring-[#C84B3A] focus:border-transparent transition"
              />
            </div>

            {/* Company */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="company"
                className="text-sm font-medium text-[#111111]"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Your company name"
                className="border border-gray-200 rounded-md px-4 py-3 text-sm text-[#111111] placeholder:text-[#aaaaaa] focus:outline-none focus:ring-2 focus:ring-[#C84B3A] focus:border-transparent transition"
              />
            </div>

            {/* Country */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="country"
                className="text-sm font-medium text-[#111111]"
              >
                Country
              </label>
              <input
                id="country"
                name="country"
                type="text"
                placeholder="Your country"
                className="border border-gray-200 rounded-md px-4 py-3 text-sm text-[#111111] placeholder:text-[#aaaaaa] focus:outline-none focus:ring-2 focus:ring-[#C84B3A] focus:border-transparent transition"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-[#111111]"
              >
                Message <span className="text-[#C84B3A]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your business and how we can help"
                className="border border-gray-200 rounded-md px-4 py-3 text-sm text-[#111111] placeholder:text-[#aaaaaa] focus:outline-none focus:ring-2 focus:ring-[#C84B3A] focus:border-transparent transition resize-none"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#C84B3A] hover:bg-[#b03e2e] text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm"
              >
                Send Message
              </button>
              <p className="mt-3 text-xs text-[#555555]">
                {/* TODO: connect form submission */}
                We will get back to you as soon as possible.
              </p>
            </div>
          </form>
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
