
import React from 'react';

export const CadViewer: React.FC = () => {
  /**
   * FIX: To embed Onshape, the document must have 'Public Link Sharing' turned ON in Onshape.
   * Standard document URLs are blocked for embedding; we must append '/embed' to the end.
   */
  const onshapeUrl = "https://cad.onshape.com/documents/2cea3088e7748a63a0e2803e/w/f7afa4c258cf68b11e7e6f04/e/30e8bac273c8dc57ae8d5697/embed";

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
      <div className="flex flex-col items-center mb-12">
        <div className="inline-block px-4 py-1 bg-[#fff9c7] text-[#293657] font-mono text-[9px] tracking-[0.5em] uppercase font-bold shadow-[0_0_15px_rgba(255,249,199,0.4)] mb-4">
          VIRTUAL_CONSTRUCT_LOADED
        </div>
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#293657] text-center">3D_SCHEMATIC_VIEWPORT</h2>
        <div className="h-1 w-32 bg-[#293657]/10 mt-6" />
      </div>

      <div className="relative group">
        {/* Futuristic Frame Accents */}
        <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-[#fff9c7] z-20 neon-border-yellow" />
        <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-[#fff9c7] z-20 neon-border-yellow" />
        
        {/* The Viewport Container */}
        <div className="glass-panel w-full aspect-video md:aspect-[21/9] relative overflow-hidden border-2 border-[#293657]/10 shadow-2xl bg-[#293657]/20">
          <div className="absolute inset-0 bg-[#293657]/5 pointer-events-none z-10" />
          
          <iframe 
            src={onshapeUrl}
            title="Onshape Robot 3D Model"
            className="w-full h-full border-none relative z-0"
            allowFullScreen
          />

          {/* HUD Overlays for the Viewport */}
          <div className="absolute top-6 right-6 z-20 font-mono text-[8px] text-[#293657]/40 text-right space-y-1 pointer-events-none hidden md:block">
            <div>RESOLUTION: OPTIMAL</div>
            <div>RENDER_MODE: REALTIME</div>
            <div>GEOMETRY: FRACTAL_COMPLEX</div>
          </div>

          <div className="absolute bottom-6 left-6 z-20 flex gap-4 pointer-events-none">
            <div className="w-12 h-1 bg-[#fff9c7] animate-pulse" />
            <div className="w-12 h-1 bg-[#293657]/20" />
            <div className="w-12 h-1 bg-[#293657]/20" />
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-between items-center px-4 font-mono text-[10px] text-[#293657]/40 tracking-widest uppercase font-bold">
        <span>INTERACTIVE_ORBIT_ENABLED</span>
        <span>DRAG_TO_ROTATE // SCROLL_TO_ZOOM</span>
        <span>LINK_SECURE_27188</span>
      </div>
    </div>
  );
};
