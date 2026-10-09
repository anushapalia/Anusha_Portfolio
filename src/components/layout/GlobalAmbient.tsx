"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function GlobalAmbient() {
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-mesh-gradient opacity-90" />
      <div className="absolute inset-0 bg-grid-tech opacity-[0.35]" />
      {!reduced && (
        <>
          <div className="animate-float-slow absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-purple-600/20 blur-[120px]" />
          <div className="animate-float-slower absolute -right-32 top-2/3 h-[380px] w-[380px] rounded-full bg-cyan-500/15 blur-[110px]" />
        </>
      )}
      <div className="absolute inset-0 bg-noise opacity-[0.04]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </div>
  );
}
