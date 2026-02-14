
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
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-12">
        <div className="relative">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter">TECH_STACK</h2>
          <div className="h-1.5 w-48 bg-[#fff9c7] mt-6 neon-border-yellow" />
        </div>
        <div className="font-mono text-[11px] text-[#fff9c7]/60 tracking-widest text-right">
           <span>LOG_ENCRYPTION: AES_256</span><br/>
           <span>LATENCY_REDUCTION: ENABLED</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/5 overflow-hidden">
        {techItems.map((item, idx) => (
          <div key={idx} className="bg-[#293657] p-12 hover:bg-white/5 transition-all group relative">
            <div className="mb-12">
              <span className="font-mono text-[10px] text-[#fff9c7] tracking-[0.3em] font-bold">{item.category}</span>
              <h3 className="text-2xl font-heading font-bold text-white mt-2">{item.title}</h3>
            </div>
            <p className="text-sm text-white/60 mb-12 font-normal leading-relaxed">{item.desc}</p>
            <ul className="space-y-4">
              {item.features.map(f => (
                <li key={f} className="text-[11px] font-mono text-[#fff9c7] flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                   <span className="text-[#fff9c7]/30">&gt;&gt;</span>
                   {f}
                </li>
              ))}
            </ul>
            <div className="mt-16 h-1 w-full bg-white/5 relative overflow-hidden">
               <div className="absolute top-0 left-0 h-full bg-[#fff9c7] w-0 group-hover:w-full transition-all duration-1000" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
