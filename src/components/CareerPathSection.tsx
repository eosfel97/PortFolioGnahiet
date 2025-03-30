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
          
 {/* Licence Professionnelle Métiers de l’informatique : Systèmes d'information et gestion de données */}
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
          <h3 className="text-xl font-bold mr-2">Licence Pro – Systèmes d'information et gestion de données</h3>
          <BookOpen className="text-emerald-500" size={20} aria-hidden="true" />
        </div>
        <p className="text-emerald-500 mb-2">Cnam, Évry</p>
        <p className="text-gray-400 mb-4">
          Formation en cours spécialisée dans le développement d’applications web et mobiles, avec un fort accent sur la conception d’API, la gestion de bases de données (relationnelles, NoSQL, géographiques), l’architecture logicielle, la virtualisation et la parallélisation. Elle vise une insertion professionnelle immédiate par la pratique de projets concrets.
        </p>
        <div className="flex items-center justify-end text-gray-500">
          <Calendar size={16} className="ml-2 mr-1" aria-hidden="true" />
          <span>2024 – Présent</span>
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
          <li>Développement fullstack (Java, JavaScript, React)</li>
          <li>Modélisation et gestion de bases de données (SQL, NoSQL, géographiques)</li>
          <li>Conception d’API web RESTful</li>
          <li>Virtualisation, parallélisation et architecture logicielle</li>
        </ul>
      </div>
    </div>
  </div>
</ScrollAnimationWrapper>


          {/* Titre Professionnel Concepteur Développeur d'Applications  */}
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
          <h3 className="text-xl font-bold">Titre Professionnel Concepteur Développeur d'Applications</h3>
        </div>
        <p className="text-emerald-500 mb-2">Greta de l'Essonne, Massy</p>
        <p className="text-gray-400 mb-4">
          Formation professionnalisante couvrant l’ensemble du cycle de développement logiciel : analyse des besoins, conception, développement orienté objet (PHP, Java), tests, déploiement, maintenance, et gestion de projet en méthode agile. Elle intègre également des compétences en base de données SQL/NoSQL, en intégration web (HTML/CSS, Twig, JavaScript), ainsi qu'une initiation à la sécurité, au référencement, et aux outils collaboratifs (Git, DevOps).
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
        <h4 className="font-semibold">Compétences acquises</h4>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>Développement backend avec PHP, Symfony et Java</li>
          <li>Conception et administration de bases de données (SQL/NoSQL)</li>
          <li>Intégration web (HTML5, CSS3, Twig, JavaScript, Bootstrap)</li>
          <li>Gestion de projet en méthode agile (Scrum)</li>
          <li>Versioning avec Git et bonnes pratiques DevOps</li>
        </ul>
      </div>
    </div>
  </div>
</ScrollAnimationWrapper>


          {/*  Titre Professionnel Développeur Web et Mobile */}
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
                    <h3 className="text-xl font-bold mr-2">Titre Professionnel Développeur Web et Mobile</h3>
                    <Award className="text-emerald-500" size={20} aria-hidden="true" />
                  </div>
                  <p className="text-emerald-500 mb-2">PHILIANCE Formation,Evry</p>
                  <p className="text-gray-400 mb-4">
                  Formation orientée développement web fullstack, axée sur la programmation PHP orientée objet, l’architecture MVC avec Symfony, la gestion de bases de données (SQL, Doctrine), et l’intégration web (HTML, CSS, Twig, JavaScript, Bootstrap).
                  Elle inclut également des compétences en gestion de projet (Scrum), versioning avec Git, sécurité, SEO, et développement d’interfaces avec ReactJS.                  </p>
                  <div className="flex items-center justify-end text-gray-500">
                    <Calendar size={16} className="ml-2 mr-1" aria-hidden="true" />
                    <span>2021-2022</span>
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
                    <li>Développement backend avec PHP et Symfony</li>
                    <li>Conception de bases de données SQL avec Doctrine</li>
                    <li>Intégration web avec HTML, CSS, Twig et Bootstrap</li>
                    <li>Programmation orientée objet et tests unitaires</li>
                    <li>Développement frontend avec JavaScript et ReactJS</li>
                    <li>Utilisation de Git et gestion de projet en méthode Scrum</li>
                  </ul>
                </div>
              </div>

            </div>
          </ScrollAnimationWrapper>
          {/* Autres formations */}
<ScrollAnimationWrapper
  id="career-item-3"
  className="relative mb-20"
  animationType="fade"
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
          <h3 className="text-xl font-bold">Parcours antérieur</h3>
        </div>

        <div className="mb-4">
          <p className="text-emerald-500">2020 – 2021</p>
          <p className="text-gray-400">Formation en autodidacte de sécurité informatique et développement web – OpenClassrooms</p>
        </div>

        <div className="mb-4">
          <p className="text-emerald-500">2017 – 2019</p>
          <p className="text-gray-400">BTS Techniques Physiques pour l’Industrie et le Laboratoire – Lycée Jean Perrin</p>
        </div>

        <div>
          <p className="text-emerald-500">2016 – 2017</p>
          <p className="text-gray-400">Baccalauréat STL (Sciences Physiques et Chimiques en Laboratoire) – Lycée Galilée, Gennevilliers</p>
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
          <li>Principes de cybersécurité (OpenClassrooms)</li>
          <li>Connaissances en physique appliquée et instrumentation</li>
          <li>Maîtrise des techniques de laboratoire scientifique</li>
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
