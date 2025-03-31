import Image from "next/image"
import "./style.scss"

function Item(props) {
    return (
        <div className="nft-item-wrapper">
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
                        <small className="text-muted">Current Bid</small>
                        <p className="current-bid">
                            ⭐3.351
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item