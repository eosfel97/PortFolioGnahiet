import React from 'react';
import { BookOpen, Award, Calendar } from 'lucide-react';
import { ScrollAnimationWrapper } from './ScrollAnimation';
import { motion } from 'framer-motion';

const CareerPathSection: React.FC = () => {
  const careerItems = [
    {
      id: 1,
      title: "Licence Pro – Systèmes d'information et gestion de données",
      institution: "Cnam, Évry",
      period: "2024 – Présent",
      description: "Formation en cours spécialisée dans le développement d'applications web et mobiles, avec un fort accent sur la conception d'API, la gestion de bases de données (relationnelles, NoSQL, géographiques), l'architecture logicielle, la virtualisation et la parallélisation.",
      skills: [
        "Développement fullstack (Java, JavaScript, React)",
        "Modélisation et gestion de bases de données",
        "Conception d'API web RESTful",
        "Virtualisation et architecture logicielle"
      ],
      icon: <BookOpen className="text-emerald-500" size={20} />,
      position: "left"
    },
    {
      id: 2,
      title: "Titre Professionnel Concepteur Développeur d'Applications",
      institution: "Greta de l'Essonne, Massy",
      period: "2022 - 2023",
      description: "Formation professionnalisante couvrant l'ensemble du cycle de développement logiciel : analyse des besoins, conception, développement orienté objet (PHP, Java), tests, déploiement, maintenance, et gestion de projet en méthode agile.",
      skills: [
        "Développement backend avec PHP, Symfony et Java",
        "Conception de bases de données (SQL/NoSQL)",
        "Intégration web (HTML5, CSS3, JavaScript)",
        "Gestion de projet en méthode agile (Scrum)"
      ],
      icon: <BookOpen className="text-emerald-500" size={20} />,
      position: "right"
    },
    {
      id: 3,
      title: "Titre Professionnel Développeur Web et Mobile",
      institution: "PHILIANCE Formation, Evry",
      period: "2021-2022",
      description: "Formation orientée développement web fullstack, axée sur la programmation PHP orientée objet, l'architecture MVC avec Symfony, la gestion de bases de données, et l'intégration web.",
      skills: [
        "Développement avec PHP et Symfony",
        "Bases de données SQL avec Doctrine",
        "Intégration web (HTML, CSS, JavaScript)",
        "Développement frontend avec ReactJS"
      ],
      icon: <Award className="text-emerald-500" size={20} />,
      position: "left"
    },
    {
      id: 4,
      title: "Parcours antérieur",
      institution: "",
      period: "",
      description: "",
      items: [
        {
          period: "2020 – 2021",
          text: "Formation en autodidacte de sécurité informatique et développement web – OpenClassrooms"
        },
        {
          period: "2017 – 2019",
          text: "BTS Techniques Physiques pour l'Industrie et le Laboratoire – Lycée Jean Perrin"
        },
        {
          period: "2016 – 2017",
          text: "Baccalauréat STL – Lycée Galilée, Gennevilliers"
        }
      ],
      skills: [
        "Principes de cybersécurité",
        "Connaissances en physique appliquée",
        "Techniques de laboratoire scientifique"
      ],
      icon: <BookOpen className="text-emerald-500" size={20} />,
      position: "right"
    }
  ];

  return (
    <section id="career" className="py-12 md:py-20 bg-slate-800 relative overflow-hidden" aria-label="Parcours professionnel">
      {/* Décoration de fond */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      </div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollAnimationWrapper
          id="career-header"
          className="text-center mb-12 md:mb-16"
          animationType="slide"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">Mon parcours professionnel</h2>
          <p className="text-gray-400 mt-2 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Un aperçu de mon cheminement académique et professionnel dans le domaine du développement.
          </p>
        </ScrollAnimationWrapper>

        <div className="relative max-w-4xl mx-auto">
          {/* Ligne verticale animée */}
          <motion.div 
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent transform md:translate-x-[-50%]"
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
          
          {/* Boucle sur les éléments de carrière */}
          {careerItems.map((item, index) => (
            <ScrollAnimationWrapper
              key={item.id}
              id={`career-item-${item.id}`}
              className="relative mb-12 md:mb-16"
              animationType="fade"
              delay={index * 0.1}
            >
              <div className={`flex flex-col md:flex-row items-center ${item.position === 'right' ? 'md:flex-row-reverse' : ''}`}>
                {/* Carte principale */}
                <motion.div 
                  className="w-full md:w-1/2 mb-6 md:mb-0 md:px-6"
                  initial={{ opacity: 0, x: item.position === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-slate-900 p-5 md:p-6 rounded-xl shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className={`flex items-center ${item.position === 'left' ? 'justify-end' : ''} mb-3`}>
                      {item.position === 'left' && item.icon}
                      <h3 className={`text-lg md:text-xl font-bold ${item.position === 'left' ? 'mr-2' : 'ml-2'}`}>
                        {item.title}
                      </h3>
                      {item.position === 'right' && item.icon}
                    </div>
                    
                    {item.institution && (
                      <p className="text-emerald-500 mb-2 text-sm md:text-base">{item.institution}</p>
                    )}
                    
                    {item.description && (
                      <p className="text-gray-400 mb-4 text-sm md:text-base">{item.description}</p>
                    )}
                    
                    {item.items ? (
                      <div className="space-y-3">
                        {item.items.map((subItem, i) => (
                          <div key={i}>
                            <p className="text-emerald-500 text-sm">{subItem.period}</p>
                            <p className="text-gray-400 text-sm">{subItem.text}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-1" />
                        <span>{item.period}</span>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Point sur la timeline */}
                <motion.div 
                  className="absolute left-0 md:left-1/2 top-6 w-6 h-6 md:w-8 md:h-8 bg-emerald-500 rounded-full border-4 border-slate-800 transform md:translate-x-[-50%] z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                  aria-hidden="true"
                />

                {/* Compétences (version mobile) */}
                <div className="w-full md:w-1/2 md:px-6">
                  <div className="md:hidden bg-slate-900 p-5 rounded-xl shadow-lg mb-4">
                    <h4 className="font-semibold text-sm md:text-base">Compétences acquises</h4>
                    <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1 text-sm">
                      {item.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPathSection;