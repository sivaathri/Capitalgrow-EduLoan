import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import Benefits from './components/Benefits';
import Countries from './components/Countries';
import BankPartners from './components/BankPartners';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="relative selection:bg-accent selection:text-primary">
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <About />
        <Features />
        <WhyChooseUs />
        <Benefits />
        <Countries />
        <BankPartners />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

export default App;
