"use client"

import "./style.scss"
import Image from "next/image"
import { useState } from "react"
import teamData from "../../store/db.json"
import { PARTNER_LOGOS, TEAM_IMAGES } from "./constants"
import { HeroSection } from "./components/HeroSection"
import { NFTFutureSection } from "./components/NFTFutureSection"
import { StatisticsSection } from "./components/StatisticsSection"
import { PartnersSection } from "./components/PartnersSection"
import { TeamSection } from "./components/TeamSection"
import { JoinUsSection } from "./components/JoinUsSection"
import { Modal } from "./components/Modal"

// Import images
import AboutImg from "../../assets/images/about_image.png"
import Astronot from "../../assets/images/ASTRONOT.png"
import Rocket from "../../assets/images/rocket-nft.png"
import Collections from "../../assets/images/collections.png"
import Creators from "../../assets/images/creators.png"
import Volurme from "../../assets/images/volurme.png"
import NftDistro from "../../assets/images/nft-distro.png"

function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <main className="about-page">
            <HeroSection 
                image={AboutImg}
                title="About our Company NFT Distro"
                description="We are a cutting-edge company focused on the creation, promotion, and sale of non-fungible tokens (NFTs). Our marketplace offers a wide range of NFTs, from digital art and collectibles to gaming items and virtual real estate."
            />

            <NFTFutureSection 
                image={Astronot}
                title="NFT Represent the future"
                description="We believe that NFTs represent the future of digital ownership and are excited to provide our customers with access to this revolutionary new market. Our platform is user-friendly and easy to navigate, making it simple for creators to upload and sell their NFTs and for buyers to discover and purchase unique digital assets."
            />

            <StatisticsSection 
                stats={[
                    { icon: Rocket, value: "23.400", label: "NFT'S" },
                    { icon: Collections, value: "8.000", label: "Collections" },
                    { icon: Creators, value: "3,400", label: "Creators" },
                    { icon: Volurme, value: "$21B+", label: "Volume" }
                ]}
            />

            <section className="about-nft-distro">
                <h2>NFT Distro</h2>
                <div className="nft-distro">
                    <Image 
                        src={NftDistro} 
                        alt="NFT Distro platform illustration" 
                        width={500} 
                        height={500} 
                        priority
                    />
                </div>
            </section>

            <PartnersSection logos={PARTNER_LOGOS} />
            <TeamSection teamData={teamData?.team || []} images={TEAM_IMAGES} />
            <JoinUsSection onJoinClick={handleOpenModal} />

            <Modal 
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title="Join Our Team!"
                description="We are always looking for passionate individuals to help us achieve our goals. Apply today and let's build a better future together!"
                submitText="Apply Now"
            />
        </main>
    );
}

export default About;
