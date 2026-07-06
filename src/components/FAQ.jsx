import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

const FAQ = ({ onApply }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How can I secure the best education loan for study abroad in Pondicherry?",
      answer: "Securing a study abroad education loan Pondicherry is seamless with Capital Grow. We analyze your academic profile and financial background to guide you to the perfect lender, ensuring you receive the best education loan for study abroad in Pondicherry with minimal hassle.",
      keywords: ["best education loan for study abroad in Pondicherry", "study abroad education loan Pondicherry"]
    },
    {
      question: "Is it possible to get an education loan without collateral for Germany?",
      answer: "Yes, getting an education loan without collateral for Germany is fully possible. Capital Grow specializes in securing a Germany education loan Pondicherry without any security or collateral for eligible students, covering your tuition and block account requirements up to ₹50 lakh.",
      keywords: ["education loan without collateral for Germany", "Germany education loan Pondicherry"]
    },
    {
      question: "Can I get a study abroad loan up to ₹50 lakh?",
      answer: "Yes, eligible students can get a study abroad loan up to ₹50 lakh for their overseas education. Depending on the university, course level, and co-applicant profile, we assist you in securing a high-value student loan for international education.",
      keywords: ["study abroad loan up to ₹50 lakh", "student loan for international education"]
    },
    {
      question: "How do I get a low interest education loan Pondicherry?",
      answer: "To get a low interest education loan Pondicherry, we compare multiple financial institutions. Capital Grow helps you find the best bank for study abroad education loan in Pondicherry by comparing interest rates, processing fees, and moratorium periods to minimize your borrowing cost.",
      keywords: ["low interest education loan Pondicherry", "best bank for study abroad education loan in Pondicherry"]
    },
    {
      question: "What options are available for an abroad education loan without collateral Pondicherry?",
      answer: "For students who do not have property or assets to pledge, an abroad education loan without collateral Pondicherry is the best option. We partner with top NBFCs and private banks to offer unsecured student loans based on the co-applicant's income and the student's academic potential.",
      keywords: ["abroad education loan without collateral Pondicherry"]
    },
    {
      question: "Do you offer Canada student loan Pondicherry assistance?",
      answer: "Yes, we offer expert assistance for a Canada student loan Pondicherry. We help students arrange funding for tuition, living expenses (via GIC), and visa requirements, ensuring a smooth path for your Canadian academic dreams.",
      keywords: ["Canada student loan Pondicherry"]
    },
    {
      question: "How do I apply for a UK education loan Pondicherry?",
      answer: "Applying for a UK education loan Pondicherry is straightforward with our team. We guide you through the fast-track sanction processes that meet the strict financial evidence requirements of the UK Visas and Immigration (UKVI) department.",
      keywords: ["UK education loan Pondicherry"]
    },
    {
      question: "Why should I consult overseas education loan consultants Pondicherry?",
      answer: "Working with specialized overseas education loan consultants Pondicherry like Capital Grow ensures you avoid common application mistakes. As the premier education loan consultant in Pondicherry, we provide end-to-end study abroad loan assistance Pondicherry at absolutely zero cost to the student.",
      keywords: ["overseas education loan consultants Pondicherry", "education loan consultant in Pondicherry", "study abroad loan assistance Pondicherry"]
    },
    {
      question: "What is the best education loan for masters abroad?",
      answer: "The best education loan for masters abroad is typically a customized unsecured loan package that offers an interest-only moratorium period during your studies. We evaluate lenders to find the lowest interest rates and flexible repayment tenures for your postgraduate degree.",
      keywords: ["best education loan for masters abroad"]
    },
    {
      question: "Is there an education loan for students with low CIBIL score?",
      answer: "Yes, getting an education loan for students with low CIBIL score is achievable. We help you present a strong application by adding a creditworthy co-applicant, exploring collateral-based options, or pitching to specific private lenders who evaluate future earning potential.",
      keywords: ["education loan for students with low CIBIL score"]
    },
    {
      question: "How does Capital Grow support an education loan for higher studies in Pondicherry?",
      answer: "We provide end-to-end support for obtaining an education loan in Pondicherry or an education loan for higher studies in Pondicherry. From helping with document compilation to final disbursement, we coordinate with top banks on your behalf.",
      keywords: ["education loan in Pondicherry", "education loan for higher studies in Pondicherry"]
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full text-xs font-bold text-sky-600 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-[#1E2D4A] tracking-tight mb-4"
          >
            Frequently Asked <span className="text-sky-600">Questions</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium text-sm md:text-base max-w-xl mx-auto"
          >
            Find comprehensive information about study abroad loans, collateral policies, and local support in Pondicherry.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${
                  isOpen ? 'border-sky-200 ring-4 ring-sky-50' : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group"
                >
                  <div className="flex gap-4 items-start pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 transition-colors duration-300 ${
                      isOpen ? 'text-sky-500' : 'text-slate-400 group-hover:text-sky-500'
                    }`} />
                    <span className={`text-base font-black tracking-tight leading-snug transition-colors duration-300 ${
                      isOpen ? 'text-[#1E2D4A]' : 'text-slate-700 group-hover:text-[#1E2D4A]'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-sky-50 border-sky-200 text-sky-600' : 'bg-slate-50 border-slate-100 text-slate-400 group-hover:bg-sky-50 group-hover:border-sky-100 group-hover:text-sky-600'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 md:px-6 pb-6 pl-14 text-sm md:text-base leading-relaxed text-slate-600 font-medium border-t border-slate-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-lg shadow-slate-100/50"
        >
          <h3 className="text-xl md:text-2xl font-black text-[#1E2D4A] mb-3">
            Still Have Questions About Abroad Education Loans?
          </h3>
          <p className="text-slate-500 font-medium text-sm max-w-lg mx-auto mb-6">
            Get in touch with Capital Grow today for premium, zero-cost study abroad loan assistance in Pondicherry.
          </p>
          <button
            onClick={onApply}
            className="inline-flex items-center gap-2 bg-[#1E2D4A] hover:bg-[#111827] text-white px-8 py-3.5 rounded-full font-bold text-sm md:text-base transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <span>Connect with an Expert</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
