import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  IndianRupee, 
  TrendingUp, 
  CalendarClock, 
  Zap, 
  Globe2,
  MessageSquareText,
  FileStack,
  ShieldEllipsis,
  BadgeCheck,
  ArrowRight,
  Sparkles,
  Plus,
  Minus
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

import personalLoanIcon from '../assets/personal_loan.png';
import businessLoanIcon from '../assets/business_loan.png';
import homeLoanIcon from '../assets/home_loan.png';
import abroadEducationLoanIcon from '../assets/abroad_education_loan.png';
import carLoanIcon from '../assets/car_loan.png';
import insuranceIcon from '../assets/insurance.png';
import forexIcon from '../assets/forex.png';
import hero1 from '../assets/hero1.png';

const Features = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const steps = [
    { id: "01", title: "Consultation", desc: "Profile evaluation & university selection.", icon: <MessageSquareText className="w-6 h-6" />, color: "text-blue-600 border-blue-100 bg-blue-50" },
    { id: "02", title: "Documentation", desc: "Digital collection of financial proofs.", icon: <FileStack className="w-6 h-6" />, color: "text-indigo-600 border-indigo-100 bg-indigo-50" },
    { id: "03", title: "Loan Sanction", icon: <ShieldEllipsis className="w-6 h-6" />, desc: "Fast approval from partner banks.", color: "text-sky-600 border-sky-100 bg-sky-50" },
    { id: "04", title: "Disbursement", desc: "Immediate payment to university.", icon: <BadgeCheck className="w-6 h-6" />, color: "text-emerald-600 border-emerald-100 bg-emerald-50" }
  ];

  const loanFeatures = [
    { title: "Loan Coverage", content: "Covers tuition fees, living expenses, travel costs, study materials, and insurance." },
    { title: "Loan Amount", content: "Usually ranges from 20 lakhs to crore depending on the lender and course." },
    { title: "Collateral Requirement", content: "Can be secured (with property, FD, etc.) or unsecured (no collateral, but with co-applicant)." },
    { title: "Interest Rates", content: "Floating interest, typically 9% to 13% per annum depending on bank/NBFC." },
    { title: "Moratorium Period", content: "No repayment during the study period + (6-12 months) after course completion." },
    { title: "Repayment Tenure", content: "Flexible, usually 7-12 years after moratorium." },
    { title: "Processing Time", content: "Public banks take 2-3 weeks; private lenders may approve in 3-7 working days." },
    { title: "Currency Disbursal", content: "Disbursed in INR or foreign currency directly to university." },
    { title: "Prepayment & Foreclosure", content: "Most banks allow prepayment / foreclosure with no penalty." },
    { title: "Coverage of Countries", content: "Majorly USA, UK, France, Canada, Australia, New Zealand, Germany, Ireland, Singapore, etc." }
  ];

  const otherServices = [
    { name: "Personal Loan", icon: personalLoanIcon },
    { name: "Business Loan", icon: businessLoanIcon },
    { name: "Home Loan & Mortgage Loan", icon: homeLoanIcon },
    { name: "Abroad Education Loan", icon: abroadEducationLoanIcon },
    { name: "Car Loan", icon: carLoanIcon },
    { name: "Insurance", icon: insuranceIcon },
    { name: "Forex", icon: forexIcon },
  ];

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
    <section id="features" className="pb-24 pt-0 bg-white relative">
      <div className="container mx-auto max-w-7xl">
        {/* Other Services Section */}
        <div className="mb-24 px-6 md:px-0">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-slate-100"></div>
            <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-[0.3em]">Other Services</h2>
            <div className="h-px flex-1 bg-slate-100"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {otherServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, type: "spring", stiffness: 300, damping: 15 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-28 h-28 mb-4 rounded-3xl bg-white border border-slate-100 flex items-center justify-center p-4 transition-colors duration-500 group-hover:bg-sky-50 group-hover:border-sky-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_40px_rgba(14,165,233,0.1)]">
                  <img src={service.icon} alt={service.name} className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="text-sm font-extrabold text-[#1E2D4A] leading-tight max-w-[140px] group-hover:text-sky-600 transition-colors duration-300">
                  {service.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How it Works Section */}
        <div className="mb-24 py-16 bg-white border-y border-slate-50 relative rounded-[40px] px-8 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-black text-[#1E2D4A] mb-3">
                How it <span className="text-blue-600">Works?</span>
              </h2>
              <p className="text-slate-500 font-medium font-bold italic">A technology-first approach to international education funding.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-16">
            <div className="hidden lg:block absolute top-8 left-12 right-12 h-px bg-slate-100 -z-10" />

            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-6 group"
              >
                <div className={`w-16 h-16 shrink-0 rounded-2xl border ${step.color} flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 relative`}>
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1E2D4A] text-white text-[10px] font-black rounded-lg flex items-center justify-center">
                    {step.id}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-black text-[#1E2D4A] mb-1 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-sm font-medium text-slate-400 group-hover:text-slate-500 transition-colors leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden group bg-[#0F172A] rounded-[32px] p-1 shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-600/10 blur-[60px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="flex flex-col md:flex-row items-center gap-8 max-w-2xl">
                <div className="shrink-0 w-20 h-20 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
                  <Sparkles className="w-10 h-10 text-blue-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-transform duration-500" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">Check Loan Eligibility in 2 Mins</h3>
                  <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-md">
                    Secure your <span className="text-white underline decoration-blue-500 underline-offset-4">Collateral-Free</span> education loan with instant digital processing.
                  </p>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group/btn flex items-center gap-4 bg-green-600 hover:bg-green-500 text-white px-12 py-6 rounded-2xl font-black text-xl shadow-[0_10px_30px_rgba(22,163,74,0.3)] transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                <span>Apply Now</span>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </div>
                <span className="absolute inset-0 rounded-2xl ring-4 ring-green-600/30 animate-ping opacity-0 group-hover/btn:opacity-100"></span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Unique Benefits Grid Section - Compact */}
        <div className="mb-16 py-10 bg-white border border-slate-100 rounded-[32px] shadow-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-8 md:px-14">
            {/* Left Image Side - Refined */}
            <div className="lg:w-5/12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-[32px] overflow-hidden shadow-2xl group"
              >
                <img src={hero1} alt="Education Benefits" className="w-full h-[360px] object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
              </motion.div>
            </div>

            {/* Right Content Side - Optimized */}
            <div className="lg:w-7/12">
               <div className="mb-6 text-center lg:text-left">
                 <h2 className="text-2xl md:text-3xl font-black text-[#1E2D4A] mb-3">Unique Benefits of <span className="text-blue-600">Education Loan</span></h2>
                 <p className="text-sm text-slate-500 font-medium">Unlock specialized advantages engineered for your success abroad.</p>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden shadow-inner">
                 {[
                   { id: 1, label: "No Margin Money Required", icon: <TrendingUp className="w-5 h-5" /> },
                   { id: 2, label: "Pre-Visa Disbursement", icon: <CalendarClock className="w-5 h-5" /> },
                   { id: 3, label: "Tax Benefit Under Sec 80-E", icon: <IndianRupee className="w-5 h-5" /> },
                   { id: 4, label: "No Collateral Required", icon: <ShieldCheck className="w-5 h-5" /> },
                   { id: 5, label: "100% Finance", icon: <Zap className="w-5 h-5" /> },
                   { id: 6, label: "Attractive ROI", icon: <Globe2 className="w-5 h-5" /> },
                 ].map((benefit, idx) => (
                   <div key={idx} className="bg-white p-5 md:p-6 flex flex-col items-center lg:items-start text-center lg:text-left gap-3 hover:bg-slate-50 transition-colors cursor-default">
                     <div className="text-blue-600 bg-blue-50 p-2.5 rounded-lg border border-blue-100">
                       {benefit.icon}
                     </div>
                     <span className="text-[13px] font-black text-[#1E2D4A] leading-tight">
                       {benefit.label}
                     </span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>

        {/* Why Capitall Grow Block */}
        <div className="mb-24 bg-slate-50 border border-slate-100 rounded-[32px] p-8 md:p-12">
          <div className="max-w-4xl mx-auto md:mx-0">
            <h2 className="text-3xl font-black text-[#1E2D4A] mb-8">Why Capitall Grow?</h2>
            <div className="space-y-6">
              {[
                "Through strong negotiations with leading banks & NBFCs, we ensure the most competitive rates for you.",
                "Quick and hassle-free loan approvals, so you can focus on your studies without delay.",
                "We work end-to-end with public / private banks and NBFCs to facilitate the foreign education loan processing and approvals on time."
              ].map((point, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ShieldCheck className="w-4 h-4 text-sky-600" />
                  </div>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed italic border-l-2 border-sky-200 pl-4">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Loan Features Static List */}
        <div className="mb-24 bg-white border border-slate-100 rounded-[32px] p-8 md:p-14 shadow-sm">
          <div className="mb-12">
            <h2 className="text-3xl md:text-3xl font-black text-[#1E2D4A]">Key features of an abroad education loan :</h2>
          </div>

          <div className="space-y-8">
            {loanFeatures.map((feature, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-4 lg:gap-6 group"
              >
                <div className="text-xl font-bold text-sky-600/50 shrink-0 w-8 md:w-10">
                  {idx + 1}.
                </div>
                <div className="flex-1">
                  <p className="text-lg leading-relaxed text-slate-600">
                    <span className="font-black text-[#1E2D4A] tracking-tight mr-2 underline decoration-sky-500/20 underline-offset-4">{feature.title} —</span>
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
