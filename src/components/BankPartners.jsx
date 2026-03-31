import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const BankPartners = () => {
  const banks = [
    { name: "SBI", type: "Public Sector Bank" },
    { name: "ICICI BANK", type: "Private Sector Bank" },
    { name: "HDFC BANK", type: "Private Sector Bank" },
    { name: "AXIS BANK", type: "Private Sector Bank" },
    { name: "BANK OF BARODA", type: "Public Sector Bank" },
    { name: "IDFC FIRST", type: "Private Sector Bank" },
    { name: "KOTAK MAHINDRA", type: "Private Sector Bank" },
    { name: "RESERVE BANK OF INDIA", type: "Central Bank" },
    { name: "UNION BANK", type: "Public Sector Bank" },
    { name: "CANARA BANK", type: "Public Sector Bank" }
  ];

  return (
    <section id="banks" className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center mb-20 text-center">
          
          <div className="relative inline-block mb-4">
            {/* Left Sparks */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
              <div className="flex flex-col gap-1.5 -rotate-[20deg]">
                <div className="w-3.5 h-1 bg-blue-600 rounded-full"></div>
                <div className="w-3.5 h-1 bg-orange-500 rounded-full"></div>
                <div className="w-3.5 h-1 bg-pink-500 rounded-full"></div>
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
          spaceBetween={40}
          slidesPerView={2}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="logo-slider-custom items-center"
        >
          {banks.map((bank, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center py-4 px-2">
              <div className="bg-white border border-slate-100 p-8 rounded-2xl w-full flex flex-col items-center justify-center shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] hover:-translate-y-1 active:scale-95 cursor-default">
                <div className="text-xl md:text-2xl font-black text-[#1E2D4A] tracking-tighter uppercase">{bank.name}</div>
                <div className="text-[9px] uppercase font-bold tracking-[0.2em] text-slate-400 mt-2">{bank.type}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BankPartners;
