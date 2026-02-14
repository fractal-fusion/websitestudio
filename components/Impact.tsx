
import React from 'react';

const sponsors = [
  { name: "GreenSea IQ", detail: "Intelligent Ocean Solutions" },
  { name: "Gene Haas Foundation", detail: "Precision Engineering Support" },
  { name: "Donors & Grants", detail: "Community Backed" }
];

export const Impact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden">
      {/* Kinetic Energy Accents */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#fff9c7] to-transparent opacity-10 animate-yellow-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#fff9c7] to-transparent opacity-10 animate-yellow-pulse" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center py-12">
        <div className="space-y-12">
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-8xl font-heading font-bold text-[#fff9c7] neon-yellow leading-none hover-glitch">FUTURE<br/>PLANS</h2>
            <div className="absolute -bottom-4 left-0 w-full h-2 bg-[#fff9c7] blur-md opacity-20" />
          </div>
          <p className="text-xl text-white/70 leading-relaxed font-light max-w-lg">
            Our next objective: <span className="text-[#fff9c7] font-bold underline decoration-2 underline-offset-8">EXPANSION</span>. By partnering with local small businesses and community initiatives, we hope to build stronger STEM connections while fueling our 2026 roadmap.
          </p>
          
          <div className="space-y-10">
            <div className="flex gap-8 items-start group">
              <div className="w-20 h-20 shrink-0 border-2 border-[#fff9c7] flex items-center justify-center font-heading text-2xl text-[#fff9c7] group-hover:bg-[#fff9c7] group-hover:text-[#293657] transition-all duration-500 group-hover:shadow-[0_0_20px_#fff9c7] group-hover:scale-110">01</div>
              <div>
                <h4 className="font-heading text-sm text-white tracking-widest mb-2 group-hover:text-[#fff9c7] transition-colors">OUTREACH_EXPANSION</h4>
                <p className="text-xs text-white/40 font-mono leading-relaxed">Hosting high-impact events for students who lack consistent access to robotics infrastructure.</p>
              </div>
            </div>
            <div className="flex gap-8 items-start group">
              <div className="w-20 h-20 shrink-0 border-2 border-[#fff9c7] flex items-center justify-center font-heading text-2xl text-[#fff9c7] group-hover:bg-[#fff9c7] group-hover:text-[#293657] transition-all duration-500 group-hover:shadow-[0_0_20px_#fff9c7] group-hover:scale-110">02</div>
              <div>
                <h4 className="font-heading text-sm text-white tracking-widest mb-2 group-hover:text-[#fff9c7] transition-colors">GLOBAL_COLLAB</h4>
                <p className="text-xs text-white/40 font-mono leading-relaxed">Deepening partnerships with international teams (Vietnam, U.S.A) via our proprietary CORE.TALKS platform.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="glass-panel p-12 border-[#fff9c7]/20 bg-white/5 backdrop-blur-3xl shadow-[0_0_60px_rgba(255,249,199,0.05)] relative z-10 group">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#fff9c7] to-transparent opacity-30" />
             <h3 className="text-[10px] font-mono text-[#fff9c7] tracking-[0.5em] mb-14 uppercase text-center font-bold animate-yellow-pulse">PATRONAGE_LOG</h3>
             <div className="space-y-14">
                {sponsors.map(s => (
                  <div key={s.name} className="flex flex-col items-center text-center group/item">
                    <div className="text-3xl font-heading text-white border-b-2 border-[#fff9c7]/10 pb-3 mb-3 group-hover/item:border-[#fff9c7] group-hover/item:text-[#fff9c7] transition-all duration-500">{s.name}</div>
                    <div className="font-mono text-[9px] text-white/40 uppercase tracking-[0.3em] font-bold">{s.detail}</div>
                  </div>
                ))}
             </div>
             
             <button className="w-full mt-20 py-7 bg-[#fff9c7] text-[#293657] font-heading text-sm font-black tracking-[0.5em] hover:shadow-[0_0_40px_rgba(255,249,199,0.6)] transition-all hover:-translate-y-1 active:translate-y-0 group-hover:scale-[1.02]">
                JOIN_THE_FUSION
             </button>
          </div>
          {/* Glowing Orb Background */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#fff9c7]/20 blur-[120px] rounded-full animate-pulse" />
        </div>
      </div>
      
      <div className="mt-48 text-center pb-24 relative z-10">
         <p className="text-2xl md:text-4xl font-mono text-white/10 tracking-[1.2em] uppercase font-bold animate-yellow-pulse hover:text-[#fff9c7]/20 transition-colors duration-1000 cursor-default">
            ITERATION_IS_PERFECTION
         </p>
      </div>
    </div>
  );
};
