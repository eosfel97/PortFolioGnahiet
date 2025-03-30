import React, { useRef } from 'react';
import { Server, Database, Cpu, Layers, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Parallax } from './ScrollAnimation';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <motion.section 
      id="home" 
      ref={sectionRef}
      className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center min-h-screen relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      role="banner"
      aria-label="Section d'accueil"
    >
      {/* Éléments décoratifs en arrière-plan (ignorés par les lecteurs d'écran) */}
      <div 
        className="absolute top-[20%] right-[10%] w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true"
      ></div>
      <div 
        className="absolute bottom-[10%] left-[5%] w-60 h-60 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true"
      ></div>

      {/* Zone de contenu avec animations */}
      <motion.div 
        className="md:w-1/2 mb-10 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Conception Développement  <span className="text-emerald-500">d'applications</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          bases de données et développement d'API Rest
        </motion.p>
        
        <motion.div 
          className="flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a 
            href="#contact" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center group"
            aria-label="Accéder à la section contact"
          >
            Contact <ChevronRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a 
            href="#projects" 
            className="border border-gray-700 hover:border-emerald-500 text-white px-6 py-3 rounded-md font-medium transition-colors"
            aria-label="Accéder aux projets"
          >
            Projets
          </a>
        </motion.div>
      </motion.div>

      <Parallax className="md:w-1/2 relative" speed={0.1} direction="vertical">
        {/* Effet de fond animé */}
        <motion.div 
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl blur-3xl"
          animate={{ 
            opacity: [0.5, 0.7, 0.5],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          aria-hidden="true"
        ></motion.div>
        
        {/* Carte d'informations avec animations */}
        <motion.div 
          className="bg-slate-900/90 p-8 rounded-xl border border-slate-800 shadow-xl relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Server className="text-emerald-500 mb-2" size={24} />, title: "API Design", desc: "RESTful" },
              { icon: <Database className="text-emerald-500 mb-2" size={24} />, title: "Database", desc: "SQL & PostgreSQL" },
              { icon: <Cpu className="text-emerald-500 mb-2" size={24} />, title: "Microservices", desc: "Architecture & Design" },
              { icon: <Layers className="text-emerald-500 mb-2" size={24} />, title: "DevOps", desc: "CI/CD" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="p-4 bg-slate-800 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.1)"
                }}
              >
                {item.icon}
                <h3 className="font-medium mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Parallax>
    </motion.section>
  );
};

export default HeroSection;
