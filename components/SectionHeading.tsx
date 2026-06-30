"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  command,
  title,
}: {
  command: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <p className="font-mono text-xs text-accent">$ {command}</p>
      <h2 className="mt-2 font-mono text-2xl font-bold text-ink sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-accent/40" />
    </motion.div>
  );
}
