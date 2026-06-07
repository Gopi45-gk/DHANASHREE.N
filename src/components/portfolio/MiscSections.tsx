import { Section } from "./Section";

const certs = [
  { provider: "NPTEL", items: ["Computational Genomics", "Microbial Biotechnology", "Cell Biology", "Biochemistry", "English for Competitive Exams"] },
  { provider: "Infosys Springboard", items: ["AI & Machine Learning Foundations"] },
  { provider: "Great Learning", items: ["UI/UX Design Fundamentals"] },
  { provider: "Indo-US STTP 2025", items: ["BioAI for BioE3 & Biomanufacturing"] },
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Certification Wall">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {certs.map((c) => (
          <div key={c.provider} className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-primary">{c.provider}</h3>
            <ul className="mt-4 space-y-2.5">
              {c.items.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-0.5 text-primary">📜</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

const workshops = ["Idea Lab", "Animal Cell Culture", "Animal Husbandry", "Zebrafish Neurotoxicity", "AR/VR", "Robotics", "R Data Analysis"];
const visits = ["CavinKare", "Armats Biotech", "Synkromax Biotech", "Hatsun Agro"];

export function Workshops() {
  return (
    <Section id="workshops" eyebrow="Exposure" title="Workshops & Industrial Visits">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-2xl p-7">
          <h3 className="text-lg font-semibold">🧪 Workshops</h3>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {workshops.map((w) => (
              <span key={w} className="rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 text-sm">
                {w}
              </span>
            ))}
          </div>
        </div>
        <div className="glass rounded-2xl p-7">
          <h3 className="text-lg font-semibold">🏭 Industrial Visits</h3>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {visits.map((v) => (
              <span key={v} className="rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 text-sm">
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

const leadership = [
  { title: "Overall Student Coordinator", org: "ZYNERGIA 2K26", detail: "Managed complete national symposium operations." },
  { title: "Science Exhibition Organizer", org: "PRAYOGA Juniors", detail: "Organized junior science showcase." },
  { title: "National Science Day Volunteer", org: "Community Outreach", detail: "Promoted scientific awareness." },
];

const publications = [
  { title: "Oral Presenter", org: "ICECSSD-24 — Vel Tech Chennai", detail: "International Conference on Environmental, Chemical and Synthetic Biology." },
  { title: "Conference Participation", org: "Multiple Symposia", detail: "CHEMINEUX 2K25 · FEAST Symposium · Global STEM Education Expo 2025." },
];

export function LeadershipPublications() {
  return (
    <Section id="leadership" eyebrow="Leadership & Research" title="Beyond the Lab">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-5 text-lg font-semibold text-primary">Leadership</h3>
          <div className="space-y-4">
            {leadership.map((l) => (
              <div key={l.title} className="glass rounded-2xl p-5">
                <h4 className="font-semibold">{l.title}</h4>
                <p className="text-sm text-accent">{l.org}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{l.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-lg font-semibold text-primary">Publications & Presentations</h3>
          <div className="space-y-4">
            {publications.map((p) => (
              <div key={p.title} className="glass rounded-2xl p-5">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm text-accent">{p.org}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

const languages = [
  { name: "English", level: "Professional", pct: 95 },
  { name: "Tamil", level: "Fluent", pct: 100 },
  { name: "Japanese", level: "JLPT N5 — Learning", pct: 35 },
];

export function Languages() {
  return (
    <Section id="languages" eyebrow="Languages" title="Global Communication">
      <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-3">
        {languages.map((l) => (
          <div key={l.name} className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl">🌐</div>
            <h3 className="mt-3 font-semibold">{l.name}</h3>
            <p className="text-sm text-muted-foreground">{l.level}</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                style={{ width: `${l.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
