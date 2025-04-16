"use client"

import "./style.scss"
import Image from "next/image"
import Logo from "../../../assets/icons/logo.png"
import { useState } from "react"

function Footer() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleThemeChange = () => {
        setIsDarkMode(!isDarkMode);
        
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <div className="logo">
                        <Image src={Logo} alt="NFT Distro" width={110} height={40} />
                    </div>
                    <p className="description">
                        Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace
                    </p>
                    <div className="theme-switcher">
                        <input 
                            className="switch" 
                            type="checkbox" 
                            checked={isDarkMode}
                            onChange={handleThemeChange}
                        />
                    </div>
                </div>

                <div className="footer-links">
                    <div className="link-group">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="/">Explore</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </div>

                    <div className="link-group">
                        <h3>Cretor</h3>
                        <ul>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/become-artist">Become Artist</a></li>
                        </ul>
                    </div>

                    <div className="join-community">
                        <h3>Join our community</h3>
                        <div className="email-input">
                            <input type="email" placeholder="Enter your email address" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright">
                    <span>© Copyright NFT Distro 2023</span>
                </div>
                <div className="social-links">
                    <a href="#" className="social-link">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-link">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="#" className="social-link">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-link">
                        <i className="fab fa-apple"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer