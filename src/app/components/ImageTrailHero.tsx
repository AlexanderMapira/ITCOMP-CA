"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import styles from "./Marquee.module.css";

export type ImageTrailHeroProps = {
  // Foreground content
  frontWords?: string[];
  frontSubtext?: [string, string];

  // Foreground styling controls
  frontWordSize?: string; // e.g. "clamp(28px, 5vw, 48px)"
  frontWordClassName?: string; // extra Tailwind classes for <h1>
  frontContainerClassName?: string; // shift headline+subtext together (e.g. "relative left-4 sm:left-6")
  stackFrontWords?: boolean; // vertical stack vs inline (default: false)

  // Background scrolling lines
  sentences?: string[];

  // Trail controls (normally keep off)
  showTrail?: boolean; // default false
  images?: string[];
  popSize?: number;
  trailLength?: number;
  popLifetimeMs?: number;
  spawnEveryMs?: number;

  // Layout
  className?: string;
  bg?: string;
};

const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1520975922284-9f9b7073ee2c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519681393784-9f9b7073ee2c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
];

const DEFAULT_SENTENCES = [
  "DESIGN THAT FEELS ALIVE",
  "MOTION THAT TELLS A STORY",
  "DELIGHT IN EVERY HOVER",
  "INTERFACES THAT INVITE PLAY",
];

const DEFAULT_FRONT_WORDS = ["BOLD", "MOTION", "SYSTEMS"];
const DEFAULT_FRONT_SUBTEXT: [string, string] = [
  "A modern, playful hero with motion as a first-class citizen.",
  "Move your mouse to paint the space with imagery.",
];

