import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Home, 
  GraduationCap, 
  Car, 
  ShieldCheck, 
  Currency, 
  UserCircle 
} from 'lucide-react';

const Services = () => {
  const services = [
    { 
      title: "Personal Loan", 
      icon: <UserCircle className="w-10 h-10" />, 
      desc: "Instant funds for your personal life goals.",
      color: "border-blue-100 text-blue-500 bg-blue-50/40 shadow-blue-100/30",
      isPrimary: false
    },
    { 
      title: "Business Loan", 
      icon: <Briefcase className="w-10 h-10" />, 
      desc: "Capital for your entrepreneurial growth.",
      color: "border-purple-100 text-purple-600 bg-purple-50/40 shadow-purple-100/30",
      isPrimary: false
    },
    { 
      title: "Home Loan", 
      icon: <Home className="w-10 h-10" />, 
      desc: "Building a foundation for your family future.",
      color: "border-emerald-100 text-emerald-600 bg-emerald-50/40 shadow-emerald-100/30",
      isPrimary: false
    },
    { 
      title: "Abroad Education", 
      icon: <GraduationCap className="w-12 h-12" />, 
      desc: "Our gold standard for students global journey.",
      color: "border-secondary/40 text-secondary bg-secondary/10 shadow-secondary/40 shadow-[0_20px_60px_rgba(14,165,233,0.15)]",
      isPrimary: true
    },
    { 
      title: "Car Loan", 
      icon: <Car className="w-10 h-10" />, 
      desc: "Drive home your dream vehicle with ease.",
      color: "border-red-100 text-red-500 bg-red-50/40 shadow-red-100/30",
      isPrimary: false
    },
    { 
      title: "Insurance", 
      icon: <ShieldCheck className="w-10 h-10" />, 
      desc: "Premium safety for your health and travel.",
      color: "border-amber-100 text-amber-600 bg-amber-50/40 shadow-amber-100/30",
      isPrimary: false
    },
    { 
      title: "Forex", 
      icon: <Currency className="w-10 h-10" />, 
      desc: "Competitive foreign currency exchange rates.",
      color: "border-cyan-100 text-cyan-600 bg-cyan-50/40 shadow-cyan-100/30",
      isPrimary: false
    }
  ];

  return (
    <section id="services" className="section-padding bg-slate-50 overflow-hidden relative border-t border-slate-100">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-secondary text-sm font-black uppercase tracking-[0.6em] mb-6 block"
            >
              Full Financial Ecosystem
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter leading-none mb-10 text-primary italic"
            >
              Beyond <span className="text-secondary italic underline decoration-secondary/10 decoration-8 underline-offset-10 pointer-events-none">Academy.</span>
            </motion.h2>
            <p className="text-slate-400 text-xl font-medium tracking-tight font-heading italic max-w-xl underline decoration-slate-100 decoration-2 underline-offset-8">
              While we lead in education, we offer strategic consultancy for a complete range of corporate and retail financial products.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className={`p-12 rounded-[4rem] border transition-all duration-700 group flex flex-col justify-between h-[360px] relative overflow-hidden backdrop-blur-sm shadow-xl ${service.color} ${service.isPrimary ? 'scale-110 z-10 border-2' : 'hover:bg-white hover:border-slate-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:scale-[1.02]'}`}
            >
              {service.isPrimary && (
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-secondary/10 blur-[80px] rounded-full animate-pulse"></div>
              )}
              
              <div className="relative z-10">
                <div className={`mb-12 w-24 h-24 rounded-[2rem] flex items-center justify-center bg-white border border-slate-100 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 shadow-[0_10px_40px_rgba(0,0,0,0.03)]`}>
                  {service.icon}
                </div>
                <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter italic font-heading group-hover:text-primary transition-colors duration-700 italic">
                  {service.title}
                </h4>
                <p className="text-xs uppercase font-black tracking-widest leading-loose opacity-60 group-hover:opacity-100 transition-opacity italic">
                  {service.desc}
                </p>
              </div>

              <div className="relative z-10 mt-auto flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-primary/40 group-hover:text-secondary group-hover:translate-x-4 transition-all duration-700 italic">
                Get Quotation <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

       {/* Decorative Watermark */}
       <div className="absolute top-1/2 left-0 w-full text-[20vw] font-black text-slate-100/40 pointer-events-none -translate-x-12 -translate-y-1/2 uppercase italic select-none -z-0">CONSULTANCY</div>
    </section>
  );
};

const ArrowRight = ({ className, size }) => (
  <svg className={className} width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default Services;
