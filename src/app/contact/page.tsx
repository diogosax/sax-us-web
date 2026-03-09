// TODO: connect form submission

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A2342] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#00BFA6] text-sm font-semibold uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            Ready to expand your business to the United States? Fill out the form below and a member of our team will be in touch.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <form className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-sm font-medium text-[#0A2342]"
              >
                Name <span className="text-[#00BFA6]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                className="border border-gray-200 rounded-md px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#00BFA6] focus:border-transparent transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#0A2342]"
              >
                Email <span className="text-[#00BFA6]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className="border border-gray-200 rounded-md px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#00BFA6] focus:border-transparent transition"
              />
            </div>

            {/* Company */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="company"
                className="text-sm font-medium text-[#0A2342]"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Your company name"
                className="border border-gray-200 rounded-md px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#00BFA6] focus:border-transparent transition"
              />
            </div>

            {/* Country */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="country"
                className="text-sm font-medium text-[#0A2342]"
              >
                Country
              </label>
              <input
                id="country"
                name="country"
                type="text"
                placeholder="Your country"
                className="border border-gray-200 rounded-md px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#00BFA6] focus:border-transparent transition"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-[#0A2342]"
              >
                Message <span className="text-[#00BFA6]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your business and how we can help"
                className="border border-gray-200 rounded-md px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#00BFA6] focus:border-transparent transition resize-none"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#00BFA6] hover:bg-[#00a994] text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm"
              >
                Send Message
              </button>
              <p className="mt-3 text-xs text-[#475569]">
                {/* TODO: connect form submission */}
                We will get back to you as soon as possible.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Location note */}
      <section className="bg-[#F8FAFC] py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-[#475569]">
            <span className="font-semibold text-[#0A2342]">SAX Group LLC</span>
            {" · "}Orlando, Florida, United States
          </p>
        </div>
      </section>
    </>
  );
}
