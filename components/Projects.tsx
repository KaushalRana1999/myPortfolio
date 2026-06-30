"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, ExternalLink, Folder, X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ImageSlider from "./ImageSlider";

const PROJECTS = [
  {
    name: "ZYNTRA",
    tag: "E-commerce · MERN Stack",
    description:
      "Final-year project: a full e-commerce platform with product catalog, cart, secure checkout, order tracking, and an admin dashboard for inventory management.",
    longDescription:
      "ZYNTRA is a complete e-commerce platform built as my final-year project, covering the full customer journey from browsing to checkout. The backend exposes a REST API for product, cart, and order management, secured with JWT-based authentication, while the frontend handles dynamic product filtering, a persistent cart, and order tracking. An admin dashboard lets store owners manage inventory, view orders, and update stock levels in real time.",
    features: [
      "JWT-based authentication & role-based access (customer / admin)",
      "Product catalog with search, filtering, and category browsing",
      "Persistent cart and secure checkout flow",
      "Order tracking and order history per user",
      "Admin dashboard for inventory and order management",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/KaushalRana1999/Zyntra",
    live: "https://zyntrafrontend.vercel.app/",
    images: [
      "/projects/Zyntra/Zyntra.png",
      "/projects/Zyntra/Zyntra-2.png",
      "/projects/Zyntra/Zyntra-3.png",
    ],
  },
  {
    name: "Hospital Management System",
    tag: "Full-Stack Web App",
    description:
      "A system for managing patient records, appointment scheduling, and doctor availability, with role-based access for admins, doctors, and front-desk staff.",
    longDescription:
      "A role-based hospital management system designed to streamline day-to-day clinic operations. Admins manage staff and departments, doctors manage their availability and view patient records, and front-desk staff handle appointment scheduling — all from dedicated dashboards built on a shared Node.js + Express backend with a MongoDB schema in the MERN stack.",
    features: [
      "Role-based dashboards for admin, doctor, and front-desk staff",
      "Patient record management with appointment history",
      "Doctor availability and appointment scheduling",
      "RESTful API built with MERN stack",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/KaushalRana1999/Hospital",
    live: "https://hospital-frontend-orhk.onrender.com",
    images: [
      "/projects/Hospital/Hospital.png",
      "/projects/Hospital/Hospital-2.png",
      "/projects/Hospital/Hospital-3.png",
    ],
  },

];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveIndex(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const active = activeIndex !== null ? PROJECTS[activeIndex] : null;

  return (
    <section id="projects" className="bg-bg px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading command="ls projects/" title="Featured Projects" />

        <div className="grid gap-7 md:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setActiveIndex(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") setActiveIndex(i);
              }}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-md border border-accent/15 bg-bg-panel transition-colors duration-300 hover:border-accent/50 focus-ring"
            >
              <span className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-center justify-between border-b border-accent/15 bg-bg-panelLight px-4 py-2">
                <div className="flex items-center gap-1.5">
                  <span className="dot bg-accent-red/70" />
                  <span className="dot bg-accent-amber/70" />
                  <span className="dot bg-accent/70" />
                </div>
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-ink-faint">
                  <Folder size={10} />
                  {project.name.toLowerCase().replace(/\s+/g, "-")}
                </span>
              </div>

              <div className="relative aspect-video overflow-hidden bg-bg-panelLight">
                <ImageSlider
                  images={project.images}
                  alt={`${project.name} screenshot`}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-panel/90 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-accent">
                    {project.tag}
                  </p>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-ink-faint">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                    live
                  </span>
                </div>

                <h3 className="mt-1.5 font-mono text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                  {project.name}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-dim">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-accent/20 bg-accent/5 px-2 py-0.5 font-mono text-[10px] text-ink-dim transition-colors group-hover:border-accent/40 group-hover:text-accent"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-4 border-t border-accent/10 pt-4 font-mono text-xs">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="focus-ring flex items-center gap-1.5 text-ink-dim transition-colors hover:text-accent"
                  >
                    <Github size={14} /> ./code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="focus-ring flex items-center gap-1.5 text-ink-dim transition-colors hover:text-accent"
                  >
                    <ExternalLink size={14} /> ./live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="terminal-window relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-md"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-accent/15 bg-bg-panel px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="dot bg-accent-red/70" />
                  <span className="dot bg-accent-amber/70" />
                  <span className="dot bg-accent/70" />
                  <span className="ml-3 font-mono text-[11px] text-ink-faint">
                    cat {active.name.toLowerCase().replace(/\s+/g, "-")}.json
                  </span>
                </div>
                <button
                  onClick={() => setActiveIndex(null)}
                  aria-label="Close project details"
                  className="focus-ring rounded p-1 text-ink-dim transition-colors hover:text-accent"
                >
                  <X size={16} />
                </button>
              </div>

              {active.images.length > 0 && (
                <div className="relative aspect-video overflow-hidden border-b border-accent/15 bg-bg-panelLight">
                  <ImageSlider
                    images={active.images}
                    alt={`${active.name} screenshot`}
                    interval={3000}
                  />
                </div>
              )}

              <div className="p-6">
                <p className="font-mono text-[11px] uppercase tracking-wide text-accent">
                  {active.tag}
                </p>
                <h3 className="mt-1.5 font-mono text-2xl font-bold text-ink">
                  {active.name}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-ink-dim">
                  {active.longDescription}
                </p>

                <p className="mt-6 font-mono text-xs text-accent">
                  $ cat features.md
                </p>
                <ul className="mt-3 space-y-2">
                  {active.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm leading-relaxed text-ink-dim"
                    >
                      <span className="mt-1 text-accent">▸</span> {f}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 font-mono text-xs text-accent">
                  $ cat stack.json
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {active.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-accent/30 bg-accent/5 px-2.5 py-1 font-mono text-[11px] text-ink-dim"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-4 border-t border-accent/10 pt-5 font-mono text-xs">
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex items-center gap-2 rounded border border-accent/40 px-4 py-2.5 text-ink-dim transition-colors hover:border-accent hover:text-accent"
                  >
                    <Github size={14} /> view_code()
                  </a>

                  <a
                    href={active.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex items-center gap-2 rounded border border-accent bg-accent px-4 py-2.5 font-medium text-bg transition-transform hover:-translate-y-0.5"
                  >
                    <ExternalLink size={14} /> view_live()
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
