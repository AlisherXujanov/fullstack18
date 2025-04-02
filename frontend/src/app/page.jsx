'use client'

import Wallet from "./components/Wallet"
import TrendingArt from "./components/TrendingArt"
import { useState } from "react"


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
      <Wallet />
      <TrendingArt
        showModal={state.showModal}
        handleShowModal={handleShowModal}
      />
    </div>
  )
}

export default Home