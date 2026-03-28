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
    <section id="banks" className="py-20 bg-primary/40 border-y border-white/5 relative group">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-accent text-[10px] uppercase tracking-[0.6em] font-black mb-4">Official Lending Partners</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white/80">Our Financial <span className="text-accent">Ecosystem.</span></h2>
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
            <SwiperSlide key={i} className="flex items-center justify-center py-4">
              <div className="glass p-8 rounded-[2rem] w-full aspect-[3/1.5] flex flex-col items-center justify-center border-white/5 transition-all duration-300 hover:bg-white/10 hover:border-accent/40 grayscale group-hover:grayscale-0 active:scale-95 cursor-default">
                <div className="text-xl md:text-2xl font-black text-white/60 tracking-tighter uppercase italic">{bank.name}</div>
                <div className="text-[8px] uppercase font-bold tracking-[0.2em] text-accent/30 mt-2">{bank.type}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BankPartners;
