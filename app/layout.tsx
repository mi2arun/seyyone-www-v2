import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Seyyone - Healthcare Back Office Services | Medical Transcription & Billing',
  description: 'Leading healthcare back office services provider since 1999. HIPAA compliant medical transcription, billing, coding, and EHR support for hospitals worldwide.',
  keywords: 'medical transcription, medical billing, healthcare BPO, medical coding, EHR support, HIPAA compliant, medical scribe services',
  authors: [{ name: 'Seyyone' }],
  openGraph: {
    title: 'Seyyone - Healthcare Back Office Services',
    description: 'Trusted healthcare BPO partner since 1999. Medical transcription, billing, coding services.',
    url: 'https://seyyone.com',
    siteName: 'Seyyone',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seyyone - Healthcare Back Office Services',
    description: 'Leading healthcare BPO services provider. HIPAA compliant solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${outfit.variable}`}>{children}</body>
    </html>
  )
}