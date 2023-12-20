import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/layout/Navbar'
//import Footer from './component/footer'
//import Header from "@/components/layout/header"
//import About from '@/components/About'
import { ThemeProvider } from "@/components/provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      
      <Navbar />
        {children}
        </ThemeProvider>
        
        </body>
    </html>
  )
}
