import { type ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, subtitle, children, className }: SectionProps) {
  const { ref, shown } = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-28",
        shown ? "reveal-in" : "reveal",
        className,
      )}
    >
      {(eyebrow || title) && (
        <div className="mb-12 text-center">
          {eyebrow && (
            <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
          )}
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
