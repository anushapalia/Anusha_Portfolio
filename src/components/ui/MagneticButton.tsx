"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { MouseEvent, ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Props = {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: ReactNode;
  disabled?: boolean;
};

export function MagneticButton({
  href,
  onClick,
  type = "button",
  variant = "primary",
  className,
  children,
  disabled,
}: Props) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const variants = {
    primary:
      "bg-gradient-accent text-white shadow-lg shadow-purple-500/30 hover:shadow-[0_0_32px_-4px_rgba(168,85,247,0.65)]",
    secondary:
      "border border-white/20 bg-white/5 text-foreground hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-[0_0_28px_-8px_rgba(6,182,212,0.45)]",
    ghost: "text-foreground/80 hover:text-foreground underline-offset-4 hover:underline",
  };

  const handleMove = (e: MouseEvent) => {
    if (reduced || disabled) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.15);
    y.set(dy * 0.15);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400",
    variants[variant],
    disabled && "pointer-events-none opacity-50",
    className
  );

  const shimmer = (
    <span
      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full motion-reduce:hidden"
      aria-hidden
    />
  );

  const inner = (
    <motion.span
      style={reduced ? undefined : { x: springX, y: springY }}
      className="relative z-[1] inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseLeave={reset}
      >
        {shimmer}
        {inner}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      disabled={disabled}
    >
      {shimmer}
      {inner}
    </motion.button>
  );
}
