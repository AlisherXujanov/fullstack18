"use client"

import "../assets/styles/initial.scss"
import "../assets/styles/fouc-fix.css"
import 'react-toastify/dist/ReactToastify.css'
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import ThemeProvider from './providers/ThemeProvider'
import { useAuth } from "@/hooks/useAuth"
import { ToastContainer } from 'react-toastify'
import LoadingBar from './components/LoadingBar'
import { useEffect, useState, useReducer } from 'react'
import { globalReducer } from '../store/globalHelper'
import { context, initialData } from '../store'
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';


export default function RootLayout({ children }) {
  const { user, loading } = useAuth()
  const [isReady, setIsReady] = useState(false)
  const [store, dispatch] = useReducer(globalReducer, initialData)
  store.setStore = dispatch

  // const [store, setStore] = useState(initialData)
  // store.setStore = setStore

  useEffect(() => {
    setIsReady(true)
  }, [])

  return (
    <html lang="en">
      <head>
        <title>Nft-Project</title>
      </head>
      <body>
        <context.Provider value={store}>
          <ThemeProvider>
            <div className={`fouc-fix page-container ${isReady ? 'ready' : ''}`}>
              <LoadingBar />

              <I18nextProvider i18n={i18n}>
                <Nav user={user} />
                <main className="content-wrap">
                  {children}
                </main>
                <Footer />
                <ToastContainer />
              </I18nextProvider>
            </div>
          </ThemeProvider>
        </context.Provider>
      </body>
    </html>
  )
}
