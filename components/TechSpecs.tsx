
import React from 'react';

const techItems = [
  {
    category: "PROGRAMMING_CORE",
    title: "PEDRO_PATHING",
    desc: "Advanced path follower emphasizing speed over time consistency for hyper-efficient navigation.",
    features: ["Autonomous Logic", "Precision Strafe", "Path Visualizer"]
  },
  {
    category: "HARDWARE_VISION",
    title: "LIMELIGHT_AI",
    desc: "Integrated April-Tag tracking powering proportional heading control and auto-alignment.",
    features: ["Target Bearing", "Auto-Align FSM", "Field Centric Hub"]
  },
  {
    category: "CONTROL_SYSTEMS",
    title: "CUSTOM_PID",
    desc: "Carefully tuned PID controllers for high-velocity shooters and defense-mode grounding.",
    features: ["Quartic Regression", "Indicator Lights", "Velocity Stabilization"]
  }
];

export const TechSpecs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-baseline mb-12 md:mb-24 gap-6 md:gap-12 text-center lg:text-left">
        <div className="relative w-full">
          <h2 className="text-2xl sm:text-3xl md:text-7xl font-heading font-bold text-[#293657] lg:text-white tracking-tighter uppercase break-words">TECH_STACK</h2>
          <div className="h-1.5 w-20 md:w-48 bg-[#fff9c7] mt-3 md:mt-6 neon-border-yellow mx-auto lg:mx-0" />
        </div>
        <div className="font-mono text-[8px] md:text-[11px] text-[#293657]/60 lg:text-[#fff9c7]/60 tracking-[0.1em] md:tracking-widest text-center lg:text-right uppercase">
           <span>LOG_ENCRYPTION: AES_256</span><br/>
           <span>LATENCY_REDUCTION: ENABLED</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/5 overflow-hidden shadow-2xl">
        {techItems.map((item, idx) => (
          <div key={idx} className="bg-[#293657] p-8 md:p-12 hover:bg-white/5 transition-all group relative">
            <div className="mb-8 md:mb-12">
              <span className="font-mono text-[9px] md:text-[10px] text-[#fff9c7] tracking-[0.3em] font-bold uppercase">{item.category}</span>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-white mt-2 uppercase">{item.title}</h3>
            </div>
            <p className="text-xs md:text-sm text-white/60 mb-8 md:mb-12 font-normal leading-relaxed">{item.desc}</p>
            <ul className="space-y-3 md:space-y-4">
              {item.features.map(f => (
                <li key={f} className="text-[10px] md:text-[11px] font-mono text-[#fff9c7] flex items-center gap-3 group-hover:translate-x-1 transition-transform uppercase">
                   <span className="text-[#fff9c7]/30">&gt;&gt;</span>
                   {f}
                </li>
              ))}
            </ul>
            <div className="mt-12 md:mt-16 h-1 w-full bg-white/5 relative overflow-hidden">
               <div className="absolute top-0 left-0 h-full bg-[#fff9c7] w-0 group-hover:w-full transition-all duration-1000" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
