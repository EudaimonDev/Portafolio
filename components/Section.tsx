import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-teal-400">
          {title}
        </h2>
        {children}
      </motion.div>
    </section>
  );
};

export default Section;