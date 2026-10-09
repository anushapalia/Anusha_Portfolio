"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  index?: string;
  className?: string;
};

export function SectionHeading({ id, title, subtitle, index, className }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12 md:mb-16", className)}
    >
      <div className="flex flex-col items-center text-center">
        {index && (
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-cyan-400/80">
            {index}
          </p>
        )}
        <div className="flex w-full max-w-3xl items-center gap-4">
          <span
            className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-purple-500/40 sm:block"
            aria-hidden
          />
          <h2
            id={id}
            className="font-heading shrink-0 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
          >
            <span className="text-shimmer bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <span
            className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/40 sm:block"
            aria-hidden
          />
        </div>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
        ) : (
          <div
            className="mx-auto mt-4 flex items-center gap-2"
            aria-hidden
          >
            <span className="h-1 w-1 rounded-full bg-purple-400" />
            <span className="h-0.5 w-16 rounded-full bg-gradient-accent" />
            <span className="h-1 w-1 rounded-full bg-cyan-400" />
          </div>
        )}
      </div>
    </motion.header>
  );
}
