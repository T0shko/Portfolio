import React, { useEffect, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'

const InteractiveBackground: React.FC = () => {
  const { t } = useTranslation()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [displayText, setDisplayText] = useState('')
  const fullText = t('terminal.response')
  const [currentIndex, setCurrentIndex] = useState(0)

  // Typewriter effect with loop
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 150)
      return () => clearTimeout(timeout)
    } else {
      // Reset after completion with a delay
      const resetTimeout = setTimeout(() => {
        setDisplayText('')
        setCurrentIndex(0)
      }, 3000) // Wait 3 seconds before restarting
      return () => clearTimeout(resetTimeout)
    }
  }, [currentIndex, fullText])

  // Reset display text when language changes
  useEffect(() => {
    setDisplayText('')
    setCurrentIndex(0)
  }, [fullText])

  // Video autoplay handling
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const playVideo = async () => {
      try {
        await video.play()
        console.log('Video started playing')
      } catch (error) {
        console.log('Autoplay was prevented, trying to play on user interaction:', error)
        
        // Try to play on any user interaction
        const playOnInteraction = async () => {
          try {
            await video.play()
            console.log('Video started playing after user interaction')
            // Remove listeners after successful play
            document.removeEventListener('click', playOnInteraction)
            document.removeEventListener('touchstart', playOnInteraction)
            document.removeEventListener('keydown', playOnInteraction)
          } catch (err) {
            console.error('Failed to play video:', err)
          }
        }

        document.addEventListener('click', playOnInteraction)
        document.addEventListener('touchstart', playOnInteraction)
        document.addEventListener('keydown', playOnInteraction)
      }
    }

    // Attempt to play when video is loaded
    if (video.readyState >= 3) {
      playVideo()
    } else {
      video.addEventListener('canplaythrough', playVideo)
    }

    // Ensure video keeps playing
    const handleVideoEnd = () => {
      video.currentTime = 0
      video.play()
    }

    video.addEventListener('ended', handleVideoEnd)

    return () => {
      video.removeEventListener('canplaythrough', playVideo)
      video.removeEventListener('ended', handleVideoEnd)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/Portfolio/matrixEffect.webm" type="video/webm" />
      </video>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80">
        <div className="absolute inset-0">
          {/* Matrix rain effect would go here */}
        </div>
      </div>

      {/* Interactive Terminal - Positioned LOWER RIGHT */}
      <div className="absolute top-24 right-8 z-20">
        <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden w-80 backdrop-blur-sm bg-opacity-95">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-gray-400 text-sm font-mono">{t('terminal.title')}</span>
            </div>
          </div>
          
          {/* Terminal Content */}
          <div className="p-4 bg-black min-h-[120px] flex items-center">
            <div className="font-mono text-green-400">
              <div className="text-sm text-gray-500 mb-2">
                <span className="text-blue-400">{t('terminal.command')}</span>
              </div>
              <div className="text-lg font-medium">
                {displayText}
                <span className="animate-pulse text-green-300">|</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none z-15"></div>
    </div>
  )
}

export default InteractiveBackground 