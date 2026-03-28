import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareText, FileStack, ShieldEllipsis, BadgeCheck, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    { 
      id: "01", 
      title: "Consultation", 
      desc: "Profile evaluation and university selection with our expert advisors.",
      icon: <MessageSquareText className="w-14 h-14 text-secondary" /> 
    },
    { 
      id: "02", 
      title: "Documentation", 
      desc: "Digital collection of academic, KYC and financial liquidity proofs.",
      icon: <FileStack className="w-14 h-14 text-secondary" /> 
    },
    { 
      id: "03", 
      title: "Loan Sanction", 
      icon: <ShieldEllipsis className="w-14 h-14 text-secondary" />,
      desc: "Fast approval from top-tier partner banks within 48 to 72 hours."
    },
    { 
      id: "04", 
      title: "Disbursement", 
      desc: "Funds transferred to university or student account for immediate payment.",
      icon: <BadgeCheck className="w-14 h-14 text-secondary" /> 
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight text-[#0F172A]">
            How it <span className="text-blue-600">Works?</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium tracking-tight">
            A frictionless, technology-first approach to make your study abroad funding ready before the orientation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="mb-8 w-24 h-24 bg-white border border-slate-200 rounded-lg flex items-center justify-center relative z-10 group-hover:bg-blue-600 group-hover:border-blue-700 transition-all duration-300 shadow-md">
                <div className="group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-black text-lg group-hover:bg-slate-900 transition-colors shadow-lg">
                  {step.id}
                </div>
              </div>

              <h4 className="text-2xl font-black mb-4 text-[#0F172A] leading-tight group-hover:text-blue-600 transition-colors">
                {step.title}
              </h4>
              <p className="text-sm font-medium text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                {step.desc}
              </p>

              {/* Connecting Icon */}
              <div className="hidden lg:block absolute top-[110px] left-[100px] right-[-40px] h-[2px] bg-slate-200 group-last:hidden flex overflow-hidden">
                 <div className="h-full w-full bg-blue-400 opacity-20 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Area (UniCreds Style) */}
        <div className="mt-28 p-12 bg-[#0F172A] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-2xl">
           <div>
              <h2 className="text-3xl font-black mb-2">Check your Loan Eligibility in 2 mins</h2>
              <p className="text-slate-400 font-medium">Secure a Study Abroad Education Loan- Collateral-Free</p>
           </div>
           <button className="bg-green-600 hover:bg-green-700 text-white px-12 py-5 rounded-lg font-black text-xl flex items-center gap-3 transition-colors shadow-lg">
              Check Eligibility <ArrowRight />
           </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
