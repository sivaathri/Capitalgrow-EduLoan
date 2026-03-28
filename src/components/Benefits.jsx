import React from 'react';
import { motion } from 'framer-motion';
import { 
  XSquare, 
  Coins, 
  SendHorizontal, 
  Receipt, 
  PiggyBank 
} from 'lucide-react';

const Benefits = () => {
  const benefits = [
    { 
      title: "No Collateral Required", 
      desc: "Get an education loan without pledging any assets like property or FD.",
      icon: <XSquare className="w-10 h-10 text-white" /> 
    },
    { 
      title: "100% Financing Path", 
      desc: "We cover every single expense including tuition, living, and airfare.",
      icon: <Coins className="w-10 h-10 text-white" /> 
    },
    { 
      title: "Pre-Visa Disbursement", 
      desc: "Funds are disbursed before the visa stage to ensure financial proof.",
      icon: <SendHorizontal className="w-10 h-10 text-white" /> 
    },
    { 
      title: "Major Tax Benefits", 
      desc: "Save big with Section 80(E) of the Income Tax Act on your loan interest.",
      icon: <Receipt className="w-10 h-10 text-white" /> 
    },
    { 
      title: "Attractive ROI", 
      desc: "We offer some of the most competitive rates in the Indian market today.",
      icon: <PiggyBank className="w-10 h-10 text-white" /> 
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-primary to-[#080E1E] overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent text-sm font-black uppercase tracking-[0.5em] mb-4 block"
          >
            Maximum Value
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 uppercase italic leading-none"
          >
            Premium <span className="text-white">Benefits.</span>
          </motion.h2>
          <div className="h-2 w-48 bg-accent mx-auto mb-10 skew-x-12 opacity-50"></div>
          <p className="text-white/40 text-xl font-medium tracking-wide">
            Our strategic partnerships allow us to offer unparalleled benefits that common lenders often overlook.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[3rem] border-white/5 group hover:bg-white/10 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(234,179,8,0.1)] relative"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="mb-10 w-24 h-24 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-700">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-black mb-6 uppercase tracking-tight font-heading leading-tight group-hover:text-accent transition-colors">
                {benefit.title}
              </h4>
              <p className="text-sm text-white/40 group-hover:text-white/70 transition-colors leading-relaxed font-body">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
