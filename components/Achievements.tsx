
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
    <div className="flex-1 min-w-[120px] md:min-w-[140px] glass-panel p-4 md:p-6 border-l-4 border-l-[#293657] hover:bg-[#fff9c7]/30 transition-all group">
       <div className="font-mono text-[8px] md:text-[10px] text-[#293657]/40 mb-1 md:mb-2 font-bold">{h.year}</div>
       <div className="font-heading text-[10px] md:text-xs text-[#293657] mb-1 leading-tight">{h.event}</div>
       <div className="font-mono text-[9px] md:text-[10px] text-[#293657] font-black uppercase group-hover:text-[#293657] transition-colors">{h.rank}</div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12">
      <div className="flex items-center gap-4 md:gap-12 mb-10 md:mb-16 overflow-hidden">
        <h2 className="text-2xl md:text-5xl font-heading font-bold text-[#293657] whitespace-nowrap">SUCCESS_LOG</h2>
        <div className="h-px bg-[#293657]/20 flex-grow" />
      </div>

      {/* Season 2024-2025 */}
      <div className="mb-10 md:mb-12">
        <div className="font-mono text-[8px] md:text-[9px] text-[#293657]/40 uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 md:mb-6">Cycle_Alpha: 2024-2025_Season</div>
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-4 md:gap-6 justify-between">
          {seasonOne.map((h, i) => <AchievementCard key={`s1-${i}`} h={h} />)}
        </div>
      </div>

      {/* Separator */}
      <div className="py-8 md:py-12 relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#293657]/20 to-transparent" />
        </div>
        <div className="relative px-4 md:px-6 py-1.5 md:py-2 bg-[#fff9c7] text-[#293657] font-mono text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] font-black border border-[#293657]/20 shadow-[0_0_20px_rgba(255,249,199,0.5)]">
          SEASON_TRANSITION
        </div>
      </div>

      {/* Season 2025-2026 */}
      <div className="mb-12 md:mb-16">
        <div className="font-mono text-[8px] md:text-[9px] text-[#293657]/40 uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 md:mb-6">Cycle_Beta: 2025-2026_Season</div>
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-4 md:gap-6 justify-between">
          {seasonTwo.map((h, i) => <AchievementCard key={`s2-${i}`} h={h} />)}
        </div>
      </div>
    </div>
  );
};
