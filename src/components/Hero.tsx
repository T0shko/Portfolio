import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaDownload, FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaExternalLinkAlt } from 'react-icons/fa'
import InteractiveBackground from './InteractiveBackground'

const Hero: React.FC = () => {
  const { t } = useTranslation()
  const [showStory, setShowStory] = useState(false)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      <InteractiveBackground />
      <div className="hero-content container mx-auto px-6 text-center relative z-20">
        <div className="max-w-4xl mx-auto animate-fadeInUp">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src="/profile-pic2.png"
              alt="Teodor Vasilev"
              className="w-48 h-48 rounded-full mx-auto border-4 border-white/20 shadow-2xl"
            />
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t('profile.hello')}, {t('profile.sayHello')}
            </h1>
            
            <div className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed space-y-4">
              <p>{t('profile.status.student')}</p>
              <p>{t('profile.status.skills')}</p>
              <p>{t('profile.status.philosophy')}</p>
            </div>
          </div>

          {/* AI Quote */}
          <div className="mb-8">
            <p className="text-lg text-white/60 italic">
              "{t('profile.quote')}"
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => setShowStory(true)}
              className="btn-outline"
            >
              {t('profile.mystory.what_ai_thinks')}
            </button>
            
            <a
              href={t('profile.cvlink')}
              download
              className="btn-outline inline-flex items-center gap-2"
            >
              <FaDownload />
              {t('profile.buttons.download_resume')}
            </a>
            
            <a
              href="#contact"
              className="btn-primary"
            >
              {t('profile.buttons.contact_me')}
            </a>
          </div>

          {/* Social Links */}
          <div className="mb-8">
            <p className="text-white/60 mb-4">{t('profile.connect')}</p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/T0shko"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/teodor-vasilev-b7b44b284"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>


        </div>

        {/* Story Modal */}
        {showStory && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="glass-card p-8 max-w-3xl max-h-[80vh] overflow-y-auto">
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                {t('profile.mystory.whoami')}
              </h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p>{t('profile.mystory.para1')}</p>
                <p>{t('profile.mystory.para2')}</p>
                <p>{t('profile.mystory.para3')}</p>
              </div>
              <button
                onClick={() => setShowStory(false)}
                className="btn-primary mt-8"
              >
                {t('profile.buttons.close')}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero 