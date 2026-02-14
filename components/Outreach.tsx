
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
    <div className="max-w-7xl mx-auto px-4 md:px-12 relative mb-24 md:mb-32">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-px h-16 md:h-20 bg-gradient-to-b from-[#293657] to-transparent opacity-20" />
      
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-6 text-center md:text-left">
        <div className="w-full">
          <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#293657]/40 font-bold">System Integration</span>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-heading font-bold text-[#293657] mt-3 md:mt-4 uppercase tracking-tighter leading-none">OUTREACH_PROTO</h2>
          <div className="h-1.5 w-24 md:w-32 bg-[#293657] mt-4 md:mt-6 mx-auto md:mx-0 opacity-10" />
        </div>
        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-[#293657]/10 to-transparent mx-8 hidden lg:block" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-24">
         {collaborations.map((item, idx) => (
           <div key={idx} className="group p-10 md:p-12 bg-white/40 backdrop-blur-md border border-[#293657]/5 hover:border-[#293657]/20 transition-all hover:shadow-2xl relative overflow-hidden glass-panel flex flex-col h-full min-h-[320px]">
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-[#293657]/5 rotate-45 transform translate-x-12 -translate-y-12 group-hover:translate-x-10 group-hover:-translate-y-10 transition-transform" />
              <div className="text-[9px] md:text-[10px] font-mono text-[#293657]/40 tracking-[0.4em] mb-6 md:mb-8 uppercase font-black group-hover:text-[#293657] transition-colors">{item.category}</div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-[#293657] mb-6 md:mb-8 transition-all uppercase leading-tight">{item.title}</h3>
              <p className="text-sm md:text-base text-[#293657]/70 leading-relaxed font-light mb-8">{item.desc}</p>
              <div className="mt-auto h-1 w-0 bg-[#293657]/20 group-hover:w-full transition-all duration-700" />
           </div>
         ))}
      </div>

      <div className="glass-panel p-8 md:p-16 border-[#293657]/10 relative overflow-hidden bg-white/20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        <h4 className="font-heading text-[10px] md:text-xs text-[#293657]/40 tracking-[0.5em] mb-10 md:mb-14 uppercase text-center font-black">CONNECTED_NETWORK</h4>
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 relative z-10">
           {partners.map(p => (
             <span key={p} className="px-4 py-2.5 md:px-7 md:py-4 border border-[#293657]/10 bg-white/40 backdrop-blur-sm font-mono text-[9px] md:text-[12px] text-[#293657] hover:bg-[#293657] hover:text-white transition-all cursor-default font-bold uppercase tracking-widest shadow-sm">
               {p}
             </span>
           ))}
        </div>
      </div>
    </div>
  );
};
