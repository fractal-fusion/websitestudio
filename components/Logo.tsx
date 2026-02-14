
import React from 'react';

export const Logo: React.FC<{ className?: string; neon?: boolean }> = ({ className = "w-full h-full", neon = false }) => {
  /**
   * Google Drive direct link construction:
   * The 'thumbnail' endpoint is often more robust for public images in web apps 
   * as it avoids 'virus scan' warning pages and cookie-based redirects.
   */
  const fileId = "1TekEmu5HpgtaQE6FwDTpLKxtbhiMnvYs";
  const imageUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
  
  return (
    <div className={`${className} flex items-center justify-center`}>
      <img 
        src={imageUrl} 
        alt="Team 27188 Fractal Fusion Logo" 
        className={`w-full h-full object-contain ${neon ? 'drop-shadow-[0_0_20px_rgba(255,249,199,0.8)] filter brightness-110' : ''}`}
        loading="eager"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          
          // If the thumbnail fails, attempt one fallback to the 'uc' endpoint
          if (!target.src.includes('uc?id=')) {
            console.warn("Primary logo source failed, attempting fallback 'uc' endpoint...");
            target.src = `https://drive.google.com/uc?id=${fileId}`;
            return;
          }

          console.error("Logo failed to load from all sources. Ensure Google Drive permissions are set to 'Anyone with the link'.");
          
          // Enhanced UI fallback if image is definitely inaccessible
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `
              <div class="w-full h-full bg-[#293657] rounded-full flex flex-col items-center justify-center border-2 border-[#fff9c7]/20 p-2 shadow-inner">
                <span class="text-[#fff9c7] font-heading text-[8px] leading-tight text-center">FRACTAL<br/>FUSION</span>
                <div class="h-px w-4 bg-[#fff9c7]/30 my-1"></div>
                <span class="text-[#fff9c7]/50 font-mono text-[7px]">27188</span>
              </div>
            `;
          }
        }}
      />
    </div>
  );
};
