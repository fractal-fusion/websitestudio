
import React from 'react';

export const CadViewer: React.FC = () => {
  const fileId = "1Tk3uWxTua_CLCcF_xOEWMFOyf6uDDuxU";
  const externalUrl = "https://cad.onshape.com/documents/2cea3088e7748a63a0e2803e/w/f7afa4c258cf68b11e7e6f04/e/30e8bac273c8dc57ae8d5697";
  const gifUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1200`;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 relative">
      <div className="flex flex-col items-center mb-10 md:mb-12">
        <div className="inline-block px-4 py-1 bg-[#fff9c7] text-[#293657] font-mono text-[8px] md:text-[9px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold shadow-[0_0_15px_rgba(255,249,199,0.4)] mb-4">
          VISUAL_PLAYBACK_ACTIVE
        </div>
        <h2 className="text-xl sm:text-2xl md:text-6xl font-heading font-bold text-[#293657] text-center leading-tight">
          ROSIE_VISUAL_STREAM
        </h2>
        <div className="h-1 w-24 md:w-32 bg-[#293657]/10 mt-4 md:mt-6" />
      </div>

      <div className="relative group">
        {/* Neon HUD Corners */}
        <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-8 h-8 md:w-16 md:h-16 border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-[#fff9c7] z-20 neon-border-yellow" />
        <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-8 h-8 md:w-16 md:h-16 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-[#fff9c7] z-20 neon-border-yellow" />
        
        <div className="glass-panel w-full aspect-video md:aspect-[21/9] relative overflow-hidden border border-[#293657]/10 shadow-2xl bg-[#293657]/20 flex items-center justify-center">
          <div className="w-full h-full relative">
            <img 
              src={gifUrl} 
              alt="Robot Iteration ROSIE" 
              className="w-full h-full object-cover filter brightness-110 contrast-110"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#293657]/40 to-transparent pointer-events-none" />
            
            {/* Scanline Effect specifically for the image */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,118,0.03))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-50" />
            
            {/* Bottom Left HUD Label */}
            <div className="absolute bottom-2 left-2 md:bottom-6 md:left-6 font-mono text-[7px] md:text-[10px] text-[#fff9c7] tracking-widest bg-[#293657]/80 px-2 py-0.5 md:px-4 md:py-1 uppercase backdrop-blur-sm border border-[#fff9c7]/20">
              CORE_VISUAL_FEED_01 // ACTIVE
            </div>
          </div>

          {/* Desktop Only HUD Stats */}
          <div className="absolute top-6 right-6 z-20 font-mono text-[8px] text-[#fff9c7]/60 text-right space-y-1 pointer-events-none hidden md:block drop-shadow-lg">
            <div>SIGNAL: STABLE</div>
            <div>RESOLUTION: 1200PX</div>
            <div>COMPRESSION: LOW_LATENCY</div>
            <div>SOURCE: RENDER_NODE_A</div>
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-12 flex flex-col md:flex-row justify-between items-center gap-4 px-2 md:px-4 font-mono text-[8px] md:text-[10px] text-[#293657]/40 tracking-widest uppercase font-bold text-center">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
          <span>ROSIE_UNIT_ONLINE</span>
        </div>
        <div className="flex gap-6 md:gap-12">
          <span className="hidden md:inline">VISUAL_CONSTRUCT_SYNCED</span>
          <a 
            href={externalUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#293657] hover:text-[#fff9c7] hover:bg-[#293657] px-2 py-1 transition-all border border-transparent hover:border-[#fff9c7]/20 shadow-sm"
          >
            [ VIEW_RAW_CAD_DATA ]
          </a>
        </div>
      </div>
    </div>
  );
};
