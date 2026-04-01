import React from 'react';
import { Rocket, Share2, Globe, MessageSquare, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-10 group cursor-pointer">
              <div className="w-16 h-16 bg-primary rounded-[2rem] flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-primary/20 relative">
                 <GraduationCap className="text-secondary w-8 h-8" />
                 <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full border-4 border-white"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black font-heading tracking-tight italic text-primary leading-none">
                  CAPITAL <span className="text-secondary underline decoration-accent/20 decoration-4 underline-offset-4 italic italic">GROW</span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mt-2 italic shadow-sm italic">
                   EDU LOANS SPECIALIST
                </span>
              </div>
            </div>
            <p className="text-lg text-slate-400 leading-relaxed font-heading italic tracking-tight mb-12 max-w-sm">
              Empowering the next generation of global leaders with customized financial solutions for international studies.
            </p>
            <div className="flex gap-6">
               {[Share2, Globe, MessageSquare].map((Icon, i) => (
                 <a key={i} href="#" className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-300 hover:bg-secondary hover:text-white hover:scale-110 hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-500 shadow-xl shadow-slate-200/50">
                   <Icon className="w-6 h-6" />
                 </a>
               ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-auto">
            <h4 className="text-[12px] font-black uppercase tracking-[0.5em] text-secondary mb-12 border-b border-slate-50 pb-4 italic">Navigation</h4>
            <ul className="space-y-6">
              {['Home', 'About Us', 'Loan Products', 'Bank Partners', 'Success Stories'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-primary/60 hover:text-secondary transition-all uppercase font-black text-[12px] tracking-[0.3em] flex items-center gap-4 group">
                    <span className="w-2 h-2 bg-slate-100 rounded-full group-hover:bg-secondary transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:ml-auto">
            <h4 className="text-[12px] font-black uppercase tracking-[0.5em] text-secondary mb-12 border-b border-slate-50 pb-4 italic">Support</h4>
            <ul className="space-y-6">
              {['Contact Us', 'Apply Now', 'Loan Calculator', 'Repayment Guide', 'FAQ'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-primary/60 hover:text-secondary transition-all uppercase font-black text-[12px] tracking-[0.3em] flex items-center gap-4 group">
                    <span className="w-2 h-2 bg-slate-100 rounded-full group-hover:bg-secondary transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="lg:ml-auto">
            <h4 className="text-[12px] font-black uppercase tracking-[0.5em] text-secondary mb-12 border-b border-slate-50 pb-4 italic">Region</h4>
            <div className="text-primary/40 uppercase font-black text-[12px] tracking-[0.4em] leading-loose italic">
              <span className="text-primary font-black italic block mb-2 underline decoration-accent/20 decoration-2 underline-offset-4 pointer-events-none">PUDUCHERRY HEADQUARTER</span>
              12, MG ROAD, HERITAGE TOWN<br />
              PUDUCHERRY, 605001<br />
              INDIA
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 relative z-20">
          <div className="text-[11px] font-medium tracking-tight text-slate-400">
            All rights reserved | Copyright © 2026 Capital Grow Pvt. Ltd. Made with 💚
          </div>
          <div className="flex gap-4 text-[11px] font-medium tracking-tight text-slate-400">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <span className="text-slate-200">|</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
      
      {/* City Landmarks Line Art - Global Skyline */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-[0.12] pointer-events-none select-none z-0 h-48">
        <img 
          src="https://unicreds.com/assets/images/home_new/footer_bg.svg" 
          alt="World Landmarks" 
          className="w-full h-full object-cover object-bottom"
        />
      </div>
    </footer>
  );
};

export default Footer;
