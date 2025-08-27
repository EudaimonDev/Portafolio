import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experiencia" title="Educación y Experiencia">
      <div className="relative">
        {/* Línea vertical de la línea de tiempo */}
        <div className="absolute left-4 md:left-1/2 -ml-px h-full w-0.5 bg-slate-700"></div>
        
        {EXPERIENCE.map((item, index) => (
          <motion.div
            key={index}
            className="relative mb-10 pl-10 md:pl-0"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
              {/* Contenido de la tarjeta */}
              <div className="md:w-1/2 md:px-6">
                <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                  <p className="text-sm font-semibold text-teal-400 mb-1">{item.date}</p>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-md text-slate-300 mb-3">{item.institution}</p>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              </div>
              
              {/* Círculo en la línea de tiempo */}
              <div className="absolute left-4 md:left-1/2 -ml-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-teal-500 rounded-full ring-4 ring-slate-900"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;