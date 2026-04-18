import React from 'react';
import { motion } from 'framer-motion';
// Import Bank Logos
import axLogo from '../assets/AxisBank logo.png';
import sbiLogo from '../assets/sbi.png';
import hdfcLogo from '../assets/credila.png';
import bobLogo from '../assets/bob.png';
import yesLogo from '../assets/YESBANKLOGO.png';
import avLogo from '../assets/Avanse Financial Services logo.png';
import auxLogo from '../assets/AUXILO logo.png';
import incLogo from '../assets/InCred! logo.png';
import icLogo from '../assets/ICICI Bank.png';
import pwnLogo from '../assets/Poonawalla Fincorp logo.png';
import indLogo from '../assets/indian_bank.png';
import iobLogo from '../assets/iob.png';
import ruLoansLogo from '../assets/ru loans.png';

const BankPartners = () => {
  const row1Banks = [
    { name: "SBI", img: sbiLogo },
    { name: "Axis Bank", img: axLogo },
    { name: "ICICI Bank", img: icLogo },
    { name: "Yes Bank", img: yesLogo },
    { name: "Poonawalla", img: pwnLogo },
    { name: "Auxilo", img: auxLogo },
    { name: "InCred", img: incLogo }
  ];

  const row2Banks = [
    { name: "Indian Bank", img: indLogo },
    { name: "IOB", img: iobLogo },
    { name: "Avanse", img: avLogo },
    { name: "HDFC Credila", img: hdfcLogo },
    { name: "Bank of Baroda", img: bobLogo }
  ];

  return (
    <section id="banks" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1400px]">

        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#1E2D4A]">Our Banking Partners</h2>
          <p className="text-lg text-slate-400 font-medium">We collaborate with top lenders to provide you with the best financial solutions.</p>
        </div>

        {/* Desktop View: Exact Grid Layout */}
        <div className="hidden lg:flex flex-col gap-6">
          <div className="grid grid-cols-7 gap-4">
            {row1Banks.map((bank, i) => (
              <div key={i} className="bg-white border border-slate-200 p-4 rounded-xl h-28 flex items-center justify-center shadow-sm hover:shadow-md transition-all">
                <img
                  src={bank.img}
                  alt={bank.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <div className="grid grid-cols-5 gap-4 w-[71.42%]"> {/* 5/7 of the width to match the columns above */}
              {row2Banks.map((bank, i) => (
                <div key={i} className="bg-white border border-slate-200 p-4 rounded-xl h-28 flex items-center justify-center shadow-sm hover:shadow-md transition-all">
                  <img
                    src={bank.img}
                    alt={bank.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View: Responsive Grid */}
        <div className="lg:hidden grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...row1Banks, ...row2Banks].map((bank, i) => (
            <div key={i} className="bg-white border border-slate-200 p-4 rounded-xl h-24 flex items-center justify-center shadow-sm">
              <img
                src={bank.img}
                alt={bank.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 mb-4 mt-20">
          <div className="h-px flex-1 bg-slate-100"></div>
          <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-[0.3em]">DSA Partner</h2>
          <div className="h-px flex-1 bg-slate-100"></div>
        </div>

        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all flex items-center justify-center w-64 h-32"
          >
            <img src={ruLoansLogo} alt="RU Loans" className="max-w-full max-h-100 object-contain" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BankPartners;
