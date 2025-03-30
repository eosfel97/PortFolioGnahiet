import React from 'react';
import { Database, Server, Code, FileCode, GitBranch, Terminal } from 'lucide-react';
import { ScrollAnimationWrapper } from './ScrollAnimation';
import { motion } from 'framer-motion';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Langages de programmation",
      icon: <Code size={40} className="text-emerald-500 mb-4" aria-hidden="true" />,
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "Python", level: 75 },
        { name: "PHP", level: 70 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Technologies Backend",
      icon: <Server size={40} className="text-emerald-500 mb-4" aria-hidden="true" />,
      skills: [
        { name: "Spring Boot", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "Django", level: 65 },
        { name: "Laravel", level: 60 }
      ]
    },
    {
      title: "Bases de données",
      icon: <Database size={40} className="text-emerald-500 mb-4" aria-hidden="true" />,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Redis", level: 60 },
        { name: "Oracle", level: 65 }
      ]
    },
    {
      title: "Développement Frontend",
      icon: <FileCode size={40} className="text-emerald-500 mb-4" aria-hidden="true" />,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "React", level: 75 },
        { name: "Vue.js", level: 65 },
        { name: "Bootstrap", level: 80 },
        { name: "Tailwind CSS", level: 75 }
      ]
    },
    {
      title: "DevOps & Outils",
      icon: <Terminal size={40} className="text-emerald-500 mb-4" aria-hidden="true" />,
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 65 },
        { name: "AWS", level: 60 },
        { name: "Linux", level: 75 }
      ]
    },
    {
      title: "Méthodologies",
      icon: <GitBranch size={40} className="text-emerald-500 mb-4" aria-hidden="true" />,
      skills: [
        { name: "Agile/Scrum", level: 80 },
        { name: "TDD", level: 70 },
        { name: "REST API Design", level: 85 },
        { name: "Microservices", level: 75 },
        { name: "UML", level: 80 }
      ]
    }
  ];

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { 
        duration: 1,
        ease: "easeOut" 
      }
    })
  };

  return (
    <section id="skills" role="region" aria-labelledby="skills-heading" className="py-20 bg-slate-900 relative overflow-hidden">
      <ScrollAnimationWrapper 
        id="skills-wrapper" 
        className="relative"
        animationType="fade"
      >
        {/* Éléments de fond décoratifs */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-slate-800/50 to-transparent pointer-events-none" aria-hidden="true"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-b from-emerald-500/10 to-transparent rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-t from-emerald-500/10 to-transparent rounded-full blur-3xl" aria-hidden="true"></div>
        
        <motion.div 
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ScrollAnimationWrapper
            id="skills-header"
            className="text-center mb-16"
            animationType="slide"
          >
            <h2 id="skills-heading" className="text-3xl font-bold">Mes compétences</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Voici les technologies, langages et méthodologies avec lesquels je travaille au quotidien.
            </p>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <ScrollAnimationWrapper
                key={categoryIndex}
                id={`skill-category-${categoryIndex}`}
                className="bg-slate-800 rounded-xl p-8 transition-transform hover:-translate-y-2 duration-300 relative overflow-hidden group"
                animationType="scale"
                delay={categoryIndex * 0.1}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ 
                    background: [
                      "linear-gradient(to bottom right, rgba(16, 185, 129, 0.05), rgba(59, 130, 246, 0.05))",
                      "linear-gradient(to bottom right, rgba(59, 130, 246, 0.05), rgba(16, 185, 129, 0.05))",
                      "linear-gradient(to bottom right, rgba(16, 185, 129, 0.05), rgba(59, 130, 246, 0.05))"
                    ]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  aria-hidden="true"
                />
                <div className="text-center relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-6">{category.title}</h3>
                </div>
                <div className="space-y-4 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={skill.level} aria-label={`${skill.name} niveau`}>
                        <motion.div 
                          className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full" 
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.8 }}
                          custom={skill.level}
                          variants={progressBarVariants}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default SkillsSection;
