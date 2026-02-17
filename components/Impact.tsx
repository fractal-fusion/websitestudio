
import React from 'react';

const sponsors = [
  { name: "Gene Haas Foundation", detail: "Precision Engineering Support" },
  { name: "Donors & Grants", detail: "Community Backed" }
];

export const Impact: React.FC = () => {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#293657] py-20 md:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#fff9c7] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#fff9c7] to-transparent" />
        <div className="perspective-grid opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-10 md:space-y-14 text-center lg:text-left">
            <div className="relative inline-block">
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-heading font-bold text-[#fff9c7] neon-yellow leading-tight uppercase tracking-tighter">
                FUTURE<br/>PLANS
              </h2>
              <div className="h-1.5 w-24 md:w-48 bg-[#fff9c7] mt-6 md:mt-8 neon-border-yellow mx-auto lg:mx-0" />
            </div>
            
            <p className="text-lg md:text-2xl text-white/80 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              Our next objective: <span className="text-[#fff9c7] font-bold underline decoration-2 underline-offset-8 uppercase">EXPANSION</span>. We are forging strategic alliances to fuel our 2026 technical roadmap.
            </p>
            
            <div className="space-y-8 md:space-y-12">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start group">
                <div className="w-16 h-16 md:w-24 md:h-24 shrink-0 border-2 border-[#fff9c7] flex items-center justify-center font-heading text-xl md:text-3xl text-[#fff9c7] group-hover:bg-[#fff9c7] group-hover:text-[#293657] transition-all duration-500 group-hover:shadow-[0_0_30px_#fff9c7] group-hover:scale-110">01</div>
                <div className="text-center md:text-left">
                  <h4 className="font-heading text-sm md:text-base text-white tracking-widest mb-3 group-hover:text-[#fff9c7] transition-colors uppercase">OUTREACH_EXPANSION</h4>
                  <p className="text-xs md:text-sm text-white/50 font-mono leading-relaxed uppercase">Hosting high-impact events for students lacking consistent access to robotics infrastructure.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start group">
                <div className="w-16 h-16 md:w-24 md:h-24 shrink-0 border-2 border-[#fff9c7] flex items-center justify-center font-heading text-xl md:text-3xl text-[#fff9c7] group-hover:bg-[#fff9c7] group-hover:text-[#293657] transition-all duration-500 group-hover:shadow-[0_0_30px_#fff9c7] group-hover:scale-110">02</div>
                <div className="text-center md:text-left">
                  <h4 className="font-heading text-sm md:text-base text-white tracking-widest mb-3 group-hover:text-[#fff9c7] transition-colors uppercase">GLOBAL_COLLAB</h4>
                  <p className="text-xs md:text-sm text-white/50 font-mono leading-relaxed uppercase">Deepening partnerships with international teams via our CORE.TALKS virtual platform.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-lg mx-auto lg:mx-0">
            <div className="glass-panel p-10 md:p-14 border-[#fff9c7]/30 bg-white/5 backdrop-blur-3xl shadow-[0_0_80px_rgba(255,249,199,0.1)] relative z-10 group overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1.5 bg-[#fff9c7] opacity-40 shadow-[0_0_15px_#fff9c7]" />
               <h3 className="text-[10px] md:text-[12px] font-mono text-[#fff9c7] tracking-[0.5em] mb-12 md:mb-16 uppercase text-center font-black animate-pulse">PATRONAGE_LOG</h3>
               
               <div className="space-y-12 md:space-y-16">
                  {sponsors.map(s => (
                    <div key={s.name} className="flex flex-col items-center text-center group/item">
                      <div className="text-2xl md:text-4xl font-heading text-white border-b-2 border-[#fff9c7]/20 pb-3 mb-3 group-hover/item:border-[#fff9c7] group-hover/item:text-[#fff9c7] transition-all duration-500 uppercase tracking-tight">{s.name}</div>
                      <div className="font-mono text-[9px] md:text-[11px] text-white/40 uppercase tracking-[0.4em] font-bold">{s.detail}</div>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="absolute -top-16 -right-16 w-64 md:w-96 h-64 md:h-96 bg-[#fff9c7]/10 blur-[100px] md:blur-[150px] rounded-full animate-pulse pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
