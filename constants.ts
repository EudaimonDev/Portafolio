
import type { NavLink, Skill, SoftSkill, Project, ExperienceItem } from './types';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaFigma, FaHandshake, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';

// ============================================================================
// DATOS DEL PORTAFOLIO - ¡MODIFICA ESTA SECCIÓN!
// Aquí puedes cambiar toda la información que se muestra en tu portafolio.
// ============================================================================

export const PORTFOLIO_DATA = {
  name: "Austin Salguero",
  title: "Desarrollador Backend Java",
  summary: "Apasionado por crear soluciones backend robustas y escalables utilizando Java y Spring Boot. Con experiencia en el desarrollo de APIs RESTful, microservicios y bases de datos relacionales.",
  avatarUrl: "/components/images/foto_perfil.png",
  contactEmail: "austinsalguero08@gmail.com",
};

// ============================================================================
// NAVEGACIÓN
// Define los enlaces que aparecerán en la barra de navegación.
// ============================================================================
export const SECTIONS: NavLink[] = [
  { id: 'inicio', title: 'Quién soy' },
  { id: 'aptitudes', title: 'Aptitudes' },
  { id: 'proyectos', title: 'Proyectos' },
  { id: 'experiencia', title: 'Experiencia' },
  { id: 'contacto', title: 'Contacto' },
];

// ============================================================================
// APTITUDES TÉCNICAS
// Lista tus habilidades técnicas. `level` es un porcentaje (0-100) para la barra de progreso.
// ============================================================================
export const TECHNICAL_SKILLS: Skill[] = [
  { name: 'Java', level: 90, icon: FaHtml5 },
  { name: 'spring Boot', level: 90, icon: SiTailwindcss },
  { name: 'JavaScript', level: 70, icon: FaJsSquare },
  { name: 'TypeScript', level: 70, icon: SiTypescript },
  { name: 'React', level: 50, icon: FaReact },
  { name: 'PHP', level: 50, icon: FaNodeJs },
  { name: 'PL/SQL', level: 80, icon: SiExpress },
  { name: 'SQL', level: 75, icon: SiMongodb },
  { name: 'Figma', level: 70, icon: FaFigma },
];

// ============================================================================
// FORTALEZAS (SOFT SKILLS)
// Describe tus habilidades blandas.
// ============================================================================
export const SOFT_SKILLS: SoftSkill[] = [
  { name: 'Comunicación', description: 'Capacidad para expresar ideas de forma clara y efectiva, tanto técnica como no técnicamente.', icon: FaUsers },
  { name: 'Trabajo en Equipo', description: 'Colaboración proactiva en equipos multidisciplinarios para alcanzar objetivos comunes.', icon: FaHandshake },
  { name: 'Creatividad', description: 'Enfoque innovador para la resolución de problemas y el diseño de interfaces intuitivas.', icon: FaLightbulb },
  { name: 'Liderazgo', description: 'Iniciativa para guiar proyectos y motivar a los compañeros hacia la excelencia.', icon: FaRocket },
];

// ============================================================================
// PROYECTOS
// Muestra tus mejores trabajos. Usa `https://picsum.photos/seed/nombre-proyecto/400/300` para imágenes de prueba.
// ============================================================================
export const PROJECTS: Project[] = [
  {
    title: 'Plataforma de E-commerce',
    description: 'Tienda en línea completa con carrito de compras, pasarela de pago y panel de administración.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: 'https://picsum.photos/seed/ecommerce/400/300',
    repoUrl: 'https://github.com/tu-usuario/ecommerce',
    demoUrl: '#',
  },
  {
    title: 'Aplicación de Gestión de Tareas',
    description: 'Un "To-Do list" avanzado con autenticación de usuarios, tableros y arrastrar y soltar.',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    imageUrl: 'https://picsum.photos/seed/taskapp/400/300',
    repoUrl: 'https://github.com/tu-usuario/task-app',
    demoUrl: '#',
  },
  {
    title: 'Dashboard de Analítica',
    description: 'Visualización de datos interactiva para métricas de negocio, con gráficos y reportes en tiempo real.',
    tags: ['React', 'D3.js', 'Express', 'WebSocket'],
    imageUrl: 'https://picsum.photos/seed/dashboard/400/300',
    repoUrl: 'https://github.com/tu-usuario/dashboard',
    demoUrl: '#',
  },
  {
    title: 'Landing Page para Startup',
    description: 'Página de aterrizaje moderna y optimizada para la conversión, con animaciones y diseño responsivo.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Framer Motion'],
    imageUrl: 'https://picsum.photos/seed/landing/400/300',
    repoUrl: 'https://github.com/tu-usuario/landing-page',
    demoUrl: '#',
  },
];

// ============================================================================
// EDUCACIÓN Y EXPERIENCIA
// Tu trayectoria profesional y académica en orden cronológico inverso.
// ============================================================================
export const EXPERIENCE: ExperienceItem[] = [
   {
    date: '2021 - Presente',
    title: 'Desarrollador Web Full-Stack',
    institution: 'Tech Solutions Inc.',
    description: 'Desarrollo y mantenimiento de aplicaciones web complejas utilizando el stack MERN. Lideré el rediseño del front-end de la plataforma principal.',
  },
  {
    date: '2019 - 2021',
    title: 'Desarrollador Front-End',
    institution: 'Creative Agency',
    description: 'Creación de interfaces de usuario interactivas y responsivas para clientes de diversas industrias, enfocándome en la experiencia de usuario.',
  },
  {
    date: '2019',
    title: 'Bootcamp de Desarrollo Web Full-Stack',
    institution: 'CoderHouse',
    description: 'Programa intensivo cubriendo tecnologías front-end y back-end, culminando con un proyecto final de e-commerce.',
  },
   {
    date: '2015 - 2019',
    title: 'Grado en Ingeniería Informática',
    institution: 'Universidad Nacional',
    description: 'Formación sólida en ciencias de la computación, algoritmos, estructuras de datos y desarrollo de software.',
  },
];

// ============================================================================
// FIN DE LA SECCIÓN DE DATOS
// ============================================================================
