import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Projects: React.FC = () => {
  const { t } = useTranslation()
  
  const projects = [
    {
      title: t('project.list.speechwave.title'),
      description: t('project.list.speechwave.description'),
      image: "/Portfolio/static/media/speechTranscriber.png",
      tech: ["C#", "WPF", "OpenAI Whisper", "Material Design"],
      link: "#",
      cta: t('project.list.speechwave.cta')
    },
    {
      title: t('project.list.schoolerp.title'),
      description: t('project.list.schoolerp.description'),
      image: "/Portfolio/static/media/erp.png",
      tech: ["JavaScript", "PHP", "MySQL", "jQuery"],
      link: "#",
      cta: t('project.list.schoolerp.cta')
    },
    {
      title: t('project.list.marketplace.title'),
      description: t('project.list.marketplace.description'),
      image: "/Portfolio/static/media/marketAPP.png",
      tech: ["JavaScript", "Android", "PHP", "MySQL"],
      link: "#",
      cta: t('project.list.marketplace.cta')
    },
    {
      title: t('project.list.sqlscanner.title'),
      description: t('project.list.sqlscanner.description'),
      image: "/Portfolio/static/media/sql_injection.jpg",
      tech: ["Python", "Security", "Web Scanning", "Reports"],
      link: "#",
      cta: t('project.list.sqlscanner.cta')
    },
    {
      title: t('project.list.snaptap.title'),
      description: t('project.list.snaptap.description'),
      image: "/Portfolio/static/media/snap_tap_hero.avif",
      tech: ["C#", "Game Development", "Input Emulation"],
      link: "#",
      cta: t('project.list.snaptap.cta')
    },
    {
      title: t('project.list.studentcouncil.title'),
      description: t('project.list.studentcouncil.description'),
      image: "/Portfolio/static/media/students_council.png",
      tech: ["JavaScript", "PHP", "Security", "Automation"],
      link: "#",
      cta: t('project.list.studentcouncil.cta')
    },
    {
      title: t('project.list.fivemscripts.title'),
      description: t('project.list.fivemscripts.description'),
      image: "/Portfolio/static/media/FiveM.jpg",
      tech: ["Lua", "FiveM", "Game Scripting", "Optimization"],
      link: "#",
      cta: t('project.list.fivemscripts.cta')
    },
    {
      title: t('project.list.emailsender.title'),
      description: t('project.list.emailsender.description'),
      image: "/Portfolio/static/media/Email_sender.webp",
      tech: ["Node.js", "JavaScript", "SMTP", "Automation", "Load Balancing"],
      link: "#",
      cta: t('project.list.emailsender.cta')
    },
    {
      title: t('project.list.mobileverse.title'),
      description: t('project.list.mobileverse.description'),
      image: "/Portfolio/static/media/mobile-verse.png",
      tech: ["React", "TypeScript", "Supabase", "Real-time", "Mobile-first"],
      link: "#",
      cta: t('project.list.mobileverse.cta')
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t('project.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              {t('project.mywork')}
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('project.description')}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium"
                  >
                    {project.cta}
                    <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 