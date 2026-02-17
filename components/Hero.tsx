
import React from 'react';
import { Logo } from './Logo.tsx';

interface HeroProps {
  setView: (view: 'home' | 'evolution' | 'technical' | 'outreach' | 'contact') => void;
}

export const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#293657]">
      {/* Background with Yellow Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,249,199,0.1)_0%,transparent_70%)]" />
      <div className="perspective-grid opacity-30 md:opacity-40" />
      
      <div className="absolute inset-0 pointer-events-none border-[10px] md:border-[30px] border-[#fff9c7]/5">
        <div className="absolute top-0 left-0 w-12 h-12 md:w-32 md:h-32 border-t-2 border-l-2 border-[#fff9c7]/20" />
        <div className="absolute bottom-0 right-0 w-12 h-12 md:w-32 md:h-32 border-b-2 border-r-2 border-[#fff9c7]/20" />
      </div>

      <div className="relative z-10 px-6 max-w-7xl w-full flex flex-col items-center pt-20 pb-32">
        <div className="mb-6 md:mb-8 flex flex-col items-center animate-fade-in">
           <div className="w-24 h-24 md:w-44 md:h-44 mb-6 md:mb-12 relative group flex items-center justify-center cursor-pointer" onClick={() => setView('home')}>
             <div className="absolute inset-0 bg-[#fff9c7] blur-[40px] md:blur-[80px] opacity-10 md:opacity-20 animate-pulse pointer-events-none" />
             <div className="absolute inset-0 border border-[#fff9c7]/10 rounded-full scale-110 md:scale-125 transition-transform duration-1000" />
             <Logo neon className="w-full h-full relative z-10" />
           </div>

           <div className="px-4 py-1 bg-[#fff9c7] text-[#293657] font-heading text-[8px] md:text-[11px] tracking-[0.4em] uppercase shadow-[0_0_20px_rgba(255,249,199,0.4)] border border-white/20 font-bold">
             TEAM 27188 • FTC 2024–2026 AND BEYOND
           </div>
           <div className="h-4 md:h-12 w-px bg-gradient-to-b from-[#fff9c7] to-transparent mt-4 opacity-30 md:opacity-50" />
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-[9rem] lg:text-[11rem] font-heading font-black tracking-tighter mb-4 md:mb-6 leading-[0.9] select-none text-white cursor-default">
          <span className="chrome-text neon-yellow">FRACTAL</span><br />
          <span className="chrome-text neon-yellow">FUSION</span>
        </h1>
        
        <div className="mb-10 md:mb-16">
          <p className="max-w-4xl mx-auto text-[10px] md:text-2xl text-white/70 font-normal tracking-[0.2em] md:tracking-[0.3em] uppercase px-4 leading-relaxed mb-6 md:mb-10">
            “FUSING the future, one <span className="inline-block bg-[#fff9c7] text-[#293657] px-2 md:px-3 py-0.5 mx-1 font-bold shadow-[0_0_20px_rgba(255,249,199,0.6)] align-middle">BUILD</span> at a time”
          </p>
          
          {/* Main Sponsor Feature */}
          <div className="flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-4">
              <div className="h-px w-6 md:w-16 bg-[#fff9c7]/20" />
              <span className="font-mono text-[7px] md:text-[10px] text-[#fff9c7]/40 tracking-[0.5em] uppercase">Principal Partner</span>
              <div className="h-px w-6 md:w-16 bg-[#fff9c7]/20" />
            </div>
            <div className="group relative">
               <span className="text-xl md:text-4xl font-heading font-bold text-[#fff9c7] neon-yellow tracking-widest uppercase transition-all duration-500 hover:tracking-[0.5em]">GreenSea IQ</span>
               <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#fff9c7]/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </div>
            <span className="font-mono text-[6px] md:text-[9px] text-[#fff9c7]/30 italic tracking-widest uppercase mt-1">"Intelligent Ocean Solutions"</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 md:gap-16 justify-center items-center w-full max-w-5xl px-4">
          {(['evolution', 'technical', 'outreach', 'contact'] as const).map((v) => (
            <a 
              key={v}
              href="#"
              onClick={(e) => { e.preventDefault(); setView(v); }}
              className="group relative flex flex-col items-center"
            >
              <span className="text-[10px] md:text-lg font-mono font-black tracking-[0.2em] md:tracking-[0.5em] uppercase text-[#fff9c7] transition-all group-hover:neon-yellow">
                {v}
              </span>
              <span className="mt-1 md:mt-4 h-0.5 bg-[#fff9c7] w-0 group-hover:w-full transition-all duration-500 shadow-[0_0_15px_#fff9c7]" />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-[#fff9c7]/20 py-3 md:py-5 bg-black/60 backdrop-blur-sm z-20">
        <div className="flex gap-12 md:gap-24 whitespace-nowrap animate-marquee font-mono text-[7px] md:text-[10px] text-[#fff9c7] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">
          <span>INTO THE DEEP 2024</span>
          <span>●</span>
          <span>AUTONOMOUS SPEED: MAX</span>
          <span>●</span>
          <span>PRECISION ENGINEERING: FRACTAL LEVEL</span>
          <span>●</span>
          <span>FSM STATE_LOG: ACTIVE</span>
          <span>●</span>
          <span>SKETCH → CAD → TEST → BUILD → REFINE</span>
          {/* Duplicated for loop */}
          <span>INTO THE DEEP 2024</span>
          <span>●</span>
          <span>AUTONOMOUS SPEED: MAX</span>
          <span>●</span>
          <span>PRECISION ENGINEERING: FRACTAL LEVEL</span>
          <span>●</span>
          <span>FSM STATE_LOG: ACTIVE</span>
          <span>●</span>
          <span>SKETCH → CAD → TEST → BUILD → REFINE</span>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};
