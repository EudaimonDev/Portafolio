import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { PROJECTS } from '../constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
  return (
    <Section id="proyectos" title="Proyectos Destacados">
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-slate-800 rounded-lg overflow-hidden shadow-lg group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="relative">
              <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-white p-3 mx-2 bg-slate-700/50 rounded-full hover:bg-teal-500 transition-colors" aria-label="Repositorio en GitHub">
                  <FaGithub size={24} />
                </a>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-white p-3 mx-2 bg-slate-700/50 rounded-full hover:bg-teal-500 transition-colors" aria-label="Demo en vivo">
                  <FaExternalLinkAlt size={24} />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-teal-500/20 text-teal-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;