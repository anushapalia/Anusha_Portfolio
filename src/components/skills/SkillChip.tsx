"use client";

import type { ComponentType } from "react";
import { cn } from "@/lib/utils";
import {
  SiAngular,
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNumpy,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava, FaPhp } from "react-icons/fa";
import { Code, Database, Sparkles } from "lucide-react";

const iconComponents: Record<string, ComponentType<{ className?: string }>> = {
  java: FaJava,
  python: SiPython,
  javascript: SiJavascript,
  typescript: SiTypescript,
  php: FaPhp,
  dart: SiDart,
  sql: Database,
  react: SiReact,
  angular: SiAngular,
  nodejs: SiNodedotjs,
  flutter: SiFlutter,
  tailwind: SiTailwindcss,
  prisma: SiPrisma,
  numpy: SiNumpy,
  matplotlib: Sparkles,
  mongodb: SiMongodb,
  mysql: SiMysql,
  firebase: SiFirebase,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  vscode: Code,
  githubactions: SiGithub,
  langfuse: Sparkles,
};

type Props = {
  name: string;
  icon: string;
};

export function SkillChip({ name, icon }: Props) {
  const Icon = iconComponents[icon] ?? Sparkles;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm",
        "transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:shadow-[0_0_20px_-4px_rgba(6,182,212,0.5)] motion-reduce:hover:translate-y-0"
      )}
    >
      <Icon className="h-4 w-4 shrink-0 text-cyan-300/90" aria-hidden />
      {name}
    </span>
  );
}
