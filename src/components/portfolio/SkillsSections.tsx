import { Section } from "./Section";

const skillGroups = [
  {
    title: "Wet Lab Skills",
    icon: "🧫",
    skills: ["Microbial Culturing", "Aseptic Techniques", "Staining Techniques", "Plating Methods", "Plant Tissue Culture"],
  },
  {
    title: "Molecular Biology",
    icon: "🧬",
    skills: ["DNA Isolation", "PCR", "Gel Electrophoresis", "SDS-PAGE", "Slide Agglutination", "Biochemical Testing"],
  },
  {
    title: "Bioinformatics & BioAI",
    icon: "🤖",
    skills: ["BLAST", "SWISS-MODEL", "AutoDock Vina", "Biological Databases", "Machine Learning", "Deep Learning", "Computational Genomics"],
  },
  {
    title: "Programming",
    icon: "💻",
    skills: ["Python", "R Programming"],
  },
  {
    title: "Design & Productivity",
    icon: "🎨",
    skills: ["Figma", "Canva", "Microsoft Office"],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Technical Skills" title="Skill Dashboard">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <div key={g.title} className="glass glass-hover rounded-2xl p-6 hover:border-accent/50">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-xl">
                {g.icon}
              </span>
              <h3 className="font-semibold">{g.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-sm text-foreground/90"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const achievements = [
  { title: "GATE 2026 Qualified", desc: "Successfully cleared GATE 2026 Life Sciences (XL).", tag: "National" },
  { title: "Smart India Hackathon 2024", desc: "National Grand Finalist — HydroAid Project.", tag: "Finalist" },
  { title: "Smart India Hackathon 2025", desc: "Project Lead — Team BioZappers, Storion Project.", tag: "Lead" },
  { title: "Indo-Israel Global Innovation", desc: "National Finalist — BioXen Project.", tag: "Finalist" },
  { title: "BIRAC E-YUVA", desc: "National Semi Finalist.", tag: "Semi-Finalist" },
];

const badges = ["IIT PALS innoWAH Finalist", "VIT DevHub Finalist", "PEC Ideathon Winner", "TERREPEC Champion", "Biosrishti Winner"];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Awards & Recognition">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a) => (
          <div
            key={a.title}
            className="glass glass-hover relative overflow-hidden rounded-2xl p-6 hover:-translate-y-1 hover:shadow-glow"
          >
            <span className="absolute right-4 top-4 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
              {a.tag}
            </span>
            <div className="text-3xl">🏆</div>
            <h3 className="mt-4 text-lg font-semibold">{a.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {badges.map((b) => (
          <span key={b} className="glass rounded-full px-4 py-2 text-sm font-medium">
            ⭐ {b}
          </span>
        ))}
      </div>
    </Section>
  );
}
