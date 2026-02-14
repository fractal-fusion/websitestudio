
import React from 'react';

const incomeItems = [
  { name: "Gene Haas", amount: "$2000" },
  { name: "Donations", amount: "$2100" },
  { name: "Previous Money", amount: "$750" },
  { name: "Green Sea IQ", amount: "$300" }
];

const expenseItems = [
  { name: "goBuilda", amount: "$1410.09" },
  { name: "Registration Fee", amount: "$325" },
  { name: "REV", amount: "$330.25" },
  { name: "Swyft", amount: "$249.95" },
  { name: "Axon Robotics", amount: "$179.98" },
  { name: "Amazon", amount: "$36.25" },
  { name: "AndyMark", amount: "$15" }
];

export const Finance: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div className="space-y-12">
        <div className="relative">
          <h2 className="text-5xl font-heading font-bold text-[#293657]">FINANCES</h2>
          <div className="h-1 w-32 bg-[#fff9c7] mt-4" />
        </div>
        <p className="text-xl text-[#293657]/80 leading-relaxed font-light">
          Fiscal transparency is core to our operational integrity. Managing a $5,150 injection through diverse sponsorship nodes ensures high-performance subsystem acquisitions.
        </p>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="p-8 border-l-4 border-[#fff9c7] bg-[#293657] text-[#fff9c7] shadow-xl">
            <span className="font-mono text-[9px] uppercase tracking-widest opacity-50 font-bold">Total_Income</span>
            <div className="text-4xl font-heading font-bold mt-2">$5150</div>
          </div>
          <div className="p-8 border-l-4 border-[#293657] bg-white shadow-sm">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#293657]/50 font-bold">Total_Expenses</span>
            <div className="text-4xl font-heading font-bold mt-2 text-[#293657]">$2583</div>
          </div>
        </div>
      </div>

      <div className="glass-panel p-10 border-[#293657]/10 space-y-10 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#293657] to-transparent opacity-10" />
         <h3 className="font-heading text-xs text-[#293657] tracking-[0.4em] mb-6 text-center">ALLOCATION_TABLE</h3>
         
         <div className="grid grid-cols-2 gap-10">
            <div>
               <h4 className="font-mono text-[9px] font-black text-green-600 mb-4 border-b border-green-600/10 pb-2 uppercase tracking-widest">Inflow</h4>
               <div className="space-y-3">
                  {incomeItems.map(item => (
                    <div key={item.name} className="flex justify-between text-[10px] font-mono text-[#293657]">
                       <span className="opacity-60">{item.name}</span>
                       <span className="font-bold">{item.amount}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div>
               <h4 className="font-mono text-[9px] font-black text-red-600 mb-4 border-b border-red-600/10 pb-2 uppercase tracking-widest">Outflow</h4>
               <div className="space-y-3">
                  {expenseItems.map(item => (
                    <div key={item.name} className="flex justify-between text-[10px] font-mono text-[#293657]">
                       <span className="opacity-60">{item.name}</span>
                       <span className="font-bold">{item.amount}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="pt-8 border-t border-[#293657]/20">
            <div className="flex justify-between items-center px-4 py-4 bg-[#293657] text-[#fff9c7] shadow-lg">
               <span className="font-heading text-sm tracking-widest">NET_BALANCE</span>
               <span className="text-3xl font-heading font-bold">$2567</span>
            </div>
         </div>
      </div>
    </div>
  );
};
