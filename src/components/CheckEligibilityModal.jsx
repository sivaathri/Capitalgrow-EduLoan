import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, Send } from 'lucide-react';

const CheckEligibilityModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanAmount: 'Upto ₹20 Lakhs',
    city: '',
    country: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted:', formData);
    alert('Thank you! We will check your eligibility and contact you soon.');
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="bg-[#0F172A] p-8 text-white relative">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-3xl font-black mb-2 uppercase tracking-tight">Start Your Journey Now</h3>
              <p className="text-slate-400 text-sm font-bold tracking-widest uppercase">Help us with a few details.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Eg: John Doe" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#22C55E] transition-all outline-none" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Email address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#22C55E] transition-all outline-none" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="9994354019" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#22C55E] transition-all outline-none" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Loan Amount</label>
                  <select 
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none cursor-pointer focus:bg-white focus:border-[#22C55E]"
                  >
                    <option>Upto ₹20 Lakhs</option>
                    <option>₹20L - ₹50 Lakhs</option>
                    <option>Above ₹50 Lakhs</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Permanent City</label>
                  <input 
                    type="text" 
                    name="city"
                    required
                    placeholder="Eg: Pondicherry" 
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:bg-white focus:border-[#22C55E]" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Study Country</label>
                  <input 
                    type="text" 
                    name="country"
                    required
                    placeholder="Eg: USA" 
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:bg-white focus:border-[#22C55E]" 
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-5 rounded-xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_rgba(34,197,94,0.3)] mt-8 group"
              >
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
      )}
    </AnimatePresence>
  );
};

export default CheckEligibilityModal;
