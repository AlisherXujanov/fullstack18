"use client"

import "./style.scss"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import Logo from "../../../assets/icons/logo.png"
import { useContext } from "react"
import { context } from "../../../store"

const Footer = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const store = useContext(context)


    useEffect(() => {
        // Немедленно проверяем localStorage при монтировании
        const savedTheme = localStorage.getItem('theme');
        setIsDarkMode(savedTheme === 'dark');

        // Добавляем класс темы сразу, без задержки
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
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
                            <li><Link href="/" prefetch>Explore</Link></li>
                            <li><Link href="/about" prefetch>About</Link></li>
                        </ul>
                    </div>

                    <div className="link-group">
                        <h3>Creator</h3>
                        <ul>
                            <li><Link href="/faq" prefetch>FAQ</Link></li>
                            <li><Link href="/become-artist" prefetch>Become Artist</Link></li>
                        </ul>
                    </div>
                    <div className="join-community">
                        <h3 style={{ fontSize: store.size + "px" }}>Join our community</h3>
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
            </div>
        </footer>
    )
}

export default Footer