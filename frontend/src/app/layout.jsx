"use client"

import "../assets/styles/initial.scss"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import ThemeProvider from './providers/ThemeProvider'
import { useAuth } from "@/hooks/useAuth"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoadingBar from './components/LoadingBar'

export default function RootLayout({ children }) {
  const { user, loading } = useAuth()

 
  return (
    <html lang="en">
      <head>
        <title>Nft-Project</title>
      </head>
      <body>
        <ThemeProvider>
          <LoadingBar />
          <Nav user={user} />
          {children}
          <Footer />
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  )
}
