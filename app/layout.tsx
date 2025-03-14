import 'normalize.css'
import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simple todos app',
  description:
    'This project is a simple todos application where users can create, update, and delte todos making them more productive in their daily lives.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang='en' className={inter.className}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
