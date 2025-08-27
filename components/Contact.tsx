
import React, { useState } from 'react';
import Section from './Section';
import { PORTFOLIO_DATA } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulación de envío de formulario.
    // En una aplicación real, aquí llamarías a tu API de backend (p.ej. EmailJS, Formspree, etc.)
    setTimeout(() => {
      // Simula un éxito el 90% de las veces
      if (Math.random() > 0.1) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
      
      setTimeout(() => setStatus('idle'), 5000); // Resetear estado después de 5 seg
    }, 1500);
  };

  return (
    <Section id="contacto" title="Ponte en Contacto">
      <div className="max-w-xl mx-auto text-center">
        <p className="mb-8 text-slate-400">
          ¿Tienes un proyecto en mente o simplemente quieres saludar? No dudes en enviarme un mensaje.
          También puedes contactarme directamente en{' '}
          <a href={`mailto:${PORTFOLIO_DATA.contactEmail}`} className="text-teal-400 font-medium hover:underline">
            {PORTFOLIO_DATA.contactEmail}
          </a>.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Tu Nombre"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Tu Correo Electrónico"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Tu Mensaje"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-teal-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors duration-300 shadow-lg hover:shadow-teal-500/50 disabled:bg-slate-600 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </div>
        </form>
        
        {status === 'success' && (
          <p className="mt-4 text-green-400 bg-green-900/50 p-3 rounded-lg">
            ¡Mensaje enviado con éxito! Gracias por contactarme.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-400 bg-red-900/50 p-3 rounded-lg">
            Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
          </p>
        )}
      </div>
    </Section>
  );
};

export default Contact;