export default function ImageTrailHero({
  // foreground
  frontWords = DEFAULT_FRONT_WORDS,
  frontSubtext = DEFAULT_FRONT_SUBTEXT,

  // styling
  frontWordSize,
  frontWordClassName,
  frontContainerClassName,
  stackFrontWords = false,

  // background
  sentences = DEFAULT_SENTENCES,

  // trail (off by default)
  showTrail = false,
  images = DEFAULT_IMAGES,
  popSize = 170,
  trailLength = 24,
  popLifetimeMs = 1900,
  spawnEveryMs = 40,

  // layout
  bg = "bg-gray-900",
  className = "",
}: ImageTrailHeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasTouch, setHasTouch] = useState(false);

  // SSR-safe pointer detection
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      setHasTouch(window.matchMedia("(pointer: coarse)").matches);
    }
  }, []);

  // cursor / trail state (only used if showTrail)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  type Pop = {
    id: number;
    x: number;
    y: number;
    src: string;
    born: number;
    rot: number;
  };
  const [pops, setPops] = useState<Pop[]>([]);
  const idRef = useRef(0);
  const lastSpawnRef = useRef(0);
  const imgIndexRef = useRef(0);

  const spawnPop = useCallback(
    (x: number, y: number) => {
      const now = performance.now();
      const id = ++idRef.current;
      const src = images[imgIndexRef.current % images.length];
      imgIndexRef.current++;
      const rot = Math.random() * 20 - 10;
      setPops((prev) => {
        const next = [...prev, { id, x, y, src, born: now, rot }];
        const over = next.length - trailLength;
        return over > 0 ? next.slice(over) : next;
      });
    },
    [images, trailLength]
  );

  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mx.set(x);
      my.set(y);

      const now = performance.now();
      if (now - lastSpawnRef.current >= spawnEveryMs) {
        lastSpawnRef.current = now;
        spawnPop(x, y);
      }
    },
    [mx, my, spawnEveryMs, spawnPop]
  );

  // clean up trail pops only if trail is active
  useEffect(() => {
    if (!showTrail) return;
    const t = setInterval(() => {
      const now = performance.now();
      setPops((prev) => prev.filter((p) => now - p.born < popLifetimeMs));
    }, Math.min(120, popLifetimeMs / 4));
    return () => clearInterval(t);
  }, [popLifetimeMs, showTrail]);

  // ⬇️ Build marquee lines: SLOWER + PUSHED UP
  const lines = useMemo(() => {
    const base = (
      sentences.length >= 4
        ? sentences.slice(0, 4)
        : [...sentences, ...DEFAULT_SENTENCES].slice(0, 4)
    ).map((s) => s.toUpperCase());

    return base.map((text, i) => ({
      text,
      dir: i % 2 === 0 ? "ltr" : "rtl",
      fontSize:
        i % 2 === 0 ? "clamp(28px, 8vw, 120px)" : "clamp(26px, 7.5vw, 112px)",
      opacity: 0.16 + i * 0.02,
      // Higher duration value => slower movement (was 48 + i*5)
      speed: 80 + i * 12,
      // Shift lines upward slightly (used in inline style below)
      topFactor: i + 0.7, // was (i + 1)
    }));
  }, [sentences]);

  return (
    <section
      ref={containerRef}
      onMouseMove={showTrail && !hasTouch ? handleMove : undefined}
      className={`relative isolate overflow-hidden min-h-[80vh] w-full flex items-center ${bg} ${className} font-sans`}
    >
      {/* Background marquee lines (seamless, alternating directions) */}
      <div className="pointer-events-none absolute inset-0 select-none [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)] overflow-hidden">
        {lines.map((ln, i) => (
          <div
            key={i}
            aria-hidden
            style={{
              // push lines upward a bit by using 0.7 instead of 1.0 step
              top: `${ln.topFactor * (100 / (4 + 1))}%`,
              fontSize: ln.fontSize,
              opacity: ln.opacity,
              letterSpacing: "0.08em",
            }}
            className="absolute left-0 right-0 -translate-y-1/2 font-extrabold tracking-widest"
          >
            <div
              className={`${styles.marquee} text-gray-200`}
              style={{
                animation: `${
                  ln.dir === "ltr" ? styles.marqueeLtr : styles.marqueeRtl
                } ${ln.speed}s linear infinite`,
              }}
            >
              {/* repeat to remove gaps */}
              <span className={styles.chunk}>{ln.text}</span>
              <span className={styles.chunk}>{ln.text}</span>
              <span className={styles.chunk}>{ln.text}</span>
              <span className={styles.chunk}>{ln.text}</span>
              <span className={styles.chunk}>{ln.text}</span>
              <span className={styles.chunk}>{ln.text}</span>
              <span className={styles.chunk}>{ln.text}</span>
              <span className={styles.chunk}>{ln.text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Foreground: headline + subtext */}
      <div className={`relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:py-36 ${frontContainerClassName ?? ""}`}>
        <div className="max-w-5xl relative left-4 translate-y-2 sm:translate-y-10 [transform:translateZ(0)]">
          <h1
            className={`text-white uppercase font-extrabold leading-[0.95] drop-shadow-2xl ${frontWordClassName ?? ""}`}
            style={{
              fontSize: frontWordSize ?? "clamp(36px, 7.5vw, 120px)",
              letterSpacing: "0.06em",
            }}
          >
            {stackFrontWords
              ? frontWords.map((w, idx) => (
                  <div key={idx} className="block mb-2">
                    {w.toUpperCase()}
                  </div>
                ))
              : frontWords.map((w, idx) => (
                  <span key={idx} className="block mb-2">
                    {w.toUpperCase()}
                  </span>
                ))}
          </h1>

          {frontSubtext && (
            <div className="mt-3 text-gray-200/90">
              <p className="text-[11px] sm:text-xs leading-snug max-w-xs">
                {frontSubtext[0]}
              </p>
              <p className="text-[11px] sm:text-xs leading-snug max-w-xs mt-1">
                {frontSubtext[1]}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Optional: Image trail pops (off by default) */}
      {showTrail && !hasTouch && (
        <AnimatePresence initial={false}>
          {pops.map((p) => (
            <motion.div
              key={p.id}
              className="pointer-events-none absolute z-0 will-change-transform drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.6, y: 8, rotate: p.rot }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: p.rot }}
              exit={{ opacity: 0, scale: 0.7, y: -8, rotate: p.rot * 1.2 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
                mass: 0.35,
              }}
              style={{ left: p.x - popSize / 2, top: p.y - popSize / 2 }}
            >
              <div
                className="overflow-hidden rounded-3xl ring-2 ring-white/20"
                style={{ width: popSize, height: popSize }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt="pop"
                  className="h-full w-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      )}

      {/* Downward arrow at bottom-right */}
      <div className="pointer-events-none absolute right-4 bottom-4 sm:right-6 sm:bottom-6 z-10 opacity-90">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ animation: `${styles.nudge} 1.8s ease-in-out infinite` }}
        >
          <path d="M12 4v13" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
          <path
            d="M7 12l5 5 5-5"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
