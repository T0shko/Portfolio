import React, { useEffect, useState } from 'react'

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number; char: string }>>([])
  const [floatingNumbers] = useState(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])

  useEffect(() => {
    let trailId = 0

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Add trail point with random floating number
      const newTrail = { 
        x: e.clientX, 
        y: e.clientY, 
        id: trailId++, 
        char: floatingNumbers[Math.floor(Math.random() * floatingNumbers.length)]
      }
      setTrail(prev => [...prev.slice(-8), newTrail])
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]')
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Floating Numbers */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9997] font-mono text-sm text-green-400 font-bold"
          style={{
            left: point.x + (Math.random() - 0.5) * 20,
            top: point.y + (Math.random() - 0.5) * 20,
            transform: 'translate(-50%, -50%)',
            opacity: (index + 1) / trail.length * 0.9,
            textShadow: '0 0 8px #00ff41, 0 0 15px #00ff41',
            animation: `fadeOut 2s ease-out forwards`,
            fontSize: `${12 + (index / trail.length) * 6}px`,
          }}
        >
          {point.char}
        </div>
      ))}
      
      {/* Matrix Cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-150 ease-out ${
          isHovering ? 'scale-125' : 'scale-100'
        } ${isClicking ? 'scale-90' : ''}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Core cursor - smaller and more minimal */}
        <div 
          className={`w-2 h-2 relative transition-all duration-200 ${
            isHovering 
              ? 'bg-green-300' 
              : 'bg-green-400'
          }`}
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            boxShadow: isHovering
              ? '0 0 15px rgba(0, 255, 65, 0.9), 0 0 30px rgba(0, 255, 65, 0.6)'
              : '0 0 10px rgba(0, 255, 65, 0.8), 0 0 20px rgba(0, 255, 65, 0.4)'
          }}
        >
          {/* Digital glitch effect */}
          <div 
            className="absolute inset-0 bg-green-300 opacity-30 animate-pulse"
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          />
        </div>
        
        {/* Simple glow ring */}
        <div 
          className={`absolute inset-0 rounded-full transition-all duration-300 ${
            isHovering 
              ? 'scale-300 opacity-30' 
              : 'scale-200 opacity-15'
          }`}
          style={{
            width: '8px',
            height: '8px',
            border: '1px solid #00ff41',
            transform: `translate(-50%, -50%) scale(${isHovering ? 3 : 2})`,
            boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)',
          }}
        />
        
        {/* Click digital burst */}
        {isClicking && (
          <div 
            className="absolute inset-0 opacity-60"
            style={{
              width: '20px',
              height: '20px',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, rgba(0, 255, 65, 0.8) 0%, transparent 70%)',
              animation: 'ping 0.4s cubic-bezier(0, 0, 0.2, 1)'
            }}
          />
        )}
      </div>

      {/* Matrix Glow */}
      <div
        className="fixed pointer-events-none z-[9998] w-6 h-6 opacity-15 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0, 255, 65, 0.6), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(3px)',
          mixBlendMode: 'screen'
        }}
      />
    </>
  )
}

export default CustomCursor 