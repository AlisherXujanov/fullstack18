import "./style.scss"
import TrendingNFTs from "../../../store/db.json"
import Image from "next/image"
import Item from "./item"

function TrendingArt() {
    return (
        <div className="trending-art-wrapper">
            <h1>Trending Art 🔥</h1>
            <p>Discover more</p>

            {/* <div className="nft-item-wrapper">
                <Image 
                    src={''} 
                    alt="NFT thumbnail" 
                    width={100} 
                    height={100} 
                />
                <div className="nft-inner-info">
                    <h2>NFT name</h2>
                    <div className="details">
                        <div className="author">
                            <p className="name">🤖 Author-name</p>
                        </div>
                        <div className="price">
                            <small>Current Bid</small>
                            <p className="current-bid">
                                ⭐3.351
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
            {TrendingNFTs.trandingNfts.map(nft => {
                return (
                    <Item
                        key={nft.id}
                        name={nft.name}
                        price={nft.price}
                        image={nft.image}
                    />
                )
            })}

        </div>
    );
}

export default TrendingArt;
