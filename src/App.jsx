import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import Benefits from './components/Benefits';
import Countries from './components/Countries';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import CheckEligibilityModal from './components/CheckEligibilityModal';

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="relative selection:bg-accent selection:text-primary">
      <Navbar onCheckEligibility={() => setIsModalOpen(true)} />
      <Hero onCheckEligibility={() => setIsModalOpen(true)} />
      <div className="relative z-10">
        <About />
        <Features />
        <WhyChooseUs />
        <Benefits />
        <Countries />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <CheckEligibilityModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default App;
