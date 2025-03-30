import React from 'react';
import { Briefcase, BookOpen, Award, Calendar } from 'lucide-react';
import { ScrollAnimationWrapper } from './ScrollAnimation';
import { motion } from 'framer-motion';

const CareerPathSection: React.FC = () => {
  return (
    <section id="career" className="py-20 bg-slate-800 relative overflow-hidden" aria-label="Parcours professionnel">
      {/* Décoration de fond */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        aria-hidden="true"
      />
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper
          id="career-header"
          className="text-center mb-16"
          animationType="slide"
        >
          <h2 className="text-3xl font-bold">Mon parcours professionnel</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Un aperçu de mon cheminement académique et professionnel dans le domaine du développement.
          </p>
        </ScrollAnimationWrapper>

        <div className="relative max-w-4xl mx-auto">
          {/* Ligne verticale animée */}
          <motion.div 
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent transform md:translate-x-[-50%]"
            animate={{ 
              background: [
                "linear-gradient(to bottom, transparent, rgba(16, 185, 129, 0.3), transparent)",
                "linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.3), transparent)",
                "linear-gradient(to bottom, transparent, rgba(16, 185, 129, 0.3), transparent)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            aria-hidden="true"
          />
          
          {/* Formation - BUT Informatique */}
          <ScrollAnimationWrapper
            id="career-item-1"
            className="relative mb-20"
            animationType="fade"
          >
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right order-2 md:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-slate-900 p-6 rounded-xl shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-end mb-2">
                    <h3 className="text-xl font-bold mr-2">BUT Informatique</h3>
                    <BookOpen className="text-emerald-500" size={20} aria-hidden="true" />
                  </div>
                  <p className="text-emerald-500 mb-2">Université Paris-Saclay</p>
                  <p className="text-gray-400 mb-4">
                    Formation en cours spécialisée dans le développement d'applications, avec une attention particulière aux bases de données et à la conception d'API.
                  </p>
                  <div className="flex items-center justify-end text-gray-500">
                    <Calendar size={16} className="ml-2 mr-1" aria-hidden="true" />
                    <span>2023 - Présent</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="absolute left-0 md:left-1/2 top-6 w-8 h-8 bg-emerald-500 rounded-full border-4 border-slate-800 transform md:translate-x-[-50%] z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                aria-hidden="true"
              />
              <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                {/* Version mobile pour le résumé des compétences */}
                <div className="md:hidden bg-slate-900 p-6 rounded-xl shadow-xl mb-4">
                  <h4 className="font-semibold">Compétences acquises</h4>
                  <ul className="list-disc list-inside text-gray-400 mt-2">
                    <li>Développement fullstack (Java, JavaScript)</li>
                    <li>Conception et modélisation de bases de données</li>
                    <li>Architecture logicielle et patterns de conception</li>
                    <li>Gestion de projet agile et méthodes DevOps</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Formation - BTS SIO SLAM */}
          <ScrollAnimationWrapper
            id="career-item-2"
            className="relative mb-20"
            animationType="fade"
            delay={0.2}
          >
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 mb-8 md:mb-0 md:pl-12 order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-slate-900 p-6 rounded-xl shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-2">
                    <BookOpen className="text-emerald-500 mr-2" size={20} aria-hidden="true" />
                    <h3 className="text-xl font-bold">BTS SIO option SLAM</h3>
                  </div>
                  <p className="text-emerald-500 mb-2">Lycée Parc de Vilgénis, Massy</p>
                  <p className="text-gray-400 mb-4">
                    Formation technique en développement d'applications avec approfondissement des langages de programmation et des concepts de base de données.
                  </p>
                  <div className="flex items-center text-gray-500">
                    <Calendar size={16} className="mr-1" aria-hidden="true" />
                    <span>2021 - 2023</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="absolute left-0 md:left-1/2 top-6 w-8 h-8 bg-emerald-500 rounded-full border-4 border-slate-800 transform md:translate-x-[-50%] z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                aria-hidden="true"
              />
              <div className="md:w-1/2 md:pr-12 md:text-right order-1">
                <div className="md:hidden bg-slate-900 p-6 rounded-xl shadow-xl mb-4">
                  <h4 className="font-semibold">Compétences acquises</h4>
                  <ul className="list-disc list-inside text-gray-400 mt-2">
                    <li>Développement d'applications (Java, PHP, C#)</li>
                    <li>Administration de bases de données relationnelles</li>
                    <li>Conception et développement web</li>
                    <li>Méthodologies de gestion de projet</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Certification - Formation continue */}
          <ScrollAnimationWrapper
            id="career-item-3"
            className="relative mb-20"
            animationType="fade"
            delay={0.4}
          >
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right order-2 md:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-slate-900 p-6 rounded-xl shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-end mb-2">
                    <h3 className="text-xl font-bold mr-2">Certification Spring Boot</h3>
                    <Award className="text-emerald-500" size={20} aria-hidden="true" />
                  </div>
                  <p className="text-emerald-500 mb-2">Formation en ligne spécialisée</p>
                  <p className="text-gray-400 mb-4">
                    Certification professionnelle dans le développement d'API REST avec Spring Boot et les bonnes pratiques d'architecture microservices.
                  </p>
                  <div className="flex items-center justify-end text-gray-500">
                    <Calendar size={16} className="ml-2 mr-1" aria-hidden="true" />
                    <span>2022</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="absolute left-0 md:left-1/2 top-6 w-8 h-8 bg-emerald-500 rounded-full border-4 border-slate-800 transform md:translate-x-[-50%] z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                aria-hidden="true"
              />
              <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                <div className="md:hidden bg-slate-900 p-6 rounded-xl shadow-xl mb-4">
                  <h4 className="font-semibold">Compétences acquises</h4>
                  <ul className="list-disc list-inside text-gray-400 mt-2">
                    <li>Conception d'API REST avec Spring Boot</li>
                    <li>Sécurité et authentification avec JWT</li>
                    <li>Tests unitaires et d'intégration</li>
                    <li>Documentation d'API avec Swagger</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Stage - Greta l'Essonne */}
          <ScrollAnimationWrapper
            id="career-item-4"
            className="relative mb-20"
            animationType="fade"
            delay={0.6}
          >
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 mb-8 md:mb-0 md:pl-12 order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-slate-900 p-6 rounded-xl shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-2">
                    <Briefcase className="text-emerald-500 mr-2" size={20} aria-hidden="true" />
                    <h3 className="text-xl font-bold">Concepteur Développeur d'Applications</h3>
                  </div>
                  <p className="text-emerald-500 mb-2">Greta l'Essonne</p>
                  <p className="text-gray-400 mb-4">
                    Stage de 11 semaines dans le cadre du BTS, axé sur la conception et le développement d'applications métier avec Spring Boot.
                  </p>
                  <div className="flex items-center text-gray-500">
                    <Calendar size={16} className="mr-1" aria-hidden="true" />
                    <span>2022 - 2023</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="absolute left-0 md:left-1/2 top-6 w-8 h-8 bg-emerald-500 rounded-full border-4 border-slate-800 transform md:translate-x-[-50%] z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                aria-hidden="true"
              />
              <div className="md:w-1/2 md:pr-12 md:text-right order-1">
                <div className="md:hidden bg-slate-900 p-6 rounded-xl shadow-xl mb-4">
                  <h4 className="font-semibold">Missions</h4>
                  <ul className="list-disc list-inside text-gray-400 mt-2">
                    <li>Conception et développement d'une application de gestion</li>
                    <li>Création d'une API REST avec Spring Boot</li>
                    <li>Tests unitaires avec jUnit et documentation</li>
                    <li>Collaboration avec l'équipe de développement</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Stage - Philiance Formation */}
          <ScrollAnimationWrapper
            id="career-item-5"
            className="relative"
            animationType="fade"
            delay={0.8}
          >
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right order-2 md:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-slate-900 p-6 rounded-xl shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-end mb-2">
                    <h3 className="text-xl font-bold mr-2">Développeur Web</h3>
                    <Briefcase className="text-emerald-500" size={20} aria-hidden="true" />
                  </div>
                  <p className="text-emerald-500 mb-2">Philiance formation</p>
                  <p className="text-gray-400 mb-4">
                    Stage de 9 semaines, axé sur la création de sites et d'applications web interactifs pour des besoins pédagogiques.
                  </p>
                  <div className="flex items-center justify-end text-gray-500">
                    <Calendar size={16} className="ml-2 mr-1" aria-hidden="true" />
                    <span>2021 - 2022</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="absolute left-0 md:left-1/2 top-6 w-8 h-8 bg-emerald-500 rounded-full border-4 border-slate-800 transform md:translate-x-[-50%] z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                aria-hidden="true"
              />
              <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                <div className="md:hidden bg-slate-900 p-6 rounded-xl shadow-xl mb-4">
                  <h4 className="font-semibold">Missions</h4>
                  <ul className="list-disc list-inside text-gray-400 mt-2">
                    <li>Intégration HTML/CSS/JavaScript</li>
                    <li>Utilisation de frameworks Symfony pour le front end</li>
                    <li>Utilisation de PHP pour le backend</li>
                    <li>Collaboration en équipes pour le développement</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default CareerPathSection;
