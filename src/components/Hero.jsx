import React from 'react';
import { motion } from 'framer-motion';
import LeadForm from './LeadForm';
import heroStudent from '../assets/hero2.webp'; 

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 inset-x-0 h-96 pointer-events-none" />
      <div className="absolute -left-64 -top-64 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-64 -bottom-64 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-3xl pointer-events-none" />

      {/* Background Image Container */}
      <div className="absolute top-0 right-0 w-full lg:w-[45%] h-full z-0 pointer-events-none overflow-hidden hidden md:block">
        <img 
          src={heroStudent} 
          alt="Student" 
          className="w-full h-full object-contain object-bottom-right opacity-90"
        />
      </div>

      <div className="container ps-0 lg:ps-12 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-end gap-12">
          
          {/* Form Container: Moved to the left and widened slightly */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[55%] xl:w-[50%] p-4"
          >
            <LeadForm isHero={true} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
