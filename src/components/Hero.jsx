import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Landmark, Zap, ShieldCheck, Wallet, Globe } from 'lucide-react';
import heroStudent from '../assets/hero2.png'; 

const Hero = ({ onCheckEligibility }) => {
  return (
    <section className="relative min-h-screen bg-white flex flex-col justify-center pt-24 md:pt-16 overflow-hidden">
      
      {/* Background Decorative Pattern (Subtle World Map feel) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
         
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Background Image Container */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 pointer-events-none flex items-end lg:items-center justify-center lg:justify-end pr-0 lg:pr-12 opacity-20 lg:opacity-100 overflow-hidden">
          <img 
            src={heroStudent} 
            alt="Study Abroad" 
            className="w-auto h-[60%] lg:h-[90%] object-contain scale-110 lg:scale-100 origin-bottom lg:origin-right transition-all duration-700 translate-y-12 lg:translate-y-0"
          />
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col items-start relative z-10 py-12 lg:py-0">
        
        {/* Left Side: Content */}
        <div className="w-full lg:max-w-2xl text-left">
          
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl font-black text-[#1E2D4A] leading-[1.1] mb-6 tracking-tight"
          >
            Abroad Education Loans <br /> 
            Starting at <span className="text-[#F8B036]">8.33%*</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 mb-10"
          >
            <p className="text-xl text-[#64748B] font-medium leading-relaxed max-w-lg">
              Get instant access to education loans from 20+ leading banks.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-bold text-[#5DA7DB] tracking-wide uppercase">
              <span>No Collateral</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span>Quick Approval</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span>Maximum Funding</span>
            </div>
          </motion.div>

          {/* Feature Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 max-w-xl"
          >
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
              <div 
                key={i} 
                className="bg-white border border-slate-100 p-6 rounded-2xl flex items-start gap-4 shadow-[0_15px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.1)] transition-all group"
              >
                <div className={`p-3 ${card.color} rounded-xl shadow-sm group-hover:scale-105 transition-transform`}>
                  {card.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase text-[#94A3B8] tracking-widest mb-1">{card.title}</span>
                  <span className="text-[#1E2D4A] font-bold text-lg leading-none tracking-tight">{card.desc}</span>
                  <span className="text-slate-500 font-medium text-sm mt-1">{card.sub}</span>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <button 
              onClick={onCheckEligibility}
              className="bg-gradient-to-r from-[#F8B036] to-[#FFAF00] hover:from-[#FFAF00] hover:to-[#F8B036] text-white px-12 py-5 rounded-2xl font-black text-lg flex items-center gap-4 transition-all shadow-[0_20px_40px_rgba(248,176,54,0.3)] group active:scale-95"
            >
              Check Your Eligibility Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <div className="flex flex-wrap items-center gap-2.5 text-[#94A3B8] text-xs font-bold tracking-wide uppercase px-2 mt-4">
              <ShieldCheck className="w-4 h-4 text-[#5DA7DB] shrink-0" />
              <span>100% Secure</span>
              <span className="w-1 h-1 bg-slate-200 rounded-full mx-1"></span>
              <span>No Impact on Credit Score</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
