import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroOcean from "../assets/hero-ocean.jpg";
import { site } from "../data/content";

/** Expanding sonar rings behind the headline — the "see the unseen" motif. */
function SonarRings() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 animate-sonar rounded-full border border-primary/40"
          style={{ animationDelay: `${i * 1.4}s` }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  });

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 animate-wave bg-cover bg-center"
        style={{ backgroundImage: `url(${heroOcean})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <SonarRings />

      {/* Content */}
      <div className="container relative z-10 pb-24 pt-36 text-center">
        <motion.div {...fadeUp(0)}>
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Blue security
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.15)}
          className="font-display text-5xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          See the{" "}
          <span className="text-primary text-glow">unseen</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-2xl"
        >
          {site.tagline}. {site.subline} — protecting critical infrastructure
          at sea and on shore.
        </motion.p>

        <motion.div {...fadeUp(0.45)} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#solutions"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 font-medium text-primary-foreground shadow-cyan transition-all hover:shadow-cyan-strong"
          >
            Explore solutions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background/50 px-8 py-3.5 font-medium backdrop-blur transition-all hover:border-primary/50 hover:text-primary"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <a
        href="#mission"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  );
}
