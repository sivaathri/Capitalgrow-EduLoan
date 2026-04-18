import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Globe, Layers, CheckCircle2, Headphones, Building2, Wallet, Loader2, ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';

const allCountries = [
  "USA", "UK", "Canada", "Australia", "Germany", "New Zealand", "Ireland", "France", "Singapore", "UAE", "netherland", "Other"
];

const CustomSelect = ({ options, value, onChange, placeholder, icon: Icon, searchable = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = options.find(opt => (opt.value || opt) === value);
  const displayLabel = selectedLabel ? (selectedLabel.label || selectedLabel) : placeholder;

  return (
    <div className={`relative ${isOpen ? 'z-50' : 'z-40'} w-full`} ref={dropdownRef}>
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10">
        <Icon className="w-[18px] h-[18px] text-gray-400" />
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full pl-10 pr-10 py-3 bg-white border ${isOpen ? 'border-[#1E2D4A] ring-1 ring-[#1E2D4A]' : 'border-gray-200'} rounded-lg text-[14px] outline-none transition-all cursor-pointer font-medium flex items-center ${!value ? 'text-gray-400' : 'text-gray-800'}`}
      >
        <span className="truncate flex-1 select-none">{displayLabel}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-blue-100 rounded-xl shadow-xl overflow-hidden py-2 max-h-60 overflow-y-auto">
          {options.map((opt, i) => {
            const label = opt.label || opt;
            const val = opt.value || opt;
            return (
              <div
                key={i}
                onClick={() => {
                  onChange(val);
                  setIsOpen(false);
                }}
                className={`px-4 py-2.5 text-[13px] font-medium cursor-pointer transition-colors hover:bg-blue-50 hover:text-[#1E2D4A] flex items-center justify-between ${value === val ? 'bg-blue-50 text-[#1E2D4A]' : 'text-gray-700'}`}
              >
                {label}
                {value === val && <CheckCircle2 className="w-4 h-4 text-[#1E2D4A]" />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const LeadForm = ({ isHero = false }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedUser, setSubmittedUser] = useState('');
  const [submittedService, setSubmittedService] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const initialFormState = {
    service: 'University & Admission',
    name: '',
    email: '',
    phone: '',
    country: 'United States',
    intent: 'Education Loan'
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    const serviceId = "service_77ra33m";
    const templateId = "template_zb3pnsc";
    const publicKey = "uwdLn2z7Y54zXoSg9";

    const emailParams = {
      message: `
🚀 NEW LEAD CAPTURE: Education Loan Portal
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 STUDENT DETAILS:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}

💰 LOAN PREFERENCES:
• Service Type: ${formData.service}
• Study Destination: ${formData.country}
• Looking For: ${formData.intent}

📅 SUBMISSION TIME: ${new Date().toLocaleString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `
    };

    emailjs
      .send(serviceId, templateId, emailParams, publicKey)
      .then(() => {
        setSubmittedUser(formData.name);
        setSubmittedService(formData.service);
        setFormData(initialFormState);
        setIsSubmitted(true);
      })
      .catch((err) => {
        setStatus({
          type: "error",
          message: `Failed to send: ${err.text || err.message || "Please try again."}`,
        });
      })
      .finally(() => setIsLoading(false));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-3xl shadow-xl w-full"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Submission Successful!</h2>
        <p className="text-gray-600 mb-8">
          Thank you, <span className="font-bold text-[#1E2D4A]">{submittedUser}</span>! <br />
          We have received your details. One of our expert advisors will call you <span className="font-bold">shortly</span>.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-[#1E2D4A] text-white px-8 py-3 rounded-full font-bold transition-all"
        >
          Close
        </button>
      </motion.div>
    );
  }

  return (
    <form id="apply-form" onSubmit={handleSubmit} className={`w-full ${isHero ? 'bg-white/95 backdrop-blur-md rounded-[32px] p-2 md:p-10 border border-white/20' : ''}`}>
      <div className="flex flex-col items-center text-center mb-10">
        <h3 className="text-[22px] md:text-2xl font-black text-[#1E2D4A] mb-2">How can we assist you today?<span className="text-red-500">*</span></h3>
        <p className="text-slate-500 text-sm font-medium">Get personalized guidance for your global education.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <button
          type="button"
          onClick={() => setFormData({ ...formData, service: 'University & Admission' })}
          className={`text-left flex items-center gap-4 p-4 rounded-2xl border-2 transition-all
             ${formData.service === 'University & Admission' ? 'bg-[#F5FAFF] border-[#1E2D4A] shadow-sm' : 'bg-white border-gray-100 hover:border-blue-100'}`}
        >
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <Building2 className="w-6 h-6 text-[#1E2D4A]" />
          </div>
          <div>
            <h4 className="text-[15px] font-bold text-gray-900">University & Admission</h4>
            <p className="text-[11px] text-gray-400 font-medium">Applications, SOPs & more.</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setFormData({ ...formData, service: 'Study Loan & Funding' })}
          className={`text-left flex items-center gap-4 p-4 rounded-2xl border-2 transition-all
             ${formData.service === 'Study Loan & Funding' ? 'bg-[#F5FAFF] border-[#1E2D4A] shadow-sm' : 'bg-white border-gray-100 hover:border-blue-100'}`}
        >
          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
            <Wallet className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h4 className="text-[15px] font-bold text-gray-900">Study Loan & Funding</h4>
            <p className="text-[11px] text-gray-400 font-medium">Best loan options & support.</p>
          </div>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-1.5">
          <label className="block text-[13px] font-bold text-gray-700 ml-1">Full Name <span className="text-red-500">*</span></label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              name="name" required placeholder="Example: Rahul Sharma"
              value={formData.name} onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#1E2D4A] focus:ring-1 focus:ring-[#1E2D4A] outline-none transition-all font-medium"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-[13px] font-bold text-gray-700 ml-1">Email Address <span className="text-red-500">*</span></label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="email" name="email" required placeholder="Example: rahul@example.com"
              value={formData.email} onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#1E2D4A] focus:ring-1 focus:ring-[#1E2D4A] outline-none transition-all font-medium"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-[13px] font-bold text-gray-700 ml-1">Phone Number <span className="text-red-500">*</span></label>
          <div className="relative flex">
            <div className="absolute left-0 inset-y-0 pl-3.5 flex items-center pointer-events-none">
              <Phone className="w-4 h-4 text-gray-400" />
            </div>
            <span className="absolute left-10 inset-y-0 flex items-center text-sm font-bold border-r pr-2 my-3 text-gray-700">+91</span>
            <input
              type="tel" name="phone" required placeholder="Enter 10-digit number"
              value={formData.phone} onChange={handleChange}
              className="w-full pl-20 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#1E2D4A] focus:ring-1 focus:ring-[#1E2D4A] outline-none transition-all font-medium"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-[13px] font-bold text-gray-700 ml-1">Preferred Destination <span className="text-red-500">*</span></label>
          <CustomSelect
            options={allCountries}
            value={formData.country}
            onChange={(val) => setFormData(prev => ({ ...prev, country: val }))}
            placeholder="Choose country"
            icon={Globe}
          />
        </div>

        <div className="space-y-1.5 md:col-span-2">
          <label className="block text-[13px] font-bold text-gray-700 ml-1">I am looking for <span className="text-red-500">*</span></label>
          <CustomSelect
            options={["Education Loan", "Personal Loan", "Business Loan"]}
            value={formData.intent}
            onChange={(val) => setFormData(prev => ({ ...prev, intent: val }))}
            placeholder="Select an option"
            icon={Layers}
          />
        </div>
      </div>

      <p className="text-[11px] text-gray-400 italic mb-8 px-4 leading-relaxed font-medium">
        By providing your phone number, you consent to be contacted by our team via call, SMS, or WhatsApp. This will override DND/NCPR settings.
      </p>

      <div className="flex flex-col items-center gap-6">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#1E2D4A] hover:bg-[#111827] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg active:scale-[0.98] disabled:opacity-70"
        >
          {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Headphones className="w-6 h-6" />}
          Connect Me With an Expert
        </button>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] font-bold text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" /> Quick Response
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" /> Trusted by Thousands
          </div>
        </div>
      </div>
    </form>
  );
};

export default LeadForm;
