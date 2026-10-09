"use client";

import { SocialIcons } from "@/components/layout/SocialIcons";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionShell } from "@/components/ui/SectionShell";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { contact, siteConfig } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const next: Record<string, string> = {};
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();
    if (!name || name.length < 2) next.name = "Please enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email.";
    if (!message || message.length < 10)
      next.message = "Message should be at least 10 characters.";
    return next;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const validation = validate(data);
    setErrors(validation);
    if (Object.keys(validation).length) return;

    setState("submitting");
    try {
      // TODO: Replace contact.formspreeEndpoint in src/data/portfolio.ts with your Formspree form ID
      // Alternative: EmailJS or Resend API route
      const res = await fetch(contact.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Failed");
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  };

  return (
    <SectionShell id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-cyan-400/80">
            07 — Contact
          </p>
          <h2
            id="contact-heading"
            className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            <span className="text-shimmer bg-clip-text text-transparent">
              {contact.heading}
            </span>
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2" aria-hidden>
            <span className="h-1 w-1 rounded-full bg-purple-400" />
            <span className="h-0.5 w-16 rounded-full bg-gradient-accent" />
            <span className="h-1 w-1 rounded-full bg-cyan-400" />
          </div>
        </motion.header>

        <div className="grid gap-8 lg:grid-cols-2">
          <GlassCard hover={false} className="tech-border">
            <h3 className="font-heading mb-6 text-xl font-semibold">Get in touch</h3>
            <ul className="space-y-4 text-foreground/80">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
                >
                  <Mail size={18} aria-hidden />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
                >
                  <Phone size={18} aria-hidden />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} aria-hidden />
                {siteConfig.location}
              </li>
            </ul>
            <div className="mt-8">
              <p className="mb-3 text-sm text-foreground/60">Connect</p>
              <SocialIcons />
            </div>
          </GlassCard>

          <GlassCard hover={false} className="tech-border">
            <form onSubmit={onSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>
              <MagneticButton
                type="submit"
                variant="primary"
                disabled={state === "submitting"}
                className="w-full sm:w-auto"
              >
                {state === "submitting" ? "Sending…" : "Send Message"}
              </MagneticButton>
              {state === "success" && (
                <p className="text-sm text-green-400" role="status">
                  Thanks! Your message was sent.
                </p>
              )}
              {state === "error" && (
                <p className="text-sm text-red-400" role="alert">
                  Something went wrong. Check your Formspree endpoint in portfolio.ts or email
                  directly.
                </p>
              )}
            </form>
          </GlassCard>
        </div>
      </div>
    </SectionShell>
  );
}
