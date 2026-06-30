"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#education", label: "education" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur border-b border-accent/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-mono text-sm text-ink">
          <span className="text-accent">~/</span>kaushal-rana
          <span className="animate-blink text-accent">_</span>
        </a>

        <ul className="hidden items-center gap-7 font-mono text-xs md:flex">
          {LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring text-ink-dim transition-colors hover:text-accent"
              >
                <span className="text-accent/60">0{i + 1}.</span> {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="focus-ring rounded border border-accent/20 p-2 text-ink-dim transition-colors hover:border-accent hover:text-accent"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="focus-ring rounded border border-accent/20 p-2 text-ink-dim md:hidden"
          >
            {open ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-accent/10 bg-bg-panel px-6 py-4 font-mono text-xs md:hidden">
          {LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-ink-dim hover:text-accent"
              >
                <span className="text-accent/60">0{i + 1}.</span> {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </motion.header>
  );
}
