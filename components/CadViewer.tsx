
import React, { useState, useEffect } from 'react';

export const CadViewer: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const fileId = "1Tk3uWxTua_CLCcF_xOEWMFOyf6uDDuxU";
  const onshapeUrl = "https://cad.onshape.com/documents/2cea3088e7748a63a0e2803e/w/f7afa4c258cf68b11e7e6f04/e/30e8bac273c8dc57ae8d5697/embed";
  const gifUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1200`;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 relative">
      <div className="flex flex-col items-center mb-10 md:mb-12">
        <div className="inline-block px-4 py-1 bg-[#fff9c7] text-[#293657] font-mono text-[8px] md:text-[9px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold shadow-[0_0_15px_rgba(255,249,199,0.4)] mb-4">
          {isMobile ? "VISUAL_PLAYBACK_ACTIVE" : "VIRTUAL_CONSTRUCT_LOADED"}
        </div>
        <h2 className="text-xl sm:text-2xl md:text-6xl font-heading font-bold text-[#293657] text-center leading-tight">
          {isMobile ? "ROSIE_VISUALS" : "3D_SCHEMATIC_VIEWPORT"}
        </h2>
        <div className="h-1 w-24 md:w-32 bg-[#293657]/10 mt-4 md:mt-6" />
      </div>

      <div className="relative group">
        <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-8 h-8 md:w-16 md:h-16 border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-[#fff9c7] z-20 neon-border-yellow" />
        <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-8 h-8 md:w-16 md:h-16 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-[#fff9c7] z-20 neon-border-yellow" />
        
        <div className="glass-panel w-full aspect-video md:aspect-[21/9] relative overflow-hidden border border-[#293657]/10 shadow-2xl bg-[#293657]/20 flex items-center justify-center">
          {isMobile ? (
            <div className="w-full h-full relative">
              <img 
                src={gifUrl} 
                alt="Robot Iteration ROSIE" 
                className="w-full h-full object-cover filter brightness-110 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#293657]/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2 font-mono text-[7px] text-[#fff9c7] tracking-widest bg-[#293657]/80 px-2 py-0.5 uppercase">
                MOBILE_OPTIMIZED_STREAM
              </div>
            </div>
          ) : (
            <>
              {!isLoaded ? (
                <div className="flex flex-col items-center text-center p-8 z-30">
                  <div className="w-16 h-16 border-2 border-[#fff9c7] rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <div className="w-8 h-8 border-t-2 border-r-2 border-[#fff9c7] rotate-45" />
                  </div>
                  <h3 className="font-heading text-sm text-[#fff9c7] tracking-widest mb-4">HEAVY_DATA_STREAM</h3>
                  <p className="font-mono text-[10px] text-[#fff9c7]/60 mb-8 max-w-xs">3D interactive schematic requires additional GPU bandwidth.</p>
                  <button 
                    onClick={() => setIsLoaded(true)}
                    className="px-8 py-3 bg-[#fff9c7] text-[#293657] font-heading text-[10px] font-black tracking-[0.3em] hover:scale-105 active:scale-95 transition-transform"
                  >
                    INITIALIZE_RENDER
                  </button>
                </div>
              ) : (
                <>
                  <div className="absolute inset-0 bg-[#293657]/5 pointer-events-none z-10" />
                  <iframe 
                    src={onshapeUrl}
                    title="Onshape Robot 3D Model"
                    className="w-full h-full border-none relative z-0"
                    allowFullScreen
                  />
                </>
              )}
            </>
          )}

          {!isMobile && (
            <div className="absolute top-6 right-6 z-20 font-mono text-[8px] text-[#293657]/40 text-right space-y-1 pointer-events-none hidden md:block">
              <div>RESOLUTION: OPTIMAL</div>
              <div>RENDER_MODE: REALTIME</div>
              <div>GEOMETRY: FRACTAL_COMPLEX</div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 md:mt-12 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 px-2 md:px-4 font-mono text-[8px] md:text-[10px] text-[#293657]/40 tracking-widest uppercase font-bold text-center">
        <span>{isMobile ? "CORE_SYSTEMS_RECOGNIZED" : "INTERACTIVE_ORBIT_ENABLED"}</span>
        <span className="hidden md:inline">DRAG_TO_ROTATE // SCROLL_TO_ZOOM</span>
        <span>LINK_SECURE_27188</span>
      </div>
    </div>
  );
};
