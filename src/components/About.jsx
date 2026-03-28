import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Clock, Users } from 'lucide-react';
import aboutImage from '../assets/about_office.png';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Side - Simple UniCreds Style */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
              <img 
                src={aboutImage} 
                alt="Capital Grow Consultant" 
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent"></div>
              
              {/* Simple Stat Info Overlay */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4">
                 <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                    <Award size={28} />
                 </div>
                 <div>
                    <div className="text-xl font-black text-[#0F172A]">12+ Years</div>
                    <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">In Financial Services</div>
                 </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-100 blur-[80px] rounded-full"></div>
          </motion.div>

          {/* Text Side - High Intensity Clean Design */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight text-[#0F172A]">
              Our History and <br /> <span className="text-green-600">Commitment.</span>
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
              We started out as a boutique financial advisory and grew into India's leading abroad education loan specialist. We connect students with the right lenders to ensure zero financial barriers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {[
                { icon: <Clock className="text-blue-500 h-6 w-6" />, title: "2-7 Day Sanctions", desc: "No long waiting times or endless queues." },
                { icon: <CheckCircle2 className="text-green-500 h-6 w-6" />, title: "Zero Collateral", desc: "We specialize in Unsecured Loans for top univs." },
                { icon: <Users className="text-purple-500 h-6 w-6" />, title: "Expert Support", desc: "End-to-end guidance from app to release." },
                { icon: <Award className="text-orange-500 h-6 w-6" />, title: "Top-Tier Banks", desc: "Access to 20+ private, PSU and NBFC partners." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="shrink-0 w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-[#0F172A] leading-none">{item.title}</h4>
                    <p className="text-[12px] font-medium text-slate-400 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-white border border-slate-200 text-[#0F172A] px-10 py-4 rounded-lg font-bold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-md">
              Learn More About Capital Grow
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
