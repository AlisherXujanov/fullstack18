"use client"

import "../assets/styles/initial.scss"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import ThemeProvider from './providers/ThemeProvider'
import { useAuth } from "@/hooks/useAuth"

export default function RootLayout({ children }) {
  const { user, loading } = useAuth()

 
  return (
    <html lang="en">
      <head>
        <title>Nft-Project</title>
      </head>
      <body>
        <ThemeProvider>
          <Nav user={user} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
