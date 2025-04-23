// npx json-server -w src/store/db.json -p 3001

'use client'

import Wallet from "./components/Wallet"
import TrendingArt from "./components/TrendingArt"
import { useState } from "react"
import { ToastContainer } from 'react-toastify';


function Home() {
  const [state, setState] = useState({
    theme: 'light',
    showModal: false,
  })

  function handleShowModal(e, bool) {
    setState({
      ...state,
      showModal: bool
    })
  }
  return (
    <div className="home-page-wrapper">
      <ToastContainer />
      <Wallet />
      <TrendingArt
        showModal={state.showModal}
        handleShowModal={handleShowModal}
      />
    </div>
  )
}

export default Home