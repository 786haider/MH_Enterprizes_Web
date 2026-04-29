import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MH Enterprises | Premium Tiles, Sanitary & Ceramics',
  description: '35 Years of Excellence in Tiles, Sanitary Ware & Ceramics. Pakistan\'s trusted name in premium surface solutions since 1989.',
  keywords: 'tiles, ceramics, sanitary ware, bathroom tiles, floor tiles, wall tiles, Pakistan',
  openGraph: {
    title: 'MH Enterprises | Premium Tiles, Sanitary & Ceramics',
    description: '35 Years of Excellence in Premium Surface Solutions',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
