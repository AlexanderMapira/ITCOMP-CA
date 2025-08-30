"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useReducedMotion,
  cubicBezier,
  type Transition,
} from "framer-motion";

/* Hover-only heavy-wave float */
function HoverFloatWord({
  children,
  strength = 1.2, // increase for rougher seas
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimation();
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const dur = 3.6 + 0.4 * strength;

    if (hovering) {
      controls.start({
        y: [0, 12 * strength, -14 * strength, 8 * strength, -10 * strength, 0],
        x: [0, -6 * strength, 4 * strength, -5 * strength, 3 * strength, 0],
        rotate: [
          0,
          -4 * strength,
          3 * strength,
          -3 * strength,
          2 * strength,
          0,
        ],
        skewX: [
          0,
          -2 * strength,
          1.5 * strength,
          -1 * strength,
          1 * strength,
          0,
        ],
        skewY: [
          0,
          1 * strength,
          -1 * strength,
          0.5 * strength,
          -0.5 * strength,
          0,
        ],
        transition: { duration: dur, ease: "easeInOut", repeat: Infinity },
      });
    } else {
      controls.stop();
      controls.start({
        y: 0,
        x: 0,
        rotate: 0,
        skewX: 0,
        skewY: 0,
        transition: { type: "spring", stiffness: 260, damping: 20 },
      });
    }
  }, [hovering, strength, controls, prefersReducedMotion]);

  if (prefersReducedMotion)
    return <span className="inline-block">{children}</span>;

  const durWake = 3.6 + 0.4 * strength;

  return (
    <motion.span
      className="relative inline-block will-change-transform"
      style={{ transformOrigin: "50% 60%" }}
      onHoverStart={() => setHovering(true)}
      onHoverEnd={() => setHovering(false)}
      animate={controls}
      initial={false}
    >
      <span className="relative z-10">{children}</span>

      {/* soft wake under word (only visible while hovering) */}
      <motion.span
        aria-hidden
        className="absolute left-1/2 bottom-0 h-2 w-1/2 -translate-x-1/2 rounded-full bg-gray-900/10 blur-[2px]"
        animate={
          hovering
            ? {
                opacity: [0.35, 0.55, 0.4, 0.5, 0.35],
                scaleX: [1, 0.85, 1.1, 0.9, 1],
                y: [0, 2, -1, 1, 0],
                transition: {
                  duration: durWake,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              }
            : { opacity: 0, scaleX: 1, y: 0, transition: { duration: 0.2 } }
        }
      />
    </motion.span>
  );
}

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
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "CONTACT", href: "/contact" },
  ];

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
      setTimeout(
        () => {
          window.location.href = href;
        },
        prefersReducedMotion ? 0 : 320
      );
    },
    [prefersReducedMotion]
  );

  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between h-16 px-6 pt-3">
        <Link
          href="/"
          className="font-extrabold tracking-widest uppercase text-white"
        >
          KHODITECH
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

            {/* Panel */}
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
              {/* Close */}
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
                          className="w-full"
                        >
                          <HoverFloatWord strength={1.15 + i * 0.12}>
                            <span className="inline-block px-6 py-3 text-[clamp(26px,5vw,56px)] text-gray-900">
                              {l.label}
                            </span>
                          </HoverFloatWord>
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
