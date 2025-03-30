import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import myLogo from '../assets/logo.svg';

interface NavbarProps {
  activeSection?: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestion du scroll pour appliquer un style différent une fois la page défilée
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#skills", label: "Compétences" },
    { href: "#career", label: "Parcours" },
    { href: "#experience", label: "Expérience" },
    { href: "#projects", label: "Projets" },
    { href: "#contact", label: "Contact", isButton: true }
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-lg shadow-md py-3' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      role="navigation"
      aria-label="Menu principal"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#home" 
            className="text-2xl font-bold text-emerald-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={myLogo} alt="Logo" className="h-16 w-auto" />
          </motion.a>
          
          {/* Menu de bureau */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a 
                key={link.href}
                href={link.href}
                className={`relative ${
                  link.isButton 
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition-colors' 
                    : 'text-white hover:text-emerald-400 transition-colors'
                }`}
                whileHover={!link.isButton ? { y: -3 } : {}}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                
                {/* Underline animée indiquant la section active */}
                {!link.isButton && (
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 rounded-full"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ 
                      width: activeSection === link.href.substring(1) ? '100%' : '0%',
                      opacity: activeSection === link.href.substring(1) ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
          </div>
          
          {/* Bouton pour le menu mobile */}
          <motion.button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
        
        {/* Menu mobile animé */}
        <motion.div 
          className="md:hidden bg-slate-800 mt-4 rounded-lg py-4 px-2 overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              <motion.a 
                key={link.href}
                href={link.href} 
                className={`${
                  link.isButton 
                    ? 'bg-emerald-600 text-white py-2 px-4 rounded-md text-center' 
                    : 'text-white hover:text-emerald-400 transition-colors py-2 px-4 rounded-md'
                } ${activeSection === link.href.substring(1) ? 'bg-slate-700/50' : ''}`}
                onClick={() => setIsMenuOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
