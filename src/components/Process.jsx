import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareText, FileStack, ShieldEllipsis, BadgeCheck, ArrowRight } from 'lucide-react';

const Process = ({ onApply }) => {
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 relative overflow-hidden bg-gradient-to-br from-[#1E2D4A] via-[#2A3B5F] to-[#1E2D4A] rounded-[32px] p-1 shadow-2xl shadow-blue-900/30 group"
        >
          {/* Glassmorphic Patterns & Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] -translate-y-1/2 translate-x-1/4 rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 blur-[80px] translate-y-1/2 -translate-x-1/4 rounded-full pointer-events-none" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between px-8 py-10 md:py-8 gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
               <div className="relative">
                 <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                   <ArrowRight className="w-7 h-7 text-blue-300 animate-pulse" />
                 </div>
                 {/* Floating Indicator */}
                 <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1E2D4A] shadow-lg shadow-green-500/40" />
               </div>

               <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-green-400">Available 24/7 Experts</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">
                    Start Your <span className="text-blue-300">Free Eligibility</span> Check
                  </h3>
                  <p className="text-sm font-medium text-slate-400/90 max-w-sm">
                    Get pre-approval from top-tier lenders in under 2 minutes. No credit impact for checking!
                  </p>
               </div>
            </div>
            
            <button 
              onClick={onApply}
              className="relative w-full md:w-auto overflow-hidden group/btn bg-gradient-to-r from-[#22C55E] to-[#16A34A] hover:from-[#16A34A] hover:to-[#15803D] text-white px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_15px_30px_rgba(22,197,94,0.3)] hover:shadow-[0_20px_40px_rgba(22,197,94,0.4)] active:scale-95 flex items-center justify-center gap-3"
            >
              Apply Now 
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
              {/* Shine Effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shine_1s_ease-in-out_infinite]" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
