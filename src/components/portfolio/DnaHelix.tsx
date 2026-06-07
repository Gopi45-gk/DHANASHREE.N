import { useMemo } from "react";

export function DnaHelix() {
  const rungs = useMemo(() => Array.from({ length: 18 }), []);
  return (
    <div className="relative flex h-[420px] w-full items-center justify-center [perspective:1200px]">
      <div
        className="absolute inset-0 rounded-full opacity-60 blur-3xl"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div
        className="relative h-[360px] w-32"
        style={{ transformStyle: "preserve-3d", animation: "spin-helix 9s linear infinite" }}
      >
        {rungs.map((_, i) => {
          const angle = (i / rungs.length) * Math.PI * 4;
          const x1 = Math.sin(angle) * 56;
          const x2 = Math.sin(angle + Math.PI) * 56;
          const top = (i / rungs.length) * 100;
          const z1 = Math.cos(angle) * 56;
          const z2 = Math.cos(angle + Math.PI) * 56;
          return (
            <div key={i} className="absolute left-1/2 w-full" style={{ top: `${top}%` }}>
              <div
                className="absolute h-2.5 w-2.5 rounded-full"
                style={{
                  transform: `translate3d(${x1}px,0,${z1}px)`,
                  background: "var(--bio-green)",
                  boxShadow: "0 0 12px var(--bio-green)",
                }}
              />
              <div
                className="absolute h-2.5 w-2.5 rounded-full"
                style={{
                  transform: `translate3d(${x2}px,0,${z2}px)`,
                  background: "var(--bio-blue)",
                  boxShadow: "0 0 12px var(--bio-blue)",
                }}
              />
              <div
                className="absolute h-px"
                style={{
                  width: Math.abs(x1 - x2),
                  left: Math.min(x1, x2) + 64,
                  transform: `translateZ(${(z1 + z2) / 2}px)`,
                  background: "linear-gradient(90deg, var(--bio-green), var(--bio-blue))",
                  opacity: 0.55,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
