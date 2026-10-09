"use client";

import { CertCard } from "@/components/certifications/CertCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { certifications } from "@/data/portfolio";

export function AchievementsSection() {
  return (
    <SectionShell id="achievements" tone="elevated" aria-labelledby="achievements-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          title="Certifications & Achievements"
          id="achievements-heading"
          index="06 — Milestones"
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <li key={cert.id}>
              <CertCard cert={cert} />
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
