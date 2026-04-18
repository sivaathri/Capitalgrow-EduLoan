import React from 'react';
import { motion } from 'framer-motion';
import LeadForm from './LeadForm';
import heroStudent from '../assets/hero2.webp'; 

const Hero = () => {
  return (
    <section className="relative min-h-screen  flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 inset-x-0 h-96  pointer-events-none" />
      <div className="absolute -left-64 -top-64 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-64 -bottom-64 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none" />

      {/* Background Image Container (Subtle and side-placed) */}
      <div className="absolute top-20 right-0 w-full lg:w-1/2 h-full z-0   pointer-events-none overflow-hidden hidden md:block">
        <img 
          src={heroStudent} 
          alt="Study Abroad" 
          className="w-full h-220 object-contain object-right"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          
         

          {/* Right Side: The Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-1/2 max-w-xl mx-auto lg:mx-0"
          >
            <LeadForm isHero={true} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
