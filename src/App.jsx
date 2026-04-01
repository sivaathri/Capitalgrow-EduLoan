import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy loading below-the-fold and modal components securely boosts Lighthouse Scores
const About = lazy(() => import('./components/About'));
const Features = lazy(() => import('./components/Features'));
const Process = lazy(() => import('./components/Process'));
const BankPartners = lazy(() => import('./components/BankPartners'));
const Footer = lazy(() => import('./components/Footer'));
const BackToTop = lazy(() => import('./components/BackToTop'));
const CheckEligibilityModal = lazy(() => import('./components/CheckEligibilityModal'));

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Show the Eligibility Modal automatically on first load
  useEffect(() => {
    // A tiny delay ensures all animations and layouts settle for a smoother experience
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1000); 
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative selection:bg-accent selection:text-primary">
      <Navbar onCheckEligibility={() => setIsModalOpen(true)} />
      <Hero onCheckEligibility={() => setIsModalOpen(true)} />
      
      {/* Lazy Loaded Below the Fold Elements */}
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <div className="relative z-10">
          <About />
          <Process onApply={() => setIsModalOpen(true)} />
          <Features />
          <BankPartners />
        </div>
        <Footer />
        <BackToTop />
        <CheckEligibilityModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </Suspense>
    </div>
  );
}

export default App;
