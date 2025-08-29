"use client";

import LiquidOverlayNav from "../components/LiquidOverlayNav";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <LiquidOverlayNav />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white pt-20 pb-24 lg:pb-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium uppercase tracking-[0.2em] text-gray-300 mb-12 backdrop-blur-sm">
              <div className="w-2 h-2 bg-white/40 rounded-full mr-3 animate-pulse"></div>
              Contact Us
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase tracking-[-0.02em] mb-12 leading-[0.85]">
              Let's{" "}
              <span className="text-gray-400 font-extralight">Connect</span>
            </h1>
            <p className="text-xl sm:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto font-light">
              Ready to start your next project? Get in touch with our team and
              let's discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white text-gray-900 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-gray-900/5 to-gray-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-l from-gray-600/5 to-gray-900/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.02em] mb-8 leading-[0.9]">
                Get In{" "}
                <span className="text-gray-400 font-extralight">Touch</span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 mb-12 font-light">
                Have a project in mind? We'd love to hear about it. Send us a
                message and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-wide mb-2">
                      Location
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Binbrook, Ontario
                      <br />
                      Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-wide mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      info@khoditech.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-wide mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      +1 (555) 123-4567
                      <br />
                      Available 9 AM - 6 PM EST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl transform rotate-1"></div>
              <div className="relative p-12 bg-white rounded-3xl border border-gray-100 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold uppercase tracking-wide text-gray-700 mb-3"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold uppercase tracking-wide text-gray-700 mb-3"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-bold uppercase tracking-wide text-gray-700 mb-3"
                    >
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold uppercase tracking-wide text-gray-700 mb-3"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, timeline, and requirements..."
                    />
                  </div>

                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <button
                      type="submit"
                      className="relative w-full inline-flex items-center justify-center px-8 py-5 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-black uppercase tracking-[0.1em] rounded-3xl hover:from-gray-800 hover:to-gray-600 transition-all duration-500 shadow-2xl hover:shadow-gray-900/30 group-hover:-translate-y-1"
                    >
                      <span>Send Message</span>
                      <svg
                        className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute inset-0 w-3 h-3 bg-white/10 rounded-full"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.02em] mb-8 leading-[0.9]">
              Common{" "}
              <span className="text-gray-400 font-extralight">Questions</span>
            </h2>
            <p className="text-xl leading-relaxed text-gray-300 max-w-4xl mx-auto font-light">
              Find answers to frequently asked questions about our services and
              process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-xl font-black uppercase tracking-wide mb-4 text-white group-hover:text-gray-300 transition-colors">
                  What services do you offer?
                </h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  We specialize in web development, mobile applications, custom
                  software development, UI/UX design, and comprehensive IT
                  support services.
                </p>
              </div>

              <div className="group">
                <h3 className="text-xl font-black uppercase tracking-wide mb-4 text-white group-hover:text-gray-300 transition-colors">
                  How long does a typical project take?
                </h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Project timelines vary depending on complexity and scope.
                  Simple websites typically take 2-4 weeks, while complex
                  applications can take 2-6 months.
                </p>
              </div>

              <div className="group">
                <h3 className="text-xl font-black uppercase tracking-wide mb-4 text-white group-hover:text-gray-300 transition-colors">
                  Do you provide ongoing support?
                </h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Yes, we offer comprehensive maintenance and support packages
                  to ensure your applications continue running smoothly after
                  launch.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="group">
                <h3 className="text-xl font-black uppercase tracking-wide mb-4 text-white group-hover:text-gray-300 transition-colors">
                  What technologies do you use?
                </h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  We use modern technologies including React, Next.js, Node.js,
                  Python, React Native, and cloud platforms like AWS and Google
                  Cloud.
                </p>
              </div>

              <div className="group">
                <h3 className="text-xl font-black uppercase tracking-wide mb-4 text-white group-hover:text-gray-300 transition-colors">
                  How do you handle project pricing?
                </h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  We provide transparent, fixed-price quotes based on detailed
                  project requirements. No hidden fees or surprise costs.
                </p>
              </div>

              <div className="group">
                <h3 className="text-xl font-black uppercase tracking-wide mb-4 text-white group-hover:text-gray-300 transition-colors">
                  Can you work with existing systems?
                </h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Absolutely! We can integrate with existing systems, perform
                  upgrades, or migrate to new platforms while preserving your
                  data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
