"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import RobotMascot from "./RobotMascot";

const BOOT_LINES = [
  "$ whoami",
  "> Kaushal Rana — Full-Stack Developer",
  "$ status --check",
  "> B.Tech CSE student | building with the MERN stack, Java & Spring Boot",
  "$ run intro.sh",
];

function useTypedLines(lines: string[], speed = 28, lineDelay = 220) {
  const [done, setDone] = useState<string[]>([]);
  const [current, setCurrent] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let cancelled = false;

    function typeChar() {
      if (cancelled) return;
      if (lineIndex >= lines.length) {
        setFinished(true);
        return;
      }
      const line = lines[lineIndex];
      if (charIndex <= line.length) {
        setCurrent(line.slice(0, charIndex));
        charIndex++;
        setTimeout(typeChar, speed);
      } else {
        setDone((d) => [...d, line]);
        setCurrent("");
        lineIndex++;
        charIndex = 0;
        setTimeout(typeChar, lineDelay);
      }
    }
    typeChar();
    return () => {
      cancelled = true;
    };
  }, []);

  return { done, current, finished };
}

export default function Hero() {
  const { done, current, finished } = useTypedLines(BOOT_LINES, 2, 10);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-accent/10 bg-bg pt-24"
    >
      <ParticleBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <div>
            <div className="terminal-window mx-auto max-w-2xl rounded-md lg:mx-0">
              <div className="flex items-center gap-1.5 border-b border-accent/15 px-4 py-2.5">
                <span className="dot bg-accent-red/70" />
                <span className="dot bg-accent-amber/70" />
                <span className="dot bg-accent/70" />
                <span className="ml-3 font-mono text-[11px] text-ink-faint">
                  bash — boot.sh
                </span>
              </div>
              <div className="min-h-[180px] px-5 py-5 font-mono text-[13px] leading-7 sm:text-sm">
                {done.map((line, i) => (
                  <div
                    key={i}
                    className={line.startsWith(">") ? "text-accent" : "text-ink-dim"}
                  >
                    {line}
                  </div>
                ))}
                <div className={current.startsWith(">") ? "text-accent" : "text-ink-dim"}>
                  {current}
                  <span className="animate-blink">▌</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={finished ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mx-auto mt-10 max-w-2xl text-center lg:mx-0 lg:text-left"
            >
              <h1 className="font-mono text-4xl font-bold text-ink sm:text-6xl">
                KAUSHAL <span className="text-accent">RANA</span>
              </h1>
              <p className="mt-3 font-mono text-sm text-ink-dim sm:text-base">
                Full-Stack Developer · MERN · Java · Spring Boot
              </p>
              <p className="mx-auto mt-5 max-w-lg text-sm text-ink-dim sm:text-base lg:mx-0">
                B.Tech CSE student turning coffee, console logs, and the occasional
                stack trace into production-ready web applications.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <a
                  href="#projects"
                  className="focus-ring rounded border border-accent bg-accent px-6 py-3 font-mono text-xs font-medium text-bg transition-transform hover:-translate-y-0.5"
                >
                  view_projects()
                </a>
                <a
                  href="#contact"
                  className="focus-ring rounded border border-accent/40 px-6 py-3 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  get_in_touch()
                </a>
              </div>
            </motion.div>
          </div>

          <RobotMascot />
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-accent/70"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
