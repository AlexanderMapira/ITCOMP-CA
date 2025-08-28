"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * LiquidOverlayNav
 * - Minimal top bar with a button.
 * - Clicking the button opens a FULL‑SCREEN liquid/"gooey" overlay that covers the hero.
 * - Nav links float ONLY when hovered (not idle).
 */

export default function LiquidOverlayNav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "ABOUT", href: "#learn-more" },
    { label: "SERVICES", href: "#services" },
    { label: "WORK", href: "#work" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      {/* Tiny top bar with trigger */}
      <header className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between h-14 px-6 text-white">
        <a href="#home" className="font-extrabold tracking-widest uppercase">
          KULTURESET
        </a>
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center w-10 h-10 rounded-xl ring-1 ring-white/15 bg-white/10 hover:bg-white/15 transition"
          aria-label="Open menu"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Fullscreen liquid overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dim background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[70] bg-black"
              onClick={() => setOpen(false)}
            />

            {/* Gooey panel covering the hero (and all) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, borderRadius: "24px" }}
              animate={{ scale: 1, opacity: 1, borderRadius: "0px" }}
              exit={{ scale: 0.95, opacity: 0, borderRadius: "24px" }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="fixed inset-0 z-[80]"
            >
              {/* Goo filter */}
              <svg className="absolute -z-10" width="0" height="0">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="10"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                      result="goo"
                    />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                  </filter>
                </defs>
              </svg>

              <div
                className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950 text-white"
                style={{ filter: "url(#goo)" }}
              >
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl ring-1 ring-white/15 bg-white/10 hover:bg-white/20 transition"
                    aria-label="Close menu"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Nav links: float ONLY when hovered */}
                <div className="h-full w-full flex items-center justify-center">
                  <ul className="flex flex-col gap-6 sm:gap-8 md:gap-10 text-center uppercase font-extrabold tracking-widest">
                    {links.map((l) => (
                      <li key={l.href} className="relative">
                        <motion.a
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="inline-block px-6 py-3 text-3xl sm:text-4xl md:text-5xl text-white/90 hover:text-white"
                          whileHover={{ y: -16, scale: 1.05 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{
                            type: "spring",
                            stiffness: 220,
                            damping: 18,
                          }}
                        >
                          {l.label}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
