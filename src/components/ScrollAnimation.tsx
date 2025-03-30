import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Composant qui enveloppe ses enfants et déclenche des animations lors de leur apparition dans le viewport.
 */
interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  animationType?: 'fade' | 'slide' | 'scale' | 'rotate' | 'flip' | 'glitch' | 'reveal' | 'stagger';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  id,
  className = '',
  animationType = 'fade',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  once = true
}) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Observer pour déclencher l'animation lorsque l'élément entre dans le viewport
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold }
    );
    
    observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [once, threshold]);

  // Définition des variantes d'animation pour différents types
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration, delay } }
  };

  const slideVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration, delay } }
  };

  const scaleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration, delay } }
  };

  const rotateVariants = {
    hidden: { rotate: -5, opacity: 0, scale: 0.95 },
    visible: { rotate: 0, opacity: 1, scale: 1, transition: { duration, delay } }
  };

  const flipVariants = {
    hidden: { rotateX: 80, opacity: 0 },
    visible: { rotateX: 0, opacity: 1, transition: { duration, delay } }
  };

  const glitchVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration, 
        delay,
        x: {
          duration: 0.4,
          yoyo: Infinity,
          ease: 'easeOut',
          repeatDelay: 0.1
        }
      }
    }
  };

  const revealVariants = {
    hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
    visible: { clipPath: 'inset(0 0% 0 0)', opacity: 1, transition: { duration: duration * 1.5, delay } }
  };

  const staggerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: delay
      }
    }
  };

  const staggerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Sélection de la variante en fonction du type d'animation
  const getVariants = () => {
    switch (animationType) {
      case 'slide': return slideVariants;
      case 'scale': return scaleVariants;
      case 'rotate': return rotateVariants;
      case 'flip': return flipVariants;
      case 'glitch': return glitchVariants;
      case 'reveal': return revealVariants;
      case 'stagger': return staggerVariants;
      case 'fade':
      default:
        return fadeVariants;
    }
  };

  // Traitement spécifique pour l'animation de type "stagger"
  if (animationType === 'stagger') {
    return (
      <motion.div
        id={id}
        ref={containerRef}
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerVariants}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={staggerItemVariants}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      id={id}
      ref={containerRef}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
};

/**
 * Composant Parallax qui déplace son contenu en fonction du scroll.
 */
interface ParallaxProps {
  className?: string;
  children: React.ReactNode;
  speed?: number;
  direction?: 'vertical' | 'horizontal';
}

export const Parallax: React.FC<ParallaxProps> = ({ 
  className = '', 
  children, 
  speed = 0.5,
  direction = 'vertical'
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 500 * speed]);
  const x = useTransform(scrollY, [0, 1000], [0, 500 * speed]);

  return (
    <motion.div
      className={className}
      style={{ 
        [direction === 'vertical' ? 'y' : 'x']: direction === 'vertical' ? y : x,
        position: 'relative',
        zIndex: 0
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Composant d'arrière-plan avec particules animées.
 */
interface ParticleBackgroundProps {
  particleCount?: number;
  color?: string;
  speed?: number;
}

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 20,
  color = 'emerald',
  speed = 1.5
}) => {
  const [particles, setParticles] = useState<Array<{ id: number, size: number, x: number, y: number }>>([]);

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 6 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100
      });
    }
    setParticles(newParticles);
  }, [particleCount]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((particle) => (
        <div 
          key={particle.id}
          className={`absolute bg-${color}-500/30 rounded-full`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            filter: 'blur(1px)',
            animation: `floatingParticle ${speed * (Math.random() * 10 + 15)}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.3 + Math.random() * 0.4
          }}
        />
      ))}
    </div>
  );
};

/**
 * Composant décoratif affichant des lignes de style cyberpunk.
 */
interface CyberpunkLinesProps {
  opacity?: number;
  color?: string;
}

export const CyberpunkLines: React.FC<CyberpunkLinesProps> = ({
  opacity = 0.1,
  color = 'emerald'
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className={`absolute top-0 left-1/4 right-0 h-px bg-gradient-to-r from-transparent via-${color}-500/40 to-transparent`} style={{ opacity }}></div>
      <div className={`absolute top-1/3 left-0 right-1/3 h-px bg-gradient-to-r from-transparent via-${color}-500/40 to-transparent`} style={{ opacity }}></div>
      <div className={`absolute top-2/3 left-1/2 right-0 h-px bg-gradient-to-r from-transparent via-${color}-500/40 to-transparent`} style={{ opacity }}></div>
      <div className={`absolute bottom-0 left-0 right-1/4 h-px bg-gradient-to-r from-transparent via-${color}-500/40 to-transparent`} style={{ opacity }}></div>
      
      <div className={`absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-${color}-500/40 to-transparent`} style={{ opacity }}></div>
      <div className={`absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-${color}-500/40 to-transparent`} style={{ opacity }}></div>
      <div className={`absolute top-1/3 bottom-0 right-2/3 w-px bg-gradient-to-b from-transparent via-${color}-500/40 to-transparent`} style={{ opacity }}></div>
      <div className={`absolute top-0 bottom-1/3 right-1/4 w-px bg-gradient-to-b from-transparent via-${color}-500/40 to-transparent`} style={{ opacity }}></div>
    </div>
  );
};

/**
 * Hook personnalisé pour détecter la visibilité d'un élément.
 */
export const useScrollTransition = (elementRef: React.RefObject<HTMLElement>, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [elementRef, options]);

  return isVisible;
};

export default ScrollAnimationWrapper;
