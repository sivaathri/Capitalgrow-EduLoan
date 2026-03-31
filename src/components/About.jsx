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
    <section id="banks" className="py-12 bg-white border-b border-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="relative inline-block mb-2">
            <h2 className="text-4xl md:text-5xl font-black text-[#1E2D4A]">Our Banking Partners</h2>
          </div>
          <p className="text-lg text-slate-400 font-medium">We collaborate with top lenders to provide you with the best financial solutions.</p>
        </div>

      </div>
    </section>
  );
};

export default About;
