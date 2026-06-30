"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const GROUPS = [
  {
    label: "frontend",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Next.js / Tailwind CSS", level: 80 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "TypeScript", level: 78 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "Redux / Context API", level: 82 },
    ],
  },
  {
    label: "backend",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "Java", level: 80 },
      { name: "Spring Boot", level: 75 },
      { name: "MongoDB / PostgreSQL", level: 82 },
      { name: "RESTful API Development", level: 84 },
      { name: "Authentication & Security (JWT/OAuth)", level: 78 },
    ],
  },
 
  {
    label: "tools_and_fundamentals",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "Docker", level: 80 },
      { name: "AWS (EC2, S3, Lambda)", level: 75 },
      { name: "CI/CD Pipelines (Jenkins, GitHub Actions)", level: 78 },
      { name: "Postman / API Testing", level: 85 },
      { name: "VS Code / IntelliJ IDEA", level: 82 },
    ],
  },
  {
    label: "Data Structures & Algorithms",
    skills: [
      { name: "Problem Solving", level: 85 },
      { name: "Recursion", level: 80 },
      { name: "Sorting & Searching", level: 82 },
      { name: "Dynamic Programming", level: 78 },
      { name: "Time & Space Complexity Analysis", level: 75 },
    ],
  },
   {
    label: "databases",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "SQL", level: 78 },
      { name: "PostGreSQL", level: 85 },
    ],
  },
];

function Bar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="mb-1.5 flex items-center justify-between font-mono text-xs">
        <span className="text-ink">{name}</span>
        <span className="text-ink-dim">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-bg-panelLight">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-accent-dim to-accent"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-bg-panel px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading command="cat skills.config" title="Skills" />

        <div className="grid gap-7 sm:grid-cols-2">
          {GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="terminal-window rounded-md p-5"
            >
              <p className="mb-4 font-mono text-xs text-accent">
                # {group.label}
              </p>
              {group.skills.map((s, si) => (
                <Bar
                  key={s.name}
                  name={s.name}
                  level={s.level}
                  delay={si * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
