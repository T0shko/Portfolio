import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaCode, FaShieldAlt, FaPaintBrush } from 'react-icons/fa'

const Work: React.FC = () => {
  const { t } = useTranslation()

  const services = [
    {
      title: t('work.webdev.title'),
      description: t('work.webdev.description'),
      icon: <FaCode className="text-accent" size={48} />
    },
    {
      title: t('work.seo.title'),
      description: t('work.seo.description'),
      icon: <FaShieldAlt className="text-accent" size={48} />
    },
    {
      title: t('work.webdesign.title'),
      description: t('work.webdesign.description'),
      icon: <FaPaintBrush className="text-accent" size={48} />
    }
  ]

  return (
    <section id="work" className="section-padding bg-bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-accent">
            {t('work.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-bg-secondary rounded-lg p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-primary">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work 