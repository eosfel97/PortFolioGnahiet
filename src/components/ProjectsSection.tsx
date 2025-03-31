import React, { useState } from 'react';
import {  Github, X } from 'lucide-react';
import GestionImage from '../assets/gestion.png';
import FederationImage from '../assets/federationfoot.png';
import CalculatriceImage from '../assets/Calculatrice.png';

const ProjectsSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  const projects = [
    {
      title: 'Application de Gestion de Tâches',
      description: 'Application web de gestion de tâches développée avec Spring Boot, Thymeleaf, Spring Data JPA et H2. Permet l\'ajout, la suppression et le suivi des tâches quotidiennes.',
      tags: ['Java', 'Spring Boot', 'Thymeleaf', 'Spring Data JPA', 'H2', 'Bootstrap'],
      image: GestionImage,
      github: 'https://github.com/eosfel97/dotolist',
      live: '#'
    },
    {
      title: 'Application de Calculatrice',
      description: 'Une calculatrice web avancée développée avec Python Flask, proposant des fonctionnalités classiques et scientifiques, accompagnée d\'une interface moderne et d\'un historique des calculs.',
      tags: ['Flask', 'Python', 'HTML5 / CSS3', 'JavaScript'],
      image: CalculatriceImage,
      github: 'https://github.com/eosfel97/calculatrice-flask',
      live: '#'
    },
    {
      title: 'Application de Gestion d\'une fédeérations sportives',
      description: 'Application Java basée sur Spring Boot, conçue pour gérer des fédérations sportives, leurs événements, compétitions, équipes et utilisateurs.',
      tags: ['Java', 'Spring Boot', 'Spring Security', 'JWT','Hibernate','Swagger','Flickr4Java','Stripe'],
      image: FederationImage,
      github: 'https://github.com/eosfel97/federation3',
      live: '#'
    },

  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Mes projets récents</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Voici quelques-uns de mes projets récents démontrant mes compétences en développement backend et API.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article 
              key={index} 
              className="bg-slate-900 rounded-xl overflow-hidden shadow-xl transition-transform hover:-translate-y-2 duration-300"
              aria-labelledby={`project-title-${index}`}
            >
              <div className="h-48 overflow-hidden relative cursor-pointer" onClick={() => openModal(project.image)}>
                <img 
                  src={project.image} 
                  alt={`Aperçu du projet ${project.title}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" aria-hidden="true"></div>
              </div>
              <div className="p-6">
                <h3 id={`project-title-${index}`} className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-slate-800 text-emerald-400 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors"
                    aria-label={`Voir le code source du projet ${project.title} sur GitHub`}
                  >
                    <Github size={18} className="mr-1" /> Code
                  </a>
                 
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/eosfel97" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            aria-label="Voir plus de projets sur GitHub"
          >
            <Github size={18} className="mr-2" /> Voir plus sur GitHub
          </a>
        </div>
      </div>

      {/* Modal pour afficher l'image en grand */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl w-full mx-4">
            <img 
              src={selectedImage} 
              alt="Aperçu en grand" 
              className="w-full rounded-lg shadow-2xl"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white hover:text-gray-300"
              aria-label="Fermer l'aperçu de l'image"
            >
              <X size={28} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
