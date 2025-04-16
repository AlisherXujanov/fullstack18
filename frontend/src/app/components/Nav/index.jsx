"use client"

import "./style.scss";
import Image from "next/image"
import LogoPng from "../../../assets/icons/logo.png"
import Link from "next/link"
import Searchbox from "../Searchbox"
import { usePathname } from "next/navigation"
import { useState } from "react"

// This is OLD version react.js
// RU: это старый способ
// import { Link } from "react-router-dom"
// -----------------------------------------
// This is NEW version from next.js
// RU: это новый способ
// import Link from "next/link"

const navLinks = [
    {  title: "Explore",  path: "/",  },
    {  title: "About",    path: "/about" },
    {  title: "Trending", path: "/trending" },
    {  title: "FAQ",      path: "/faq" },
]


function Nav() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="nav-wrapper">
            <div className="left">
                <Link href="/">
                    <Image
                        src={LogoPng}
                        alt="logo-image"
                        width={103} height={33}
                    />
                </Link>
                <Searchbox />
            </div>

            <div className="burger-menu" onClick={toggleMenu}>
                <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </div>

            <div className={`right ${isMenuOpen ? 'open' : ''}`}>
                {/* <Link href="/">Explore</Link>
                <Link href="/about">About</Link>
                <Link href="/trending">Trending</Link>
                <Link href="/faq">FAQ</Link> */}
                {
                    navLinks.map((link) => {
                        return (
                            <Link 
                                href={link.path} 
                                key={link.title}
                                className={pathname == link.path ? "active" : ""}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.title}
                            </Link>
                        )
                    })
                }
            </div>
        </nav>
    );
}

export default Nav;