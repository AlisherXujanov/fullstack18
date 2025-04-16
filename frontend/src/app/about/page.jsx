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
        <main className="about-page">
            {/* Hero Section */}
            <section className="about-page-wrapper">
                <div className="about-page-content">
                    <span className="section-label">NFT MARKETPLACE</span>
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
                    <Image src={AboutImg} alt="NFT Distro company illustration" width={500} height={500} priority />
                </div>
            </section>

            {/* NFT Future Section */}
            <section className="about-content">
                <div className="about-content-image">
                    <Image src={Astronot} alt="Astronaut NFT illustration" width={500} height={500} />
                </div>
                <div className="about-nft-represent">
                    <h2>NFT Represent the future</h2>
                    <p>We believe that NFTs represent the future of digital ownership and are excited to provide our customers with access to this revolutionary new market. Our platform is user-friendly and easy to navigate, making it simple for creators to upload and sell their NFTs and for buyers to discover and purchase unique digital assets.</p>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="about-icons">
                <div className="about-rocket">
                    <Image src={Rocket} alt="Rocket icon" width={100} height={100} />
                    <h3>23.400</h3>
                    <p>NFT'S</p>
                </div>
                <div className="about-collections">
                    <Image src={Collections} alt="Collections icon" width={100} height={100} />
                    <h3>8.000</h3>
                    <p>Collections</p>
                </div>
                <div className="about-creators">
                    <Image src={Creators} alt="Creators icon" width={100} height={100} />
                    <h3>3,400</h3>
                    <p>Creators</p>
                </div>
                <div className="about-volurme">
                    <Image src={Volurme} alt="Volume icon" width={100} height={100} />
                    <h3>$21B+</h3>
                    <p>Volume</p>
                </div>
            </section>

            {/* NFT Distro Section */}
            <section className="about-nft-distro">
                <h2>NFT Distro</h2>
                <div className="nft-distro">
                    <Image src={NftDistro} alt="NFT Distro platform illustration" width={500} height={500} />
                </div>
            </section>

            {/* Partners Section */}
            <section className="about-partners">
                <h2>Our Partners</h2>
                <div className="about-partners-icon">
                    <Image src={Logo1} alt="Partner logo 1" width={120} height={40} />
                    <Image src={Logo2} alt="Partner logo 2" width={120} height={40} />
                    <Image src={Logo3} alt="Partner logo 3" width={120} height={40} />
                    <Image src={Logo4} alt="Partner logo 4" width={120} height={40} />
                    <Image src={Logo5} alt="Partner logo 5" width={120} height={40} />
                    <Image src={Logo6} alt="Partner logo 6" width={120} height={40} />
                    <Image src={Logo1} alt="Partner logo 7" width={120} height={40} />
                    <Image src={Logo7} alt="Partner logo 8" width={120} height={40} />
                    <Image src={Logo8} alt="Partner logo 9" width={120} height={40} />
                    <Image src={Logo9} alt="Partner logo 10" width={120} height={40} />
                </div>
            </section>

            {/* Team Section */}
            <section className="about-nft-team">
                <h2>Our Team</h2>
                <div className="about-nft-team-image">
                    {teamData.team.map((member) => (
                        <div key={member.id} className={`team${member.id}`}>
                            <Image src={Ellipse1} alt={member.name} width={180} height={170} />
                            <h3>{member.name}</h3>
                            <p className="about-nft-team-position">{member.position}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Join Us Section */}
            <section className="about-nft-join">
                <div className="about-nft-join-content">
                    <h2>Interested in joining us?</h2>
                    <p>We're always looking for passionate individuals to help us achieve our goals. Apply today and let's build a better future together.</p>
                    <button className="about-nft-join-button" onClick={openModal} aria-label="Open join us form">Join Us</button>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div className="about-modal active" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                    <div className="modal-content">
                        <button className="modal-close" onClick={closeModal} aria-label="Close modal">×</button>
                        <h2 id="modal-title">Join Our Team!</h2>
                        <p>We are always looking for passionate individuals to help us achieve our goals. Apply today and let's build a better future together!</p>
                        <button type="submit" className="modal-submit">Apply Now</button>
                    </div>
                </div>
            )}
        </main>
    );
}

export default About;
