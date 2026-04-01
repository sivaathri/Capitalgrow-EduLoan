import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Import Bank Logos
import axLogo from '../assets/AxisBank logo.png';
import icLogo from '../assets/ICICI Bank.png';
import sbiLogo from '../assets/sbi.png';
import hdfcLogo from '../assets/credila.png'; // HDFC Credila
import bobLogo from '../assets/bob.png';
import yesLogo from '../assets/YESBANKLOGO.png';
import avLogo from '../assets/Avanse Financial Services logo.png';
import auxLogo from '../assets/AUXILO logo.png';
import incLogo from '../assets/InCred! logo.png';
import pwnLogo from '../assets/Poonawalla Fincorp logo.png';
import indLogo from '../assets/indian_bank.png';
import iobLogo from '../assets/iob.png';

const BankPartners = () => {
  const banks = [
    { name: "Axis Bank", img: axLogo },
    { name: "ICICI Bank", img: icLogo },
    { name: "SBI", img: sbiLogo },
    { name: "HDFC Credila", img: hdfcLogo },
    { name: "Bank of Baroda", img: bobLogo },
    { name: "Yes Bank", img: yesLogo },
    { name: "Avanse", img: avLogo },
    { name: "Auxilo", img: auxLogo },
    { name: "InCred", img: incLogo },
    { name: "Poonawalla", img: pwnLogo },
    { name: "Indian Bank", img: indLogo },
    { name: "IOB", img: iobLogo }
  ];

  return (
    <section id="banks" className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <style>
          {`
            .logo-slider-custom .swiper-wrapper {
              transition-timing-function: linear !important;
            }
          `}
        </style>
        
        <div className="flex flex-col items-center gap-6 mb-16 text-center">
          
          <div className="relative inline-block mb-4">
            {/* Left Sparks */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
              <div className="flex flex-col gap-1.5 -rotate-[20deg]">
                <div className="w-3.5 h-1 bg-blue-600 rounded-full"></div>
                <div className="w-3.5 h-1 bg-orange-500 rounded-full"></div>
                <div className="w-3.5 h-1 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] px-4">Our Banking Partners</h2>

            {/* Right Sparks */}
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
              <div className="flex flex-col gap-1.5 rotate-[20deg]">
                <div className="w-3.5 h-1 bg-blue-600 rounded-full"></div>
                <div className="w-3.5 h-1 bg-orange-500 rounded-full"></div>
                <div className="w-3.5 h-1 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <p className="text-xl text-slate-500 font-medium">A variety of top lenders you can choose from</p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          speed={1200}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={true}
          breakpoints={{
            480: { slidesPerView: 3.5, spaceBetween: 24 },
            640: { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
            1280: { slidesPerView: 6, spaceBetween: 40 },
          }}
          className="logo-slider-custom items-center py-10"
        >
          {banks.map((bank, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <div className="bg-white border border-slate-100 p-2 md:p-4 rounded-2xl w-full h-40 md:h-52 flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group bg-white/50 backdrop-blur-sm">
                <img 
                  src={bank.img} 
                  alt={`${bank.name} Logo`} 
                  className="w-full h-full max-w-[200px] max-h-[110px] object-contain transition-all duration-500 scale-100 group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BankPartners;
