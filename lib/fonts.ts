import localFont from 'next/font/local'
import { JetBrains_Mono, Cormorant_Garamond } from 'next/font/google'

export const clashDisplay = localFont({
  src: [
    {
      path: '../public/fonts/clash-display/ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/clash-display/ClashDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/clash-display/ClashDisplay-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/clash-display/ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash-display',
  display: 'swap',
})

export const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/satoshi/Satoshi-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/satoshi/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/satoshi/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/satoshi/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['300', '400', '500', '700'],
})

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})