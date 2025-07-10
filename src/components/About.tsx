import React from 'react'
import { useTranslation } from 'react-i18next'

const About: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t('profile.about.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {t('profile.about.description')}
            </p>
          </div>

          {/* About Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/10">
            <div className="text-lg text-gray-300 leading-relaxed space-y-6">
              <p>
                {t('profile.about.intro')}
              </p>
              <p>
                {t('profile.about.expertise')}
              </p>
              <p>
                {t('profile.about.experience')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 