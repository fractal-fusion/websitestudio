
import React from 'react';
import { Logo } from './Logo';

export const SWOT: React.FC = () => {
  return (
    <div className="w-full h-full relative p-6 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-px bg-[#293657]/20 border border-[#293657]/20 overflow-hidden shadow-2xl">
        <div className="bg-white p-6 hover:bg-[#fff9c7]/10 transition-colors">
          <span className="font-heading text-[10px] text-[#4ade80] font-bold tracking-[0.2em]">STRENGTHS</span>
          <ul className="mt-3 text-[10px] font-mono text-[#293657]/60 space-y-1">
            <li>+ COOPERATION</li>
            <li>+ DEDICATION</li>
            <li>+ LAB ACCESS</li>
          </ul>
        </div>
        <div className="bg-white p-6 hover:bg-[#fff9c7]/10 transition-colors">
          <span className="font-heading text-[10px] text-red-400 font-bold tracking-[0.2em]">WEAKNESSES</span>
          <ul className="mt-3 text-[10px] font-mono text-[#293657]/60 space-y-1">
            <li>- UNEVEN SKILLS</li>
            <li>- COMM GAPS</li>
          </ul>
        </div>
        <div className="bg-white p-6 hover:bg-[#fff9c7]/10 transition-colors">
          <span className="font-heading text-[10px] text-blue-400 font-bold tracking-[0.2em]">OPPORTUNITIES</span>
          <ul className="mt-3 text-[10px] font-mono text-[#293657]/60 space-y-1">
            <li>^ TEAM NETWORKS</li>
            <li>^ STEM OUTREACH</li>
          </ul>
        </div>
        <div className="bg-white p-6 hover:bg-[#fff9c7]/10 transition-colors">
          <span className="font-heading text-[10px] text-orange-400 font-bold tracking-[0.2em]">THREATS</span>
          <ul className="mt-3 text-[10px] font-mono text-[#293657]/60 space-y-1">
            <li>! MONEY LIMITS</li>
            <li>! TIME CONSTRAINTS</li>
          </ul>
        </div>
      </div>
      {/* Decorative center logo */}
      <div className="absolute w-24 h-24 bg-black rounded-full border-4 border-[#deecfb] overflow-hidden flex items-center justify-center shadow-xl p-0.5">
        <Logo className="w-full h-full" />
      </div>
    </div>
  );
};
