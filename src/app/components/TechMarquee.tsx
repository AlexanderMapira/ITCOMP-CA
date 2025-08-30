"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiAmazonwebservices,
  SiVercel,
  SiGit,
} from "react-icons/si";
import type { IconType } from "react-icons";

const techIcons: { Icon: IconType; label: string }[] = [
  { Icon: SiPython, label: "Python" },
  { Icon: SiJavascript, label: "JavaScript" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiReact, label: "React" },
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiTailwindcss, label: "Tailwind CSS" },
  { Icon: SiDocker, label: "Docker" },
  { Icon: SiPostgresql, label: "PostgreSQL" },
  { Icon: SiMongodb, label: "MongoDB" },
  { Icon: SiFirebase, label: "Firebase" },
  { Icon: SiAmazonwebservices, label: "AWS" },
  { Icon: SiVercel, label: "Vercel" },
  { Icon: SiGit, label: "Git" },
];

function LogoItem({ Icon, label }: { Icon: IconType; label: string }) {
  return (
    <div
      className="h-16 md:h-20 w-24 md:w-32 flex items-center justify-center 
                 text-gray-900 hover:text-gray-700 transition-colors"
      aria-label={label}
      title={label}
    >
      <Icon className="text-3xl md:text-4xl" />
    </div>
  );
}

/** Single line, seamless infinite scroll with gap */
export default function TechMarquee() {
  return (
    <section className="bg-white py-6 relative">
      {/* edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-white to-transparent" />

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-8 md:gap-12 min-w-full"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {/* Row A */}
          <div className="flex gap-8 md:gap-12">
            {techIcons.map(({ Icon, label }, i) => (
              <LogoItem key={`a-${label}-${i}`} Icon={Icon} label={label} />
            ))}
          </div>
          {/* Row B (duplicate for loop) */}
          <div className="flex gap-8 md:gap-12">
            {techIcons.map(({ Icon, label }, i) => (
              <LogoItem key={`b-${label}-${i}`} Icon={Icon} label={label} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
