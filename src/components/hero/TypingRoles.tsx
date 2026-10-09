"use client";

import { hero } from "@/data/portfolio";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function TypingRoles() {
  const reduced = useReducedMotion();
  const roles = hero.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) {
      setText(roles[0]);
      return;
    }

    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            setTimeout(() => setDeleting(true), 2000);
          }
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles, reduced]);

  if (reduced) {
    return (
      <p className="font-heading text-xl text-cyan-300 drop-shadow-[0_0_24px_rgba(6,182,212,0.35)] md:text-2xl">
        {roles[0]}
      </p>
    );
  }

  return (
    <p
      className="font-heading text-xl text-cyan-300 drop-shadow-[0_0_24px_rgba(6,182,212,0.35)] md:text-2xl"
      aria-live="polite"
    >
      {text}
      <AnimatePresence mode="wait">
        <motion.span
          key="cursor"
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="ml-0.5 inline-block h-[1em] w-0.5 align-middle bg-cyan-400"
          aria-hidden
        />
      </AnimatePresence>
    </p>
  );
}
