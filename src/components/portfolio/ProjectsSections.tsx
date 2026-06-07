import { useState } from "react";
import { Section } from "./Section";

const projects = [
  {
    name: "BioXen",
    tagline: "Clean Room Parameter Monitoring System",
    category: "BioAI",
    features: ["AWS S3 & Glacier Backup", "Firebase Realtime", "YOLOv8", "LSTM Prediction", "FastAPI", "Docker", "Automated Alerts"],
    impact: "99.99% uptime monitoring",
  },
  {
    name: "Storion",
    tagline: "Shelf Life Extension Technology",
    category: "AgriTech",
    features: ["Chitosan Coating", "Aloe Vera Biopolymer", "STM32", "AWS IoT", "LSTM Analytics"],
    impact: "Reduced crop loss below 15%",
  },
  {
    name: "Uzhavan AI",
    tagline: "AI Farmer Assistant",
    category: "BioAI",
    features: ["Crop Disease Detection", "Deep Learning", "Soil Analytics", "Recommendation Engine"],
    impact: "92% Detection Accuracy",
  },
  {
    name: "Uzhavan Bazaar",
    tagline: "Farmer Marketplace Platform",
    category: "AgriTech",
    features: ["Direct Producer Sales", "Route Optimization", "Digital Transactions"],
    impact: "30% logistics cost reduction",
  },
  {
    name: "EchoLive",
    tagline: "AI Communication Platform",
    category: "BioAI",
    features: ["WebRTC", "React", "Live Translation", "Speech Recognition"],
    impact: "Under 150ms latency",
  },
  {
    name: "HydroAid",
    tagline: "Groundwater Diagnostics Kit",
    category: "Diagnostics",
    features: ["Biological Testing", "Colorimetric Detection", "Rural Healthcare"],
    impact: "75% cheaper than conventional",
  },
  {
    name: "Bioactive Hydrogel",
    tagline: "Burn Wound Healing Research",
    category: "Diagnostics",
    features: ["Ongoing Research"],
    impact: "35% faster tissue regeneration",
  },
];

const filters = ["All", "BioAI", "AgriTech", "Diagnostics"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects" eyebrow="Featured Research" title="Projects Showcase">
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              filter === f
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-glow"
                : "border border-border bg-secondary/40 text-muted-foreground hover:text-primary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <div
            key={p.name}
            className="glass glass-hover group flex flex-col rounded-2xl p-6 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-glow"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gradient">{p.name}</h3>
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                {p.category}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.features.map((f) => (
                <span key={f} className="rounded-md border border-border bg-secondary/30 px-2.5 py-1 text-xs">
                  {f}
                </span>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary">
              📈 {p.impact}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const internships = [
  {
    org: "Southern Railway HQ Hospital",
    role: "Clinical Observer",
    detail: "Biochemistry · Histopathology · Serology · Hematology · Medical Microbiology",
  },
  {
    org: "DG Vaishnav College",
    role: "Project Intern — Biotech Fusion Program",
    detail: "Algae + Plants + Microbes Integration",
  },
  {
    org: "Infosys",
    role: "Project Intern",
    detail: "Built VisionSafe AI Framework — 96% Detection Accuracy",
  },
];

export function Internships() {
  return (
    <Section id="internships" eyebrow="Experience" title="Internships & Exposure">
      <div className="grid gap-5 md:grid-cols-3">
        {internships.map((it) => (
          <div key={it.org} className="glass glass-hover rounded-2xl p-6 hover:border-accent/50">
            <div className="text-3xl">🔬</div>
            <h3 className="mt-4 text-lg font-semibold">{it.org}</h3>
            <p className="mt-1 text-sm font-medium text-primary">{it.role}</p>
            <p className="mt-3 text-sm text-muted-foreground">{it.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
