"use client";

import TechMarquee from "./components/TechMarquee";
import LiquidOverlayNav from "./components/LiquidOverlayNav";
import ImageTrailHero from "./components/ImageTrailHero";
import { Item5Canvas } from "./components/Item5";
import { Suspense } from "react";
import ProjectBriefForm from "./components/ProjectBriefForm";
import AboutModern from "./components/AboutModern";

export default function Page() {
  return (
    <>
      <LiquidOverlayNav />

      {/* Hero Section - Dark Background */}
      <section className="bg-gray-900 text-white">
        <ImageTrailHero
          frontWords={["Digital", "Innovation", "Excellence"]}
          frontWordSize="clamp(32px, 5vw, 64px)"
          frontSubtext={[
            "Building innovative digital solutions that drive success",
            "Where technology meets creativity to transform your vision",
          ]}
          sentences={[
            "KHODITECH DELIVERS EXCELLENCE",
            "INNOVATION IN EVERY LINE OF CODE",
            "BUILDING THE FUTURE TODAY",
            "WHERE IDEAS MEET TECHNOLOGY",
          ]}
        />
      </section>

      {/* About Section */}
      <AboutModern />
      {/* Logos Section */}
      <TechMarquee />

      {/* Services Section - Gray Background */}
      <section className="bg-gray-900 text-white py-24 lg:py-32 relative overflow-hidden">
        {/* Modern geometric background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute bottom-1/3 right-1/4 w-px h-96 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 bg-white/20 rounded-full animate-ping" />
            <div className="absolute inset-0 w-3 h-3 bg-white/10 rounded-full" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
          {/* Heading */}
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium uppercase tracking-[0.2em] text-gray-300 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-white/40 rounded-full mr-3 animate-pulse" />
              Our Services
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase tracking-[-0.02em] mb-8 leading-[0.85]">
              Our{" "}
              <span className="text-gray-600 font-extralight">Expertise</span>
            </h2>
            <p className="text-xl sm:text-2xl leading-relaxed text-gray-300 max-w-5xl mx-auto font-light">
              We deliver comprehensive digital solutions tailored to your
              business needs with precision, innovation, and modern technology.
            </p>
          </div>

          {/* 3D Highlight Row */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
            {/* Copy */}
            <div className="space-y-5">
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-[0.08em]">
                IT Consulting Expertise
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We provide end-to-end IT consulting services that empower
                organizations to modernize their systems, streamline operations,
                and unlock digital growth. Our team blends technical depth with
                strategic vision to deliver solutions that are reliable,
                scalable, and future-ready.
              </p>
              <ul className="text-gray-400/90 text-base leading-relaxed space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Strategic IT roadmapping aligned with your business goals.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Cloud adoption, migration, and optimization expertise.
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Ongoing support and maintenance to keep technology running
                  smoothly.
                </li>
              </ul>
            </div>

            {/* 3D Canvas container */}
            <div className="relative h-[420px] md:h-[520px] rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md overflow-hidden">
              {/* subtle inner vignette/gradient to blend with bg */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/[0.03]" />
              <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(white,transparent_70%)]" />
              <Suspense fallback={null}>
                <Item5Canvas />
              </Suspense>
            </div>
          </div>

          {/* Your existing three service cards */}
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-700"></div>
              <div className="relative text-center p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-700 group-hover:-translate-y-3">
                <div className="relative mx-auto mb-10">
                  <div className="w-28 h-28 mx-auto bg-gradient-to-br from-white/20 via-white/15 to-white/10 rounded-3xl flex items-center justify-center shadow-2xl shadow-black/20 group-hover:scale-110 transition-all duration-500">
                    <svg
                      className="w-14 h-14 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-white/10 rounded-full opacity-50 group-hover:scale-125 transition-transform duration-300"></div>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-[0.1em] mb-8 text-white">
                  Custom Development
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg font-light">
                  Tailored solutions built from the ground up to meet your
                  specific requirements and modern architecture.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-700"></div>
              <div className="relative text-center p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-700 group-hover:-translate-y-3">
                <div className="relative mx-auto mb-10">
                  <div className="w-28 h-28 mx-auto bg-gradient-to-br from-white/20 via-white/15 to-white/10 rounded-3xl flex items-center justify-center shadow-2xl shadow-black/20 group-hover:scale-110 transition-all duration-500">
                    <svg
                      className="w-14 h-14 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-white/10 rounded-full opacity-50 group-hover:scale-125 transition-transform duration-300"></div>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-[0.1em] mb-8 text-white">
                  Performance Optimization
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg font-light">
                  Lightning-fast apps optimized for speed, scalability, and
                  exceptional UX across platforms.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-700"></div>
              <div className="relative text-center p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-700 group-hover:-translate-y-3">
                <div className="relative mx-auto mb-10">
                  <div className="w-28 h-28 mx-auto bg-gradient-to-br from-white/20 via-white/15 to-white/10 rounded-3xl flex items-center justify-center shadow-2xl shadow-black/20 group-hover:scale-110 transition-all duration-500">
                    <svg
                      className="w-14 h-14 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-white/10 rounded-full opacity-50 group-hover:scale-125 transition-transform duration-300"></div>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-[0.1em] mb-8 text-white">
                  Security & Maintenance
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg font-light">
                  Robust security and proactive support to keep your systems
                  smooth and secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - White Background */}
      <section className="bg-white text-gray-900 py-24 lg:py-32 relative overflow-hidden">
        {/* Modern geometric background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-gray-200 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center relative">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200/50 rounded-full text-sm font-medium uppercase tracking-[0.2em] text-gray-600 mb-12 backdrop-blur-sm shadow-sm">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 animate-pulse"></div>
            Ready to Start?
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase tracking-[-0.02em] mb-12 leading-[0.85]">
            Ready to Build <br />
            <span className="text-gray-300 font-extralight">
              Something Amazing?
            </span>
          </h2>
          <p className="text-xl sm:text-2xl leading-relaxed text-gray-600 mb-20 max-w-5xl mx-auto font-light">
            Let&apos;s discuss your project and bring your digital vision to
            life with cutting-edge technology, innovative solutions, and modern
            approaches.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <a
                href="/contact"
                className="relative inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-black uppercase tracking-[0.1em] rounded-3xl hover:from-gray-800 hover:to-gray-600 transition-all duration-500 shadow-2xl hover:shadow-gray-900/30 group-hover:-translate-y-1 backdrop-blur-sm"
              >
                <span>Start Your Project</span>
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 border-2 border-gray-900 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <a
                href="/services"
                className="relative inline-flex items-center justify-center px-12 py-6 border-2 border-gray-900 text-gray-900 font-black uppercase tracking-[0.1em] rounded-3xl hover:bg-gray-900 hover:text-white transition-all duration-500 group-hover:-translate-y-1 backdrop-blur-sm"
              >
                <span>View Our Work</span>
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Project Brief Form */}
      <ProjectBriefForm />

      {/* Footer - Black Background */}
      <footer className="bg-black text-white py-20 lg:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gray-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="md:col-span-1">
              <h3 className="text-3xl lg:text-4xl font-extrabold uppercase tracking-wider mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                KHODITECH
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                Transforming ideas into digital reality with cutting-edge
                technology solutions and innovative approaches.
              </p>
              <div className="flex items-center text-gray-400 mb-4">
                <svg
                  className="w-5 h-5 mr-3"
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
                <span>Binbrook, Ontario, Canada</span>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold uppercase tracking-wide mb-8 text-white">
                Services
              </h4>
              <ul className="space-y-4">
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center group">
                  <svg
                    className="w-4 h-4 mr-3 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Website Development
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center group">
                  <svg
                    className="w-4 h-4 mr-3 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Mobile Applications
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center group">
                  <svg
                    className="w-4 h-4 mr-3 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Custom Software
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center group">
                  <svg
                    className="w-4 h-4 mr-3 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Performance Optimization
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold uppercase tracking-wide mb-8 text-white">
                Connect
              </h4>
              <ul className="space-y-4">
                <li className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <svg
                    className="w-5 h-5 mr-3"
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
                  info@khoditech.ca
                </li>
                <li className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <svg
                    className="w-5 h-5 mr-3"
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
                  +1 (555) 123-4567
                </li>
                <li className="text-gray-400 hover:text-white transition-colors flex items-center group cursor-pointer">
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </li>
                <li className="text-gray-400 hover:text-white transition-colors flex items-center group cursor-pointer">
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </li>
                <li className="text-gray-400 hover:text-white transition-colors flex items-center group cursor-pointer">
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </li>
                <li className="text-gray-400 hover:text-white transition-colors flex items-center group cursor-pointer">
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  GitHub
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-12 text-center">
            <p className="text-gray-500 text-lg">
              © 2025 KHODITECH. All rights reserved. | Crafted with precision
              in Canada.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
