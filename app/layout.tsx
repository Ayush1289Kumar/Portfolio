import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { clashDisplay, satoshi, jetbrainsMono, cormorantGaramond } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ayush Kumar | Software Engineering Student',
  description: 'Software Engineering student passionate about programming, technology, philosophy, and continuous learning. Building meaningful projects while documenting the journey.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#121212',
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${clashDisplay.variable} ${satoshi.variable} ${jetbrainsMono.variable} ${cormorantGaramond.variable} scroll-smooth bg-black`}>
      <body className="antialiased bg-black text-gray-100">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}