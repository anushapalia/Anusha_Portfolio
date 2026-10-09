"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef, ReactNode } from "react";

type GlassCardProps = HTMLMotionProps<"div"> & {
  hover?: boolean;
};

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    const content = children as ReactNode;
    return (
    <motion.div
      ref={ref}
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
      className={cn(
        "group/card glass-panel relative isolate overflow-hidden p-6",
        "transition-[border-color,box-shadow] duration-500",
        hover &&
          "hover:border-white/20 hover:shadow-[0_0_48px_-14px_rgba(168,85,247,0.55),0_20px_40px_-24px_rgba(6,182,212,0.35)]",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl transition-opacity duration-500 group-hover/card:opacity-100 opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative z-[1]">{content}</div>
    </motion.div>
    );
  }
);
GlassCard.displayName = "GlassCard";
