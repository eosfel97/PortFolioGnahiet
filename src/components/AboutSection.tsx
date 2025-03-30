import React from 'react';
import { ScrollAnimationWrapper, Parallax } from './ScrollAnimation';
import { motion } from 'framer-motion';
import myPotho from '../assets/any.jpg';


const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="bg-slate-900 py-20 relative overflow-hidden" 
      aria-label="À propos"
    >
      {/* Décorations de fond */}
      <div 
        className="absolute w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] -top-[250px] -left-[250px] pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] -bottom-[150px] -right-[150px] pointer-events-none" 
        aria-hidden="true"
      />
      
      <ScrollAnimationWrapper 
        id="about-content" 
        className="container mx-auto px-6"
        animationType="fade"  
        threshold={0.2}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Colonne image avec effet parallaxe */}
          <Parallax className="md:w-1/3 mb-10 md:mb-0" speed={0.1} direction="vertical">
            <div className="rounded-xl overflow-hidden h-80 relative">
              {/* Animation de dégradé */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 mix-blend-overlay"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                aria-hidden="true"
              />
              
              {/* Image */}
              <img 
                src={myPotho} 
                alt="Portrait d'un étudiant en informatique" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" 
                aria-hidden="true"
              />
              
              {/* Ligne de balayage animée */}
 
            </div>
          </Parallax>
          
          {/* Colonne texte */}
          <ScrollAnimationWrapper 
            id="about-text" 
            className="md:w-2/3 md:pl-8"
            animationType="fade"
            delay={0.3}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">À propos de moi</h2>
              <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Je m'appelle Any, étudiant en licence professionnelle d’informatique au Cnam, passionné par le développement et la conception d'applications web et mobiles. Fort de mes expériences de stage – notamment en tant que développeur web chez Philiance Formation et concepteur-développeur d'applications au Greta de l'Essonne – je suis actuellement à la recherche d’un stage de 6 mois à partir d’avril, afin de valider mon cursus et enrichir mon expérience professionnelle.
              </p>
              <p className="leading-relaxed mt-4">
                Curieux, autonome, doté d’un esprit d’équipe et d’une forte capacité d’adaptation, je m’efforce de proposer des solutions innovantes et efficaces, toujours alignées avec les besoins métier.
              </p>

              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default AboutSection;
