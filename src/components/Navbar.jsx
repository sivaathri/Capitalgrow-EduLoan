import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = ({ onCheckEligibility }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Abroad Education', href: '#features' },
    { name: 'About Us', href: '#about' },
    { name: 'Loan Calculator', href: '#' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ];

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

        {/* <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[14px] font-bold text-[#1E2D4A]/70 hover:text-[#F8B036] transition-colors flex items-center gap-1 group"
            >
              {link.name}
              {link.name === 'Abroad Education' && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" /> }
            </a>
          ))}
          <button 
            onClick={onCheckEligibility}
            className="bg-gradient-to-r from-[#F8B036] to-[#FFAF00] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Check Eligibility
          </button>
        </div> */}

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-slate-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-b border-slate-100 shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-bold text-slate-800 hover:text-green-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                 <button className="py-4 border border-slate-200 rounded-lg font-bold">Login</button>
                  <button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onCheckEligibility();
                    }}
                    className="py-4 bg-gradient-to-r from-[#F8B036] to-[#FFAF00] text-white rounded-lg font-bold"
                  >
                    Apply Now
                  </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
