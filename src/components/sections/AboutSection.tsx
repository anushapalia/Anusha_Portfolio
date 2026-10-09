"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { about } from "@/data/portfolio";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function AboutSection() {
  return (
    <SectionShell id="about" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title="About Me" id="about-heading" index="01 — Profile" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center text-lg leading-relaxed text-foreground/75"
        >
          {about.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <GlassCard className="tech-border mx-auto max-w-2xl">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-accent shadow-lg shadow-purple-500/30">
                <GraduationCap className="text-white" aria-hidden />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold">{about.education.degree}</h3>
                <p className="mt-1 text-foreground/70">{about.education.institution}</p>
                <p className="font-mono text-sm text-foreground/50">
                  {about.education.location} · {about.education.period}
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {about.stats.map((stat, i) => (
            <motion.li
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={i === 4 ? "sm:col-span-2 lg:col-span-1" : undefined}
            >
              <GlassCard className="stat-card-accent text-center">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm text-foreground/60">{stat.label}</p>
              </GlassCard>
            </motion.li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
