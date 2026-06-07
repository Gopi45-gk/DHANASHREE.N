import { useState, type FormEvent } from "react";
import { Section } from "./Section";

const details = [
  { icon: "📧", label: "Email", value: "dhanashree.biotech@gmail.com", href: "mailto:dhanashree.biotech@gmail.com" },
  { icon: "📱", label: "Phone", value: "+91-9940031055", href: "tel:+919940031055" },
  { icon: "📍", label: "Location", value: "Tiruvallur, Tamil Nadu", href: undefined },
  { icon: "💼", label: "LinkedIn", value: "dhanashree-n", href: "https://linkedin.com/in/dhanashree-n-714b10301" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:dhanashree.biotech@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's Build the Future of BioAI">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          {details.map((d) => {
            const inner = (
              <div className="glass glass-hover flex items-center gap-4 rounded-2xl p-5 hover:border-primary/50">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-xl">
                  {d.icon}
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{d.label}</div>
                  <div className="font-medium">{d.value}</div>
                </div>
              </div>
            );
            return d.href ? (
              <a key={d.label} href={d.href} target="_blank" rel="noreferrer" className="block">
                {inner}
              </a>
            ) : (
              <div key={d.label}>{inner}</div>
            );
          })}
        </div>

        <form onSubmit={onSubmit} className="glass space-y-4 rounded-3xl p-7">
          <div>
            <label className="mb-1.5 block text-sm font-medium">Name</label>
            <input
              name="name"
              required
              maxLength={100}
              className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 outline-none focus:border-primary"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              required
              maxLength={255}
              className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 outline-none focus:border-primary"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Message</label>
            <textarea
              name="message"
              required
              maxLength={1000}
              rows={4}
              className="w-full resize-none rounded-xl border border-border bg-secondary/40 px-4 py-3 outline-none focus:border-primary"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-primary to-accent py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            {sent ? "Opening your email app..." : "Send Message"}
          </button>
        </form>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border py-10 text-center">
      <p className="font-display text-lg font-bold">
        Dhanashree<span className="text-primary"> N</span>
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        Biotechnology Researcher · BioAI Innovator · GATE 2026 Qualified
      </p>
      <p className="mt-4 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dhanashree N. Designed with science & code.
      </p>
    </footer>
  );
}
