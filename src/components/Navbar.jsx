import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = ({ onCheckEligibility }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-0 bg-white shadow-md' : 'py-0 bg-white border-b border-slate-100'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo - Matching UniCreds/GyanDhan clean branding */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 cursor-pointer shrink-0"
        >
          <img 
            src={logo} 
            alt="Capital Grow" 
            className="h-16 md:h-20 w-auto object-contain" 
          />
        </motion.div>
      </div>
    </nav>
  );
  
};

export default Navbar;
