import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { Handshake, Zap, Compass, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0.3, 0.5], [-5, 0]);

  return (
    <section id="why-choose-us" className="section-padding bg-black/30 overflow-hidden relative font-heading">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Content Left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-left order-2 lg:order-1"
          >
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-10 block">The Capital Grow Advantage</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-12 uppercase leading-none tracking-tighter">
              Why Students <br /> Trust Capital <span className="text-accent">Grow.</span>
            </h2>
            
            <div className="space-y-12 mb-16">
              {[
                { 
                  icon: <Handshake className="w-10 h-10 text-white" />, 
                  title: "Best Bank Negotiations", 
                  desc: "We leverage our industry relationships to negotiate exclusive, low-interest deals for you.",
                  color: "bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                },
                { 
                  icon: <Zap className="w-10 h-10 text-white" />, 
                  title: "Quick-Fire Approvals", 
                  desc: "Time is money. Our direct bank links allow us to process applications 3x faster than average.",
                  color: "bg-amber-600 shadow-[0_0_20px_rgba(217,119,6,0.4)]"
                },
                { 
                  icon: <Compass className="w-10 h-10 text-white" />, 
                  title: "End-to-End Concierge", 
                  desc: "From profile evaluation to funds disbursement, we manage every single technical detail.",
                  color: "bg-emerald-600 shadow-[0_0_20px_rgba(5,150,105,0.4)]"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-10 group"
                >
                  <div className={`shrink-0 w-20 h-20 ${item.color} rounded-3xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-black mb-2 uppercase group-hover:text-accent transition-colors tracking-tight">{item.title}</h4>
                    <p className="text-white/40 leading-relaxed font-body group-hover:text-white/70 transition-colors">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="btn-premium btn-gold px-12 group">
              Start Your Journey <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Visual Right */}
          <motion.div 
            style={{ scale, rotate }}
            className="flex-1 relative order-1 lg:order-2"
          >
            <div className="w-full aspect-square bg-gradient-to-br from-white/5 to-white/0 rounded-full flex items-center justify-center p-12 border border-white/5 relative">
              {/* Inner Circle Glow */}
              <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full scale-50 group-hover:scale-75 transition-transform duration-1000"></div>
              
              {/* Centered Graphic */}
              <div className="relative z-10 glass p-10 rounded-[4rem] aspect-[4/5] w-80 text-center flex flex-col items-center justify-center shadow-2xl border-white/20">
                <div className="w-32 h-32 bg-accent rounded-full mb-8 flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(234,179,8,0.5)]">
                  <CheckCircle className="text-primary w-16 h-16" />
                </div>
                <div className="text-5xl font-black text-white mb-2 uppercase tracking-tighter italic">98%</div>
                <div className="text-xs uppercase tracking-[0.3em] font-bold text-accent">Satisfaction Score</div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 glass rounded-full flex items-center justify-center text-4xl font-black animate-bounce delay-75 shadow-lg border-white/10 uppercase italic">₹</div>
              <div className="absolute bottom-0 left-0 w-40 h-40 glass rounded-full flex items-center justify-center text-center p-4 shadow-lg border-white/10 uppercase italic font-black leading-none text-xl">100%<br/><span className="text-[8px] tracking-[0.2em] font-normal not-italic mt-2">Financing</span></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default WhyChooseUs;
