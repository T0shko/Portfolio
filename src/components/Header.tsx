import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa'

const Header: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setIsLangMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity cursor-pointer"
          >
            Teodor Vasilev
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white/70 hover:text-white transition-colors"
            >
              {t('profile.links.projects')}
            </button>
          
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-white/70 hover:text-white transition-colors"
            >
              {t('profile.links.service')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/70 hover:text-white transition-colors"
            >
              {t('profile.links.contact')}
            </button>
          </nav>

          {/* Available Status */}
          <div className="hidden md:flex ml-8">
            <span className="status-available">
              {t('profile.status.available')}
            </span>
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={toggleLangMenu}
                className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
              >
                <span className="text-xl">
                  {i18n.language === 'en' ? '🇬🇧' : i18n.language === 'es' ? '🇪🇸' : '🇫🇷'}
                </span>
              </button>
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 glass-card rounded-lg shadow-lg">
                  <button
                    onClick={() => changeLanguage('en')}
                    className="block w-full text-left px-4 py-2 text-white/70 hover:bg-white/[0.05] hover:text-white transition-colors rounded-t-lg"
                  >
                    🇬🇧 English
                  </button>
                  <button
                    onClick={() => changeLanguage('es')}
                    className="block w-full text-left px-4 py-2 text-white/70 hover:bg-white/[0.05] hover:text-white transition-colors"
                  >
                    🇪🇸 Español
                  </button>
                  <button
                    onClick={() => changeLanguage('fr')}
                    className="block w-full text-left px-4 py-2 text-white/70 hover:bg-white/[0.05] hover:text-white transition-colors rounded-b-lg"
                  >
                    🇫🇷 Français
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white/70 hover:text-white transition-colors"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-card rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                {t('profile.links.projects')}
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                {t('profile.links.service')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white/70 hover:text-white transition-colors text-left"
              >
                {t('profile.links.contact')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 