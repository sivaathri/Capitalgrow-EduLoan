import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Landmark, Zap, ShieldCheck, Wallet, Globe } from 'lucide-react';

const LoanStats = ({ onCheckEligibility }) => {
  return (
    <section className="py-24 bg-white overflow-hidden relative border-t border-slate-100">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid-stats" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid-stats)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-[#1E2D4A] leading-[1.1] mb-6 tracking-tight"
            >
              Abroad Education Loans <br /> 
              Starting at <span className="text-[#F8B036]">8.33%*</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 font-medium leading-relaxed max-w-lg mb-10"
            >
              Get instant access to education loans from 20+ leading banks with customizable repayment options and 100% assistance.
            </motion.p>

            <div className="flex flex-wrap items-center gap-6 mb-12 text-[12px] font-bold text-[#5DA7DB] tracking-widest uppercase">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> No Collateral
              </span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Quick Approval
              </span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Maximum Funding
              </span>
            </div>

            <button 
              onClick={onCheckEligibility}
              className="bg-gradient-to-r from-[#F8B036] to-[#FFAF00] text-white px-10 py-4 rounded-2xl font-black text-base flex items-center gap-4 transition-all shadow-xl hover:shadow-orange-200 group active:scale-95"
            >
              Check Your Eligibility Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <div className="flex items-center gap-2 mt-4 text-[#94A3B8] text-[11px] font-bold uppercase tracking-wider px-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#5DA7DB]" />
              100% Secure • No Impact on Credit Score
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { 
                  icon: <Landmark className="w-5 h-5 text-white" />, 
                  title: "Loan Amount",
                  desc: "Up to ₹15 Crore",
                  sub: "Collateral-Free",
                  color: "bg-[#5DA7DB]"
                },
                { 
                  icon: <Zap className="w-5 h-5 text-white" />, 
                  title: "Fast Approval",
                  desc: "Sanctioned in",
                  sub: "48 Hours*",
                  color: "bg-[#F8B036]"
                },
                { 
                  icon: <Globe className="w-5 h-5 text-white" />, 
                  title: "Wide Network",
                  desc: "Apply to 20+",
                  sub: "Banks in 2 Minutes",
                  color: "bg-[#5DA7DB]"
                },
                { 
                  icon: <Wallet className="w-5 h-5 text-white" />, 
                  title: "Max Savings",
                  desc: "Save up to",
                  sub: "₹15,00,000",
                  color: "bg-[#F8B036]"
                }
              ].map((card, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="bg-white border border-slate-100 p-6 rounded-[24px] flex items-start gap-4 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className={`p-3 ${card.color} rounded-xl shadow-sm group-hover:scale-105 transition-transform`}>
                    {card.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">{card.title}</span>
                    <span className="text-[#1E2D4A] font-bold text-lg leading-tight">{card.desc}</span>
                    <span className="text-slate-500 font-medium text-[13px] mt-1">{card.sub}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LoanStats;
