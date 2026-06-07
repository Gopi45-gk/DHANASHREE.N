import { useMemo } from "react";

export function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 36 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 5,
        delay: Math.random() * 18,
        duration: 14 + Math.random() * 16,
        cyan: Math.random() > 0.5,
      })),
    [],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bio-grid opacity-40" />
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-10vh] rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.cyan ? "var(--bio-cyan)" : "var(--bio-green)",
            boxShadow: `0 0 ${p.size * 3}px ${p.cyan ? "var(--bio-cyan)" : "var(--bio-green)"}`,
            animation: `drift ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
