"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  cubicBezier,
  type Transition,
} from "framer-motion";

export default function LiquidOverlayNav() {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Lock body scroll while open
  useEffect(() => {
    const { style } = document.body;
    const prev = style.overflow;
    style.overflow = open ? "hidden" : prev || "";
    return () => {
      style.overflow = prev || "";
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { label: "ABOUT", href: "#learn-more" },
    { label: "SERVICES", href: "#services" },
    { label: "CONTACT", href: "#contact" },
  ];

  // Easing
  const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

  const panelTransition: Transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.45, ease: easeOutExpo };

  const fadeTransition: Transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.25 };

  const itemTransition = (i: number): Transition =>
    prefersReducedMotion
      ? { duration: 0 }
      : { delay: 0.15 + i * 0.07, duration: 0.35, ease: easeOutExpo };

  const onNavClick = useCallback(
    (href: string) => {
      setOpen(false);
      setTimeout(() => {
        if (href.startsWith("#")) {
          document
            .querySelector(href)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.location.href = href;
        }
      }, prefersReducedMotion ? 0 : 320);
    },
    [prefersReducedMotion]
  );

  return (
    <>
      {/* Top bar — increased top gap via pt-3 and taller header */}
      <header className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between h-16 px-6 pt-3">
        <Link
          href="#home"
          className="font-extrabold tracking-widest uppercase text-white"
        >
          KHODISET
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center w-10 h-10 rounded-xl ring-1 ring-white/15 bg-white/10 hover:bg-white/15 transition text-white"
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

      {/* Overlay */}
      <AnimatePresence initial={false} mode="wait">
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={fadeTransition}
              className="fixed inset-0 z-[95] bg-black/30"
              onClick={() => setOpen(false)}
            />

            {/* Slide-in full screen panel FROM RIGHT */}
            <motion.aside
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={panelTransition}
              className="fixed inset-0 z-[100] bg-white overflow-hidden"
              aria-modal="true"
              role="dialog"
            >
              {/* Close button */}
              <div className="absolute top-4 right-4 z-[110]">
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl ring-1 ring-gray-300 bg-gray-100 hover:bg-gray-200 transition"
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
                    className="text-gray-900"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Centered content */}
              <div className="relative z-[105] h-full w-full flex items-center justify-center px-6 text-gray-900">
                <nav className="w-full max-w-3xl">
                  <ul className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 text-center uppercase font-extrabold tracking-widest">
                    {links.map((l, i) => (
                      <motion.li
                        key={l.href}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={itemTransition(i)}
                        className="w-full"
                      >
                        <button
                          onClick={() => onNavClick(l.href)}
                          className="group w-full"
                        >
                          {/* BOUNCE ON HOVER */}
                          <motion.span
                            className="inline-block px-6 py-3 text-[clamp(26px,5vw,56px)] text-gray-900"
                            whileHover={{
                              y: [0, -10, 0],
                              scale: [1, 1.05, 1],
                              transition: {
                                duration: 0.38,
                                ease: easeOutExpo,
                                times: [0, 0.5, 1],
                              },
                            }}
                            whileTap={{
                              scale: 0.97,
                              transition: { duration: 0.12 },
                            }}
                          >
                            {l.label}
                          </motion.span>

                          {/* Underline accent */}
                          <span className="block mx-auto h-[2px] w-0 group-hover:w-3/4 transition-all duration-300 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-900 rounded-full" />
                        </button>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tagline chip */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : { delay: 0.25, duration: 0.4, ease: easeOutExpo }
                    }
                    className="mt-10 text-center"
                  >
                    
                  </motion.div>
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
