"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <SectionShell id="projects" tone="elevated" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title="Projects" id="projects-heading" index="04 — Builds" />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
