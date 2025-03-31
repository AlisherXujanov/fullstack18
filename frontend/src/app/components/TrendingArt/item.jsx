import Image from "next/image"
import "./style.scss"

import NFTImage1 from "../../../assets/images/nft1.png"
import NFTImage2 from "../../../assets/images/nft2.png"
import NFTImage3 from "../../../assets/images/nft3.png"
import NFTImage4 from "../../../assets/images/nft4.png"


const imgs = [NFTImage1, NFTImage2, NFTImage3, NFTImage4]


function Item(props) {
    return (
        <div className="nft-item-wrapper">
            <Image
                src={imgs[props.imageIndex]}
                alt="NFT thumbnail"
                width={345}
                height={250}
            />
            <div className="nft-inner-info">
                <h2>{props.name}</h2>
                <div className="details">
                    <div className="author">
                        <p className="name">🤖 {props.authorName}</p>
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