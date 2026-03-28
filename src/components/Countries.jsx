import React from 'react';
import { motion } from 'framer-motion';

const Countries = () => {
  const countries = [
    { name: "USA", flag: "🇺🇸", students: "4500+", color: "bg-blue-600/30" },
    { name: "UK", flag: "🇬🇧", students: "2800+", color: "bg-red-600/30" },
    { name: "CANADA", flag: "🇨🇦", students: "5100+", color: "bg-red-500/30" },
    { name: "GERMANY", flag: "🇩🇪", students: "1200+", color: "bg-yellow-600/30" },
    { name: "AUSTRALIA", flag: "🇦🇺", students: "3300+", color: "bg-blue-700/30" },
    { name: "IRELAND", flag: "🇮🇪", students: "900+", color: "bg-emerald-600/30" },
    { name: "SINGAPORE", flag: "🇸🇬", students: "1500+", color: "bg-red-400/30" }
  ];

  return (
    <section className="section-padding bg-[#050A18] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent text-sm font-black uppercase tracking-[0.5em] mb-4 block"
            >
              Global Network
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter leading-none mb-8"
            >
              Studying <span className="text-white">Abroad?</span>
            </motion.h2>
            <p className="text-white/40 text-xl font-medium tracking-wide">
              We provide localized financial solutions and bank expertise for any major global destination.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block h-64 w-[1px] bg-gradient-to-b from-transparent via-accent to-transparent"
          ></motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {countries.map((country, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10, rotateZ: 2 }}
              className="glass p-8 rounded-[3rem] border-white/5 group relative overflow-hidden cursor-default transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] text-center flex flex-col items-center justify-center aspect-[3/4]"
            >
              <div className={`absolute inset-0 ${country.color} blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>
              
              <div className="text-6xl mb-8 group-hover:scale-125 transition-transform duration-500 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                {country.flag}
              </div>
              <h4 className="text-xl font-black mb-2 uppercase group-hover:text-accent transition-colors font-heading tracking-tighter">
                {country.name}
              </h4>
              <div className="text-[8px] tracking-[0.3em] font-black italic text-white/30 uppercase">
                {country.students} Students
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Text Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/5 opacity-50 uppercase italic z-0 whitespace-nowrap pointer-events-none">
        GLOBAL REACH
      </div>
    </section>
  );
};

export default Countries;
