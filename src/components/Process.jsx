import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareText, FileStack, ShieldEllipsis, BadgeCheck, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    { id: "01", title: "Consultation", desc: "Profile evaluation & university selection.", icon: <MessageSquareText className="w-6 h-6" />, color: "text-blue-600 border-blue-100 bg-blue-50" },
    { id: "02", title: "Documentation", desc: "Digital collection of financial proofs.", icon: <FileStack className="w-6 h-6" />, color: "text-indigo-600 border-indigo-100 bg-indigo-50" },
    { id: "03", title: "Loan Sanction", icon: <ShieldEllipsis className="w-6 h-6" />, desc: "Fast approval from partner banks.", color: "text-sky-600 border-sky-100 bg-sky-50" },
    { id: "04", title: "Disbursement", desc: "Immediate payment to university.", icon: <BadgeCheck className="w-6 h-6" />, color: "text-emerald-600 border-emerald-100 bg-emerald-50" }
  ];

  return (
    <section id="process" className="py-16 bg-white border-y border-slate-50 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-black text-[#1E2D4A] mb-3">
              How it <span className="text-blue-600">Works?</span>
            </h2>
            <p className="text-slate-500 font-medium">A technology-first approach to international education funding.</p>
          </div>
          <div className="hidden md:flex gap-2">
            {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-blue-100" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Timeline Connector Desktop */}
          <div className="hidden lg:block absolute top-8 left-12 right-12 h-px bg-slate-100 -z-10" />

          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-6 group"
            >
              <div className={`w-16 h-16 shrink-0 rounded-2xl border ${step.color} flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 relative`}>
                {step.icon}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1E2D4A] text-white text-[10px] font-black rounded-lg flex items-center justify-center">
                  {step.id}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-black text-[#1E2D4A] mb-1 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h4>
                <p className="text-sm font-medium text-slate-400 group-hover:text-slate-500 transition-colors">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#1E2D4A] rounded-2xl p-4 md:p-1 flex flex-col md:flex-row items-center justify-between gap-4 overflow-hidden shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 px-8 py-4">
             <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
               <ArrowRight className="w-6 h-6 text-blue-400" />
             </div>
             <div>
                <h3 className="text-lg font-bold text-white text-center md:text-left">Check Loan Eligibility in 2 mins</h3>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-widest text-center md:text-left">Secure Collateral-Free Education Loan</p>
             </div>
          </div>
          
          <button className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-xl font-black text-lg transition-all shadow-lg active:scale-95 m-1">
             Apply Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
