import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, ArrowRight } from 'lucide-react';
import heroStudent from '../assets/hero_bg.png'; 

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#F0F7FF] flex flex-col justify-between pt-24 md:pt-32 overflow-hidden">
      
      {/* Background Image - Covers Left Half */}
      <div className="absolute top-0 left-0   w-full lg:w-1/2 h-full z-0 pointer-events-none">
         <img 
            src={heroStudent} 
            alt="Students" 
            className="w-full h-full object-cover opacity-50 lg:opacity-85 contrast-[1.1] brightness-[1.1]"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F0F7FF]/50 to-[#F0F7FF]"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#F0F7FF] via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-start gap-12 flex-grow pb-12 relative z-10">
        
        {/* Left Side: Content */}
        <div className="flex-1 text-left lg:pr-12">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black text-[#0F172A] leading-[1.1] mb-8"
          >
            Abroad Education Loans <br /> 
            starting at <span className="text-[#22C55E]">8.33%*</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8 mb-12"
          >
            {[
              "Get up to ₹1.5 Cr Collateral-Free Loan",
              "Sanctioned in 48 Hours*",
              "Apply to 20+ Banks in 2 Minutes",
              "Savings up to ₹15,00,000"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="bg-white/80 p-1 rounded-full shadow-sm">
                  <CheckCircle2 className="text-[#22C55E] w-5 h-5" />
                </div>
                <span className="text-[#0F172A] font-bold text-sm tracking-tight">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Lead Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full lg:w-[450px] bg-white rounded-2xl shadow-[0_40px_80px_rgba(15,23,42,0.15)] p-8 lg:p-10 pt-6 lg:pt-8 border border-slate-100 relative z-20"
        >
          <h3 className="text-2xl font-black text-center text-[#0F172A] mb-2 uppercase tracking-tight">Start Your Journey Now</h3>
          <p className="text-center text-slate-400 text-xs font-bold mb-6 tracking-widest uppercase">Help us with a few details.</p>
          
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Full Name</label>
              <input type="text" placeholder="Eg: John Doe" className="w-full p-4 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-secondary transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Email address</label>
              <input type="email" placeholder="john@example.com" className="w-full p-4 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-secondary transition-all outline-none" />
            </div>
            <div className="flex gap-4">
               <div className="space-y-2 flex-1">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Phone Number</label>
                  <input type="tel" placeholder="9994354019" className="w-full p-4 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-secondary transition-all outline-none" />
               </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Loan Amount</label>
              <select className="w-full p-4 bg-slate-50/50 border border-slate-200 rounded-xl text-sm outline-none cursor-pointer">
                <option>Upto ₹20 Lakhs</option>
                <option>₹20L - ₹50 Lakhs</option>
                <option>Above ₹50 Lakhs</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Permanent City</label>
                  <input type="text" placeholder="Eg: Pondicherry" className="w-full p-4 bg-slate-50/50 border border-slate-200 rounded-xl text-sm outline-none" />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Study Country</label>
                  <input type="text" placeholder="Eg: USA" className="w-full p-4 bg-slate-50/50 border border-slate-200 rounded-xl text-sm outline-none" />
               </div>
            </div>

            <button className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-5 rounded-xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_rgba(34,197,94,0.3)] mt-8 group">
              Check Eligibility Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-[10px] text-center text-slate-400 mt-6 leading-relaxed font-medium">
              By clicking "Check Eligibility Now", you agree to our <br />
              <span className="underline cursor-pointer hover:text-primary">Privacy Policy</span> & <span className="underline cursor-pointer hover:text-primary">Terms of Use</span>.
            </p>
          </form>
        </motion.div>
      </div>

      {/* Achievements Bar (Professional Navy) */}
  
    </section>
  );
};

export default Hero;
