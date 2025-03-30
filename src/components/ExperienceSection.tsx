import React from 'react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-800" aria-label="Mon expérience professionnelle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Mon expérience professionnelle</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Découvrez mes expériences variées dans le domaine du développement, du retail et du service.
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto" role="list">
          {/* Expérience 1 : Concepteur Développeur d'Applications - Greta l'Essonne */}
          <article className="relative pl-8 border-l-2 border-slate-700" role="listitem" aria-label="Expérience en tant que Concepteur Développeur d'Applications">
            <div className="absolute top-0 left-[-9px] w-4 h-4 bg-slate-700 rounded-full" aria-hidden="true"></div>
            <div className="bg-slate-900 p-6 rounded-xl mt-[-6px] transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
              <header className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Concepteur Développeur d'Applications</h3>
                  <p className="text-emerald-500">Greta l'Essonne</p>
                </div>
                <time className="mt-2 md:mt-0 text-gray-400" dateTime="2022-2023">
                  2022 - 2023
                </time>
              </header>
              <p className="text-gray-300 mb-4">
                Stage de 11 semaines, centré sur la conception et l'implémentation d'applications web et mobiles.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Conception et développement d'une application</li>
                <li>Création d'une API REST avec Spring Boot</li>
                <li>Tests unitaires avec jUnit et documentation avec Swagger</li>
              </ul>
            </div>
          </article>

          {/* Expérience 2 : Développeur web - Philiance formation */}
          <article className="relative pl-8 border-l-2 border-slate-700" role="listitem" aria-label="Expérience en tant que Développeur web">
            <div className="absolute top-0 left-[-9px] w-4 h-4 bg-slate-700 rounded-full" aria-hidden="true"></div>
            <div className="bg-slate-900 p-6 rounded-xl mt-[-6px] transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
              <header className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Développeur web</h3>
                  <p className="text-emerald-500">Philiance formation</p>
                </div>
                <time className="mt-2 md:mt-0 text-gray-400" dateTime="2021-2022">
                  2021 - 2022
                </time>
              </header>
              <p className="text-gray-300 mb-4">
                Stage de 9 semaines, axé sur la création de sites et d'applications web interactifs.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Intégration HTML/CSS/JavaScript</li>
                <li>Utilisation de frameworks Symfony pour le front end</li>
                <li>Utilisation de PHP pour le backend</li>
                <li>Collaboration en équipes pour le développement</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
