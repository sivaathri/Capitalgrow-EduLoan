import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Share2, Globe, MessageSquare, ChevronRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    country: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! Our consultant will contact you within 24 hours.');
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-stretch h-full">
          {/* Form Side - High Premium Design */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-[1.8] bg-white p-12 md:p-16 rounded-[4rem] border border-slate-100 shadow-[0_40px_100px_rgba(15,23,42,0.06)] relative group h-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-secondary/5 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            <div className="relative z-10">
                <span className="text-secondary text-sm font-black uppercase tracking-[0.6em] mb-6 block border-l-4 border-secondary pl-6">Get Sanctioned</span>
                <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase italic tracking-tighter text-primary italic leading-none">Start Your <span className="text-secondary italic">Journey.</span></h2>
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4 group/input">
                    <label className="text-[10px] uppercase font-black tracking-[0.5em] text-slate-300 ml-6 group-focus-within/input:text-secondary transition-colors italic">Student Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="e.g. Aryan Malhotra"
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] p-8 text-primary focus:border-secondary focus:bg-white outline-none transition-all duration-300 placeholder:text-slate-200 italic text-2xl font-black italic tracking-tighter shadow-sm"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-4 group/input">
                    <label className="text-[10px] uppercase font-black tracking-[0.5em] text-slate-300 ml-6 group-focus-within/input:text-secondary transition-colors italic">Mobile Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="e.g. +91 99911 00022"
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] p-8 text-primary focus:border-secondary focus:bg-white outline-none transition-all duration-300 placeholder:text-slate-200 italic text-2xl font-black italic tracking-tighter shadow-sm"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-4 group/input">
                    <label className="text-[10px] uppercase font-black tracking-[0.5em] text-slate-300 ml-6 group-focus-within/input:text-secondary transition-colors italic">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="e.g. aryan@university.com"
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] p-8 text-primary focus:border-secondary focus:bg-white outline-none transition-all duration-300 placeholder:text-slate-200 italic text-2xl font-black italic tracking-tighter shadow-sm"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-4 group/input">
                    <label className="text-[10px] uppercase font-black tracking-[0.5em] text-slate-300 ml-6 group-focus-within/input:text-secondary transition-colors italic">Intended Course</label>
                    <input 
                      type="text" 
                      name="course"
                      required
                      placeholder="e.g. MBA / MS / CS"
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] p-8 text-primary focus:border-secondary focus:bg-white outline-none transition-all duration-300 placeholder:text-slate-200 italic text-2xl font-black italic tracking-tighter shadow-sm"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-2 space-y-4 group/input">
                    <label className="text-[10px] uppercase font-black tracking-[0.5em] text-slate-300 ml-6 group-focus-within/input:text-secondary transition-colors italic">Destination Country</label>
                    <select 
                      name="country"
                      required
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2.5rem] p-8 text-primary focus:border-secondary focus:bg-white outline-none transition-all duration-300 italic text-2xl font-black italic tracking-tighter appearance-none cursor-pointer"
                      onChange={handleChange}
                    >
                        <option value="" disabled selected>Pick Target Nation</option>
                        <option value="usa">USA - United States</option>
                        <option value="uk">UK - United Kingdom</option>
                        <option value="canada">Canada</option>
                        <option value="germany">Germany</option>
                        <option value="australia">Australia</option>
                        <option value="others">Other Major Nations</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2 mt-12">
                    <button type="submit" className="btn-premium btn-gold w-full group flex items-center justify-center gap-6 text-3xl uppercase italic font-black h-28 shadow-2xl hover:scale-[1.03] transition-all">
                       Check My Eligibility
                       <Send className="w-12 h-12 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-1000" />
                    </button>
                    <p className="text-center text-[9px] uppercase font-black tracking-[0.8em] text-slate-200 mt-8 group-hover:text-secondary transition-colors duration-1000">
                      SECURED & VERIFIED APPLICATION GATEWAY
                    </p>
                  </div>
                </form>
            </div>
          </motion.div>

          {/* Info Side - Focus on Transparency */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col justify-between py-12"
          >
            <div>
               <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-16 text-primary italic">Talk to <br /> <span className="text-secondary italic underline decoration-secondary/10 decoration-8 underline-offset-10 italic">Consultants.</span></h3>
               <div className="space-y-14">
                  <div className="flex gap-10 group">
                    <div className="shrink-0 w-20 h-20 bg-white border border-slate-100 rounded-3xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl group-hover:shadow-primary/20">
                       <MapPin className="text-secondary w-10 h-10 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-300 mb-2">Our Head Office</div>
                      <div className="text-2xl font-black italic tracking-tighter text-primary/80 group-hover:text-secondary transition-colors italic leading-none">Puducherry, India</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-10 group">
                    <div className="shrink-0 w-20 h-20 bg-white border border-slate-100 rounded-3xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl group-hover:shadow-primary/20">
                       <Phone className="text-secondary w-10 h-10 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-300 mb-2">Immediate Support</div>
                      <div className="text-2xl font-black italic tracking-tighter text-primary/80 group-hover:text-secondary transition-colors italic leading-none">+91 91234 56789</div>
                    </div>
                  </div>

                  <div className="flex gap-10 group">
                    <div className="shrink-0 w-20 h-20 bg-white border border-slate-100 rounded-3xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl group-hover:shadow-primary/20">
                       <Mail className="text-secondary w-10 h-10 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-300 mb-2">Email Inquiry</div>
                      <div className="text-2xl font-black italic tracking-tighter text-primary/80 group-hover:text-secondary transition-colors italic leading-none">contact@capitalgrow.in</div>
                    </div>
                  </div>
               </div>
            </div>

            <div className="mt-28">
               <div className="text-[11px] uppercase tracking-[0.5em] font-black text-slate-300 mb-10 border-b border-slate-100 pb-4 italic">Follow Our Global Impact</div>
               <div className="flex gap-6">
                  {[Share2, Globe, MessageSquare].map((Icon, i) => (
                    <a key={i} href="#" className="w-16 h-16 bg-white border border-slate-100 rounded-[1.5rem] flex items-center justify-center hover:bg-secondary hover:text-white hover:scale-110 hover:-translate-y-2 active:scale-95 transition-all duration-500 shadow-xl shadow-slate-200/50 group">
                      <Icon className="w-7 h-7 text-slate-300 group-hover:text-white transition-colors" />
                    </a>
                  ))}
               </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[50vw] h-full bg-secondary/[0.01] -z-0"></div>
    </section>
  );
};

export default Contact;
