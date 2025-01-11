'use client'

import { Mail, Linkedin } from 'lucide-react'
import { useState } from 'react'

export default function SocialLinks() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  return (
    <div className="flex justify-center space-x-4">
      <a 
        href="mailto:your.email@example.com" 
        className="text-blue-400 transition-all duration-300 ease-in-out"
        onMouseEnter={() => setHoveredIcon('email')}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <Mail 
          size={22} 
          style={{
            transform: hoveredIcon === 'email' ? 'scale(1.2) rotate(5deg)' : 'scale(1)',
            filter: hoveredIcon === 'email' ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' : 'none'
          }}
        />
        <span className="sr-only">Email</span>
      </a>
      <a 
        href="https://www.linkedin.com/in/your-profile" 
        className="text-blue-400 transition-all duration-300 ease-in-out"
        onMouseEnter={() => setHoveredIcon('linkedin')}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <Linkedin 
          size={22} 
          style={{
            transform: hoveredIcon === 'linkedin' ? 'scale(1.2) rotate(-5deg)' : 'scale(1)',
            filter: hoveredIcon === 'linkedin' ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' : 'none'
          }}
        />
        <span className="sr-only">LinkedIn</span>
      </a>
    </div>
  )
}

