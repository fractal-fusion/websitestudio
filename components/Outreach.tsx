
import React from 'react';

const partners = [
  "24085 Short Circuit", "22012 Loose Screws", "17288 Rubber Bandits", 
  "20344 Cattle Bots", "15065 A Byte Irrational", "5070 NUTS"
];

const collaborations = [
  {
    category: "VIDEO_LINK",
    title: "19954 Mario's Mechanics",
    desc: "Showcased our robot and discussed strategic experiences via virtual video conferencing.",
  },
  {
    category: "SYSTEM_SETUP",
    title: "30338 MetalBeaks",
    desc: "Our lead programmer provided support to help setup their PedroPathing implementation.",
  },
  {
    category: "GLOBAL_FUSION",
    title: "13201 Team Hazmat",
    desc: "Collaborated with Wisconsin-based Hazmat and FTC Vietnam 25152 to share personal experiences.",
  }
];

export const Outreach: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
      {/* Decorative Network Pulse */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[#fff9c7] to-transparent animate-yellow-pulse opacity-50" />
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#293657]/40">System Integration</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#293657] mt-4 hover-glitch cursor-default">OUTREACH_PROTO</h2>
          <div className="h-1 w-24 bg-[#fff9c7] mt-4 neon-border-yellow" />
        </div>
        <div className="h-px flex-grow bg-gradient-to-r from-[#293657]/5 via-[#fff9c7] to-[#293657]/5 mx-8 hidden lg:block opacity-30" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
         {collaborations.map((item, idx) => (
           <div key={idx} className="group p-10 bg-white/60 backdrop-blur-md border border-[#293657]/5 hover:border-[#fff9c7] transition-all hover:shadow-[0_0_40px_rgba(255,249,199,0.2)] relative overflow-hidden glass-panel">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#fff9c7]/20 rotate-45 transform translate-x-12 -translate-y-12 transition-transform group-hover:translate-x-10 group-hover:-translate-y-10" />
              <div className="text-[9px] font-mono text-[#293657]/50 tracking-[0.3em] mb-6 uppercase font-bold group-hover:text-[#293657] transition-colors">{item.category}</div>
              <h3 className="text-xl font-heading font-bold text-[#293657] mb-6 group-hover:neon-yellow transition-all">{item.title}</h3>
              <p className="text-sm text-[#293657]/60 leading-relaxed font-normal">{item.desc}</p>
              <div className="mt-8 h-1 w-0 bg-[#fff9c7] group-hover:w-full transition-all duration-700 shadow-[0_0_10px_#fff9c7]" />
           </div>
         ))}
      </div>

      <div className="glass-panel p-12 border-[#fff9c7]/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff9c7]/5 to-transparent pointer-events-none" />
        <h4 className="font-heading text-xs text-[#293657]/60 tracking-[0.5em] mb-12 uppercase text-center font-bold">Connected_Network_Nodes</h4>
        <div className="flex flex-wrap justify-center gap-6 relative z-10">
           {partners.map(p => (
             <span key={p} className="px-5 py-3 border border-[#293657]/10 font-mono text-[11px] text-[#293657] hover:bg-[#fff9c7] hover:border-[#fff9c7] hover:shadow-[0_0_15px_rgba(255,249,199,0.5)] transition-all cursor-default font-bold">
               {p}
             </span>
           ))}
        </div>
      </div>
    </div>
  );
};
