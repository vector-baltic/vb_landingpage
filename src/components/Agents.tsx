import { Radar } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { agent } from "../data/content";
// To update the product screenshot: overwrite this file (keep the same name)
// and update SCREENSHOT_SIZE below to the new image's pixel dimensions.
import osintScreenshot from "../assets/screenshots/osint-agent.webp";

const SCREENSHOT_SIZE = { width: 1843, height: 924 };

export default function Agents() {
  return (
    <section id="agents" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />
      <div className="container relative">
        <Reveal>
          <SectionHeading eyebrow={agent.eyebrow} title={agent.heading} subtitle={agent.intro} />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card-glow group mx-auto max-w-5xl overflow-hidden rounded-2xl">
            <div className="flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                <Radar className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">{agent.name}</h3>
                <p className="mt-1 text-muted-foreground">{agent.description}</p>
              </div>
            </div>

            {/* Product screenshot in a window frame */}
            <div className="px-8 pb-8">
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
                  src={osintScreenshot}
                  alt={agent.screenshotAlt}
                  width={SCREENSHOT_SIZE.width}
                  height={SCREENSHOT_SIZE.height}
                  loading="lazy"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
