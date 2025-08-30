"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AboutModern() {
  return (
    <section className="bg-white text-gray-900 py-24 lg:py-32 relative overflow-hidden">
      {/* background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 -left-24 w-72 h-72 bg-gray-900/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-24 w-96 h-96 bg-gray-600/5 rounded-full blur-3xl" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200/60 rounded-full text-xs font-medium uppercase tracking-[0.2em] text-gray-600 mb-8">
            <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 animate-pulse" />
            About KHODITECH
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[-0.02em] leading-[0.9]">
            Who We <span className="text-gray-300 font-extralight">Are</span>
          </h2>
          <p className="text-xl sm:text-2xl leading-relaxed text-gray-600 mt-6">
            Based in{" "}
            <span className="font-semibold text-gray-800">
              Binbrook, Ontario, Canada
            </span>
            , we design and build modern digital products—websites, mobile apps,
            and internal systems—that are fast, reliable, and a joy to use.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left copy */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-[0.08em]">
              Modern Engineering, Business Impact
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We pair clean design with scalable engineering to turn ideas into
              measurable outcomes. From discovery to launch, our process is
              collaborative, transparent, and focused on value.
            </p>

            <ul className="space-y-4">
              {[
                "Responsive web platforms built with Next.js.",
                "Native-feel mobile apps for iOS & Android.",
                "Secure, maintainable systems with clear SLAs.",
                "Performance-first approach—ship fast, run lean.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-gray-900/60" />
                  <span className="text-gray-700">{t}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                ["99.9%", "Uptime Targets"],
                ["<1s", "Core Web Vitals"],
                ["A+", "Security Posture"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-2xl border border-gray-200 bg-gray-50/60 px-4 py-5 text-center"
                >
                  <div className="text-2xl font-extrabold tracking-tight">
                    {k}
                  </div>
                  <div className="text-xs uppercase tracking-wide text-gray-500 mt-1">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visuals */}
          <DeviceStack />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Premium device stack w/ darker laptop text ---------------- */

function DeviceStack() {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={false}
      animate={
        hover
          ? { rotateX: 6, rotateY: -6, scale: 1.012 }
          : { rotateX: 0, rotateY: 0, scale: 1 }
      }
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.6 }}
      className="relative"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* glow plate */}
      <div className="absolute -inset-6 rounded-[32px] border border-gray-200 bg-white/90 shadow-[0_22px_70px_rgba(0,0,0,0.08)] overflow-hidden">
        <Grain />
        <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_20%,rgba(0,0,0,0.06),transparent_60%)]" />
      </div>

      {/* laptop */}
      <div className="relative rounded-[28px] bg-white border border-gray-200 p-6 shadow-[0_14px_44px_rgba(0,0,0,0.06)]">
        <div className="mx-auto max-w-[640px]">
          <div className="mx-auto w-full rounded-2xl border border-gray-200/90 bg-gradient-to-b from-gray-50 to-white">
            {/* top bar */}
            <div className="flex items-center justify-center gap-1 py-2">
              <span className="h-2 w-2 rounded-full bg-gray-300" />
              <span className="h-2 w-16 rounded-full bg-gray-200" />
              <span className="h-2 w-2 rounded-full bg-gray-300" />
            </div>

            {/* screen with darker content */}
            <div className="relative aspect-[16/9] w-full rounded-b-2xl overflow-hidden border-t border-gray-200">
              {/* glass & reflection */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
              <div className="pointer-events-none absolute -top-1/3 -left-1/4 h-[140%] w-[160%] rotate-6 bg-[linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.08))]" />
              {/* light sweep on hover */}
              <motion.div
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.35)_40%,rgba(255,255,255,0)_100%)]"
                animate={{ x: ["0%", "175%"] }}
                transition={{
                  duration: 2.4,
                  repeat: hover ? Infinity : 0,
                  ease: "easeInOut",
                }}
              />
              {/* CONTENT: darker text */}
              <div className="relative h-full w-full p-6 select-none">
                {/* header row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[15px] md:text-base font-semibold text-gray-900 tracking-tight">
                    Analytics Overview
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="px-2 py-1 rounded-full border border-gray-200 bg-white">
                      Live
                    </span>
                    <span className="px-2 py-1 rounded-full border border-gray-200 bg-white">
                      v2.1
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-5">
                  Performance is trending upward across key funnels. Latency
                  remains under target.
                </p>

                {/* 3 cards */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { k: "TTFB", v: "198ms" },
                    { k: "CLS", v: "0.03" },
                    { k: "LCP", v: "1.1s" },
                  ].map(({ k, v }) => (
                    <div
                      key={k}
                      className="rounded-xl border border-gray-200 bg-gray-50/60 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
                    >
                      <div className="text-[11px] uppercase tracking-wide text-gray-600">
                        {k}
                      </div>
                      <div className="text-lg font-semibold text-gray-900 mt-1">
                        {v}
                      </div>
                      <div className="mt-2 h-1.5 rounded bg-gray-200 overflow-hidden">
                        <div className="h-full w-2/3 bg-gray-900/70" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* table-ish rows */}
                <div className="mt-5 rounded-xl border border-gray-200 overflow-hidden">
                  {[
                    ["API latency", "312ms"],
                    ["Uptime", "99.97%"],
                    ["Error rate", "0.08%"],
                  ].map(([label, val], i) => (
                    <div
                      key={label}
                      className={`flex items-center justify-between px-4 py-2 text-sm ${
                        i % 2 ? "bg-white" : "bg-gray-50/70"
                      }`}
                    >
                      <span className="text-gray-800">{label}</span>
                      <span className="font-medium text-gray-900">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* base */}
            <div className="mx-auto h-2 w-2/3 rounded-b-xl bg-gray-200" />
          </div>
        </div>

        {/* phone overlay */}
        <motion.div
          className="absolute -bottom-6 -right-6 w-40 sm:w-48 md:w-56"
          animate={hover ? { y: -4, x: 2 } : { y: 0, x: 0 }}
          transition={{ type: "spring", stiffness: 230, damping: 16 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative rounded-[22px] border border-gray-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden">
            {/* bezel shine */}
            <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-white/60" />
            {/* notch */}
            <div className="relative h-6 bg-white">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-20 rounded-full bg-gray-200" />
            </div>
            {/* screen */}
            <div className="relative bg-gray-50 border-t border-gray-200 overflow-hidden">
              <div className="pointer-events-none absolute -top-1/4 -left-1/3 h-full w-full rotate-[12deg] bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,255,255,0.06))]" />
              <motion.div
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.35)_40%,rgba(255,255,255,0)_100%)]"
                animate={{ x: ["0%", "200%"] }}
                transition={{
                  duration: 2.2,
                  repeat: hover ? Infinity : 0,
                  ease: "easeInOut",
                  delay: 0.35,
                }}
              />
              {/* darker micro-UI */}
              <div className="relative p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[13px] font-semibold text-gray-900">
                    Sessions
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full border border-gray-200 bg-white text-gray-600">
                    24h
                  </span>
                </div>
                <div className="h-28 rounded-xl bg-gray-100 border border-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_20%_10%,rgba(255,255,255,0.7),transparent)]" />
                  <Grain className="opacity-[0.06]" />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
                  {[
                    ["Active", "128"],
                    ["Bounce", "18%"],
                    ["Conv.", "4.2%"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="rounded-lg border border-gray-200 bg-white px-2 py-1.5"
                    >
                      <div className="text-gray-600">{k}</div>
                      <div className="font-semibold text-gray-900">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* bottom bar */}
            <div className="h-8 bg-white flex items-center justify-center">
              <div className="h-1 w-14 rounded-full bg-gray-200" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* caption chips */}
      <div className="mt-7 flex flex-wrap gap-3">
        {["Next.js", "TypeScript", "iOS & Android", "Secure by design"].map(
          (t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-full border border-gray-200 bg-white text-xs text-gray-700"
            >
              {t}
            </span>
          )
        )}
      </div>
    </motion.div>
  );
}

/* subtle grain overlay */
function Grain({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none mix-blend-multiply ${className}`}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/	filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
        backgroundSize: "160px 160px",
      }}
    />
  );
}
