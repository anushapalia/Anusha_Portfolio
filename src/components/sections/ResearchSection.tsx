"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { research } from "@/data/portfolio";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export function ResearchSection() {
  return (
    <SectionShell id="research" aria-labelledby="research-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          title={research.title}
          id="research-heading"
          index="05 — Research"
        />
        <ul className="space-y-4">
          {research.items.map((item) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="tech-border">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-purple-500/15">
                    <BookOpen className="text-purple-400" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">{item.title}</h3>
                    <p className="font-mono text-sm text-foreground/60">{item.venue}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
