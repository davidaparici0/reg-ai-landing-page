import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'REG AI - Revolutionary Fine Dining Training Solutions',
  description: 'AI-powered training platform for fine dining restaurants in NYC. Reduce training costs by 70% while maintaining excellence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="bg-black text-white font-sans">{children}</body>
    </html>
  )
}

