"use client";

import { hero, siteConfig } from "@/data/portfolio";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function HeroTerminal() {
  const reduced = useReducedMotion();

  return (
    <motion.aside
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.35 }}
      className="relative hidden lg:block"
      aria-label="Developer stack preview (decorative)"
    >
      <div
        className={cn(
          "tech-border glow-ring overflow-hidden rounded-2xl bg-black/40 shadow-2xl shadow-purple-900/20 backdrop-blur-xl",
          !reduced && "animate-float-slow"
        )}
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
          <Terminal size={16} className="text-cyan-400" aria-hidden />
          <span className="font-mono text-xs text-foreground/60">~/portfolio/dev.env</span>
          <div className="ml-auto flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-foreground/85">
          <code>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-cyan-300">developer</span>{" "}
            <span className="text-foreground/50">=</span> {"{\n"}
            {"  "}
            <span className="text-violet-300">name</span>
            {": "}
            <span className="text-emerald-300">&quot;{hero.name}&quot;</span>,{"\n"}
            {"  "}
            <span className="text-violet-300">location</span>
            {": "}
            <span className="text-emerald-300">&quot;{siteConfig.location}&quot;</span>,{"\n"}
            {"  "}
            <span className="text-violet-300">focus</span>
            {": "}
            <span className="text-emerald-300">&quot;{hero.tagline}&quot;</span>,{"\n"}
            {"  "}
            <span className="text-violet-300">stack</span>
            {": [\n"}
            {'    "JavaScript", "TypeScript", "React.js",\n'}
            {'    "Angular", "Node.js", "PHP",\n'}
            {'    "MongoDB", "MySQL", "Firebase"\n'}
            {"  ]},\n"}
            <span className="text-purple-400">export default</span> developer
            <span className="text-cyan-400">;</span>
          </code>
        </pre>
        <div className="border-t border-white/10 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 px-4 py-2 font-mono text-xs text-foreground/45">
          <span className="text-emerald-400/90">➜</span> build --clean --scale --ship
        </div>
      </div>
      <div
        className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-accent opacity-20 blur-2xl"
        aria-hidden
      />
    </motion.aside>
  );
}
