
import React from 'react';

const iterations = [
  {
    version: "V1",
    name: "PROTO_ALPHA",
    pros: ["Easy reconstruct", "Light weight", "Fast drivetrain"],
    cons: ["Fragile guards", "Slow shooting", "Artifact jamming"],
    accent: "border-[#293657]"
  },
  {
    version: "V2",
    name: "REFINE_BETA",
    pros: ["Rigid side plates", "Wider intake", "Goal tracking"],
    cons: ["Holds >3 artifacts", "Close shot only", "Slow repair"],
    accent: "border-[#c6d2df]"
  },
  {
    version: "V3",
    name: "ROSIE!",
    pros: ["Full width intake", "Rapid shooting", "No artifact jams"],
    cons: ["Lengthy 3D parts", "Cannot spindex", "High force nodes"],
    accent: "border-[#fff9c7] neon-border-yellow"
  }
];

export const Evolution: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {iterations.map((it, idx) => (
        <div key={idx} className={`glass-panel p-10 flex flex-col group hover:-translate-y-4 transition-all duration-500 border-t-8 ${it.accent}`}>
          <div className="mb-10">
            <span className="font-mono text-[9px] font-bold tracking-widest text-[#293657]/50 uppercase">{it.version}_ITERATION</span>
            <h3 className="text-3xl font-heading font-bold text-[#293657] mt-2 group-hover:translate-x-2 transition-transform">
              {it.name}
            </h3>
          </div>
          
          <div className="space-y-8 flex-grow">
            <div>
              <h4 className="font-heading text-[10px] text-[#293657] mb-4 tracking-[0.2em] border-b border-[#293657]/10 pb-2">POSITIVE_METRICS</h4>
              <ul className="space-y-3">
                {it.pros.map(p => (
                  <li key={p} className="text-xs font-mono text-[#293657]/80 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#4ade80]" />
                    {p.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-[10px] text-[#293657] mb-4 tracking-[0.2em] border-b border-[#293657]/10 pb-2">CRITICAL_LIMITS</h4>
              <ul className="space-y-3">
                {it.cons.map(c => (
                  <li key={c} className="text-xs font-mono text-[#293657]/60 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-red-400" />
                    {c.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 h-1 bg-[#293657]/5 relative">
            <div className={`h-full bg-current transition-all duration-1000 ${idx === 0 ? 'w-1/3 text-[#293657]' : idx === 1 ? 'w-2/3 text-[#293657]' : 'w-full text-[#293657]'}`} />
          </div>
        </div>
      ))}
    </div>
  );
};
