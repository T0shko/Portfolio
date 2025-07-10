import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  const socialLinks = [
    { href: 'https://github.com/T0shko', icon: <FaGithub /> },
    { href: 'https://www.linkedin.com/in/teodor-vasilev-b7b44b284', icon: <FaLinkedin /> },
  ]

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700 py-12 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                {t('footer.copyright')}
              </p>
              <p className="text-gray-400 text-xs mt-1">
                {t('footer.copyright')}
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Decorative line */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="inline-block w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 