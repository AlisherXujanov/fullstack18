"use client"

import "../assets/styles/initial.scss"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import ThemeProvider from './providers/ThemeProvider'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Nft-Project</title>
      </head>
      <body>
        <ThemeProvider>
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
