import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
     <body className="bg-white text-black flex flex-col min-h-screen">
        <Header />
        <main >{children}</main>
        <Footer />
      </body>
    </html>
  )
}
