import './globals.css'

import type { Metadata } from 'next'
import { Geist } from 'next/font/google'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Haven Health',
  description: 'Your Wellness, Our Commitment',
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  display: 'swap',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <div className="container max-w-screen-xl mx-auto px-4">{children}</div>
      </body>
    </html>
  )
}
