
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
      <div className="perspective-grid opacity-40" />
      
      {/* Kinetic Energy Lines */}
      <div className="absolute top-1/4 left-0 w-full h-px overflow-hidden opacity-20">
        <div className="kinetic-line" style={{ animationDelay: '0s' }} />
      </div>
      <div className="absolute top-3/4 left-0 w-full h-px overflow-hidden opacity-20">
        <div className="kinetic-line" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none border-[30px] border-[#fff9c7]/5">
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#fff9c7]/20" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#fff9c7]/20" />
      </div>

      <div className="relative z-10 px-6 max-w-7xl w-full flex flex-col items-center pt-32 pb-40">
        <div className="mb-8 flex flex-col items-center animate-fade-in">
           {/* Prominent SVG Logo with Aura */}
           <div className="w-32 h-32 md:w-44 md:h-44 mb-8 md:mb-12 relative group flex items-center justify-center cursor-pointer" onClick={() => setView('home')}>
             <div className="absolute inset-0 bg-[#fff9c7] blur-[80px] opacity-20 animate-pulse pointer-events-none" />
             <div className="absolute inset-0 border border-[#fff9c7]/10 rounded-full scale-125 group-hover:scale-150 transition-transform duration-1000" />
             <Logo neon className="w-full h-full relative z-10 transition-transform duration-700 group-hover:rotate-6" />
           </div>

           <div className="px-6 py-2 bg-[#fff9c7] text-[#293657] font-heading text-[10px] md:text-[11px] tracking-[0.5em] uppercase shadow-[0_0_20px_rgba(255,249,199,0.4)] border border-white/20 font-bold">
             TEAM 27188 • FTC 2024-2025
           </div>
           <div className="h-8 md:h-12 w-px bg-gradient-to-b from-[#fff9c7] to-transparent mt-4 opacity-50" />
        </div>
        
        <h1 className="text-5xl md:text-[9rem] lg:text-[11rem] font-heading font-black tracking-tighter mb-6 leading-[0.85] select-none text-white hover-glitch cursor-default">
          <span className="chrome-text neon-yellow">FRACTAL</span><br />
          <span className="chrome-text neon-yellow">FUSION</span>
        </h1>
        
        <p className="max-w-4xl mx-auto text-lg md:text-2xl text-white/70 font-normal tracking-[0.2em] md:tracking-[0.3em] uppercase mb-12 md:mb-20 px-4 leading-relaxed">
          “FUSING the future, one <span className="inline-block bg-[#fff9c7] text-[#293657] px-3 py-0.5 mx-1 font-bold shadow-[0_0_20px_rgba(255,249,199,0.6)] align-middle leading-tight">BUILD</span> at a time”
        </p>
        
        {/* Navigation Prominent Links */}
        <div className="flex flex-wrap gap-8 md:gap-16 justify-center items-center w-full max-w-5xl">
          {(['evolution', 'technical', 'outreach', 'contact'] as const).map((v) => (
            <a 
              key={v}
              href="#"
              onClick={(e) => { e.preventDefault(); setView(v); }}
              className="group relative flex flex-col items-center"
            >
              <span className="text-sm md:text-lg font-mono font-black tracking-[0.5em] uppercase text-[#fff9c7] transition-all group-hover:neon-yellow group-hover:scale-110">
                {v}
              </span>
              <span className="mt-4 h-0.5 bg-[#fff9c7] w-0 group-hover:w-full transition-all duration-500 shadow-[0_0_15px_#fff9c7]" />
              <span className="mt-2 text-[8px] font-mono text-white/20 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">ACCESS_NODE_{v.toUpperCase()}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-[#fff9c7]/20 py-5 bg-black/40 backdrop-blur-lg z-20">
        <div className="flex gap-24 whitespace-nowrap animate-marquee font-mono text-[9px] md:text-[10px] text-[#fff9c7] font-bold uppercase tracking-[0.3em]">
          <span>INTO THE DEEP 2024</span>
          <span>●</span>
          <span>AUTONOMOUS SPEED: MAX</span>
          <span>●</span>
          <span>PRECISION ENGINEERING: FRACTAL LEVEL</span>
          <span>●</span>
          <span>FSM STATE_LOG: ACTIVE</span>
          <span>●</span>
          <span>ROBOTICS EVOLUTION 27188</span>
          <span>●</span>
          <span>SKETCH → CAD → TEST → BUILD → REFINE</span>
          {/* Duplicated for seamless loop */}
          <span>INTO THE DEEP 2024</span>
          <span>●</span>
          <span>AUTONOMOUS SPEED: MAX</span>
          <span>●</span>
          <span>PRECISION ENGINEERING: FRACTAL LEVEL</span>
          <span>●</span>
          <span>FSM STATE_LOG: ACTIVE</span>
          <span>●</span>
          <span>ROBOTICS EVOLUTION 27188</span>
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
          animation: marquee 40s linear infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};
