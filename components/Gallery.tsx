
import React, { useState, useEffect } from 'react';

const images = [
  { id: "img1", title: "STRATEGIC_ASSEMBLY", detail: "GYM_FACILITY // ROUND_TABLE_SYNC" },
  { id: "img2", title: "UNIT_FORMATION", detail: "BETA_SECTOR // STAIRS_UPLINK" },
  { id: "img3", title: "BANNER_VALIDATION", detail: "TRINITY_ARENA // CHAMPION_CHRONICLE" },
  { id: "img4", title: "FIELD_DEPLOYMENT_LOG", detail: "BLEACHER_SYNC // UNIT_27188" },
  { id: "img5", title: "SUCCESS_VALIDATION", detail: "POST_MATCH_SELFIE // DATA_SECURED" },
  { id: "img7", title: "ARENA_RECON", detail: "COMPETITION_FLOOR // ROBOT_INIT" },
  { id: "img8", title: "FUSION_SQUAD_ALPHA", detail: "EVENT_HORIZON // UNIFORM_SYNC" }
];

// Updated to remove the 6th image path
const imagePaths = [
  "https://drive.google.com/thumbnail?id=1lDdsjDI_GqCzKxleP3Gkj-0cSBvEAvBh&sz=w1200",
  "https://drive.google.com/thumbnail?id=1G7gq0VkYlmpDFfpVy1XyfTzSRn60tvaX&sz=w1200",
  "https://drive.google.com/thumbnail?id=1Xsvbhwek5q6PRE0qNPIZmg3_YtIqeL44&sz=w1200",
  "https://drive.google.com/thumbnail?id=1gzTkfzqV1DC4ZlQweb04w0MnRBOjueF0&sz=w1200",
  "https://drive.google.com/thumbnail?id=1OLlUgE8VDPqfc0mg2SBUzfSQkym6MvCe&sz=w1200",
  "https://drive.google.com/thumbnail?id=19C1084CdabvzpL0Ev2ay3_S1KtQxOjp-&sz=w1200",
  "https://drive.google.com/thumbnail?id=1H7tBQVhB_rAXrTfKw5fB54rcxFNeQbYx&sz=w1200"
];

// Updated fallbacks to match
const fallbacks = [
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
];

export const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 400);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 400);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full py-8 md:py-12">
      <div className="relative group">
        {/* HUD Frame Decorations */}
        <div className="absolute -top-3 -left-3 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-[#293657]/40 z-20 pointer-events-none" />
        <div className="absolute -bottom-3 -right-3 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-[#293657]/40 z-20 pointer-events-none" />
        
        <div className="glass-panel w-full aspect-[4/3] md:aspect-[21/9] relative overflow-hidden border border-[#293657]/10 shadow-2xl bg-[#293657] group">
          <div className={`absolute inset-0 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <img 
              src={imagePaths[currentIndex]} 
              alt={images[currentIndex].title}
              className="w-full h-full object-cover filter brightness-90 saturate-[0.85] contrast-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src = fallbacks[currentIndex];
              }}
            />
            
            {/* Overlay Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(41,54,87,0.4)_100%)] pointer-events-none" />
            
            {/* Scanning Readout Overlay */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 font-mono text-[7px] md:text-[10px] text-[#fff9c7] space-y-1.5 md:space-y-2 max-w-[200px] pointer-events-none">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#fff9c7] animate-pulse" />
                <span className="font-black uppercase tracking-widest drop-shadow-md">{images[currentIndex].title}</span>
              </div>
              <div className="opacity-70 text-[6px] md:text-[8px] uppercase tracking-wider drop-shadow-sm">{images[currentIndex].detail}</div>
              <div className="h-px w-16 md:w-24 bg-[#fff9c7]/30" />
            </div>

            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 text-right font-mono text-[7px] md:text-[8px] text-[#fff9c7]/40 pointer-events-none hidden md:block">
              <div>LATENCY: 12ms</div>
              <div>SIGNAL: ENCRYPTED</div>
              <div>FRAME: #{currentIndex * 27 + 118}</div>
            </div>
          </div>

          {/* Controls Overlay */}
          <div className="absolute inset-0 flex items-center justify-between px-2 md:px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <button 
                onClick={prevSlide}
                className="w-10 h-10 md:w-12 md:h-12 bg-[#293657]/80 backdrop-blur-md border border-[#fff9c7]/30 flex items-center justify-center text-[#fff9c7] hover:bg-[#fff9c7] hover:text-[#293657] transition-all"
              >
                <span className="font-mono text-xl font-bold">&lt;</span>
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 md:w-12 md:h-12 bg-[#293657]/80 backdrop-blur-md border border-[#fff9c7]/30 flex items-center justify-center text-[#fff9c7] hover:bg-[#fff9c7] hover:text-[#293657] transition-all"
              >
                <span className="font-mono text-xl font-bold">&gt;</span>
              </button>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-1.5 md:gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 md:w-3 h-2 md:h-3 border border-[#293657]/30 transition-all ${currentIndex === i ? 'bg-[#293657] scale-125 shadow-[0_0_5px_rgba(41,54,87,0.3)]' : 'bg-transparent hover:bg-[#293657]/10'}`}
          />
        ))}
      </div>
    </div>
  );
};
