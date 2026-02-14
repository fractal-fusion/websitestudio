
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const email = "fractal.fusion27188@gmail.com";
  const instagramUrl = "https://www.instagram.com/ftc_27188?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 relative">
      <div className="glass-panel p-12 md:p-20 relative overflow-hidden border-[#fff9c7]/20 bg-[#293657]/10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#fff9c7] to-transparent opacity-40 animate-yellow-pulse" />
        
        <div className="relative z-10 text-center space-y-16">
          <div className="inline-block px-4 py-1 bg-[#fff9c7] text-[#293657] font-mono text-[9px] tracking-[0.5em] uppercase font-bold shadow-[0_0_15px_rgba(255,249,199,0.4)]">
            DIRECT_CHANNEL_SECURED
          </div>

          {/* Email Section */}
          <div className="space-y-4">
            <h3 className="font-heading text-xs md:text-sm text-[#293657]/60 tracking-[0.3em] uppercase">Primary_Inquiry_Node</h3>
            <div className="relative group">
              <div 
                onClick={handleCopy}
                className="text-2xl md:text-5xl font-heading font-bold text-[#293657] break-all cursor-pointer hover-glitch transition-all py-4 px-6 border-b-2 border-transparent hover:border-[#fff9c7] inline-block"
              >
                {email}
              </div>
              <div className="mt-6 flex justify-center">
                <button 
                  onClick={handleCopy}
                  className={`px-10 py-4 font-heading text-[10px] tracking-[0.4em] font-bold transition-all ${copied ? 'bg-[#4ade80] text-white shadow-[0_0_20px_#4ade80]' : 'bg-[#293657] text-[#fff9c7] hover:scale-105 active:scale-95'}`}
                >
                  {copied ? 'EMAIL_COPIED' : 'COPY_TO_CLIPBOARD'}
                </button>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#293657]/10 to-transparent" />

          {/* Social Section */}
          <div className="space-y-8">
            <h3 className="font-heading text-xs md:text-sm text-[#293657]/60 tracking-[0.3em] uppercase">Social_Uplink_Node</h3>
            <div className="flex justify-center">
              <a 
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center"
              >
                <div className="text-xl md:text-3xl font-heading font-bold text-[#293657] hover:neon-yellow transition-all duration-300">
                  @FTC_27188
                </div>
                <div className="mt-4 flex items-center gap-3 px-6 py-2 border-2 border-[#293657]/20 group-hover:border-[#fff9c7] group-hover:bg-[#293657] group-hover:text-[#fff9c7] transition-all font-mono text-[10px] tracking-widest font-black uppercase">
                  <span>FOLLOW_INSTAGRAM</span>
                  <span className="w-1.5 h-1.5 bg-current rounded-full animate-pulse" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#fff9c7]/30" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#fff9c7]/30" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#fff9c7]/30" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#fff9c7]/30" />
      </div>
      
      <div className="mt-20 flex justify-center opacity-30">
        <div className="w-1 h-20 bg-gradient-to-b from-[#293657] to-transparent" />
      </div>
    </div>
  );
};
