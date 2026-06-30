"use client";

import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";
import SectionHeading from "./SectionHeading";

const EDUCATION = [
  {
    icon: GraduationCap,
    degree: "Bachelor of Technology (B.Tech), Computer Science & Engineering",
    place: "Uttarakhand Technnical University (Amrapali Group of Institute)",
    period: "[2022] — [2025]",
    detail:
      "Final Year Project: ZYNTRA — a full-stack MERN e-commerce platform with cart, checkout, and admin order management.",
  },
  {
    icon: School,
    degree: "Diploma",
    place: "Govt. Polytechnic Srinagar Garhwal (UBTER)",
    period: "[2017] — [2020]",
    detail:
      "Built foundations in programming, data structures, and computer networks that fed directly into the B.Tech program.",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-bg-panel px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading command="cat education.log" title="Education" />

        <div className="relative ml-3 border-l border-accent/20 sm:ml-6">
          {EDUCATION.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative mb-12 pl-8 last:mb-0 sm:pl-12"
            >
              <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-accent bg-bg-panel sm:-left-[13px] sm:h-6 sm:w-6">
                <item.icon className="text-accent" size={12} />
              </span>

              <p className="font-mono text-[11px] uppercase tracking-wide text-accent">
                {item.period}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-ink sm:text-xl">
                {item.degree}
              </h3>
              <p className="mt-0.5 font-mono text-sm text-ink-dim">
                {item.place}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-dim">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
