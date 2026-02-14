
import React from 'react';

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
  const teamPhotoId = "1j8iya9KQCSkB-RRqr8pa0frBdv0Ick55";
  const teamPhotoUrl = `https://drive.google.com/thumbnail?id=${teamPhotoId}&sz=w1200`;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 bg-[#293657] text-[#fff9c7] font-mono text-[9px] tracking-[0.4em] uppercase font-bold mb-4">
          PERSONNEL_DATABASE_ACTIVE
        </div>
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#293657]">THE COLLECTIVE</h2>
        <div className="flex justify-center mt-4 space-x-2">
           {[...Array(13)].map((_, i) => <div key={i} className="w-1.5 h-6 bg-[#293657]/10" />)}
        </div>
      </div>

      {/* Team Unit Visualization - Hero Image with HUD Styling */}
      <div className="mb-24 relative group">
        <div className="absolute -top-8 -right-4 font-mono text-[8px] text-[#293657]/30 text-right space-y-1 hidden md:block select-none tracking-[0.2em]">
          <div>SCAN_MODE: VOLUMETRIC_7H</div>
          <div>OBJECT_ID: FRACTAL_SQUAD_27188</div>
          <div>STATUS: SYNC_COMPLETE</div>
        </div>

        <div className="glass-panel p-2 border-2 border-[#293657]/10 relative overflow-hidden transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(41,54,87,0.3)]">
          <div className="absolute inset-0 bg-[#293657]/5 pointer-events-none z-10" />
          
          {/* Changed aspect ratio to 3:2 consistently to provide more vertical space for heads */}
          <div className="relative aspect-[3/2] overflow-hidden bg-[#293657] border border-[#293657]/5">
            {/* Removed zoom on hover. Changed object-center to object-top to prioritize head visibility. */}
            <img 
              src={teamPhotoUrl} 
              alt="Team 27188 Collective" 
              className="w-full h-full object-cover object-top filter brightness-105 contrast-110 saturate-[0.9]"
            />
            
            {/* HUD Elements over image */}
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 md:p-8 z-20">
              <div className="flex justify-between items-start">
                <div className="w-8 h-8 md:w-16 md:h-16 border-t-2 border-l-2 border-[#fff9c7]/60" />
                <div className="w-8 h-8 md:w-16 md:h-16 border-t-2 border-r-2 border-[#fff9c7]/60" />
              </div>
              
              <div className="flex justify-between items-end">
                <div className="w-8 h-8 md:w-16 md:h-16 border-b-2 border-l-2 border-[#fff9c7]/60" />
                <div className="flex flex-col items-end">
                  <div className="px-4 py-1 bg-[#293657]/90 backdrop-blur-md border border-[#fff9c7]/30 text-[#fff9c7] font-mono text-[8px] md:text-[10px] tracking-[0.4em] uppercase font-bold shadow-lg">
                    UNIT_VISUALIZATION_27188
                  </div>
                  <div className="mt-2 w-full h-0.5 bg-[#fff9c7]/30" />
                </div>
              </div>
            </div>
            
            {/* Digital Overlay Text */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 flex flex-col gap-1 opacity-20 group-hover:opacity-60 transition-opacity duration-700 font-mono text-[8px] text-[#fff9c7] tracking-widest uppercase hidden md:flex">
              <span>&gt; AUTH_REQUIRED</span>
              <span>&gt; BYPASSING_FIREWALL...</span>
              <span>&gt; DECRYPTING_IMAGE_DATA...</span>
              <span>&gt; COMPLETE.</span>
            </div>

            {/* Kinetic Scanline for Image */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fff9c7]/10 to-transparent h-1/4 -top-full animate-scanline pointer-events-none z-30 opacity-40" />
          </div>
        </div>
        
        <div className="mt-6 flex justify-between items-center px-4 font-mono text-[9px] md:text-[11px] text-[#293657]/40 tracking-[0.3em] uppercase font-black">
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 bg-[#4ade80] rounded-full animate-pulse" />
            <span>ENCRYPTED_UNIT_ROSTER</span>
          </div>
          <span>[ 13_PASSIONATE_MINDS ]</span>
        </div>
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
