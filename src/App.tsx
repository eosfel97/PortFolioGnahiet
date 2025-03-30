import  { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import CareerPathSection from './components/CareerPathSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ParticleBackground, CyberpunkLines } from './components/ScrollAnimation';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [splashScreenActive, setSplashScreenActive] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [pageLoaded, setPageLoaded] = useState(false);
  
  const handleSplashScreenExit = () => {
    setSplashScreenActive(false);
    // Un léger délai pour une transition plus fluide
    setTimeout(() => setPageLoaded(true), 300);
  };
  
  useEffect(() => {
    if (!pageLoaded) return; // Ne pas exécuter tant que le contenu n'est pas chargé
    
    // Veillez à ce que chaque section soit définie avec une balise <section id="...">
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // La section est considérée active lorsque 30 % est visible
    );
    
    sections.forEach((section) => observer.observe(section));
    
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pageLoaded]);

  // Variantes d'animation pour la transition des sections
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        when: "beforeChildren" 
      } 
    }
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen overflow-hidden">
      <SplashScreen onExit={handleSplashScreenExit} />
      
      {!splashScreenActive && (
        <AnimatePresence mode="wait">
          <motion.div
            key="main-content"
            initial="hidden"
            animate="visible"
            variants={pageVariants}
            className="relative"
          >
            <Navbar activeSection={activeSection} />
            
            {/* Éléments de fond pour enrichir le design */}
            <ParticleBackground particleCount={25} color="emerald" speed={2} />
            <CyberpunkLines opacity={0.05} color="emerald" />
            
            {/* Indicateur de défilement pour faciliter la navigation (accessible via aria-label) */}
            <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
              <div className="flex flex-col items-center">
                <div className="h-32 w-px bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent"></div>
                {['home', 'about', 'skills', 'career', 'experience', 'projects', 'contact'].map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className={`w-3 h-3 my-2 rounded-full transition-all duration-300 border border-emerald-500/50 ${
                      activeSection === section 
                        ? 'bg-emerald-500 scale-125 shadow-md shadow-emerald-500/20' 
                        : 'bg-transparent hover:bg-emerald-500/30'
                    }`}
                    aria-label={`Naviguer vers la section ${section}`}
                  />
                ))}
                <div className="h-32 w-px bg-gradient-to-b from-emerald-500/30 via-transparent to-transparent"></div>
              </div>
            </div>

            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <CareerPathSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
