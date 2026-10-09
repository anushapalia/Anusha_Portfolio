"use client";

import { navLinks, siteConfig } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-0"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-6xl px-4 transition-all duration-300 md:px-6",
          scrolled && "mt-2"
        )}
      >
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 md:px-5",
            scrolled
              ? "glass-panel border-white/15 shadow-[0_8px_40px_-16px_rgba(168,85,247,0.45)]"
              : "bg-transparent"
          )}
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className="group flex items-center gap-2 font-heading text-lg font-bold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm transition group-hover:border-cyan-400/40 group-hover:shadow-[0_0_20px_-6px_rgba(6,182,212,0.5)]">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                {siteConfig.initials}
              </span>
            </span>
            <span className="hidden bg-gradient-accent bg-clip-text text-transparent sm:inline">
              {siteConfig.name.split(" ")[0]}
            </span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "nav-link-glow relative rounded-full px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400",
                      isActive
                        ? "bg-white/10 text-white shadow-inner"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-accent"
                        aria-hidden
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-purple-400/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
                aria-label={
                  theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {resolvedTheme === "dark" ? (
                  <Sun size={18} aria-hidden />
                ) : (
                  <Moon size={18} aria-hidden />
                )}
              </button>
            )}
            <div className="hidden sm:block">
              <MagneticButton href="#contact" variant="primary" className="!px-4 !py-2 text-xs">
                Contact
              </MagneticButton>
            </div>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-[88px] z-40 bg-background/95 backdrop-blur-xl transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <ul className="flex flex-col gap-2 p-6">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl border border-transparent px-4 py-3 text-lg font-medium transition",
                    active === id
                      ? "border-purple-500/30 bg-white/10 text-white"
                      : "text-foreground/80 hover:border-white/10 hover:bg-white/5"
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li className="pt-4">
            <MagneticButton
              href="#contact"
              variant="primary"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Contact Me
            </MagneticButton>
          </li>
        </ul>
      </div>
    </header>
  );
}
