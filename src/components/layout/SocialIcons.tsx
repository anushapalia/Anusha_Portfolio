"use client";

import { socialLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  leetcode: SiLeetcode,
  mail: Mail,
};

type Props = {
  className?: string;
  size?: number;
};

export function SocialIcons({ className, size = 20 }: Props) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <li key={link.name}>
            <a
              href={link.href}
              target={link.icon === "mail" ? undefined : "_blank"}
              rel={link.icon === "mail" ? undefined : "noopener noreferrer"}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/80 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-white/10 hover:text-cyan-300 hover:shadow-[0_0_24px_-6px_rgba(6,182,212,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 motion-reduce:hover:translate-y-0"
              aria-label={link.name}
            >
              <Icon
                size={size}
                className="transition group-hover:scale-110 motion-reduce:group-hover:scale-100"
                aria-hidden
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
