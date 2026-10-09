"use client";

import { HeroTerminal } from "@/components/hero/HeroTerminal";
import { HeroBackground } from "@/components/layout/HeroBackground";
import { SocialIcons } from "@/components/layout/SocialIcons";
import { TypingRoles } from "@/components/hero/TypingRoles";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { hero, siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Download, MapPin, Sparkles } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 shadow-[0_0_24px_-8px_rgba(168,85,247,0.6)]"
          >
            <Sparkles size={16} className="animate-pulse-glow text-purple-400" aria-hidden />
            {hero.badge}
          </motion.div>

          <motion.p
            variants={item}
            className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/70"
          >
            Hello, I&apos;m
          </motion.p>
          <motion.h1
            id="hero-heading"
            variants={item}
            className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
              {hero.name}
            </span>
          </motion.h1>

          <motion.div variants={item} className="mt-4 min-h-[2.5rem]">
            <TypingRoles />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl"
          >
            {hero.tagline}
          </motion.p>

          <motion.p variants={item} className="mt-4 max-w-3xl leading-relaxed text-foreground/60">
            {hero.intro}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs text-foreground/60"
          >
            <MapPin size={14} className="text-cyan-400/80" aria-hidden />
            {siteConfig.location}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <MagneticButton href="#projects" variant="primary">
              View Projects
            </MagneticButton>
            <MagneticButton href={hero.resumePath} variant="secondary">
              <Download size={18} aria-hidden />
              Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <SocialIcons />
          </motion.div>
        </motion.div>

        <HeroTerminal />
      </div>
    </section>
  );
}
