"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section className="border-y border-accent/10 bg-bg-panel px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row"
      >
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded border border-accent/30 text-accent">
            <FileText size={20} />
          </span>
          <div>
            <p className="font-mono text-xs text-accent">resume.pdf</p>
            <p className="text-sm text-ink-dim">
              Full résumé with detailed project breakdowns and skill history.
            </p>
          </div>
        </div>

        <a
          href="/KaushalResume.pdf"
          download
          className="focus-ring flex items-center gap-2 rounded border border-accent bg-accent px-6 py-3 font-mono text-xs font-medium text-bg transition-transform hover:-translate-y-0.5"
        >
          <Download size={14} /> download_resume.pdf
        </a>
      </motion.div>
    </section>
  );
}
