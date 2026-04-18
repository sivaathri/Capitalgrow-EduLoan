import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import LeadForm from './LeadForm';

const CheckEligibilityModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-[32px] shadow-2xl z-10 overflow-y-auto scrollbar-hide p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-4 right-4 z-[70] flex justify-end">
              <button 
                onClick={onClose} 
                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full transition-colors mr-4 mt-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 md:p-6">
              <LeadForm />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CheckEligibilityModal;
