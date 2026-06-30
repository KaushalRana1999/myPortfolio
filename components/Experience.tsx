"use client";

import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ITEMS = [
  {
    type: "experience",
    icon: Briefcase,
    title: "JavaScript Programmer",
    org: "Aptara Pvt Ltd.",
    period: "[07 2025] — [03 2026]",
    detail:
      "Automated publishing workflows at Aptara Pvt. Ltd. by scripting in JavaScript and JSX (ExtendScript) for Adobe InDesign, streamlining layout tasks and improving production efficiency.",
  },
  {
    type: "experience",
    icon: Briefcase,
    title: "Technical Service Engineer",
    org: "TATA MOTORS LTD.",
    period: "[06 2021] — [06 2022]",
    detail: "Hands-on experience in the Technical Services Department, providing end-to-end IT support including system installation, troubleshooting, and user assistance to ensure smooth operations.",
  },
  {
    type: "Internship",
    icon: Briefcase,
    title: "Web Designing & Development",
    org: "Kaafal Agritech Pvt Ltd.",
    period: "[07 2024] — [09 2024]",
    detail: "Experienced in Web Designing & Development, creating responsive and user‑friendly interfaces with modern front‑end technologies. Skilled in building and maintaining dynamic websites, optimizing performance, and ensuring cross‑browser compatibility for seamless user experiences.",
  },
  {
    type: "certification",
    icon: Award,
    title: "Java FullStack Developer",
    org: "DUCAT",
    period: "[11 2025] — [06 2026]",
    detail: "Skilled as a Java Full Stack Developer, with expertise in building scalable backend services using Java and Spring Boot, and developing dynamic front‑end applications with React.js and JavaScript. Experienced in designing RESTful APIs, integrating databases (SQL, PostgreSQL, MongoDB), and collaborating in agile teams to deliver end‑to‑end solutions.",
  },
  {
    type: "certification",
    icon: Award,
    title: "Salesforce Developer",
    org: "Salesforce",
    period: "[04 2024] — [05 2024]",
    detail: "Completed the Salesforce Developer TrailMix on Trailhead, covering Apex, Process Automation, Lightning Web Components, and the Developer Super Set.",
  },

];

export default function Experience() {
  return (
    <section id="experience" className="bg-bg px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="cat experience.log certifications.log"
          title="Experience & Certifications"
        />

        <div className="relative ml-3 border-l border-accent/20 sm:ml-6">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative mb-10 pl-8 last:mb-0 sm:pl-12"
            >
              <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-accent bg-bg sm:-left-[13px] sm:h-6 sm:w-6">
                <item.icon className="text-accent" size={12} />
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded border border-accent/30 px-2 py-0.5 font-mono text-[10px] uppercase text-accent">
                  {item.type}
                </span>
                <p className="font-mono text-[11px] text-ink-dim">{item.period}</p>
              </div>
              <h3 className="mt-1.5 text-base font-semibold text-ink sm:text-lg">
                {item.title}
              </h3>
              <p className="font-mono text-sm text-ink-dim">{item.org}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-dim">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
