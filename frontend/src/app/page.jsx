import Heading from "./components/Heading"
import Wallet from "./components/Wallet"
import TrendingArt from "./components/TrendingArt"

function Home() {
  return (
    <div className="home-page-wrapper">
      <Wallet></Wallet>
      <TrendingArt />
    </div>
  )
}

export default Home