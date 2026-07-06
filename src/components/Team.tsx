import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { team } from "../data/content";
import work1 from "../assets/work/work-1.jpg";
import work2 from "../assets/work/work-2.jpg";
import work3 from "../assets/work/work-3.jpg";

const workPhotos = [
  { src: work1, alt: "Vector Baltic team at work" },
  { src: work2, alt: "Team collaboration" },
  { src: work3, alt: "Hackathon achievement" },
];

const roleStyles: Record<string, string> = {
  "CoFounder / CSO": "border-primary/60 bg-primary/15 text-primary",
  Engineer: "border-border bg-muted/50 text-foreground",
  Advisor: "border-primary/30 bg-transparent text-muted-foreground",
};

export default function Team() {
  return (
    <section id="team" className="py-24">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Team" title={team.heading} subtitle={team.subheading} />
        </Reveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.members.map((member, i) => (
            <Reveal key={member.name} delay={(i % 3) * 0.1}>
              <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-cyan">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-primary/30 transition-colors duration-300 group-hover:border-primary">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{member.name}</h3>
                    <span
                      className={`mt-2 inline-block rounded-full border px-3 py-0.5 text-xs font-medium ${
                        roleStyles[member.role] ?? roleStyles.Engineer
                      }`}
                    >
                      {member.role}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {member.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Field photos */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {workPhotos.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 0.1}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-primary/20 transition-all duration-300 hover:border-primary hover:shadow-cyan-strong">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
