import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CheckEligibilityModal = ({ isOpen, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const [formData, setFormData] = useState({
    service: 'Education Loan',
    name: '',
    email: '',
    phone: '',
    country: '',
    loanType: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you! We will check your eligibility and contact you soon.');
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service) => {
    setFormData(prev => ({ ...prev, service }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-[950px] max-h-[95vh] bg-[#F7F6F9] rounded overflow-x-hidden overflow-y-auto shadow-2xl z-10 flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#1E2D4A] px-8 py-6 text-white relative flex flex-col justify-center">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded transition-colors"
                type="button"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
              <h2 className="text-[22px] font-normal tracking-wide mb-1">Need help with your study abroad journey?</h2>
              <p className="text-[13px] font-light text-white/90">Fill the form and get expert help.</p>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="px-10 py-8">
              {/* Question */}
              <div className="mb-4">
                <label className="text-[13px] font-medium text-gray-800">
                  What do you need help with?<span className="text-[#E04D4D]">*</span>
                </label>
              </div>

              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
                
                {/* Toggles */}
                <div className="col-span-1 md:col-span-2 flex gap-4">
                  <button 
                    type="button" 
                    onClick={() => handleServiceChange('Admission Guidance')}
                    className={`flex-1 py-2.5 rounded text-[14px] font-medium transition-colors border ${
                      formData.service === 'Admission Guidance' 
                        ? 'bg-[#1E2D4A] text-white border-[#1E2D4A]' 
                        : 'bg-white text-[#1E2D4A] border-[#1E2D4A] hover:bg-slate-50'
                    }`}
                  >
                    Admission Guidance
                  </button>
                  <button 
                    type="button" 
                    onClick={() => handleServiceChange('Education Loan')}
                    className={`flex-1 py-2.5 rounded text-[14px] font-medium transition-colors border ${
                      formData.service === 'Education Loan' 
                        ? 'bg-[#1E2D4A] text-white border-[#1E2D4A]' 
                        : 'bg-white text-[#1E2D4A] border-[#1E2D4A] hover:bg-slate-50'
                    }`}
                  >
                    Education Loan
                  </button>
                </div>

                {/* Empty 3rd col on row 1 to align with mobile number block */}
                <div className="hidden md:block"></div>

                {/* Name */}
                <div className="relative bg-white border border-[#D1D5DB] rounded-[3px] px-3 w-full h-[46px] flex items-center focus-within:border-[#5DA7DB]">
                  <label className="absolute -top-2.5 left-3 bg-white px-1 text-[11px] text-gray-800 font-medium">
                    Name<span className="text-[#E04D4D]">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Eg: John Smith" 
                    className="w-full text-[13px] outline-none bg-transparent placeholder-gray-300 text-gray-800" 
                  />
                </div>

                {/* Email */}
                <div className="relative bg-white border border-[#D1D5DB] rounded-[3px] px-3 w-full h-[46px] flex items-center focus-within:border-[#5DA7DB]">
                  <label className="absolute -top-2.5 left-3 bg-white px-1 text-[11px] text-gray-800 font-medium">
                    Email<span className="text-[#E04D4D]">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Eg: john.doe@glopmail.com" 
                    className="w-full text-[13px] outline-none bg-transparent placeholder-gray-300 text-gray-800" 
                  />
                </div>

                {/* Mobile Number & Disclaimer */}
                <div className="col-span-1 md:row-span-3">
                  <div className="relative bg-white border border-[#D1D5DB] rounded-[3px] px-3 w-full h-[46px] flex items-center focus-within:border-[#5DA7DB]">
                    <label className="absolute -top-2.5 left-3 bg-white px-1 text-[11px] text-gray-800 font-medium">
                      Mobile Number<span className="text-[#E04D4D]">*</span>
                    </label>
                    <div className="flex items-center text-[13px] w-full">
                      <span className="text-gray-600 mr-2 flex items-center">+91 <span className="text-gray-300 ml-2">|</span></span>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="8888800000" 
                        className="w-full outline-none placeholder-gray-300 text-gray-800 bg-transparent flex-1" 
                      />
                    </div>
                  </div>
                  <p className="text-[11px] text-[#A0A0A0] leading-snug mt-2.5 pr-2">
                    By entering my phone number here, I hereby authorize GyanDhan and its affiliate partners to contact me through call, message or WhatsApp. It will override my registry on the NCPR/NDNC
                  </p>
                </div>

                {/* Target Country */}
                <div className="relative bg-white border border-[#D1D5DB] rounded-[3px] px-3 w-full h-[46px] flex items-center focus-within:border-[#5DA7DB]">
                  <label className="absolute -top-2.5 left-3 bg-white px-1 text-[11px] text-gray-800 font-medium">
                    Target Country<span className="text-[#E04D4D]">*</span>
                  </label>
                  <select 
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className={`w-full text-[13px] outline-none bg-transparent appearance-none cursor-pointer ${!formData.country ? 'text-gray-400' : 'text-gray-800'}`}
                  >
                    <option value="" disabled>Select</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="Others">Others</option>
                  </select>
                  <div className="absolute right-3 pointer-events-none">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>

                {/* Loan Type */}
                <div className="relative bg-white border border-[#D1D5DB] rounded-[3px] px-3 w-full h-[46px] flex items-center focus-within:border-[#5DA7DB]">
                  <label className="absolute -top-2.5 left-3 bg-white px-1 text-[11px] text-gray-800 font-medium">
                    Loan type<span className="text-[#E04D4D]">*</span>
                  </label>
                  <select 
                    name="loanType"
                    required
                    value={formData.loanType}
                    onChange={handleChange}
                    className={`w-full text-[13px] outline-none bg-transparent appearance-none cursor-pointer ${!formData.loanType ? 'text-gray-400' : 'text-gray-800'}`}
                  >
                    <option value="" disabled>Select</option>
                    <option value="Secured">Secured (With Collateral)</option>
                    <option value="Unsecured">Unsecured (Without Collateral)</option>
                  </select>
                  <div className="absolute right-3 pointer-events-none">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2 flex justify-center mt-3">
                  <button 
                    type="submit"
                    className="bg-gradient-to-r from-[#F8B036] to-[#FFAF00] hover:from-[#FFAF00] hover:to-[#F8B036] text-white px-16 py-[10px] rounded-[4px] font-bold text-[15px] transition-all shadow-md"
                  >
                    Get Expert Help
                  </button>
                </div>

              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CheckEligibilityModal;
