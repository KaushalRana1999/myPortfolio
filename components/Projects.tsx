"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProjectsGrid from "./ProjectsGrid";
import { PROJECTS } from "./projectsData";

export default function Projects() {
  const preview = PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="bg-bg px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading command="ls projects/" title="Featured Projects" />

        <ProjectsGrid projects={preview} />

        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="focus-ring group flex items-center gap-2 rounded border border-accent/40 px-5 py-2.5 font-mono text-sm text-ink-dim transition-colors hover:border-accent hover:text-accent"
          >
            View All Projects
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}