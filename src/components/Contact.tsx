import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact: React.FC = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    const mailtoUrl = `mailto:teodor.d.vasilevred@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoUrl)
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {t('footer.thenext')}
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
              {t('footer.letsconnect')}
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              {t('footer.contactdesk')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">{t('contact.labels.email')}</h4>
                    <p className="text-gray-300">teodor.d.vasilevred@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">{t('contact.labels.location')}</h4>
                    <p className="text-gray-300">{t('contact.location_value')}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <FaLinkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">{t('contact.labels.linkedin')}</h4>
                    <p className="text-gray-300">teodor-vasilev-b7b44b284</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <FaGithub className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">{t('contact.labels.github')}</h4>
                    <p className="text-gray-300">@T0shko</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    {t('contact.labels.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder={t('contact.placeholders.name')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    {t('contact.labels.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder={t('contact.placeholders.email')}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    {t('contact.labels.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 resize-none backdrop-blur-sm"
                    placeholder={t('contact.placeholders.message')}
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  {t('footer.sayhi')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 