
import React from 'react';

const seasonOne = [
  { year: '2024', event: 'Meet 1', rank: '11th' },
  { year: '2024', event: 'Meet 2', rank: '6th' },
  { year: '2024', event: 'Meet 3', rank: '3rd' },
  { year: '2025', event: 'League Champs', rank: 'Alliance Capt.' },
  { year: '2025', event: 'Innovate Award', rank: '1st Place' },
  { year: '2025', event: 'State Champ', rank: 'Qualified' },
];

const seasonTwo = [
  { year: '2025', event: 'Meet 1', rank: '1st Place' },
  { year: '2025', event: 'Meet 2', rank: '1st Place' },
  { year: '2025', event: 'Meet 3', rank: '1st Place' },
  { year: '2026', event: 'League Champs', rank: 'Winning Alliance Capt.' },
  { year: '2026', event: 'Design Award', rank: '2nd Place' },
  { year: '2026', event: 'State Champ', rank: 'Loading...' },
];

export const Achievements: React.FC = () => {
  // Use React.FC to ensure key prop is handled correctly by TypeScript in JSX
  const AchievementCard: React.FC<{ h: any }> = ({ h }) => (
    <div className="flex-1 min-w-[140px] glass-panel p-6 border-l-4 border-l-[#293657] hover:bg-[#fff9c7]/30 transition-all group">
       <div className="font-mono text-[10px] text-[#293657]/40 mb-2 font-bold">{h.year}</div>
       <div className="font-heading text-xs text-[#293657] mb-1 leading-tight">{h.event}</div>
       <div className="font-mono text-[10px] text-[#293657] font-black uppercase group-hover:text-[#293657] transition-colors">{h.rank}</div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex items-center gap-12 mb-16 overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#293657] whitespace-nowrap">SUCCESS_LOG</h2>
        <div className="h-px bg-[#293657]/20 flex-grow" />
      </div>

      {/* Season 2024-2025 */}
      <div className="mb-12">
        <div className="font-mono text-[9px] text-[#293657]/40 uppercase tracking-[0.4em] mb-6">Cycle_Alpha: 2024-2025_Season</div>
        <div className="flex flex-wrap gap-6 justify-between">
          {seasonOne.map((h, i) => <AchievementCard key={`s1-${i}`} h={h} />)}
        </div>
      </div>

      {/* Separator */}
      <div className="py-12 relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#293657]/20 to-transparent" />
        </div>
        <div className="relative px-6 py-2 bg-[#fff9c7] text-[#293657] font-mono text-[10px] tracking-[0.5em] font-black border border-[#293657]/20 shadow-[0_0_20px_rgba(255,249,199,0.5)]">
          SEASON_TRANSITION_UP-LINK
        </div>
      </div>

      {/* Season 2025-2026 */}
      <div className="mb-16">
        <div className="font-mono text-[9px] text-[#293657]/40 uppercase tracking-[0.4em] mb-6">Cycle_Beta: 2025-2026_Season</div>
        <div className="flex flex-wrap gap-6 justify-between">
          {seasonTwo.map((h, i) => <AchievementCard key={`s2-${i}`} h={h} />)}
        </div>
      </div>
      
      <div className="mt-16 p-8 border border-[#293657]/10 flex flex-col md:flex-row gap-12 items-center bg-white/30 backdrop-blur-sm">
         <div className="w-full md:w-1/3 text-center md:text-left">
            <span className="font-mono text-[9px] text-[#293657]/40 uppercase tracking-widest">Efficiency Metrics</span>
            <h3 className="text-2xl font-heading text-[#293657] mt-2">GANTT CONTROL</h3>
            <p className="text-sm text-[#293657]/60 mt-4 leading-relaxed font-normal">
              To address time management challenges, we deployed stylized GANTT charts tracking our progress—ensuring no back-down from any competitive challenge.
            </p>
         </div>
         <div className="w-full md:w-2/3 h-40 bg-[#c6d2df]/30 relative border border-[#293657]/5 overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-20">
               {[...Array(12)].map((_, i) => <div key={i} className="border-r border-[#293657]" />)}
            </div>
            {/* Visual GANTT Bars */}
            <div className="absolute top-4 left-[10%] w-[30%] h-4 bg-[#293657]/40 animate-pulse" />
            <div className="absolute top-12 left-[25%] w-[45%] h-4 bg-[#293657]/60" />
            <div className="absolute top-20 left-[40%] w-[50%] h-4 bg-[#fff9c7] neon-border-yellow" />
            <div className="absolute top-28 left-[60%] w-[35%] h-4 bg-[#293657]/20" />
         </div>
      </div>
    </div>
  );
};
