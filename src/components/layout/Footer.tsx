"use client";

import { SocialIcons } from "@/components/layout/SocialIcons";
import { siteConfig } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 py-12" role="contentinfo">
      <div className="section-divider absolute inset-x-0 top-0 opacity-80" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 md:flex-row md:justify-between md:px-6">
        <p className="text-center font-mono text-sm text-foreground/60 md:text-left">
          <span className="text-cyan-400/80">©</span> {year} {siteConfig.name}
          <span className="text-foreground/40"> · built with Next.js</span>
        </p>
        <SocialIcons />
        <a
          href="#hero"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_24px_-8px_rgba(6,182,212,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
        >
          <ArrowUp
            size={16}
            className="transition group-hover:-translate-y-0.5 motion-reduce:transition-none"
            aria-hidden
          />
          Back to top
        </a>
      </div>
    </footer>
  );
}
