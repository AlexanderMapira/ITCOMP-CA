"use client";

import React from "react";

const GOOGLE_FORM_ID =
  process.env.NEXT_PUBLIC_GOOGLE_FORM_ID ?? ""; // ID only, not full URL

function classCard() {
  return "rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md";
}

export default function ProjectBriefCTAButton() {
  const formUrl = GOOGLE_FORM_ID
    ? `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/viewform?usp=sf_link`
    : "";

  const handleClick = () => {
    if (!formUrl) {
      console.error(
        "Missing NEXT_PUBLIC_GOOGLE_FORM_ID. Set it in your .env.local (ID only, not a full URL)."
      );
      alert(
        "Form link is not configured yet. Please try again later or contact support."
      );
      return;
    }
    window.open(formUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-gray-900 text-white py-20 lg:py-28 relative overflow-hidden">
      {/* subtle background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <header className="text-center mb-12">
          <div className="inline-flex items-center px-5 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium uppercase tracking-[0.2em] text-gray-300 mb-6">
            <div className="w-2 h-2 bg-white/40 rounded-full mr-3 animate-pulse" />
            Start a Project
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-[-0.02em] leading-[0.9]">
            Project <span className="text-gray-500 font-extralight">Brief</span>
          </h2>
          <p className="text-gray-300/90 mt-4">
            Tap the button below to open our Google Form and share your project
            details. We’ll follow up with a plan, timeline, and quote.
          </p>
        </header>

        <div className={`${classCard()} p-8 md:p-12 text-center`}>
          <button
            type="button"
            onClick={handleClick}
            className="px-8 py-4 rounded-2xl font-semibold uppercase tracking-wide bg-white text-gray-900 hover:bg-gray-200 transition shadow-lg"
          >
            Open Project Brief Form
          </button>

          {!GOOGLE_FORM_ID && (
            <p className="mt-4 text-sm text-red-300/80">
              NEXT_PUBLIC_GOOGLE_FORM_ID is not set.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
