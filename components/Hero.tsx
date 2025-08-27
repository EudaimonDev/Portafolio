import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <div className="space-y-6">
        <motion.img
          src={PORTFOLIO_DATA.avatarUrl}
          alt="Avatar profesional"
          className="w-40 h-40 rounded-full mx-auto ring-4 ring-teal-500/50 shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
        />
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {PORTFOLIO_DATA.name}
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl text-teal-400 font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {PORTFOLIO_DATA.title}
        </motion.p>
        <motion.p 
          className="max-w-2xl mx-auto text-slate-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {PORTFOLIO_DATA.summary}
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button
            onClick={scrollToContact}
            className="bg-teal-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-teal-600 transition-colors duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:scale-105"
          >
            Contáctame
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;