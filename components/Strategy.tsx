
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
    <div className="mt-20 md:mt-32">
      <div className="text-center mb-10 md:mb-24 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-6xl font-heading font-bold text-[#293657] uppercase tracking-tighter">GAME_STRATEGY</h2>
        <p className="text-[#293657]/50 font-mono tracking-[0.1em] md:tracking-[0.3em] uppercase text-[8px] md:text-xs mt-3">Execution Protocol: THE DECODE SEASON</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {strategies.map((s, i) => (
          <div key={i} className="relative group h-full">
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 border-t-2 border-l-2 border-[#293657]/20 group-hover:border-[#293657] transition-all" />
            <div className="glass-panel p-8 md:p-10 h-full flex flex-col border-[#293657]/5 hover:border-[#293657]/20 transition-all">
               <h3 className="font-heading text-lg md:text-2xl text-[#293657] mb-4 md:mb-6 uppercase">{s.title}</h3>
               <p className="text-xs md:text-sm text-[#293657]/70 leading-relaxed mb-8 md:mb-10 font-normal">{s.desc}</p>
               <div className="space-y-3 md:space-y-4 pt-6 md:pt-8 border-t border-[#293657]/10 mt-auto">
                  {s.logic.map(l => (
                    <div key={l} className="flex items-center gap-3">
                       <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#293657] rotate-45" />
                       <span className="font-mono text-[9px] md:text-[10px] text-[#293657] uppercase font-bold tracking-widest">{l}</span>
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
