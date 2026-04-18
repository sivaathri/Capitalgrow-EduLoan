import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { motion } from 'framer-motion';
// Lazy loading below-the-fold components securely boosts Lighthouse Scores
const About = lazy(() => import('./components/About'));
const Features = lazy(() => import('./components/Features'));
const Process = lazy(() => import('./components/Process'));
const BankPartners = lazy(() => import('./components/BankPartners'));
const Footer = lazy(() => import('./components/Footer'));
const BackToTop = lazy(() => import('./components/BackToTop'));
const LoanStats = lazy(() => import('./components/LoanStats'));

import personalLoanIcon from './assets/personal_loan.png';
import businessLoanIcon from './assets/business_loan.png';
import homeLoanIcon from './assets/home_loan.png';
import abroadEducationLoanIcon from './assets/abroad_education_loan.png';
import carLoanIcon from './assets/car_loan.png';
import insuranceIcon from './assets/insurance.png';
import forexIcon from './assets/forex.png';


const otherServices = [
  { name: "Personal Loan", icon: personalLoanIcon },
  { name: "Business Loan", icon: businessLoanIcon },
  { name: "Home Loan & Mortgage Loan", icon: homeLoanIcon },
  { name: "Abroad Education Loan", icon: abroadEducationLoanIcon },
  { name: "Car Loan", icon: carLoanIcon },
  { name: "Insurance", icon: insuranceIcon },
  { name: "Forex", icon: forexIcon },
];



function App() {
  const scrollToForm = () => {
    const form = document.getElementById('apply-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="relative selection:bg-accent selection:text-primary">
      <Navbar onCheckEligibility={scrollToForm} />
      <Hero />

      {/* Lazy Loaded Below the Fold Elements */}
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <div className="relative z-10">
          <LoanStats onCheckEligibility={scrollToForm} />
          <BankPartners />
          <Process onApply={scrollToForm} />
          <Features onApply={scrollToForm} />
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-slate-100"></div>
            <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-[0.3em]">Other Services</h2>
            <div className="h-px flex-1 bg-slate-100"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-20">
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
        <Footer />
        <BackToTop />
      </Suspense>
    </div>
  );
}

export default App;
