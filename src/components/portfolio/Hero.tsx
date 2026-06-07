import { DnaHelix } from "./DnaHelix";
import { Counter } from "./Counter";

const badges = [
  "GATE 2026 Qualified",
  "SIH Grand Finalist",
  "Indo-Israel Finalist",
  "Project Lead – SIH 2025",
  "CGPA 8.06",
];

const stats = [
  { label: "Projects", end: 10, suffix: "+" },
  { label: "Hackathons", end: 15, suffix: "+" },
  { label: "Certifications", end: 10, suffix: "+" },
  { label: "Research Areas", end: 8, suffix: "+" },
];

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 md:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="reveal-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Biotechnology × BioAI
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            DHANASHREE <span className="text-gradient">N</span>
          </h1>
          <div className="mt-5 space-y-1.5 text-lg font-medium text-foreground/90 sm:text-xl">
            <p>Biotechnology Researcher</p>
            <p className="text-gradient font-semibold">BioAI Innovator</p>
            <p className="text-muted-foreground">GATE 2026 Qualified · SIH National Grand Finalist</p>
          </div>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Driven and research-oriented Biotechnology student with strong expertise in molecular
            biology, biotechnology innovation, bioinformatics, artificial intelligence in biology,
            diagnostics, and translational research. Passionate about building impactful solutions
            that bridge biological sciences and intelligent technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="rounded-xl border border-border bg-secondary/40 px-6 py-3 font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              View Research Portfolio
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-border bg-secondary/40 px-6 py-3 font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative reveal-in">
          <DnaHelix />
          <div className="mt-2 flex flex-wrap justify-center gap-2.5">
            {badges.map((b) => (
              <span
                key={b}
                className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-foreground/90"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-gradient">
              <Counter end={s.end} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
