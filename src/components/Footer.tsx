import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer 
      className="bg-slate-950 py-10 border-t border-slate-800" 
      role="contentinfo" 
      aria-label="Footer"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold text-emerald-500 mb-4 md:mb-0">
            GNAHIET
          </div>
          <nav aria-label="Footer Navigation" className="flex space-x-6">
            <a href="#home" className="text-gray-400 hover:text-emerald-400 transition-colors">Accueil</a>
            <a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">À propos</a>
            <a href="#skills" className="text-gray-400 hover:text-emerald-400 transition-colors">Compétences</a>
            <a href="#career" className="text-gray-400 hover:text-emerald-400 transition-colors">Parcours</a>
            <a href="#projects" className="text-gray-400 hover:text-emerald-400 transition-colors">Projets</a>
            <a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</a>
          </nav>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/eosfel97" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-emerald-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/any-gnahiet-075339234/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:pro.gnahiet@gmail.com" 
              className="text-gray-400 hover:text-emerald-400 transition-colors"
              aria-label="Envoyer un email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} GNAHIET. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
