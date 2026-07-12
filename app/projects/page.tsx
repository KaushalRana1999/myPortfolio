import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProjectsGrid from "@/components/ProjectsGrid";
import { PROJECTS } from "@/components/projectsData";

export const metadata = {
  title: "All Projects",
};

export default function AllProjectsPage() {
  return (
    <section className="bg-bg min-h-screen px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="focus-ring mb-8 inline-flex items-center gap-2 font-mono text-sm text-ink-dim transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <h1 className="font-mono text-3xl font-bold text-ink">All Projects</h1>
        <p className="mt-2 text-sm text-ink-dim">Everything I've built, in one place.</p>

        <div className="mt-10">
          <ProjectsGrid projects={PROJECTS} />
        </div>
      </div>
    </section>
  );
}