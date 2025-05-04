"use client"

import "../assets/styles/initial.scss"
import "../assets/styles/fouc-fix.css"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import ThemeProvider from './providers/ThemeProvider'
import { useAuth } from "@/hooks/useAuth"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoadingBar from './components/LoadingBar'
import { useEffect, useState } from 'react'

export default function RootLayout({ children }) {
  const { user, loading } = useAuth()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])

  return (
    <html lang="en">
      <head>
        <title>Nft-Project</title>
      </head>
      <body>
        <ThemeProvider>
          <div className={`fouc-fix ${isReady ? 'ready' : ''}`}>
            <LoadingBar />
            <Nav user={user} />
            {children}
            <Footer />
            <ToastContainer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
