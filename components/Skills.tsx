import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { TECHNICAL_SKILLS, SOFT_SKILLS } from '../constants';
import type { Skill } from '../types';
import { IconType } from 'react-icons';
import { IconContext } from 'react-icons'; // Importa IconContext

// Componente para la barra de habilidades técnicas
const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  const Icon = skill.icon as IconType; // Forzamos tipo IconType
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center">
          {/* Envuelve el ícono con IconContext.Provider para aplicar la clase */}
          <IconContext.Provider value={{ className: "mr-2 text-teal-400" }}>
            <Icon size={20} />
          </IconContext.Provider>
          <span className="font-medium text-slate-200">{skill.name}</span>
        </div>
        <span className="text-sm font-semibold text-slate-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2.5">
        <motion.div
          className="bg-teal-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
};

// Componente principal de habilidades
const Skills: React.FC = () => {
  return (
    <Section id="aptitudes" title="Mis Aptitudes">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Habilidades técnicas */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white text-center md:text-left">
            Habilidades Técnicas
          </h3>
          {TECHNICAL_SKILLS.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Fortalezas / Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white text-center md:text-left">
            Fortalezas
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {SOFT_SKILLS.map((skill, index) => {
              const Icon = skill.icon as IconType; // Forzamos tipo IconType
              return (
                <motion.div
                  key={skill.name}
                  className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-teal-500/20 transition-shadow duration-300 transform hover:-translate-y-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Aplica la misma lógica aquí si es necesario */}
                  <IconContext.Provider value={{ className: "text-teal-400 mb-3" }}>
                    <Icon size={32} />
                  </IconContext.Provider>
                  <h4 className="font-bold text-lg mb-2 text-white">{skill.name}</h4>
                  <p className="text-sm text-slate-400">{skill.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;