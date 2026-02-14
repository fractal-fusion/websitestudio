
import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo.tsx';

interface NavigationProps {
  scrollY: number;
  currentView: 'home' | 'evolution' | 'technical' | 'outreach' | 'contact';
  setView: (view: 'home' | 'evolution' | 'technical' | 'outreach' | 'contact') => void;
}

export const Navigation: React.FC<NavigationProps> = ({ scrollY, currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isScrolled = scrollY > 50;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Log_Home' },
    { id: 'evolution', label: 'Evolution' },
    { id: 'technical', label: 'Technical' },
    { id: 'outreach', label: 'Outreach' },
    { id: 'contact', label: 'Contact' }
  ] as const;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled || currentView !== 'home' ? 'py-2 md:py-3 bg-[#293657]/95 backdrop-blur-xl border-b-2 border-[#fff9c7]/30 shadow-2xl' : 'py-4 md:py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-3 md:px-12 flex justify-between items-center">
        {/* Logo and Branding */}
        <div className="flex items-center gap-2 md:gap-5 group cursor-pointer" onClick={() => { setView('home'); setIsOpen(false); }}>
          <div className="w-8 h-8 md:w-14 md:h-14 relative transition-all group-hover:rotate-12 group-hover:scale-110 shrink-0">
            <Logo neon />
          </div>
          <div className="flex flex-col">
            <span className={`font-heading font-bold text-[10px] sm:text-xs md:text-xl tracking-tighter leading-none transition-colors ${isScrolled || currentView !== 'home' ? 'text-[#fff9c7] neon-yellow' : 'text-[#293657]'}`}>
              FRACTAL FUSION
            </span>
            <span className={`font-mono text-[6px] md:text-[9px] tracking-[0.1em] md:tracking-[0.3em] font-bold mt-0.5 transition-colors ${isScrolled || currentView !== 'home' ? 'text-[#fff9c7]/60' : 'text-[#293657]/60'}`}>TEAM_27188</span>
          </div>
        </div>
        
        {/* Dropdown Menu Container */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-2 md:gap-4 px-2.5 md:px-6 py-1.5 md:py-2 border-2 transition-all duration-300 font-mono text-[8px] md:text-[12px] font-black tracking-[0.1em] md:tracking-[0.4em] uppercase group ${
              isScrolled || currentView !== 'home' 
              ? 'border-[#fff9c7]/30 text-[#fff9c7] hover:bg-[#fff9c7] hover:text-[#293657]' 
              : 'border-[#293657]/20 text-[#293657] hover:bg-[#293657] hover:text-[#fff9c7]'
            } ${isOpen ? 'bg-[#fff9c7] text-[#293657] shadow-[0_0_20px_rgba(255,249,199,0.4)]' : ''}`}
          >
            <div className="flex flex-col gap-0.5 md:gap-1 w-2.5 md:w-4">
              <span className={`h-0.5 w-full bg-current transition-all ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
            <span className="hidden sm:inline">ACCESS_CORE</span>
            <span className="sm:hidden">MENU</span>
          </button>

          {/* Stylized Dropdown */}
          <div className={`absolute right-0 mt-3 w-48 md:w-64 glass-panel border-2 border-[#fff9c7]/40 shadow-2xl transition-all duration-500 origin-top-right overflow-hidden ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
          }`}>
            <div className="bg-[#293657] py-2 md:py-3">
               <div className="px-4 md:px-6 py-1.5 md:py-2 border-b border-[#fff9c7]/10 mb-1 md:mb-2">
                 <span className="font-mono text-[7px] md:text-[8px] text-[#fff9c7]/40 tracking-widest uppercase">Select_Node</span>
               </div>
               
               <div className="flex flex-col">
                 {menuItems.map((item) => (
                   <button
                     key={item.id}
                     onClick={() => {
                       setView(item.id);
                       setIsOpen(false);
                     }}
                     className={`w-full text-left px-4 md:px-8 py-2 md:py-4 font-mono text-[9px] md:text-[11px] tracking-[0.15em] md:tracking-[0.3em] uppercase transition-all flex items-center justify-between group/item ${
                       currentView === item.id 
                       ? 'text-[#fff9c7] bg-[#fff9c7]/10 neon-yellow' 
                       : 'text-white/50 hover:text-[#fff9c7] hover:bg-white/5'
                     }`}
                   >
                     <span>{item.label}</span>
                     <span className={`text-[7px] md:text-[8px] opacity-0 group-hover/item:opacity-100 transition-opacity ${currentView === item.id ? 'opacity-100' : ''}`}>[ {item.id.toUpperCase().slice(0,3)} ]</span>
                   </button>
                 ))}
               </div>

               <div className="mt-2 md:mt-4 px-4 md:px-6 pt-2 md:pt-4 border-t border-[#fff9c7]/10 flex justify-between items-center opacity-20">
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-[#fff9c7] rounded-full animate-pulse" />
                  <span className="font-mono text-[6px] md:text-[7px] text-[#fff9c7] tracking-widest">ENCRYPTED_LINK_ACTIVE</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
