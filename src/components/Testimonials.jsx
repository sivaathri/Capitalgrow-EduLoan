import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, FreeMode } from 'swiper/modules';
import { Quote, Star, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  const reviews = [
    {
      name: "Aditya Verma",
      university: "Stanford University, USA",
      text: "Capital Grow made my Stanford dream possible. The sanction was ready in just 48 hours without any property collateral. Unbelievable speed and service!",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=aditya"
    },
    {
      name: "Sneha Reddy",
      university: "London School of Economics, UK",
      text: "The personalized assistance for my LSE loan was exceptional. They handled everything from documentation to disbursement while I focused on my visa.",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=sneha"
    },
    {
      name: "Rohan Das",
      university: "University of Toronto, Canada",
      text: "Highly professional team. They helped me compare multiple bank offers and pick the one with the lowest ROI and best repayment terms.",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=rohan"
    },
    {
      name: "Priya Malhotra",
      university: "Technical University of Munich, Germany",
      text: "Even for European universities with lower costs, they provided a tailored plan for living expenses. Highly recommended for study abroad seekers!",
      rating: 5,
      img: "https://i.pravatar.cc/150?u=priya"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-secondary text-sm font-black uppercase tracking-[0.6em] mb-6 block"
            >
              Student Success Stories
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl lg:text-9xl font-black uppercase italic tracking-tighter leading-none mb-10 text-primary italic"
            >
              Voices of <br /> <span className="text-secondary italic underline decoration-secondary/10 decoration-8 underline-offset-10 pointer-events-none">Dreams.</span>
            </motion.h2>
          </div>
          <div className="hidden lg:flex gap-6 mb-4">
             <button className="swiper-prev w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center hover:bg-secondary hover:text-white transition-all shadow-xl group">
                <ChevronLeft className="group-hover:scale-125 transition-transform" />
             </button>
             <button className="swiper-next w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center hover:bg-secondary hover:text-white transition-all shadow-xl group">
                <ChevronRight className="group-hover:scale-125 transition-transform" />
             </button>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay, Navigation, FreeMode]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          navigation={{
            prevEl: '.swiper-prev',
            nextEl: '.swiper-next',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 2.5 }
          }}
          className="!pb-24 !px-4"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white border border-slate-100 p-12 rounded-[4rem] relative group shadow-[0_30px_60px_rgba(15,23,42,0.05)] h-full overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex items-center gap-6 mb-10">
                   <div className="relative">
                      <img src={review.img} alt={review.name} className="w-20 h-20 rounded-3xl border-2 border-white shadow-xl" />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-xl flex items-center justify-center shadow-lg border-2 border-white">
                         <GraduationCap size={16} className="text-white" />
                      </div>
                   </div>
                   <div>
                      <h4 className="text-2xl font-black text-primary uppercase italic tracking-tighter italic leading-none">{review.name}</h4>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mt-2 shadow-sm italic">{review.university}</p>
                   </div>
                </div>

                <div className="mb-10 flex gap-2">
                   {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent animate-pulse" />
                   ))}
                </div>

                <p className="text-lg text-slate-500 font-medium italic leading-relaxed font-heading underline decoration-slate-100 decoration-offset-8">
                  "{review.text}"
                </p>

                <div className="absolute top-12 right-12 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                   <Quote className="w-20 h-20 text-secondary" />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Decorative Badge */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-secondary/5 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full -z-0"></div>
    </section>
  );
};

export default Testimonials;
