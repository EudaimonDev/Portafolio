
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { SECTIONS } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(SECTIONS[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' } // Adjust margin to trigger when section is more centered
    );

    const currentRefs = sectionRefs.current;
    const elementsToObserve = Object.keys(currentRefs).map(key => currentRefs[key]);

    elementsToObserve.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      elementsToObserve.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Navbar activeSection={activeSection} />
      <main className="w-full max-w-5xl px-6 sm:px-8 md:px-12 py-12">
        <div id={SECTIONS[0].id} ref={(el) => { sectionRefs.current[SECTIONS[0].id] = el; }}>
          <Hero />
        </div>
        <div id={SECTIONS[1].id} ref={(el) => { sectionRefs.current[SECTIONS[1].id] = el; }}>
          <Skills />
        </div>
        <div id={SECTIONS[2].id} ref={(el) => { sectionRefs.current[SECTIONS[2].id] = el; }}>
          <Projects />
        </div>
        <div id={SECTIONS[3].id} ref={(el) => { sectionRefs.current[SECTIONS[3].id] = el; }}>
          <Experience />
        </div>
        <div id={SECTIONS[4].id} ref={(el) => { sectionRefs.current[SECTIONS[4].id] = el; }}>
          <Contact />
        </div>
      </main>
      <footer className="text-center py-6 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Austin Salguero. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
