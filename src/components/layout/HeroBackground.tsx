"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function HeroBackground() {
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-grid-tech opacity-50" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.35) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      {!reduced && (
        <>
          <motion.div
            className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-purple-600/35 blur-[100px]"
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-blue-600/30 blur-[90px]"
            animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-500/25 blur-[80px]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="animate-scan absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-400/10 to-transparent opacity-60" />
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    </div>
  );
}
