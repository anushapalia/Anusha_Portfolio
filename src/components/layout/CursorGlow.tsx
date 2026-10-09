"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CursorGlow() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const x = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const narrow = window.innerWidth < 1024;
    setEnabled(!coarse && !narrow && !reduced);

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY, reduced]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 mix-blend-screen lg:block"
      style={{
        x,
        y,
        background:
          "radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(59,130,246,0.15) 40%, transparent 70%)",
      }}
      aria-hidden
    />
  );
}
