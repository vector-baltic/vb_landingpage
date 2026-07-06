import { Activity, Eye, ShieldAlert, Bug } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { solutions } from "../data/content";

const icons = [Activity, Eye, ShieldAlert, Bug];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />
      <div className="container relative">
        <Reveal>
          <SectionHeading
            eyebrow="Solutions"
            title="What we do"
            subtitle="Four capabilities, one goal: giving operators the time and clarity to act."
          />
        </Reveal>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={solution.title} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-cyan">
                  <span className="absolute right-6 top-6 font-mono text-sm text-muted-foreground/40">
                    0{i + 1}
                  </span>
                  <Icon className="mb-6 h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mb-3 font-display text-xl font-semibold">{solution.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>
                  <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
