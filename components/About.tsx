"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const SKILL_TAGS = [
  "React.js",
  "MERN Stack",
  "Java",
  "Spring Boot",
  "SQL",
  "MongoDB",
  "Networking Fundamentals",
  "Node.js / Express",
];

export default function About() {
  return (
    <section id="about" className="bg-bg px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading command="cat about.md" title="About Me" />

        <div className="grid gap-12 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-4 text-sm leading-relaxed text-ink-dim sm:text-base"
          >
            <p>
              I'm a Bachelor of Technology student in Computer Science &
              Engineering with a focus on full-stack web development. My work
              spans the entire stack — from designing responsive React
              interfaces to building robust APIs with Node.js, Express, and
              Spring Boot, and modeling data across SQL and MongoDB.
            </p>
            <p>
              Alongside development, I have a solid grounding in{" "}
              <span className="text-ink">networking fundamentals</span>,
              which shapes how I think about system design, latency, and
              building applications that scale beyond a single machine.
            </p>
            <p>
              My goal is to grow into a full-stack / backend-leaning engineer
              role where I can ship reliable, well-architected products —
              while continuing to deepen my expertise across the MERN stack
              and the Java/Spring ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="terminal-window rounded-md">
              <div className="flex items-center gap-1.5 border-b border-accent/15 px-4 py-2.5">
                <span className="dot bg-accent-red/70" />
                <span className="dot bg-accent-amber/70" />
                <span className="dot bg-accent/70" />
                <span className="ml-3 font-mono text-[11px] text-ink-faint">
                  stack.json
                </span>
              </div>
              <ul className="space-y-2.5 px-5 py-5 font-mono text-xs sm:text-sm">
                {SKILL_TAGS.map((tag, i) => (
                  <motion.li
                    key={tag}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center gap-2 text-ink-dim"
                  >
                    <span className="text-accent">▸</span> {tag}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
