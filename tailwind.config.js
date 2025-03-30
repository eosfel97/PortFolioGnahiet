/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        fadeInScale: 'fadeInScale 0.6s ease-in-out forwards',
        fadeInUp: 'fadeInUp 0.8s ease-in-out forwards',
        fadeInChar: 'fadeInChar 0.3s ease-in-out forwards',
        slideUp: 'slideUp 0.8s ease-in-out forwards',
        slideIn: 'slideIn 0.5s ease-in-out forwards',
        slideInFromBottom: 'slideInFromBottom 0.8s ease-in-out forwards',
        expandWidth: 'expandWidth 1.2s ease-in-out forwards',
        bounce: 'bounce 1s infinite',
        pulseButton: 'pulseButton 2s infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        spin: 'spin 2s linear infinite',
        counter: 'counter 4s linear',
        floatingParticle: 'floatingParticle 15s linear infinite',
        slideInRight: 'slideInRight 0.8s ease-in-out forwards',
        slideInLeft: 'slideInLeft 0.8s ease-in-out forwards',
        rotateIn: 'rotateIn 0.8s ease-in-out forwards',
        revealFromLeft: 'revealFromLeft 1.2s ease-in-out forwards',
        revealFromRight: 'revealFromRight 1.2s ease-in-out forwards',
        revealFromTop: 'revealFromTop 1.2s ease-in-out forwards',
        revealFromBottom: 'revealFromBottom 1.2s ease-in-out forwards',
        glitch: 'glitch 3s infinite',
        shimmer: 'shimmer 2s infinite linear',
        morphGradient: 'morphGradient 10s ease infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInChar: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '60%': { transform: 'translateY(-10%)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        expandWidth: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        pulseButton: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        counter: {
          '0%': { content: '0%' },
          '100%': { content: '100%' },
        },
        floatingParticle: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: 0.7 },
          '50%': { transform: 'translateY(-100px) translateX(100px)', opacity: 0.3 },
          '100%': { transform: 'translateY(0) translateX(0)', opacity: 0.7 },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scan: {
          '0%, 100%': { top: '5%', opacity: 0 },
          '5%': { opacity: 0.8 },
          '50%': { top: '95%', opacity: 0.8 },
          '95%': { opacity: 0.8 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-10deg) scale(0.9)', opacity: 0 },
          '100%': { transform: 'rotate(0) scale(1)', opacity: 1 },
        },
        revealFromLeft: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        revealFromRight: {
          '0%': { clipPath: 'inset(0 0 0 100%)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        revealFromTop: {
          '0%': { clipPath: 'inset(100% 0 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        revealFromBottom: {
          '0%': { clipPath: 'inset(0 0 100% 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-3px, 3px)' },
          '40%': { transform: 'translate(-3px, -3px)' },
          '60%': { transform: 'translate(3px, 3px)' },
          '80%': { transform: 'translate(3px, -3px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        morphGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-emerald-500/30',
    'bg-blue-500/30',
    'bg-purple-500/30',
    'bg-emerald-500/10',
    'bg-blue-500/10',
    'bg-purple-500/10',
    'via-emerald-500/40',
    'via-blue-500/40',
    'via-purple-500/40',
  ],
};