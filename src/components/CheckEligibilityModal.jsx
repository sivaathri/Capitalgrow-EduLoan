import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Headphones, GraduationCap, Building2, Wallet, User, Mail, Phone, Globe, Layers, CheckCircle2, ChevronDown, Plane, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const allCountries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", 
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", 
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", 
  "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", 
  "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", 
  "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", 
  "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", 
  "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", 
  "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", 
  "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", 
  "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", 
  "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
  "Korea North", "Korea South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", 
  "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", 
  "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", 
  "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", 
  "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
  "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
  "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", 
  "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", 
  "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
  "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", 
  "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
  "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", 
  "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
  "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
  "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

// Beautifully Styled Custom Select Component (Supports Text-box Search acting as Combobox)
const CustomSelect = ({ options, value, onChange, placeholder, icon: Icon, searchable = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  // Sync searchTerm with actual selection when the dropdown opens/closes
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        if (searchable) {
          const selectedOpt = options.find(opt => (opt.value || opt) === value);
          setSearchTerm(selectedOpt ? (selectedOpt.label || selectedOpt) : '');
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [value, options, searchable]);

  // Sync initially inside effect if value changes externally
  useEffect(() => {
    if (searchable && value) {
      const selectedOpt = options.find(opt => (opt.value || opt) === value);
      setSearchTerm(selectedOpt ? (selectedOpt.label || selectedOpt) : '');
    }
  }, [value, options, searchable]);

  const selectedLabel = options.find(opt => (opt.value || opt) === value);
  const displayLabel = selectedLabel ? (selectedLabel.label || selectedLabel) : placeholder;

  const filteredOptions = searchable && isOpen
    ? options.filter(opt => {
        const text = opt.label || opt;
        // if user hasn't typed anything new, show everything
        const isMatched = selectedLabel && (selectedLabel.label || selectedLabel) === searchTerm;
        if (isMatched) return true;
        return text.toLowerCase().includes(searchTerm.toLowerCase());
      })
    : options;

  return (
    <div className="relative z-50 w-full" ref={dropdownRef}>
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10">
        <Icon className="w-[18px] h-[18px] text-gray-400" />
      </div>
      
      {searchable ? (
        <input 
          type="text"
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
             setSearchTerm(e.target.value);
             onChange(''); // clear actual selection when user edits manually
             if (!isOpen) setIsOpen(true);
          }}
          value={searchTerm}
          placeholder={placeholder}
          autoComplete="off"
          className={`w-full pl-10 pr-10 py-3 bg-white border ${isOpen ? 'border-[#1E2D4A] ring-1 ring-[#1E2D4A]' : 'border-gray-200'} rounded-lg text-[14px] outline-none transition-all cursor-text font-medium text-gray-800 placeholder-gray-400`}
        />
      ) : (
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full pl-10 pr-10 py-3 bg-white border ${isOpen ? 'border-[#1E2D4A] ring-1 ring-[#1E2D4A]' : 'border-gray-200'} rounded-lg text-[14px] outline-none transition-all cursor-pointer font-medium flex items-center ${!value ? 'text-gray-400' : 'text-gray-800'}`}
        >
          <span className="truncate flex-1 select-none">{displayLabel}</span>
        </div>
      )}
      
      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none z-10">
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 5 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-[105%] -left-[2.5%] mt-2 bg-white border border-blue-100 rounded-xl shadow-[0_15px_40px_rgba(30,45,74,0.15)] overflow-hidden flex flex-col"
          >
            <div className="max-h-56 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent py-2">
              {filteredOptions.length === 0 ? (
                <div className="px-4 py-3 text-[13px] text-gray-500 text-center font-medium">No results found.</div>
              ) : (
                filteredOptions.map((opt, i) => {
                  const label = opt.label || opt;
                  const val = opt.value || opt;
                  return (
                    <div 
                      key={i}
                      onMouseDown={(e) => {
                        // Prevent focus loss so input doesn't blur before click finishes
                        e.preventDefault(); 
                      }}
                      onClick={() => {
                        onChange(val);
                        setSearchTerm(label);
                        setIsOpen(false);
                      }}
                      className={`px-4 py-2.5 text-[13px] font-medium cursor-pointer transition-colors hover:bg-blue-50 hover:text-[#1E2D4A] flex items-center justify-between ${value === val ? 'bg-blue-50 text-[#1E2D4A]' : 'text-gray-700'}`}
                    >
                      {label}
                      {value === val && <CheckCircle2 className="w-4 h-4 text-[#1E2D4A]" />}
                    </div>
                  )
                })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CheckEligibilityModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedUser, setSubmittedUser] = useState('');
  const [submittedService, setSubmittedService] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const formRef = useRef();

  const initialFormState = {
    service: 'University & Admission',
    name: '',
    email: '',
    phone: '',
    country: '',
    intent: ''
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Completely reset everything when modal closes
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setFormData(initialFormState);
        setSubmittedUser('');
        setSubmittedService('');
        setStatus({ type: "", message: "" });
      }, 300);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    const serviceId = "service_77ra33m";
    const templateId = "template_zb3pnsc";
    const publicKey = "uwdLn2z7Y54zXoSg9";

    // We'll prepare a combined message field in case your EmailJS template only uses {{message}}
    const emailParams = {
      ...formData,
      message: `
        New Lead Submission:
        -------------------------
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Service Type: ${formData.service}
        Study Destination: ${formData.country}
        Looking For: ${formData.intent}
        -------------------------
      `
    };

    emailjs
      .send(serviceId, templateId, emailParams, publicKey)
      .then(() => {
        console.log('API SUCCESS: Data sent to EmailJS:', emailParams);
        // Cache data for success message then clear inputs
        setSubmittedUser(formData.name);
        setSubmittedService(formData.service);
        setFormData(initialFormState);
        setIsSubmitted(true);
      })
      .catch((err) => {
        console.error('API ERROR:', err);
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-[1000px] bg-white rounded-[40px] shadow-2xl z-10 flex flex-col"
          >
            {/* Conditional Render: Form vs Success Message */}
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header Section */}
                  <div className="relative bg-gradient-to-br from-[#F5FAFF] via-[#EAF4FF] to-[#DCEEFF] px-10 pt-12 pb-10 flex border-b border-blue-100 rounded-t-[40px]">
                    <button onClick={onClose} aria-label="Close" className="absolute top-6 right-6 p-2 text-gray-400 hover:bg-black/5 hover:text-gray-600 rounded-full transition-colors z-20">
                      <X strokeWidth={1.5} className="w-6 h-6" />
                    </button>
                    
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left z-10 relative">
                      <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center relative shadow-sm border border-blue-100 shrink-0 mt-2">
                        <div className="absolute inset-1 border-[1.5px] border-dashed border-[#BDA2E1] rounded-full opacity-60"></div>
                        <div className="absolute -top-1 -right-1 text-[#1E2D4A]"><Plane className="w-6 h-6 rotate-45" fill="currentColor"/></div>
                        <div className="w-20 h-20 rounded-full bg-[#F1F9FF] flex items-center justify-center">
                           <GraduationCap className="w-10 h-10 text-[#1E2D4A]" />
                        </div>
                      </div>

                      <div>
                        <div className="inline-flex items-center gap-2 bg-[#EAF4FF] text-[#1E2D4A] px-3 py-1.5 rounded-full text-[13px] font-bold mb-4 border border-[#BEE1FF]">
                          <Headphones className="w-4 h-4" /> We're Here to Help!
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-[#111827] leading-tight mb-2 tracking-tight">
                          Let's Make Your <br className="hidden md:block" />
                          <span className="text-[#1E2D4A]">Study Abroad Dream Happen</span> <span className="text-yellow-400">✨</span>
                        </h1>
                        <p className="text-[#6B7280] text-[15px] font-medium">Share your details and our experts will guide you at every step.</p>
                      </div>
                    </div>
                  </div>

                  <form ref={formRef} onSubmit={handleSubmit} className="px-6 md:px-10 py-8 relative">
                    {/* Hidden inputs to sync CustomSelect values for EmailJS sendForm */}
                    <input type="hidden" name="service" value={formData.service} />
                    <input type="hidden" name="country" value={formData.country} />
                    <input type="hidden" name="intent" value={formData.intent} />
                    
                    <svg className="absolute bottom-0 left-0 w-64 h-48 opacity-20 pointer-events-none -translate-x-10 translate-y-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M10 100 Q 50 150 100 120 T 200 80" stroke="#1E2D4A" strokeWidth="2" strokeDasharray="5,5" fill="none"/>
                       <circle cx="10" cy="100" r="4" fill="#1E2D4A"/>
                       <circle cx="200" cy="80" r="4" fill="#1E2D4A"/>
                    </svg>

                    <div className="flex items-center justify-center mb-6 gap-3 pt-2">
                      <div className="w-8 h-[1.5px] bg-[#1E2D4A] opacity-70"></div>
                      <div className="w-2 h-2 rotate-45 bg-[#1E2D4A]"></div>
                      <h3 className="text-lg font-bold text-[#1F2937]">How can we assist you today?<span className="text-red-500">*</span></h3>
                      <div className="w-2 h-2 rotate-45 bg-[#1E2D4A]"></div>
                      <div className="w-8 h-[1.5px] bg-[#1E2D4A] opacity-70"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                       <button 
                         type="button" 
                         onClick={() => setFormData({...formData, service: 'University & Admission'})}
                         className={`text-left flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-5 rounded-xl border-[1.5px] transition-all
                           ${formData.service === 'University & Admission' ? 'bg-[#F5FAFF] border-[#1E2D4A] shadow-sm' : 'bg-white border-gray-200 hover:border-blue-200'}`}
                       >
                         <div className="w-14 h-14 rounded-full bg-[#EAF4FF] flex items-center justify-center shrink-0">
                           <Building2 className="w-7 h-7 text-[#1E2D4A] fill-[#1E2D4A]/20" />
                         </div>
                         <div>
                           <h4 className="text-[17px] font-bold text-gray-900 mb-0.5">University & Admission</h4>
                           <p className="text-[13px] text-gray-500 font-medium">Help with shortlisting, applications, SOPs & more.</p>
                         </div>
                       </button>

                       <button 
                         type="button" 
                         onClick={() => setFormData({...formData, service: 'Study Loan & Funding'})}
                         className={`text-left flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-5 rounded-xl border-[1.5px] transition-all
                           ${formData.service === 'Study Loan & Funding' ? 'bg-[#F5FAFF] border-[#1E2D4A] shadow-sm' : 'bg-white border-gray-200 hover:border-blue-200'}`}
                       >
                         <div className="w-14 h-14 rounded-full bg-[#EEF8E8] flex items-center justify-center shrink-0">
                           <Wallet className="w-7 h-7 text-[#22C55E] fill-[#22C55E]/20" />
                         </div>
                         <div>
                           <h4 className="text-[17px] font-bold text-gray-900 mb-0.5">Study Loan & Funding</h4>
                           <p className="text-[13px] text-gray-500 font-medium">Get the best education loan options & support.</p>
                         </div>
                       </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-7 relative z-30">
                      <div className="space-y-2">
                        <label htmlFor="name-input" className="block text-[14px] font-bold text-gray-800">Full Name <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <User className="w-[18px] h-[18px] text-gray-400" />
                          </div>
                          <input 
                            id="name-input" type="text" name="name" required
                            placeholder="Example: Rahul Sharma"
                            value={formData.name} onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-[14px] text-gray-800 focus:border-[#1E2D4A] focus:ring-1 focus:ring-[#1E2D4A] outline-none transition-all placeholder-gray-400 font-medium"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email-input" className="block text-[14px] font-bold text-gray-800">Email Address <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <Mail className="w-[18px] h-[18px] text-gray-400" />
                          </div>
                          <input 
                            id="email-input" type="email" name="email" required
                            placeholder="Example: rahul@example.com"
                            value={formData.email} onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-[14px] text-gray-800 focus:border-[#1E2D4A] focus:ring-1 focus:ring-[#1E2D4A] outline-none transition-all placeholder-gray-400 font-medium"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone-input" className="block text-[14px] font-bold text-gray-800">Phone Number <span className="text-red-500">*</span></label>
                        <div className="relative flex">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <Phone className="w-[16px] h-[16px] text-gray-400" />
                          </div>
                          <div className="absolute inset-y-0 left-[34px] flex items-center text-[13px] text-gray-800 font-bold border-r border-gray-200 pr-2 my-[10px]">
                            +91 <ChevronDown className="w-[14px] h-[14px] text-gray-400 ml-[2px]" />
                          </div>
                          <input 
                            id="phone-input" type="tel" name="phone" required
                            placeholder="Enter 10-digit number"
                            value={formData.phone} onChange={handleChange}
                            className="w-full pl-[98px] pr-4 py-3 bg-white border border-gray-200 rounded-lg text-[14px] text-gray-800 focus:border-[#1E2D4A] focus:ring-1 focus:ring-[#1E2D4A] outline-none transition-all placeholder-gray-400 font-medium"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[14px] font-bold text-gray-800">Preferred Study Destination <span className="text-red-500">*</span></label>
                        <CustomSelect 
                          options={allCountries}
                          value={formData.country}
                          onChange={(val) => setFormData(prev => ({...prev, country: val}))}
                          placeholder="Choose your target country"
                          icon={Globe}
                          searchable={true}
                        />
                      </div>

                      <div className="space-y-2 relative">
                        <label className="block text-[14px] font-bold text-gray-800">I am looking for <span className="text-red-500">*</span></label>
                        <CustomSelect 
                          options={[
                            { label: "Education Loan", value: "Education Loan" },
                            { label: "Personal Loan", value: "Personal Loan" },
                            { label: "Business Loan", value: "Business Loan" }
                          ]}
                          value={formData.intent}
                          onChange={(val) => setFormData(prev => ({...prev, intent: val}))}
                          placeholder="Select an option"
                          icon={Layers}
                        />
                      </div>

                      <div className="flex gap-3 pt-6 lg:pt-8 items-start">
                         <div className="mt-0.5 rounded-full flex items-center justify-center w-[18px] h-[18px] shrink-0 bg-[#22C55E]">
                            <CheckCircle2 className="w-[12px] h-[12px] text-white" strokeWidth={3} />
                         </div>
                         <p className="text-[12px] text-gray-500 leading-relaxed font-medium">
                           By providing your phone number, you consent to be contacted by our team via call, SMS, or WhatsApp. This will override DND/NCPR settings.
                         </p>
                      </div>
                    </div>

                    <div className="mt-12 flex flex-col items-center relative z-10">
                       {status.type === 'error' && (
                         <div className="mb-4 text-red-600 bg-red-50 px-4 py-2 rounded-lg text-sm font-bold border border-red-100 italic">
                           ⚠️ {status.message}
                         </div>
                       )}
                       
                       <button 
                         type="submit"
                         disabled={isLoading}
                         className={`bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#D97706] text-white px-10 py-3.5 rounded-full font-bold text-[15px] flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-900/20 w-full md:w-auto md:min-w-[340px] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                       >
                         {isLoading ? (
                           <>
                             <Loader2 className="w-5 h-5 animate-spin" /> Processing Submission...
                           </>
                         ) : (
                           <>
                             <Headphones className="w-5 h-5" /> Connect Me With an Expert
                           </>
                         )}
                       </button>
                       
                       <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-6 text-[13px] font-bold text-gray-700">
                          <div className="flex items-center gap-1.5">
                             <CheckCircle2 className="w-[18px] h-[18px] text-[#22C55E]" /> 100% Free Guidance
                          </div>
                          <div className="flex items-center gap-1.5">
                             <CheckCircle2 className="w-[18px] h-[18px] text-[#22C55E]" /> Quick Response
                          </div>
                          <div className="flex items-center gap-1.5">
                             <CheckCircle2 className="w-[18px] h-[18px] text-[#22C55E]" /> Trusted by Thousands of Students
                          </div>
                       </div>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-view"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ type: "spring", duration: 0.6, bounce: 0.35 }}
                  className="flex flex-col items-center justify-center text-center px-8 py-20 min-h-[500px]"
                >
                  <div className="relative mb-8">
                     <motion.div 
                       initial={{ scale: 0 }}
                       animate={{ scale: 1 }}
                       transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                       className="w-24 h-24 bg-[#22C55E]/10 rounded-full flex items-center justify-center"
                     >
                        <CheckCircle2 className="w-12 h-12 text-[#22C55E]" strokeWidth={2.5} />
                     </motion.div>
                     <motion.div 
                       animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                       transition={{ duration: 2, repeat: Infinity }}
                       className="absolute inset-0 bg-[#22C55E]/20 rounded-full scale-110"
                     />
                  </div>

                  <h2 className="text-3xl font-extrabold text-[#111827] mb-4">Submission Successful!</h2>
                  <p className="text-[16px] text-gray-600 max-w-[500px] leading-relaxed mb-10">
                    Thank you, <span className="font-bold text-[#1E2D4A]">{submittedUser}</span>! <br />
                    We have received your details. One of our expert advisors will call you <span className="font-bold text-[#6B46C1]">shortly</span> to guide you through your {submittedService} journey.
                  </p>

                  <button 
                    onClick={onClose}
                    className="bg-[#1E2D4A] hover:bg-[#111827] text-white px-10 py-3 rounded-full font-bold text-[14px] transition-all shadow-md"
                  >
                    Got it, Thanks!
                  </button>

                  <div className="mt-12 flex items-center gap-2 text-gray-400 font-medium text-[13px]">
                     <Phone className="w-4 h-4" /> 24/7 Priority Candidate Support
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CheckEligibilityModal;
