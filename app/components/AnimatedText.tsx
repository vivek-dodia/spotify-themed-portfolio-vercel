'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const text = "Hi, I'm Vivek, automating networks and infrastructure at [ResiBridge](https://www.resibridge.com/about-us) when the sun's up, and diving into code adventures on [GitHub](https://github.com/vivek-dodia) when the stars take over. Git at night."

export default function AnimatedText() {
  const [displayText, setDisplayText] = useState('')
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    setDisplayText(text)
  }, [])

  const renderText = (text: string) => {
    const parts = text.split(/(\[.*?\]$$.*?$$)/)
    return parts.map((part, index) => {
      const match = part.match(/\[(.*?)\]$$(.*?)$$/)
      if (match) {
        return (
          <Link key={index} href={match[2]} className="text-blue-200 hover:text-blue-100 underline">
            {match[1]}
          </Link>
        )
      }
      return part
    })
  }

  return (
    <p 
      className="text-sm mb-8 whitespace-nowrap overflow-x-auto max-w-full transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        textShadow: isHovered ? '0 0 8px rgba(255, 255, 255, 0.5)' : 'none'
      }}
    >
      {renderText(displayText)}
    </p>
  )
}

