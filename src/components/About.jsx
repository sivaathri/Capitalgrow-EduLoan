import React from "react";
import { motion } from "framer-motion";
import bankPartnersImg from "../assets/bankpartner.png";

const About = () => {
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <img
            src={bankPartnersImg}
            alt="Our Banking Partners"
            className="w-full max-w-5xl h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
