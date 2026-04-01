import React from "react";
import { motion } from "framer-motion";
import sbiLogo from "../assets/sbi.png";
import bobLogo from "../assets/bob.png";
import indianBankLogo from "../assets/indian_bank.png";
import iobLogo from "../assets/iob.png";
import credilaLogo from "../assets/credila.png";
import axisLogo from "../assets/AxisBank logo.png";
import iciciLogo from "../assets/ICICI Bank.png";
import poonawallaLogo from "../assets/Poonawalla Fincorp logo.png";
import incredLogo from "../assets/InCred! logo.png";
import auxiloLogo from "../assets/AUXILO logo.png";
import avanseLogo from "../assets/Avanse Financial Services logo.png";
import yesBankLogo from "../assets/YESBANKLOGO.png";

const About = () => {
  const bankLogos = [
    { name: "SBI", image: sbiLogo, color: "#29AAD0" },
    { name: "Bank of Baroda", image: bobLogo, color: "#F15A22" },
    { name: "Indian Bank", image: indianBankLogo, color: "#004B8D" },
    { name: "IOB", image: iobLogo, color: "#003A70" },
    { name: "Credila", image: credilaLogo, color: "#DB0011" },
    { name: "Axis Bank", image: axisLogo, color: "#97124B" },
    { name: "ICICI Bank", image: iciciLogo, color: "#F37021" },
    { name: "Poonawalla", image: poonawallaLogo, color: "#004B8D" },
    { name: "InCred", image: incredLogo, color: "#FFCE00" },
    { name: "AUXILO", image: auxiloLogo, color: "#00945E" },
    { name: "Avanse", image: avanseLogo, color: "#003A70" },
    { name: "YES Bank", image: yesBankLogo, color: "#004B8D" },
  ];

  return (
    <section
      id="banks"
      className="py-12 bg-white border-b border-slate-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <div className="flex flex-col items-center mb-8">
          <div className="relative inline-block mb-3">
            <h2 className="text-4xl md:text-5xl font-black text-[#1E2D4A]">
              Our Banking Partners
            </h2>
          </div>
          <p className="text-lg text-slate-400 font-medium max-w-2xl">
            We collaborate with top lenders to provide you with the best
            financial solutions.
          </p>
        </div>
      </div>

      <div className="mt-12 overflow-hidden relative py-12 bg-slate-50/30">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center flex-shrink-0">
              {bankLogos.concat(bankLogos).map((bank, index) => (
                <div 
                  key={`${index}-${i}`}
                  className="flex flex-col items-center justify-center group flex-shrink-0"
                >
                  <div className="h-24 w-52 flex flex-col items-center justify-center bg-white rounded-2xl border border-slate-100 p-4 shadow-[0_4px_12px_rgba(30,45,74,0.05)] transition-all duration-300 group-hover:shadow-[0_12px_32px_rgba(30,45,74,0.1)] group-hover:-translate-y-4 hover:border-[#F37021]/20 overflow-hidden">
                    {bank.image ? (
                      <div className="w-full h-full flex items-center justify-center p-2">
                        <img 
                          src={bank.image} 
                          alt={bank.name} 
                          className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 scale-110"
                        />
                      </div>
                    ) : (
                      <>
                        <div 
                          className="w-1.5 h-1.5 rounded-full mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                          style={{ backgroundColor: bank.color }}
                        ></div>
                        <span className="text-xl font-black text-[#1E2D4A] tracking-tight">{bank.name}</span>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400 font-bold mt-1">Partner</div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
