import './globals.css'
import { Figtree } from 'next/font/google'
import localFont from 'next/font/local'

const figtree = Figtree({ subsets: ['latin'] })
const spotifyMix = localFont({ src: '../public/fonts/Spotify-Mix.woff2' })

export const metadata = {
  title: '~/vivek',
  description: 'Network automation and code adventures',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${figtree.className} bg-[#121212] text-white`}>{children}</body>
    </html>
  )
}

