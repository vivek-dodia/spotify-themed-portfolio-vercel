"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Play, Pause, Clock, MoreHorizontal, Mail, Linkedin, Github, DockIcon as Docker } from 'lucide-react'
import LocalFont from 'next/font/local'

const spotifyMix = LocalFont({
  src: "../public/fonts/Spotify-Mix.woff2",
  variable: "--font-spotify-mix",
})

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [time, setTime] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isPlaying) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    } else if (interval) {
      clearInterval(interval)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const resetTimer = () => {
    setTime(0)
    setIsPlaying(false)
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b from-[#1e1e1e] to-[#121212] ${spotifyMix.variable}`}>
      <header className="p-8 flex items-end space-x-6">
        <div className="w-52 h-52 relative shadow-2xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-11-03%2000_04_36-NVIDIA%20GeForce%20Overlay%20DT-FbJHkCsdcTN2xKXrWOmCDD0UgzWikz.png"
            alt="Black and white urban portrait on a rooftop"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase mb-2">Profile</h2>
          <h1 className={`${spotifyMix.variable} font-spotify-mix text-8xl font-black mb-6`}>vivek</h1>
          <p className="text-sm text-[#b3b3b3]">Network Automation • Infrastructure • Code Adventures</p>
          <div className="flex space-x-4 mt-4">
            <Link 
              href="mailto:vivek.dodia@icloud.com"
              className="text-[#b3b3b3] hover:text-[#1db954] transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link 
              href="https://www.linkedin.com/in/vivekdodia/"
              className="text-[#b3b3b3] hover:text-[#1db954] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="px-8 py-6">
        <div className="flex items-center space-x-4 mb-6">
          <Link href="https://open.spotify.com/user/22auvhdoqxfrv4t7stdgfxqha" target="_blank" rel="noopener noreferrer">
            <button
              onClick={togglePlay}
              className="bg-[#1db954] text-white p-2 rounded-full hover:bg-[#1ed760] transition-colors"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
          </Link>
          <button 
            onClick={resetTimer}
            className="text-[#b3b3b3] hover:text-white flex items-center space-x-2"
          >
            <Clock className="w-8 h-8" />
            <span className="text-sm font-medium">{formatTime(time)}</span>
          </button>
          <button className="text-[#b3b3b3] hover:text-white">
            <MoreHorizontal className="w-8 h-8" />
          </button>
        </div>

        <div className="bg-[#181818] rounded-lg p-4 mb-6">
          <h3 className="text-2xl font-bold mb-4">About</h3>
          <p className="text-[#b3b3b3] leading-relaxed">
            Hi, I'm Vivek, automating networks and infrastructure at{' '}
            <Link href="https://www.resibridge.com/about-us" className="text-[#1db954] hover:underline">
              ResiBridge
            </Link>{' '}
            when the sun's up, and diving into code adventures on{' '}
            <Link href="https://github.com/vivek-dodia" className="text-[#1db954] hover:underline">
              GitHub
            </Link>{' '}
            when the stars take over. Git at night.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Popular Repositories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              href="https://github.com/vivek-dodia" 
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition flex items-start space-x-3">
                <Github className="w-5 h-5 text-[#1db954] mt-1" />
                <div>
                  <h4 className="font-bold mb-2 group-hover:text-[#1db954] transition-colors">Network Automation</h4>
                  <p className="text-sm text-[#b3b3b3]">My GitHub Projects</p>
                </div>
              </div>
            </Link>
            <Link 
              href="https://hub.docker.com/" 
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition flex items-start space-x-3">
                <Docker className="w-5 h-5 text-[#1db954] mt-1" />
                <div>
                  <h4 className="font-bold mb-2 group-hover:text-[#1db954] transition-colors">DockerHub</h4>
                  <p className="text-sm text-[#b3b3b3]">Container Registry</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

