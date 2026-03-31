import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import aboutImage from '../assets/about_office.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';


const About = () => {
  return (
    <section id="banks" className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
         <div className="container mx-auto px-6 max-w-7xl">
           <div className="flex flex-col items-center mb-20 text-center">
             
             <div className="relative inline-block mb-4">
              
   
               <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] px-4">Our Banking Partners</h2>
   
              
             </div>
   
             <p className="text-xl text-slate-500 font-medium">A variety of top lenders you can choose from</p>
           </div>
   
        
         </div>
       </section>
  );
};

export default About;
