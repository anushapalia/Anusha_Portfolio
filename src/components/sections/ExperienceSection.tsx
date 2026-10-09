"use client";

import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { experience } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <SectionShell id="experience" tone="elevated" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          title="Experience"
          id="experience-heading"
          index="02 — Timeline"
          subtitle="Internships & roles, newest first"
        />
        <div className="relative md:pl-4">
          <div
            className="absolute bottom-0 left-[15px] top-4 hidden w-px md:block"
            aria-hidden
          >
            <div className="h-full w-full bg-gradient-to-b from-purple-500/60 via-blue-500/40 to-transparent" />
            <div className="animate-pulse-glow absolute inset-0 w-full bg-gradient-to-b from-cyan-400/30 to-transparent blur-sm" />
          </div>
          <div className="relative space-y-8 md:space-y-10">
            {experience.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
