import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { ParticleField } from "@/components/portfolio/ParticleField";
import { Hero } from "@/components/portfolio/Hero";
import { About, Education, Domains } from "@/components/portfolio/AboutSections";
import { Skills, Achievements } from "@/components/portfolio/SkillsSections";
import { Projects, Internships } from "@/components/portfolio/ProjectsSections";
import { Certifications, Workshops, LeadershipPublications, Languages } from "@/components/portfolio/MiscSections";
import { Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhanashree N – Biotechnology Researcher & BioAI Innovator" },
      {
        name: "description",
        content:
          "Portfolio of Dhanashree N — Biotechnology researcher, BioAI innovator, GATE 2026 qualified, and SIH National Grand Finalist building solutions across molecular biology, bioinformatics and AI.",
      },
      { property: "og:title", content: "Dhanashree N – Biotechnology Researcher & BioAI Innovator" },
      {
        property: "og:description",
        content: "Biotechnology × BioAI portfolio: research projects, achievements, and innovation across diagnostics, agriculture and healthcare.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleField />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Domains />
          <Skills />
          <Achievements />
          <Projects />
          <Internships />
          <Certifications />
          <Workshops />
          <LeadershipPublications />
          <Languages />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
