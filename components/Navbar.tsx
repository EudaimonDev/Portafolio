
import React, { useState, useEffect } from 'react';
import { SECTIONS } from '../constants';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = (
    <>
      {SECTIONS.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(section.id);
            }}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              activeSection === section.id
                ? 'bg-teal-500 text-white'
                : 'text-slate-300 hover:text-teal-400'
            }`}
          >
            {section.title}
          </a>
        </li>
      ))}
    </>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex items-center justify-between h-16">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }} className="text-xl font-bold text-teal-400">
            AS.
          </a>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-4">
              {navLinks}
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-teal-400 focus:outline-none"
              aria-label="Abrir menú"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden pt-2 pb-4">
            <ul className="flex flex-col items-center space-y-2">
              {navLinks}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
