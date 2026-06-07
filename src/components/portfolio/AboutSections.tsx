import { Section } from "./Section";
import labPhoto from "@/assets/dhanashree-lab.png.asset.json";

const focusAreas = [
  "Molecular Biology",
  "Bioinformatics",
  "Computational Biology",
  "Clinical Diagnostics",
  "Artificial Intelligence",
  "Agricultural Biotechnology",
  "Healthcare Innovation",
  "Biomanufacturing",
];

const highlights = [
  "GATE 2026 Qualified",
  "SIH 2024 National Grand Finalist",
  "SIH 2025 Project Lead",
  "Indo-Israel Global Innovation Finalist",
  "BIRAC E-YUVA National Semi-Finalist",
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Bridging Biology & Intelligent Technology">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass rounded-3xl p-8">
          <h3 className="text-xl font-semibold">A Research-Driven Biotechnologist</h3>
          <p className="mt-4 text-muted-foreground">
            A highly accomplished Biotechnology undergraduate with expertise spanning the wet lab,
            computational biology, and AI-driven innovation. Focused on translating biological
            research into real-world diagnostics, healthcare, and agricultural solutions.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {focusAreas.map((f) => (
              <span
                key={f}
                className="rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 text-sm"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
        <div className="glass rounded-3xl p-8">
          <h3 className="text-xl font-semibold">Key Highlights</h3>
          <ul className="mt-5 space-y-4">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-xs text-primary">
                  ✓
                </span>
                <span className="font-medium">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

const timeline = [
  {
    title: "B.Tech Biotechnology",
    org: "Prathyusha Engineering College",
    period: "2023 – 2027",
    score: "CGPA: 8.06 / 10",
  },
  {
    title: "Class XII",
    org: "Sri R.M. Jain Vidhyashram",
    period: "2021 – 2023",
    score: "Score: 80.1%",
  },
  {
    title: "Class X",
    org: "Sri R.M. Jain Vidhyashram",
    period: "Graduated 2021",
    score: "Score: 90%",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Timeline">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2" />
        <div className="space-y-10">
          {timeline.map((t, i) => (
            <div
              key={t.title}
              className={`relative md:flex md:items-center ${i % 2 ? "md:flex-row-reverse" : ""}`}
            >
              <span className="absolute left-4 top-2 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-primary shadow-glow md:left-1/2" />
              <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-primary">{t.title}</h3>
                  <p className="mt-1 text-foreground/90">{t.org}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{t.period}</p>
                  <p className="mt-1 text-sm font-medium">{t.score}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const domains = [
  { icon: "🧬", name: "Molecular Biology" },
  { icon: "🧪", name: "Biotechnology" },
  { icon: "🦠", name: "Microbiology" },
  { icon: "💊", name: "Clinical Diagnostics" },
  { icon: "🧫", name: "Cell Culture" },
  { icon: "🌱", name: "Agricultural Biotech" },
  { icon: "🤖", name: "BioAI" },
  { icon: "🧠", name: "ML in Biology" },
  { icon: "🔬", name: "Bioinformatics" },
  { icon: "💻", name: "Computational Biology" },
];

export function Domains() {
  return (
    <Section id="domains" eyebrow="Research Domains" title="Areas of Expertise">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {domains.map((d) => (
          <div
            key={d.name}
            className="glass glass-hover group rounded-2xl p-6 text-center hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-glow"
          >
            <div className="text-4xl transition-transform group-hover:scale-110">{d.icon}</div>
            <div className="mt-3 text-sm font-medium">{d.name}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
