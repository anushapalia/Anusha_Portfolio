"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import type { Project } from "@/data/portfolio";
import { cn, isPlaceholderLink } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { MouseEvent } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const githubDisabled = isPlaceholderLink(project.githubUrl);
  const liveDisabled = !project.liveUrl || isPlaceholderLink(project.liveUrl);

  return (
    <motion.div
      style={reduced ? undefined : { rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <GlassCard className="tech-border flex h-full flex-col overflow-hidden p-0">
        <div
          className={cn(
            "group/thumb relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br",
            project.gradient
          )}
          role="img"
          aria-label={`${project.title} project preview placeholder`}
        >
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0 translate-y-full bg-gradient-to-t from-white/20 to-transparent transition-transform duration-700 group-hover/thumb:translate-y-0 motion-reduce:transition-none"
            aria-hidden
          />
          <span className="relative font-heading text-2xl font-bold text-white/95 drop-shadow-lg transition group-hover/thumb:scale-105">
            {project.title}
          </span>
          <p className="absolute bottom-3 right-3 text-xs text-white/70">
            Replace with screenshot in /public/projects/
          </p>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <time className="text-xs text-foreground/50">{project.date}</time>
          <h3 className="font-heading mt-2 text-xl font-semibold">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm text-foreground/70">{project.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-foreground/60"
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            {githubDisabled ? (
              <span className="text-xs text-foreground/40" title="Add GitHub URL in portfolio.ts">
                GitHub (TODO)
              </span>
            ) : (
              <MagneticButton
                href={project.githubUrl}
                variant="secondary"
                className="!px-4 !py-2 text-xs"
              >
                <Github size={16} aria-hidden />
                GitHub
              </MagneticButton>
            )}
            {project.liveUrl &&
              (liveDisabled ? (
                <span className="text-xs text-foreground/40">Live Demo (TODO)</span>
              ) : (
                <MagneticButton
                  href={project.liveUrl}
                  variant="primary"
                  className="!px-4 !py-2 text-xs"
                >
                  <ExternalLink size={16} aria-hidden />
                  Live Demo
                </MagneticButton>
              ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
