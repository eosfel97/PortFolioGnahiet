import React, { useState, useEffect } from 'react';
import { Database, Server, Code, Terminal, CheckCircle, ArrowRight, Zap, Cpu } from 'lucide-react';
import myPotho from '../assets/any.jpg';


interface SplashScreenProps {
  onExit: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onExit }) => {
  const [hide, setHide] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [activePulse, setActivePulse] = useState(0);

  const loadingTexts = [
    "Initialisation du portfolio",
    "Chargement des compétences",
    "Préparation du contenu",
    "Finalisation"
  ];

  // Simulation du progrès de chargement
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 40); // 4 secondes pour atteindre 100%
    return () => clearInterval(progressInterval);
  }, []);

  // Mise à jour du texte de chargement en fonction du progrès
  useEffect(() => {
    if (progress < 25) setTextIndex(0);
    else if (progress < 50) setTextIndex(1);
    else if (progress < 75) setTextIndex(2);
    else setTextIndex(3);
  }, [progress]);

  // Animation de pulsation pour le cercle autour du pourcentage
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setActivePulse(prev => (prev + 1) % 3);
    }, 1000);
    return () => clearInterval(pulseInterval);
  }, []);

  // Transition vers le contenu une fois le chargement terminé
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowContent(true), 300);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleDiscoverClick = () => {
    setHide(true);
    onExit();
  };

  if (hide) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-slate-950 to-slate-900 z-50 flex flex-col items-center justify-center overflow-hidden" role="status" aria-live="polite">
      {/* Particules d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i}
            style={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              backgroundColor: i % 3 === 0 
                ? 'rgba(16, 185, 129, 0.4)' 
                : i % 3 === 1 
                  ? 'rgba(59, 130, 246, 0.4)'
                  : 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              filter: 'blur(1px)',
              animation: `floatingParticle ${Math.random() * 20 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.3,
              zIndex: 1
            }}
          />
        ))}
      </div>

      {/* Grille cybernétique d'arrière-plan */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNDI1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiBvcGFjaXR5PSIwLjIiLz48L3N2Zz4=')]" style={{ opacity: 0.1 }}></div>
      
      {/* Cercles lumineux aux coins */}
      <div className="absolute top-[-150px] left-[-150px] w-[300px] h-[300px] rounded-full bg-emerald-500/10 blur-[80px]"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] rounded-full bg-blue-500/10 blur-[60px]"></div>
      
      {/* Zone de chargement */}
      {loading ? (
        <div className="flex flex-col items-center justify-center z-10 px-4 max-w-md w-full scale-110">
          {/* Cercle animé de chargement */}
          <div className="relative h-40 w-40 mb-10">
            {/* Cercle de fond */}
            <div className="absolute inset-0 rounded-full border-2 border-slate-700/50"></div>
            
            {/* Cercles animés autour */}
            <div 
              className="absolute inset-[-10px] rounded-full border-2 border-emerald-500/30 animate-pulse"
              style={{ animationDuration: '2s' }}
            ></div>
            <div 
              className="absolute inset-[-20px] rounded-full border-2 border-blue-500/20 animate-pulse"
              style={{ animationDuration: '3s' }}
            ></div>
            <div 
              className="absolute inset-[-30px] rounded-full border-2 border-purple-500/10 animate-pulse"
              style={{ animationDuration: '4s' }}
            ></div>
            
            {/* Cercles tournants */}
            <div 
              className="absolute inset-0 rounded-full border-t-2 border-l-2 border-emerald-500 animate-spin"
              style={{ animationDuration: '1.5s' }}
            ></div>
            <div 
              className="absolute inset-0 rounded-full border-r-2 border-b-2 border-blue-500 animate-spin" 
              style={{ animationDuration: '3s', animationDirection: 'reverse' }}
            ></div>
            
            {/* Pulsations synchronisées */}
            {[0, 1, 2].map(index => (
              <div 
                key={index}
                className={`absolute inset-0 rounded-full transition-opacity duration-300 ease-in-out ${activePulse === index ? 'opacity-100' : 'opacity-0'}`}
              >
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: 'rgb(16, 185, 129)', stopOpacity: 0.7 }} />
                      <stop offset="100%" style={{ stopColor: 'rgb(59, 130, 246)', stopOpacity: 0.7 }} />
                    </linearGradient>
                  </defs>
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="98" 
                    fill="none" 
                    stroke={`url(#gradient-${index})`} 
                    strokeWidth="1" 
                    strokeDasharray={`${10 * index + 5} ${5 * index + 5}`} 
                    transform={`rotate(${index * 60})`}
                  />
                </svg>
              </div>
            ))}
            
            {/* Affichage du pourcentage */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                {progress}%
              </div>
              <div className="text-xs text-emerald-400/80 mt-1">CHARGEMENT</div>
            </div>
          </div>
          
          {/* Barre de progrès */}
          <div className="w-full bg-slate-800/50 h-2 rounded-full mb-4 overflow-hidden backdrop-blur-sm relative">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-full h-full opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0tMiAxOGwyNC0yNCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTggMThsMjQtMjQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0xOCAxOGwyNC0yNCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]"></div>
            </div>
          </div>
          
          {/* Texte de chargement avec effet de glitch */}
          <div className="text-emerald-400 font-medium text-lg mb-6 h-7 text-center relative">
            <div className="animate-fadeIn relative">
              <span className="relative inline-block">
                {loadingTexts[textIndex]}
                <span className="absolute inset-0 text-blue-400 opacity-70 hover:opacity-0 transition-opacity duration-300" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)', transform: 'translate(1px, -1px)' }}>
                  {loadingTexts[textIndex]}
                </span>
                <span className="absolute inset-0 text-emerald-400 opacity-70 hover:opacity-0 transition-opacity duration-300" style={{ clipPath: 'polygon(0 45%, 100% 45%, 100% 100%, 0 100%)', transform: 'translate(-1px, 1px)' }}>
                  {loadingTexts[textIndex]}
                </span>
              </span>
            </div>
          </div>
          
          {/* Points de chargement */}
          <div className="flex space-x-6 my-2">
            <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
            <div className="h-3 w-3 bg-teal-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          
          {/* Icônes rotatives */}
          <div className="flex mt-6 opacity-70">
            {[
              <Database size={20} key="db" />, 
              <Server size={20} key="server" />, 
              <Code size={20} key="code" />, 
              <Terminal size={20} key="terminal" />,
              <Cpu size={20} key="cpu" />,
              <Zap size={20} key="zap" />
            ].map((icon, i) => (
              <div 
                key={i} 
                className="text-emerald-500 mx-2 animate-spin"
                style={{ 
                  animationDuration: `${3 + i * 0.5}s`, 
                  animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
                  opacity: 0.3 + (i * 0.1)
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={`container mx-auto px-4 sm:px-6 py-10 relative z-10 max-w-6xl transition-all duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          {/* En-tête avec nom et titre */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-5 animate-slideUp">
              <span className="text-white inline-block">
                {"Gnahiet Any".split('').map((letter, index) => (
                  <span 
                    key={index} 
                    className="animate-fadeInChar inline-block hover:scale-110 hover:text-emerald-400 transition-all duration-300"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </span>
            </h1>
            <div className="relative inline-block">
              <p className="text-2xl sm:text-3xl text-emerald-500 animate-slideInFromBottom font-light tracking-wide">
              Conception Développement d'applications
              </p>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-500 to-blue-500 animate-expandWidth"></span>
            </div>
          </div>
          
          {/* Carte principale */}
          <div className="bg-slate-800/60 p-8 sm:p-10 rounded-2xl shadow-2xl backdrop-blur-md animate-fadeInUp max-w-5xl mx-auto mb-14 border border-slate-700/50 relative overflow-hidden group">
            {/* Lueur d'arrière-plan réactive au survol */}
            <div className="absolute -inset-[100px] bg-emerald-500/10 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-1000 rounded-full z-0 pointer-events-none"></div>
            
            {/* Lignes décoratives */}
            <div className="absolute top-0 left-20 right-20 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
            <div className="absolute bottom-0 left-20 right-20 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-10 relative z-10">
              {/* Photo de profil */}
              <div className="md:w-2/5 flex justify-center">
                <div className="rounded-xl overflow-hidden h-72 w-72 relative shadow-lg transform transition-all duration-500 hover:scale-105 group-hover:shadow-emerald-500/20 group-hover:shadow-lg">
                  <img 
                    src={myPotho} 
                    alt="GNAHIET - Développeur d'Applications" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                  <div className="absolute inset-0 border border-emerald-500/20 rounded-xl"></div>
                  <div className="absolute inset-0 overflow-hidden">
                    <div 
                      className="h-[3px] w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent absolute animate-[scan_3s_ease-in-out_infinite]"
                      style={{ top: '0%', animation: 'scan 3s ease-in-out infinite' }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Contenu textuel */}
              <div className="md:w-3/5">
                <h2 className="text-3xl font-bold mb-5 text-white">
                  Bienvenue sur mon portfolio
                </h2>
                
                {/* Compétences principales */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {[
                    { icon: <Server size={20} />, name: "API" },
                    { icon: <Database size={20} />, name: "SQL" },
                    { icon: <Code size={20} />, name: "Java/JS" },
                    { icon: <Terminal size={20} />, name: "DevOps" }
                  ].map((skill, index) => (
                    <div 
                      key={index} 
                      className="flex items-center bg-slate-700/50 rounded-lg p-3 gap-3 border border-slate-600/30 hover:border-emerald-500/40 transition-all duration-300 hover:bg-slate-700/80 group/skill"
                    >
                      <div className="text-emerald-500 group-hover/skill:text-emerald-400 transition-colors">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-5 text-lg">
                  Étudiant en licence informatique spécialisé en développement d'applications et de bases de données.
                  Je recherche actuellement un stage de 6 mois pour mettre en pratique mes compétences.
                </p>
                
                {/* Points forts */}
                <div className="mb-7">
                  <div className="flex flex-wrap gap-3">
                    {["Esprit d'équipe", "Adaptabilité", "Autonomie", "Innovation"].map((trait, index) => (
                      <div 
                        key={index} 
                        className="inline-flex items-center text-sm bg-slate-700/50 px-4 py-2 rounded-full border border-slate-600/30 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105"
                      >
                        <CheckCircle size={14} className="text-emerald-500 mr-2" />
                        {trait}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Bouton de découverte */}
                <button
                  onClick={handleDiscoverClick}
                  className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-emerald-600/30 transform hover:-translate-y-1 relative overflow-hidden group/btn"
                >
                  <span className="relative z-10 flex items-center">
                    Découvrir mon portfolio
                    <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute -inset-px bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-lg opacity-0 group-hover/btn:opacity-100 blur-md transition-opacity duration-300"></span>
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 h-3 w-3 rounded-full bg-emerald-300 opacity-0 group-hover/btn:opacity-75 transition-opacity duration-300 delay-100"></span>
                  <span className="absolute bottom-0 right-0 -mb-1 -mr-1 h-2 w-2 rounded-full bg-emerald-300 opacity-0 group-hover/btn:opacity-75 transition-opacity duration-300 delay-150"></span>
                  <span className="absolute bottom-0 left-0 -mb-1 -ml-1 h-2 w-2 rounded-full bg-emerald-300 opacity-0 group-hover/btn:opacity-75 transition-opacity duration-300 delay-200"></span>
                  <span className="absolute top-0 left-0 -mt-1 -ml-1 h-3 w-3 rounded-full bg-emerald-300 opacity-0 group-hover/btn:opacity-75 transition-opacity duration-300 delay-300"></span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Indicateur de défilement */}

        </div>
      )}
    </div>
  );
};

export default SplashScreen;
