import "./style.scss"
import Image from "next/image"
import AboutImg from "../../assets/images/about_image.png"
import Astronot from "../../assets/images/ASTRONOT.png"
import Rocket from "../../assets/images/rocket-nft.png"
import Collections from "../../assets/images/collections.png"
import Creators from "../../assets/images/creators.png"
import Volurme from "../../assets/images/volurme.png"
import NftDistro from "../../assets/images/nft-distro.png"
import Logo1 from "../../assets/images/logoipsum1.png"
import Logo2 from "../../assets/images/logoipsum2.png"
import Logo3 from "../../assets/images/logoipsum3.png"
import Logo4 from "../../assets/images/logoipsum4.png"
import Logo5 from "../../assets/images/logoipsum5.png"
import Logo6 from "../../assets/images/logoipsum6.png"
import Logo7 from "../../assets/images/logoipsum7.png"
import Logo8 from "../../assets/images/logoipsum8.png"
import Logo9 from "../../assets/images/logoipsum9.png"

function About() { 
    return (
        <div className="about-page">
            <div className="about-page-wrapper">
                <div className="about-page-content">
                    <p>NFT MARKETPLACE</p>
                    <h1>About our Company NFT Distro</h1>
                    <p className="about-page-description">
                        We are a cutting-edge company focused on the creation,
                        promotion, and sale of non-fungible tokens (NFTs). Our marketplace
                        offers a wide range of NFTs, from digital art
                        and collectibles to gaming
                        items and virtual real estate.
                    </p>
                </div>
                <div className="about-image">
                    <Image src={AboutImg} alt=""></Image>
                </div>
            </div>
            <div className="about-content">
                <div className="about-content-image">
                    <Image src={Astronot} alt="" width={500} height={500}></Image>
                </div>
                <div className="about-nft-represent">
                    <h1>NFT Represent
                        the future</h1>
                    <p>We believe that NFTs represent the future of digital ownership and are excited to provide our customers with access to this revolutionary new market. Our platform is user-friendly and easy to navigate, making it simple for creators to upload and sell their NFTs and for buyers to discover and purchase unique digital assets.</p>
                </div>
            </div>
            <div className="about-icons">
                <div className="about-rocket">
                    <Image src={Rocket} alt=""></Image>
                    <h1>23.400</h1>
                    <p>NFT'S</p>
                </div>
                <div className="about-collections">
                    <Image src={Collections} alt=""></Image>
                    <h1>8.000</h1>
                    <p>Collections</p>
                </div>
                <div className="about-creators">
                    <Image src={Creators} alt=""></Image>
                    <h1>3,400</h1>
                    <p>Creators</p>
                </div>
                <div className="about-volurme">
                    <Image src={Volurme} alt=""></Image>
                    <h1>$21B+</h1>
                    <p>Volurme</p>
                </div>
            </div>
            <div className="about-nft-distro">
                <h1>NFT Distro</h1>
                <div className="nft-distro">
                    <Image src={NftDistro} alt=""></Image>
                </div>
            </div>
            <div className="about-partners">
                <h1>Our Partners</h1>
                <div className="about-partners-icon">
                    <Image src={Logo1} alt=""></Image>
                    <Image src={Logo2} alt=""></Image>
                    <Image src={Logo3} alt=""></Image>
                    <Image src={Logo4} alt=""></Image>
                    <Image src={Logo5} alt=""></Image>
                    <Image src={Logo6} alt=""></Image>
                    <Image src={Logo1} alt=""></Image>
                    <Image src={Logo7} alt=""></Image>
                    <Image src={Logo8} alt=""></Image>
                    <Image src={Logo9} alt=""></Image>
                </div>
            </div>
        </div>
    );
}

export default About