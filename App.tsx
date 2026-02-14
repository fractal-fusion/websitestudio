
import React, { useEffect, useState, useMemo } from 'react';
import { Hero } from './components/Hero.tsx';
import { Evolution } from './components/Evolution.tsx';
import { TechSpecs } from './components/TechSpecs.tsx';
import { TeamCollective } from './components/TeamCollective.tsx';
import { Outreach } from './components/Outreach.tsx';
import { Impact } from './components/Impact.tsx';
import { Navigation } from './components/Navigation.tsx';
import { Achievements } from './components/Achievements.tsx';
import { Strategy } from './components/Strategy.tsx';
import { SWOT } from './components/SWOT.tsx';
import { Contact } from './components/Contact.tsx';
import { CadViewer } from './components/CadViewer.tsx';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [view, setView] = useState<'home' | 'evolution' | 'technical' | 'outreach' | 'contact'>('home');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = "fractal.fusion27188@gmail.com";
    navigator.clipboard.writeText(email);
  };

  const currentContent = useMemo(() => {
    switch (view) {
      case 'home':
        return (
          <div className="animate-fade-in">
            <Hero setView={setView} />
            <section id="origin" className="py-12 md:py-24 px-4 md:px-12 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
                <div className="space-y-8 md:space-y-10 text-center lg:text-left flex flex-col items-center lg:items-start">
                  <div className="inline-block px-4 py-1 bg-[#293657] text-[#fff9c7] font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase">
                    Mission Log: 2024–2025
                  </div>
                  <h2 className="font-heading font-bold text-[#293657] flex flex-col items-center lg:items-start gap-1 md:gap-2">
                    <span className="opacity-40 text-xl md:text-3xl tracking-widest">THE</span>
                    <span className="text-4xl md:text-7xl bg-[#fff9c7] px-3 md:px-5 py-2 shadow-[0_0_20px_rgba(255,249,199,0.4)]">GENESIS</span>
                  </h2>
                  <p className="text-base md:text-xl text-[#293657]/80 leading-relaxed font-light max-w-xl">
                    Founded in the <span className="font-bold text-[#293657]">INTO THE DEEP</span> season, Team 27188 consists of 13 dedicated students. Our culture thrives on exploration—tackling challenges head-on to expand our collective knowledge.
                  </p>
                </div>
                <div className="relative flex justify-center items-center h-[300px] md:h-[500px]">
                  <SWOT />
                </div>
              </div>
            </section>
            <section id="3d-viewer" className="py-12 md:py-24 bg-[#fff9c7]/10 border-y border-[#293657]/5">
              <CadViewer />
            </section>
            <section id="achievements" className="py-12 md:py-24 bg-[#293657]/5 border-b border-[#293657]/10">
              <Achievements />
            </section>
            <section id="team" className="py-12 md:py-24 bg-[#c6d2df]/20 relative overflow-hidden">
              <TeamCollective />
            </section>
          </div>
        );
      case 'technical':
        return (
          <div className="animate-fade-in pt-24 md:pt-32 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-24">
                <div className="font-mono text-[8px] md:text-[10px] text-[#293657]/40 tracking-[0.4em] md:tracking-[0.5em] uppercase mb-4">Systems Architecture</div>
                <h2 className="text-2xl md:text-8xl font-heading font-bold text-[#293657] mb-6">TECHNICAL<br/>CORE</h2>
                <div className="h-1.5 w-20 md:w-32 bg-[#fff9c7] mx-auto neon-border-yellow" />
              </div>
              <TechSpecs />
              <Strategy />
            </div>
          </div>
        );
      case 'evolution':
        return (
          <div className="animate-fade-in pt-24 md:pt-32 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-24">
                <div className="font-mono text-[8px] md:text-[10px] text-[#293657]/40 tracking-[0.4em] md:tracking-[0.5em] uppercase mb-4">Classified Design Logs</div>
                <h2 className="text-2xl md:text-8xl font-heading font-bold text-[#293657] mb-6">ENGINEERING<br/>EVOLUTION</h2>
                <div className="h-1.5 w-20 md:w-32 bg-[#fff9c7] mx-auto neon-border-yellow" />
              </div>
              <Evolution />
            </div>
          </div>
        );
      case 'outreach':
        return (
          <div className="animate-fade-in pt-24 md:pt-32 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-24">
                <div className="font-mono text-[8px] md:text-[10px] text-[#293657]/40 tracking-[0.4em] md:tracking-[0.5em] uppercase mb-4">Network & Community</div>
                <h2 className="text-2xl md:text-8xl font-heading font-bold text-[#293657] mb-6">FUSION<br/>NETWORK</h2>
                <div className="h-1.5 w-20 md:w-32 bg-[#fff9c7] mx-auto neon-border-yellow" />
              </div>
              <Outreach />
              <Impact />
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="animate-fade-in pt-24 md:pt-32 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-24">
                <div className="font-mono text-[8px] md:text-[10px] text-[#293657]/40 tracking-[0.4em] md:tracking-[0.5em] uppercase mb-4">Communication Node</div>
                <h2 className="text-2xl md:text-8xl font-heading font-bold text-[#293657] mb-6">CONTACT<br/>UP-LINK</h2>
                <div className="h-1.5 w-20 md:w-32 bg-[#fff9c7] mx-auto neon-border-yellow" />
              </div>
              <Contact />
            </div>
          </div>
        );
      default:
        return null;
    }
  }, [view]);

  return (
    <div className="relative min-h-screen selection:bg-[#293657] selection:text-white font-normal overflow-x-hidden">
      {/* HUD Overlays - Reduced complexity for mobile */}
      <div className="scanline" />
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-20 right-[-5%] w-64 md:w-96 h-64 md:h-96 bg-[#c6d2df]/20 blur-[60px] md:blur-[100px] rounded-full" />
        <div className="absolute bottom-40 left-[-5%] w-48 md:w-80 h-48 md:h-80 bg-[#fff9c7]/10 blur-[60px] md:blur-[100px] rounded-full" />
      </div>
      
      <Navigation scrollY={scrollY} currentView={view} setView={setView} />

      <main className="relative z-10 w-full">
        {currentContent}
      </main>

      <footer className="py-10 md:py-16 px-6 bg-[#deecfb] border-t border-[#293657]/10 text-[#293657] relative z-10 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
          <div className="text-center md:text-left">
            <h3 className="font-heading text-lg md:text-2xl font-bold mb-1 md:mb-2">FRACTAL FUSION 27188</h3>
            <p className="text-[#293657]/60 font-mono text-[7px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] uppercase">EST. 2024 /// ENCODED FOR EXCELLENCE</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-12 text-[#293657]/50 font-mono text-[8px] md:text-[10px] uppercase font-bold tracking-[0.1em] md:tracking-[0.2em]">
            <a href="https://www.instagram.com/ftc_27188" target="_blank" rel="noopener noreferrer" className="hover:text-[#293657] transition-colors">INSTAGRAM</a>
            <a href="#" onClick={copyEmail} className="hover:text-[#293657] transition-colors group relative">EMAIL</a>
            <a href="https://orlandoscience.org/highschool/" target="_blank" rel="noopener noreferrer" className="hover:text-[#293657] transition-colors">ORLANDO SCIENCE</a>
          </div>
          <div className="text-center md:text-right">
             <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#293657] text-[#fff9c7] font-mono text-[7px] md:text-[9px] font-bold tracking-[0.1em] md:tracking-[0.2em]">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]" />
              FUSION CORE_CONNECTED
             </div>
          </div>
        </div>
      </footer>

      <style>{`
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;
