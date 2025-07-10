import React from 'react'
import { useTranslation } from 'react-i18next'
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaPhp, 
  FaNodeJs, 
  FaGitAlt, 
  FaDocker,
  FaFigma,
  FaWordpress,
  FaMobile
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMysql, 
  SiMongodb,
  SiExpress,
  SiFramer,
  SiWebpack,
  SiLighthouse,
  SiPwa,
  SiExpo,
  SiAndroid,
  SiApple,
  SiRedux,
  SiFirebase
} from 'react-icons/si'

const Skills: React.FC = () => {
  const { t } = useTranslation()
  
  const skillCategories = [
    {
      title: t('skill.categories.fullstack.title'),
      description: t('skill.categories.fullstack.description'),
      icon: "💻",
      skills: t('skill.categories.fullstack.skills', { returnObjects: true }) as string[]
    },
    {
      title: t('skill.categories.desktop.title'), 
      description: t('skill.categories.desktop.description'),
      icon: "🖥️",
      skills: t('skill.categories.desktop.skills', { returnObjects: true }) as string[]
    },
    {
      title: t('skill.categories.security.title'),
      description: t('skill.categories.security.description'),
      icon: "🔐", 
      skills: t('skill.categories.security.skills', { returnObjects: true }) as string[]
    },
    {
      title: t('skill.categories.gamedev.title'),
      description: t('skill.categories.gamedev.description'),
      icon: "🎮",
      skills: t('skill.categories.gamedev.skills', { returnObjects: true }) as string[]
    },
    {
      title: t('skill.categories.database.title'),
      description: t('skill.categories.database.description'),
      icon: "🗄️",
      skills: t('skill.categories.database.skills', { returnObjects: true }) as string[]
    }
  ]

  const additionalSkills = t('skill.additional_skills_list', { returnObjects: true }) as string[]

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute top-3/4 left-1/2 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t('skill.subtitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {t('skill.title')}
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('skill.description')}
            </p>
          </div>
          
          {/* Main Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card p-8 group"
              >
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  {category.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/70 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="tech-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6 gradient-text text-center">
              {t('skill.additional_skills')}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="tech-tag hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 