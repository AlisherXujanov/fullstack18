"use client"

import "./style.scss"
import Image from "next/image"
import { useState } from "react"
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
import teamData from "../../store/db.json"
import Ellipse1 from "../../assets/images/Ellipse1.png"

function About() { 
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
                    <Image src={AboutImg} alt="" width={500} height={500}></Image>
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
                    <Image src={Rocket} alt="" width={100} height={100}></Image>
                    <h1>23.400</h1>
                    <p>NFT'S</p>
                </div>
                <div className="about-collections">
                    <Image src={Collections} alt="" width={100} height={100}></Image>
                    <h1>8.000</h1>
                    <p>Collections</p>
                </div>
                <div className="about-creators">
                    <Image src={Creators} alt="" width={100} height={100}></Image>
                    <h1>3,400</h1>
                    <p>Creators</p>
                </div>
                <div className="about-volurme">
                    <Image src={Volurme} alt="" width={100} height={100}></Image>
                    <h1>$21B+</h1>
                    <p>Volurme</p>
                </div>
            </div>
            <div className="about-nft-distro">
                <h1>NFT Distro</h1>
                <div className="nft-distro">
                    <Image src={NftDistro} alt="" width={500} height={500}></Image>
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
            <div className="about-nft-team">
                <h1>Our Team</h1>
                <div className="about-nft-team-image">
                    {teamData.team.map((member) => (
                        <div key={member.id} className={`team${member.id}`}>
                            <Image src={Ellipse1} alt={member.name} width={180} height={170} />
                            <h5>{member.name}</h5>
                            <p className="about-nft-team-position">{member.position}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="about-nft-join">
                <div className="about-nft-join-content">
                    <h1>Interested in joining us?</h1>
                    <p>We're always looking for passionate individuals to help us achieve our goals. Apply today and let's build a better future together.</p>
                    <button className="about-nft-join-button" onClick={openModal}>Join Us</button>
                </div>
            </div>

            {/* Модальное окно */}
            {isModalOpen && (
                <div className="about-modal active">
                    <div className="modal-content">
                        <span className="modal-close" onClick={closeModal}>×</span>
                        <h2>Join Our Team!</h2>
                        <p>We are always looking for passionate individuals to help us achieve our goals. Apply today and let's build a better future together!</p>
                        <button type="submit">Apply Now</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default About;
