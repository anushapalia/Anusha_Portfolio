"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import type { ExperienceItem } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

type Props = {
  item: ExperienceItem;
  index: number;
};

export function ExperienceCard({ item, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative pl-0 md:pl-8"
    >
      <div
        className="absolute left-0 top-6 hidden h-8 w-8 rounded-full border-2 border-purple-400/80 bg-background shadow-[0_0_20px_-4px_rgba(168,85,247,0.8)] md:flex md:items-center md:justify-center"
        aria-hidden
      >
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-accent" />
      </div>

      <GlassCard className="tech-border md:ml-2">
        <div
          className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-purple-500/0 via-purple-500/0 to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-purple-500/80 group-hover:to-cyan-500/60"
          aria-hidden
        />
        <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 shadow-inner">
              <Briefcase size={18} className="text-purple-300" aria-hidden />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold">{item.role}</h3>
              <p className="text-foreground/80">
                {item.company} · {item.location}
              </p>
            </div>
          </div>
          <time className="shrink-0 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 font-mono text-xs text-cyan-100/80">
            {item.period}
          </time>
        </div>
        <ul className="space-y-2 text-foreground/75">
          {item.bullets.map((bullet) => (
            <li key={bullet.slice(0, 40)} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-accent" aria-hidden />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <ul className="mt-4 flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-cyan-200/90 transition hover:border-cyan-400/40 hover:shadow-[0_0_16px_-6px_rgba(6,182,212,0.45)]"
            >
              {t}
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.article>
  );
}
