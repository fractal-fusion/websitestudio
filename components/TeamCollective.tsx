
import React from 'react';
import { Gallery } from './Gallery.tsx';

const mentors = [
  { name: "Mr. Whitfield", label: "C" },
  { name: "Mr. Silvestri", label: "C" },
  { name: "Akshat R.", label: "M" }
];
const leads = [
  { role: "Mechanical", name: "Huy N." },
  { role: "Software", name: "Kevin W." },
  { role: "Business", name: "Yashmita C." }
];
const team = [
  { sub: "Mechanical", members: ["Gabriel C.", "Avyahn S.", "Aidan L."] },
  { sub: "Software", members: ["Andrew C.", "Nathan L.", "Chandan K."] },
  { sub: "Business", members: ["Aarika R.", "Saharsh V.", "Diya S.", "Zihan L."] }
];

export const TeamCollective: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-10 md:mb-16">
        <div className="inline-block px-4 py-1 bg-[#293657] text-[#fff9c7] font-mono text-[9px] tracking-[0.4em] uppercase font-bold mb-4">
          PERSONNEL_DATABASE_ACTIVE
        </div>
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#293657]">THE COLLECTIVE</h2>
        <div className="flex justify-center mt-4 space-x-2">
           {[...Array(13)].map((_, i) => <div key={i} className="w-1.5 h-6 bg-[#293657]/10" />)}
        </div>
      </div>

      {/* Embedded Photo Slideshow */}
      <div className="mb-16 md:mb-24">
        <Gallery />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Mentors & Coaches */}
        <div className="glass-panel p-10 border-[#293657]/20 border-t-4 border-t-[#fff9c7]">
          <h3 className="font-heading text-xs text-[#293657]/50 tracking-[0.4em] mb-8 border-b border-[#293657]/10 pb-4">COACHES_MENTORS</h3>
          <div className="space-y-6">
            {mentors.map(m => (
              <div key={m.name} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#293657] flex items-center justify-center text-[#fff9c7] font-heading font-bold transition-all group-hover:rotate-45 group-hover:shadow-[0_0_15px_rgba(41,54,87,0.4)]">
                  {m.label}
                </div>
                <span className="text-xl font-heading text-[#293657]">{m.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Leads */}
        <div className="glass-panel p-10 border-[#293657]/20 border-t-4 border-t-[#293657]">
          <h3 className="font-heading text-xs text-[#293657]/50 tracking-[0.4em] mb-8 border-b border-[#293657]/10 pb-4">SYSTEM_LEADS</h3>
          <div className="space-y-8">
            {leads.map(l => (
              <div key={l.name} className="flex flex-col group">
                <span className="font-mono text-[9px] font-bold text-[#293657]/40 uppercase tracking-widest">{l.role}</span>
                <span className="text-2xl font-heading text-[#293657] mt-1 group-hover:translate-x-2 transition-transform">{l.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subteams */}
        <div className="glass-panel p-10 border-[#293657]/20 border-t-4 border-t-[#c6d2df]">
          <h3 className="font-heading text-xs text-[#293657]/50 tracking-[0.4em] mb-8 border-b border-[#293657]/10 pb-4">FUSION_NODES</h3>
          <div className="space-y-10">
            {team.map(t => (
              <div key={t.sub}>
                <h4 className="font-mono text-[10px] font-black text-[#293657] mb-3 uppercase tracking-tighter bg-[#fff9c7] inline-block px-2 shadow-[2px_2px_0_rgba(41,54,87,1)]">{t.sub}_TEAM</h4>
                <div className="grid grid-cols-2 gap-2">
                  {t.members.map(m => (
                    <span key={m} className="text-xs font-normal text-[#293657]/70 font-mono tracking-tight hover:text-[#293657] transition-colors">{m}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
