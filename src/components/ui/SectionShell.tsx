"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  id: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "elevated";
  "aria-labelledby"?: string;
};

export function SectionShell({
  id,
  children,
  className,
  tone = "default",
  "aria-labelledby": labelledBy,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "section-block relative py-20 md:py-28",
        tone === "elevated" && "section-block-elevated",
        className
      )}
    >
      <div className="section-divider pointer-events-none absolute inset-x-0 top-0" aria-hidden />
      {children}
    </section>
  );
}
