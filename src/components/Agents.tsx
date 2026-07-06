import { Radar, Bug } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { agents } from "../data/content";
// To update product screenshots: overwrite these two files (keep the same names).
import osintScreenshot from "../assets/screenshots/osint-agent.png";
import cyberScreenshot from "../assets/screenshots/cyber-agent.png";

const visuals = [
  { icon: Radar, screenshot: osintScreenshot },
  { icon: Bug, screenshot: cyberScreenshot },
];

export default function Agents() {
  return (
    <section id="agents" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />
      <div className="container relative">
        <Reveal>
          <SectionHeading eyebrow="AI Agents" title="AI Agents+" subtitle={agents.intro} />
        </Reveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          {agents.items.map((agent, i) => {
            const { icon: Icon, screenshot } = visuals[i];
            return (
              <Reveal key={agent.name} delay={i * 0.15}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-cyan">
                  <div className="p-8 pb-6">
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-display text-2xl font-bold">{agent.name}</h3>
                    </div>
                    <p className="text-muted-foreground">{agent.description}</p>
                  </div>

                  {/* Product screenshot in a window frame */}
                  <div className="mt-auto px-8 pb-8">
                    <div className="overflow-hidden rounded-lg border border-border bg-background shadow-strong">
                      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                        <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                        <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                          {agent.name}
                        </span>
                      </div>
                      <img
                        src={screenshot}
                        alt={agent.screenshotAlt}
                        loading="lazy"
                        className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
