import React, { useState, useEffect } from 'react';
import { Database, Server, Code, Terminal, CheckCircle, ArrowRight, Zap, Cpu } from 'lucide-react';
import myPhoto from '../assets/any.jpg';

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
    }, 40);
    return () => clearInterval(progressInterval);
  }, []);

  // Mise à jour du texte de chargement
  useEffect(() => {
    if (progress < 25) setTextIndex(0);
    else if (progress < 50) setTextIndex(1);
    else if (progress < 75) setTextIndex(2);
    else setTextIndex(3);
  }, [progress]);

  // Animation de pulsation
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setActivePulse(prev => (prev + 1) % 3);
    }, 1000);
    return () => clearInterval(pulseInterval);
  }, []);

  // Transition vers le contenu
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
    <div className="fixed inset-0 bg-gradient-to-b from-slate-950 to-slate-900 z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Particules d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              backgroundColor: i % 3 === 0 
                ? 'rgba(16, 185, 129, 0.4)' 
                : i % 3 === 1 
                  ? 'rgba(59, 130, 246, 0.4)'
                  : 'rgba(255, 255, 255, 0.2)',
              filter: 'blur(1px)',
              animation: `floatingParticle ${Math.random() * 20 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Grille cybernétique */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNDI1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      
      {/* Cercles lumineux */}
      <div className="absolute top-[-150px] left-[-150px] w-[300px] h-[300px] rounded-full bg-emerald-500/10 blur-[80px]"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] rounded-full bg-blue-500/10 blur-[60px]"></div>
      
      {loading ? (
        <div className="flex flex-col items-center justify-center z-10 px-4 w-full max-w-md scale-110">
          {/* Animation de chargement */}
          <div className="relative h-40 w-40 mb-10">
            <div className="absolute inset-0 rounded-full border-2 border-slate-700/50"></div>
            <div className="absolute inset-[-10px] rounded-full border-2 border-emerald-500/30 animate-pulse" style={{ animationDuration: '2s' }}></div>
            <div className="absolute inset-[-20px] rounded-full border-2 border-blue-500/20 animate-pulse" style={{ animationDuration: '3s' }}></div>
            <div className="absolute inset-[-30px] rounded-full border-2 border-purple-500/10 animate-pulse" style={{ animationDuration: '4s' }}></div>
            
            <div className="absolute inset-0 rounded-full border-t-2 border-l-2 border-emerald-500 animate-spin" style={{ animationDuration: '1.5s' }}></div>
            <div className="absolute inset-0 rounded-full border-r-2 border-b-2 border-blue-500 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}></div>
            
            {[0, 1, 2].map(index => (
              <div 
                key={index}
                className={`absolute inset-0 rounded-full transition-opacity duration-300 ${activePulse === index ? 'opacity-100' : 'opacity-0'}`}
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
            
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                {progress}%
              </div>
              <div className="text-xs text-emerald-400/80 mt-1">CHARGEMENT</div>
            </div>
          </div>
          
          {/* Barre de progression */}
          <div className="w-full bg-slate-800/50 h-2 rounded-full mb-4 overflow-hidden backdrop-blur-sm relative">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Texte de chargement */}
          <div className="text-emerald-400 font-medium text-lg mb-6 h-7 text-center">
            <div className="animate-fadeIn">
              {loadingTexts[textIndex]}
            </div>
          </div>
          
          {/* Points de chargement */}
          <div className="flex space-x-6 my-2">
            {[0, 0.2, 0.4].map((delay, i) => (
              <div 
                key={i}
                className={`h-${i === 1 ? 3 : 2} w-${i === 1 ? 3 : 2} rounded-full animate-pulse`}
                style={{
                  backgroundColor: i === 0 ? '#10b981' : i === 1 ? '#0d9488' : '#3b82f6',
                  animationDelay: `${delay}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Icônes */}
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
        <div className={`container mx-auto px-4 py-10 relative z-10 max-w-6xl transition-all duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          {/* En-tête */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-5 animate-slideUp">
              <span className="text-white">
                {"Gnahiet Any".split('').map((letter, index) => (
                  <span 
                    key={index} 
                    className="inline-block hover:scale-110 hover:text-emerald-400 transition-all duration-300"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </span>
            </h1>
            <div className="relative inline-block">
              <p className="text-xl sm:text-2xl md:text-3xl text-emerald-500 animate-slideInFromBottom font-light">
                Conception Développement d'applications
              </p>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-500 to-blue-500 animate-expandWidth"></span>
            </div>
          </div>
          
          {/* Carte principale */}
          <div className="bg-slate-800/60 px-4 py-6 sm:px-8 sm:py-10 rounded-2xl shadow-xl backdrop-blur-md animate-fadeInUp max-w-5xl mx-auto mb-10 border border-slate-700/50 relative overflow-hidden group">
            <div className="absolute -inset-[100px] bg-emerald-500/10 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-1000 rounded-full z-0"></div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-10 relative z-10">
              {/* Photo */}
              <div className="md:w-2/5 flex justify-center">
                <div className="rounded-xl overflow-hidden h-48 w-48 sm:h-60 sm:w-60 md:h-72 md:w-72 relative shadow-lg transition-all duration-500 hover:scale-105">
                  <img 
                    src={myPhoto} 
                    alt="Profil" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                  <div className="absolute inset-0 border border-emerald-500/20 rounded-xl"></div>
                </div>
              </div>
              
              {/* Contenu */}
              <div className="md:w-3/5">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                  Bienvenue sur mon portfolio
                </h2>
                
                {/* Compétences */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {[
                    { icon: <Server size={18} />, name: "API" },
                    { icon: <Database size={18} />, name: "SQL" },
                    { icon: <Code size={18} />, name: "Java/JS" },
                    { icon: <Terminal size={18} />, name: "DevOps" }
                  ].map((skill, index) => (
                    <div 
                      key={index} 
                      className="flex items-center bg-slate-700/50 rounded-lg p-2 sm:p-3 gap-2 border border-slate-600/30 hover:border-emerald-500/40 transition-all"
                    >
                      <div className="text-emerald-500">
                        {skill.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-4 sm:mb-5 text-base sm:text-lg">
                  Étudiant en licence informatique spécialisé en développement d'applications et de bases de données.
                </p>
                
                {/* Points forts */}
                <div className="mb-5 sm:mb-7">
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {["Esprit d'équipe", "Adaptabilité", "Autonomie", "Innovation"].map((trait, index) => (
                      <div 
                        key={index} 
                        className="inline-flex items-center text-xs sm:text-sm bg-slate-700/50 px-3 py-1 sm:px-4 sm:py-2 rounded-full border border-slate-600/30 hover:border-emerald-500/40 transition-all"
                      >
                        <CheckCircle size={12} className="text-emerald-500 mr-1 sm:mr-2" />
                        {trait}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Bouton */}
                <button
                  onClick={handleDiscoverClick}
                  className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-emerald-600/30 hover:-translate-y-1 relative overflow-hidden group/btn"
                >
                  <span className="relative z-10 flex items-center">
                    Découvrir mon portfolio
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SplashScreen;