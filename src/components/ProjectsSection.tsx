import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Gestion de Bibliothèque',
      description: 'Application de gestion de bibliothèque avec Spring Boot et React. Permet la gestion des emprunts, des livres et des utilisateurs.',
      tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      github: 'https://github.com/eosfel97/library-management',
      live: '#'
    },
    {
      title: 'API REST e-Commerce',
      description: 'API RESTful pour une application e-commerce avec authentification JWT, gestion des produits, commandes et paiements.',
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      github: 'https://github.com/eosfel97/ecommerce-api',
      live: '#'
    },
    {
      title: 'Application de Gestion de Tâches',
      description: 'Application full-stack de gestion de tâches avec fonctionnalités de drag & drop, filtres, et assignation d\'équipe.',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      github: 'https://github.com/eosfel97/task-manager',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        {/* Titre de la section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Mes projets récents</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Voici quelques-uns de mes projets récents démontrant mes compétences en développement backend et API.
          </p>
        </div>
        
        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article 
              key={index} 
              className="bg-slate-900 rounded-xl overflow-hidden shadow-xl transition-transform hover:-translate-y-2 duration-300"
              aria-labelledby={`project-title-${index}`}
            >
              <div className="h-48 overflow-hidden relative">
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
                {/* Liste des technologies utilisées */}
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
                {/* Liens vers GitHub et la démo */}
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
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors"
                    aria-label={`Voir la démo du projet ${project.title}`}
                  >
                    <ExternalLink size={18} className="mr-1" /> Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Lien vers GitHub pour plus de projets */}
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
    </section>
  );
};

export default ProjectsSection;
