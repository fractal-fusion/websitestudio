
import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Evolution } from './components/Evolution';
import { TechSpecs } from './components/TechSpecs';
import { TeamCollective } from './components/TeamCollective';
import { Outreach } from './components/Outreach';
import { Impact } from './components/Impact';
import { Navigation } from './components/Navigation';
import { Achievements } from './components/Achievements';
import { Strategy } from './components/Strategy';
import { SWOT } from './components/SWOT';
import { Contact } from './components/Contact';
import { CadViewer } from './components/CadViewer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [view, setView] = useState<'home' | 'evolution' | 'technical' | 'outreach' | 'contact'>('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = "fractal.fusion27188@gmail.com";
    navigator.clipboard.writeText(email);
  };

  const renderHome = () => (
    <main className="relative z-10">
      {/* Origin & Year Overview */}
      <section id="origin" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 bg-[#293657] text-[#fff9c7] font-mono text-[10px] tracking-[0.3em] uppercase">
              Mission Log: 2024–2025
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-[#293657] leading-tight">
              THE <br/><span className="bg-[#fff9c7] px-2 shadow-[0_0_15px_rgba(255,249,199,0.5)]">GENESIS</span>
            </h2>
            <p className="text-xl text-[#293657]/80 leading-relaxed font-light">
              Founded in the <span className="font-bold">INTO THE DEEP</span> season, Team 27188 consists of 13 dedicated students. Our culture thrives on exploration—tackling challenges head-on to expand our collective knowledge.
            </p>
          </div>
          <div className="relative flex justify-center items-center h-[500px]">
            <SWOT />
          </div>
        </div>
      </section>

      {/* 3D Model Viewport - New Section */}
      <section id="3d-viewer" className="py-24 bg-[#fff9c7]/10 border-y border-[#293657]/5">
        <CadViewer />
      </section>

      {/* Timeline of Success */}
      <section id="achievements" className="py-24 bg-[#293657]/5 border-b border-[#293657]/10">
        <Achievements />
      </section>

      {/* Team Collective */}
      <section id="team" className="py-24 bg-[#c6d2df]/20 relative overflow-hidden">
        <TeamCollective />
      </section>
    </main>
  );

  const renderTechnical = () => (
    <main className="relative z-10 min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24 animate-fade-in">
          <div className="font-mono text-[10px] text-[#293657]/40 tracking-[0.6em] uppercase mb-4">Systems Architecture</div>
          <h2 className="text-6xl md:text-8xl font-heading font-bold text-[#293657] mb-6">TECHNICAL<br/>CORE</h2>
          <div className="h-2 w-32 bg-[#fff9c7] mx-auto neon-border-yellow" />
          <p className="mt-12 max-w-2xl mx-auto text-xl text-[#293657]/70 font-light leading-relaxed">
            Unpacking the software and strategic layers that power Fractal Fusion's competitive edge.
          </p>
        </div>

        {/* Technical Architecture */}
        <section id="tech" className="py-24 bg-[#293657] text-[#fff9c7] -mx-6 md:-mx-12 px-6 md:px-12 mb-24">
          <TechSpecs />
        </section>

        {/* Game Strategy */}
        <section id="strategy" className="py-24 mb-32">
          <Strategy />
        </section>
      </div>
    </main>
  );

  const renderEvolution = () => (
    <main className="relative z-10 min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24 animate-fade-in">
          <div className="font-mono text-[10px] text-[#293657]/40 tracking-[0.6em] uppercase mb-4">Classified Design Logs</div>
          <h2 className="text-6xl md:text-8xl font-heading font-bold text-[#293657] mb-6">ENGINEERING<br/>EVOLUTION</h2>
          <div className="h-2 w-32 bg-[#fff9c7] mx-auto neon-border-yellow" />
          <p className="mt-12 max-w-2xl mx-auto text-xl text-[#293657]/70 font-light leading-relaxed">
            From the first skeletal chassis to the hyper-optimized ROSIE, explore the iterative journey of Team 27188.
          </p>
        </div>
        
        <Evolution />
        
        <section className="py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-[#293657] text-[#fff9c7] p-12 md:p-20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             <div className="relative z-10">
               <h3 className="text-3xl font-heading font-bold mb-6">PHILOSOPHY OF REFINEMENT</h3>
               <p className="text-white/60 font-normal leading-relaxed mb-8">
                 Our design process isn't a straight line—it's a circle. Each iteration is born from the data of the previous one. We sketch, we CAD, we test, we build, and most importantly, we refine.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-white/10 font-mono text-[10px] uppercase tracking-widest bg-white/5">Precision_Tuning</div>
                  <div className="p-4 border border-white/10 font-mono text-[10px] uppercase tracking-widest bg-white/5">Kinematic_Analysis</div>
               </div>
             </div>
             <div className="relative z-10 border-l border-white/20 pl-12">
               <div className="space-y-12">
                  <div className="flex gap-4">
                    <span className="text-4xl font-heading opacity-20">01</span>
                    <div>
                      <h4 className="font-heading text-sm mb-2">IDENTIFY LIMITS</h4>
                      <p className="text-xs text-white/40">Data collection during actual field deployment reveals mechanical stress points.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-4xl font-heading opacity-20">02</span>
                    <div>
                      <h4 className="font-heading text-sm mb-2">VIRTUAL SIM</h4>
                      <p className="text-xs text-white/40">Onshape and Fusion 360 are used to validate structural changes before fabrication.</p>
                    </div>
                  </div>
               </div>
             </div>
          </div>
        </section>
      </div>
    </main>
  );

  const renderOutreach = () => (
    <main className="relative z-10 min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24 animate-fade-in">
          <div className="font-mono text-[10px] text-[#293657]/40 tracking-[0.6em] uppercase mb-4">Network & Community</div>
          <h2 className="text-6xl md:text-8xl font-heading font-bold text-[#293657] mb-6">FUSION<br/>NETWORK</h2>
          <div className="h-2 w-32 bg-[#fff9c7] mx-auto neon-border-yellow" />
          <p className="mt-12 max-w-2xl mx-auto text-xl text-[#293657]/70 font-light leading-relaxed">
            Scaling impact through global collaboration and community engineering.
          </p>
        </div>
        
        <section className="mb-32">
          <Outreach />
        </section>

        <section className="py-24 bg-[#293657] text-white overflow-hidden rounded-3xl shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="perspective-grid h-full" />
          </div>
          <Impact />
        </section>
      </div>
    </main>
  );

  const renderContact = () => (
    <main className="relative z-10 min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24 animate-fade-in">
          <div className="font-mono text-[10px] text-[#293657]/40 tracking-[0.6em] uppercase mb-4">Communication Node</div>
          <h2 className="text-6xl md:text-8xl font-heading font-bold text-[#293657] mb-6">CONTACT<br/>UP-LINK</h2>
          <div className="h-2 w-32 bg-[#fff9c7] mx-auto neon-border-yellow" />
          <p className="mt-12 max-w-2xl mx-auto text-xl text-[#293657]/70 font-light leading-relaxed">
            Establish connection for technical inquiries, sponsorship coordination, or outreach requests.
          </p>
        </div>
        
        <section className="mb-32">
          <Contact />
        </section>
      </div>
    </main>
  );

  return (
    <div className="relative min-h-screen selection:bg-[#293657] selection:text-white font-normal overflow-hidden">
      {/* HUD Overlays */}
      <div className="scanline" />
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#c6d2df]/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-[#fff9c7]/10 blur-[100px] rounded-full" />
      </div>
      
      <Navigation scrollY={scrollY} currentView={view} setView={setView} />

      {view === 'home' && (
        <>
          <Hero setView={setView} />
          {renderHome()}
        </>
      )}
      
      {view === 'evolution' && renderEvolution()}
      {view === 'technical' && renderTechnical()}
      {view === 'outreach' && renderOutreach()}
      {view === 'contact' && renderContact()}

      <footer className="py-16 px-6 bg-[#deecfb] border-t border-[#293657]/10 text-[#293657] relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-2">FRACTAL FUSION 27188</h3>
            <p className="text-[#293657]/60 font-mono text-[9px] tracking-[0.4em] uppercase">EST. 2024 /// ENCODED FOR EXCELLENCE</p>
          </div>
          <div className="flex gap-12 text-[#293657]/50 font-mono text-[10px] uppercase font-bold tracking-[0.2em]">
            <a href="https://www.instagram.com/ftc_27188?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-[#293657] transition-colors">INSTAGRAM</a>
            <a 
              href="#" 
              onClick={copyEmail}
              className="hover:text-[#293657] transition-colors group relative"
            >
              EMAIL
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#293657] text-[#fff9c7] text-[8px] px-2 py-1 opacity-0 group-active:opacity-100 transition-opacity rounded">COPIED</span>
            </a>
            <a href="https://orlandoscience.org/highschool/" target="_blank" rel="noopener noreferrer" className="hover:text-[#293657] transition-colors">ORLANDO SCIENCE</a>
          </div>
          <div className="text-right">
             <div className="inline-flex items-center gap-3 px-6 py-2 bg-[#293657] text-[#fff9c7] font-mono text-[9px] font-bold tracking-[0.3em]">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]" />
              FUSION CORE_CONNECTED
             </div>
          </div>
        </div>
      </footer>

      <style>{`
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;
