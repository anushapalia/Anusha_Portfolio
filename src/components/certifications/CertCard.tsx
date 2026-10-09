"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import type { Certification } from "@/data/portfolio";
import { isPlaceholderLink } from "@/lib/utils";
import { Award, ExternalLink, Trophy } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

type Props = {
  cert: Certification;
};

export function CertCard({ cert }: Props) {
  const Icon =
    cert.type === "leetcode" ? SiLeetcode : cert.type === "cert" ? Award : Trophy;
  const placeholder = isPlaceholderLink(cert.link);

  return (
    <GlassCard className="tech-border flex h-full flex-col">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent">
        <Icon className="h-6 w-6 text-white" aria-hidden />
      </div>
      <h3 className="font-heading text-lg font-semibold">{cert.title}</h3>
      <p className="mt-1 text-sm text-foreground/60">
        {cert.issuer}
        {cert.year ? ` · ${cert.year}` : ""}
      </p>
      {cert.description && (
        <p className="mt-2 text-sm text-foreground/70">{cert.description}</p>
      )}
      <div className="mt-auto pt-4">
        {placeholder ? (
          <span className="text-xs text-foreground/40">View (add link in portfolio.ts)</span>
        ) : (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            View
            <ExternalLink size={14} aria-hidden />
          </a>
        )}
      </div>
    </GlassCard>
  );
}
