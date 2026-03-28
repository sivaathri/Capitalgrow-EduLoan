import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919123456789"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-10 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-[1.5rem] flex items-center justify-center shadow-[0_20px_50px_rgba(37,211,102,0.3)] group overflow-hidden border-2 border-white"
    >
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      <MessageCircle size={32} className="relative z-10" />
      
      {/* Tooltip */}
      <div className="absolute right-24 top-1/2 -translate-y-1/2 bg-white text-[#25D366] px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 whitespace-nowrap shadow-2xl border border-slate-50 italic">
        Chat with Expert
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
