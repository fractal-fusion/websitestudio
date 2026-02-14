
import React, { useState } from 'react';

export const Logo: React.FC<{ className?: string; neon?: boolean }> = ({ className = "w-full h-full", neon = false }) => {
  const [errorState, setErrorState] = useState<'none' | 'fallback' | 'terminal'>('none');
  const fileId = "1TekEmu5HpgtaQE6FwDTpLKxtbhiMnvYs";
  
  // Construct primary and secondary URLs
  const primaryUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
  const fallbackUrl = `https://drive.google.com/uc?id=${fileId}`;

  const handleError = () => {
    if (errorState === 'none') {
      setErrorState('fallback');
    } else if (errorState === 'fallback') {
      setErrorState('terminal');
    }
  };

  if (errorState === 'terminal') {
    return (
      <div className={`${className} bg-[#293657] rounded-full flex flex-col items-center justify-center border-2 border-[#fff9c7]/20 p-2 shadow-inner`}>
        <span className="text-[#fff9c7] font-heading text-[8px] leading-tight text-center">FRACTAL<br/>FUSION</span>
        <div className="h-px w-4 bg-[#fff9c7]/30 my-1"></div>
        <span className="text-[#fff9c7]/50 font-mono text-[7px]">27188</span>
      </div>
    );
  }

  return (
    <div className={`${className} flex items-center justify-center`}>
      <img 
        src={errorState === 'fallback' ? fallbackUrl : primaryUrl} 
        alt="Team 27188 Fractal Fusion Logo" 
        className={`w-full h-full object-contain ${neon ? 'drop-shadow-[0_0_20px_rgba(255,249,199,0.8)] filter brightness-110' : ''}`}
        loading="eager"
        onError={handleError}
      />
    </div>
  );
};
