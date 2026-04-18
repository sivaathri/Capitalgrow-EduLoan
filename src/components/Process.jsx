import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Banknote, 
  UserRound, 
  FileUp, 
  BadgePercent, 
  FileCheck2,
  Check,
  Star,
  ArrowUp,
  Percent,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const StepIcon = ({ children, badge }) => (
  <div className="relative">
    {children}
    <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#FBD14D] rounded-full border-2 border-white flex items-center justify-center shadow-sm">
      {badge}
    </div>
  </div>
);

const Process = ({ onApply }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    { 
      title: "Check Loan Eligibility", 
      icon: (
        <StepIcon badge={<Check className="w-3 h-3 text-white" strokeWidth={4} />}>
          <Banknote className="w-10 h-10 text-[#00A36C]" strokeWidth={1.5} />
        </StepIcon>
      )
    },
    { 
      title: "Talk to Our Loan Experts", 
      icon: (
        <StepIcon badge={<Star className="w-3 h-3 text-white fill-white" strokeWidth={3} />}>
          <UserRound className="w-10 h-10 text-[#00A36C]" strokeWidth={1.5} />
        </StepIcon>
      )
    },
    { 
      title: "Submit Your Documents & Get Verified", 
      icon: (
        <StepIcon badge={<ArrowUp className="w-3 h-3 text-white" strokeWidth={4} />}>
          <FileUp className="w-10 h-10 text-[#00A36C]" strokeWidth={1.5} />
        </StepIcon>
      )
    },
    { 
      title: "Unlock the Best Interest Rates", 
      icon: (
        <StepIcon badge={<Percent className="w-3 h-3 text-white" strokeWidth={4} />}>
          <div className="relative">
             <div className="w-10 h-10 border-2 border-[#00A36C] rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border border-[#00A36C] rounded-md rotate-45" />
             </div>
          </div>
        </StepIcon>
      )
    },
    { 
      title: "Loan Approval & Sanction in 48 Hours*", 
      icon: (
        <StepIcon badge={<Check className="w-3 h-3 text-white" strokeWidth={4} />}>
          <FileCheck2 className="w-10 h-10 text-[#00A36C]" strokeWidth={1.5} />
        </StepIcon>
      )
    }
  ];

  const testimonials = [
    {
      name: "Vaibhav Desai",
      uni: "Stevens Institute of Technology, USA",
      text: "An alumnus of Stevens Institute of Technology, Vaibhav Desai was working as Data Engineer- SQL at Datavail Infotech. He later decided to pursue MS in US to open up many career opportunities. While articulating how he planned his MS in U...",
      image: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
    },
    {
      name: "Ashish Acharya",
      uni: "National College of Ireland, Ireland",
      text: "Ashish's life story includes working for multiple companies when he decided to pursue masters from abroad after realizing the boom in the analytics sector. He did his masters from National College of Ireland. In his story, Ashish also s...",
      image: "https://xsgames.co/randomusers/assets/avatars/male/45.jpg"
    },
    {
      name: "Yugali Gullapalli",
      uni: "University of Wisconsin-Madison, USA",
      text: "Yugali shares the excerpts from her journey's story of pursuing MS in Computer Systems and Networking, Wisconsin-Madison US. She wanted global exposure and thus chose to study abroad. She describes how she was facing issues with the spe...",
      image: "https://xsgames.co/randomusers/assets/avatars/female/24.jpg"
    },
    {
      name: "Rahul Sharma",
      uni: "University of Toronto, Canada",
      text: "Rahul's journey to Canada was made possible through expert guidance. He leveraged the competitive education loan market to secure a low-interest deal that covered everything from tuition to his initial stay in Toronto...",
      image: "https://xsgames.co/randomusers/assets/avatars/male/22.jpg"
    },
    {
       name: "Priya Patel",
       uni: "University of Melbourne, Australia",
       text: "Finding the right financial aid for Australia was a daunting task until Priya met the experts. They helped her navigate the complex documentation and secured a sanction in less than 48 hours, allowing her to focus on her visa...",
       image: "https://xsgames.co/randomusers/assets/avatars/female/12.jpg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Logic to show 3 cards centered around currentIndex
  const getVisibleTestimonials = () => {
    const indices = [
      (currentIndex - 1 + testimonials.length) % testimonials.length,
      currentIndex,
      (currentIndex + 1) % testimonials.length
    ];
    return indices.map(idx => ({ ...testimonials[idx], originalIndex: idx }));
  };

  return (
    <section id="process" className="pt-10 pb-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-[#1E2D4A]">
            How it <span className="text-blue-600">Works?</span>
          </h2>
        </div>

        {/* Process Steps Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-0 relative mb-32">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center text-center max-w-[180px] w-full group">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-24 h-24 rounded-[32px] bg-[#F1FDF7] border border-[#00A36C]/10 flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md transition-shadow"
                >
                  {step.icon}
                </motion.div>
                <h4 className="text-[17px] font-bold text-[#1E2D4A] leading-[1.3] tracking-tight">
                  {step.title}
                </h4>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden lg:flex flex-1 items-center justify-center pt-12">
                   <div className="w-full max-w-[80px] border-t border-dashed border-slate-800 relative">
                      <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2 h-2 border-r border-b border-slate-800 rotate-[-45deg]" />
                   </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="relative pt-20">
          <div className="absolute bottom-0 left-0 right-0 h-[520px] lg:h-[400px] bg-gradient-to-r from-[#8E7BBF] to-[#D5D1E8] rounded-tl-[100px] z-0" />
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 px-0 lg:px-12 h-[600px] lg:h-[500px]">
              
              <button 
                onClick={prevTestimonial}
                className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg hover:bg-slate-50 transition-all z-20 active:scale-90"
              >
                <ChevronLeft className="w-6 h-6 text-[#1E2D4A]" />
              </button>

              <div className="flex items-center justify-center w-full gap-8 overflow-visible">
                <AnimatePresence mode="popLayout" initial={false}>
                  {getVisibleTestimonials().map((testi, i) => (
                    <motion.div 
                      key={testi.name}
                      layout
                      initial={{ opacity: 0, x: i === 0 ? -100 : i === 2 ? 100 : 0, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0, 
                        scale: i === 1 ? 1.05 : 0.9,
                        zIndex: i === 1 ? 10 : 1,
                        filter: i === 1 ? 'blur(0px)' : 'blur(0.5px)'
                      }}
                      exit={{ opacity: 0, scale: 0.8, x: i === 0 ? -100 : 100 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className={`bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center relative ${i === 1 ? 'border-2 border-[#8E7BBF]/30' : 'opacity-70 lg:opacity-90'} w-[320px] md:w-[350px] shrink-0 h-[420px]`}
                    >
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                        <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
                      </div>

                      <div className="mt-12 space-y-1">
                        <h4 className="text-xl font-black text-[#1E2D4A] tracking-tight">{testi.name}</h4>
                        <p className="text-sm font-bold text-[#1E2D4A]/80">{testi.uni}</p>
                      </div>

                      <hr className="w-full my-6 border-slate-100" />

                      <p className="text-[14px] text-slate-600 leading-relaxed text-left flex-1 font-medium overflow-hidden line-clamp-6">
                        {testi.text}
                      </p>

                     
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <button 
                onClick={nextTestimonial}
                className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#4C3D82] rounded-full items-center justify-center shadow-lg hover:bg-[#3D316B] transition-all z-20 active:scale-90"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="mt-4 pb-16 flex flex-col items-center">
              <div className="relative flex items-center gap-6">
                <div className="flex flex-col gap-1.5 -rotate-12">
                   <div className="w-5 h-1.5 bg-[#FD6A6A] rounded-full translate-x-2" />
                   <div className="w-5 h-1.5 bg-[#4ED495] rounded-full" />
                   <div className="w-5 h-1.5 bg-[#5BB2FF] rounded-full translate-x-2" />
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-white text-center">
                  Our Customers. Our Asset
                </h2>

                <div className="flex flex-col gap-1.5 rotate-12">
                   <div className="w-5 h-1.5 bg-[#FD6A6A] rounded-full -translate-x-2" />
                   <div className="w-5 h-1.5 bg-[#4ED495] rounded-full" />
                   <div className="w-5 h-1.5 bg-[#5BB2FF] rounded-full -translate-x-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
