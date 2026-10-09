"use client";

import { SkillChip } from "@/components/skills/SkillChip";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { marqueeTech, skillCategories } from "@/data/portfolio";
import { motion } from "framer-motion";

function MarqueeRow() {
  const items = [...marqueeTech, ...marqueeTech];
  return (
    <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex animate-marquee items-center gap-4 whitespace-nowrap motion-reduce:animate-none">
        {items.map((tech, i) => (
          <span key={`${tech}-${i}`} className="marquee-pill">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <SectionShell id="skills" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title="Skills" id="skills-heading" index="03 — Stack" />
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <GlassCard hover={false} className="h-full tech-border">
                <h3 className="font-heading mb-1 flex items-center gap-2 text-lg font-semibold text-purple-200">
                  <span className="font-mono text-xs text-cyan-400/70">{"{ }"}</span>
                  {cat.title}
                </h3>
                <div className="mb-4 h-px w-12 bg-gradient-accent" aria-hidden />
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <SkillChip key={s.name} name={s.name} icon={s.icon} />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        <MarqueeRow />
      </div>
    </SectionShell>
  );
}
