import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const FAQ: React.FC = () => {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = t('faq.questions', { returnObjects: true }) as Array<{
    question: string
    answer: string
  }>

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-surface section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Quote Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('faq.quote.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              {t('faq.quote.subtitle')}
            </h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              {t('faq.quote.description')}
            </p>
            
            {/* Quote Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card p-6">
                <h4 className="text-lg font-semibold mb-2 gradient-text">
                  {t('faq.quote.features.proposals')}
                </h4>
              </div>
              <div className="glass-card p-6">
                <h4 className="text-lg font-semibold mb-2 gradient-text">
                  {t('faq.quote.features.response')}
                </h4>
              </div>
              <div className="glass-card p-6">
                <h4 className="text-lg font-semibold mb-2 gradient-text">
                  {t('faq.quote.features.pricing')}
                </h4>
              </div>
            </div>
            
            <a
              href="#contact"
              className="btn-primary"
            >
              {t('faq.quote.cta')}
            </a>
          </div>

          {/* FAQ Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('faq.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              {t('faq.subtitle')}
            </h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              {t('faq.description')}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 mb-12">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-card overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-6 text-left hover:bg-white/[0.02] transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <FaChevronUp className="text-blue-400 flex-shrink-0 ml-4" />
                    ) : (
                      <FaChevronDown className="text-blue-400 flex-shrink-0 ml-4" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-white/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Still have questions */}
            <div className="glass-card p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                {t('faq.stillquestions.title')}
              </h3>
              <p className="text-white/70 mb-6">
                {t('faq.stillquestions.description')}
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="btn-primary"
                >
                  {t('faq.stillquestions.cta1')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ 