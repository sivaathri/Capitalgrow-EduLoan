import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  IndianRupee, 
  TrendingUp, 
  CalendarClock, 
  Zap, 
  Globe2 
} from 'lucide-react';

const Features = () => {
  const cards = [
    {
      title: "100% Comprehensive",
      desc: "Full coverage for tuition, living expenses, travel, and health insurance.",
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      color: "from-blue-50 to-white"
    },
    {
      title: "Unmatched Value",
      desc: "Instant sanction of education loans ranging from ₹20 Lakhs up to ₹1.5 Cr.",
      icon: <IndianRupee className="w-10 h-10 text-green-600" />,
      color: "from-green-50 to-white"
    },
    {
      title: "Optimized ROI",
      desc: "Enjoy reduced interest rates starting from 8.5%, sanctioned within 48-72 hours.",
      icon: <TrendingUp className="w-10 h-10 text-orange-600" />,
      color: "from-orange-50 to-white"
    },
    {
      title: "Flexible Tenure",
      desc: "Interest-only moratorium periods to ease burden while you study.",
      icon: <CalendarClock className="w-10 h-10 text-purple-600" />,
      color: "from-purple-50 to-white"
    },
    {
      title: "Digital Velocity",
      desc: "End-to-end paperless processing with partnered banks for immediate approval.",
      icon: <Zap className="w-10 h-10 text-red-600" />,
      color: "from-red-50 to-white"
    },
    {
      title: "Global Network",
      desc: "Strategic alliances in USA, UK, Canada, Australia and 50+ other nations.",
      icon: <Globe2 className="w-10 h-10 text-cyan-600" />,
      color: "from-cyan-50 to-white"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#0F172A] leading-tight">
              Unlock Your <br /> <span className="text-green-600">Global Potential.</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              We provide specific loan structures designed for the nuances of international education and your career journey.
            </p>
          </div>
          <button className="bg-green-600 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-green-700 transition-colors">Apply Now</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`group bg-white border border-slate-100 p-10 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl hover:border-slate-200 cursor-default`}
            >
              <div className="relative z-10">
                <div className="mb-8 w-16 h-16 rounded-lg flex items-center justify-center bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black text-[#0F172A] mb-4 leading-none">
                  {card.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-slate-500">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
