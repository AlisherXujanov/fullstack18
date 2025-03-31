import Image from "next/image"
import "./style.scss"

function Item(props) {
    return (
        <div className="nft-item-wrapper">
            <Image
                src={props.image}
                alt="NFT thumbnail"
                width={100}
                height={100}
            />
            <div className="nft-inner-info">
                <h2>{props.name}</h2>
                <div className="details">
                    <div className="author">
                        <p className="name">🤖 Author-name</p>
                    </div>
                    <div className="price">
                        <small className="text-muted">Current Bid</small>
                        <p className="current-bid">
                            ⭐{props.price}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item