
import React from 'react';

const strategies = [
  {
    title: "AUTONOMOUS",
    logic: ["Fast/Precise scoring", "Alliance coordination", "Movement ranking focus"],
    desc: "Coordinate with partners to exit scoring zones and maximize early point potential."
  },
  {
    title: "TELE-OP",
    logic: ["Intake from stations", "Close-zone efficiency", "Adaptive far-zone scoring"],
    desc: "Intake artifacts from the opposing alliance STATION for hyper-fast cycle times."
  },
  {
    title: "ENDGAME",
    logic: ["Score overflow", "Pattern completion", "Base zone parking"],
    desc: "Small and agile robot footprint allows for rapid base-zone parking in final 20 seconds."
  }
];

export const Strategy: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#293657]">GAME_STRATEGY</h2>
        <p className="text-[#293657]/50 font-mono tracking-[0.3em] uppercase text-xs mt-4">Execution Protocol: THE DECODE SEASON</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {strategies.map((s, i) => (
          <div key={i} className="relative group">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#293657]/20 group-hover:border-[#293657] transition-all" />
            <div className="glass-panel p-10 h-full flex flex-col border-[#293657]/5 hover:border-[#293657]/20 transition-all">
               <h3 className="font-heading text-2xl text-[#293657] mb-6">{s.title}</h3>
               <p className="text-sm text-[#293657]/70 leading-relaxed mb-10 font-normal">{s.desc}</p>
               <div className="space-y-4 pt-8 border-t border-[#293657]/10">
                  {s.logic.map(l => (
                    <div key={l} className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 bg-[#293657] rotate-45" />
                       <span className="font-mono text-[10px] text-[#293657] uppercase font-bold tracking-widest">{l}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
