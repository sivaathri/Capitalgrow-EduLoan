import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy loading below-the-fold components securely boosts Lighthouse Scores
const About = lazy(() => import('./components/About'));
const Features = lazy(() => import('./components/Features'));
const Process = lazy(() => import('./components/Process'));
const BankPartners = lazy(() => import('./components/BankPartners'));
const Footer = lazy(() => import('./components/Footer'));
const BackToTop = lazy(() => import('./components/BackToTop'));
const LoanStats = lazy(() => import('./components/LoanStats'));

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
        </div>
        <Footer />
        <BackToTop />
      </Suspense>
    </div>
  );
}

export default App;
