import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(168,85,247,0.4), transparent 50%), radial-gradient(circle at 70% 80%, rgba(6,182,212,0.3), transparent 50%)",
        }}
      />
      <p className="font-heading text-8xl font-bold bg-gradient-accent bg-clip-text text-transparent">
        404
      </p>
      <h1 className="mt-4 font-heading text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 max-w-md text-foreground/60">
        The page you&apos;re looking for doesn&apos;t exist or was moved.
      </p>
      <div className="relative mt-8 flex gap-4">
        <MagneticButton href="/" variant="primary">
          Back home
        </MagneticButton>
        <Link
          href="/#contact"
          className="rounded-full border border-white/20 px-6 py-3 text-sm hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
