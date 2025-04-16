"use client"

import "./style.scss"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import Logo from "../../../assets/icons/logo.png"

const Footer = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Проверяем сохраненную тему при загрузке
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.body.classList.add('dark-theme');
        }
    }, []);

    const handleThemeChange = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        
        if (newTheme) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <Link href="/" className="logo">
                        <Image
                            src={Logo}
                            alt="NFT Distro Logo"
                            width={130}
                            height={40}
                            priority
                        />
                    </Link>
                    <p className="description">
                        NFT Distro - это инновационная платформа для создания, продажи и управления NFT. Мы предоставляем уникальные инструменты для художников, коллекционеров и инвесторов в мире цифрового искусства.
                    </p>
                    <div className="theme-switcher">
                        <input
                            type="checkbox"
                            className="switch"
                            checked={isDarkMode}
                            onChange={handleThemeChange}
                            aria-label="Переключить темную тему"
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