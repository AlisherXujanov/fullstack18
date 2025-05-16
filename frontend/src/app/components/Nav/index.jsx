"use client"

import "./style.scss"
import Image from "next/image"
import LogoPng from "../../../assets/icons/logo.png"
import Link from "next/link"
import Searchbox from "../Searchbox"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { registeredLinks, nonRegisteredLinks } from "@/store"
import { FaHome, FaFire, FaInfoCircle, FaQuestionCircle, FaSignInAlt } from 'react-icons/fa'
import { CgProfile } from "react-icons/cg"

// This is OLD version react.js
// RU: это старый способ
// import { Link } from "react-router-dom"
// -----------------------------------------
// This is NEW version from next.js
// RU: это новый способ
// import Link from "next/link"

function Nav(props) {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const router = useRouter()
    const availableLinks = props.user ? registeredLinks : nonRegisteredLinks

    const toggleMenu = async(e) => {
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
                {
                    availableLinks.map((link) => {
                        const getIcon = () => {
                            switch(link.title) {
                                case 'Explore':
                                    return <FaHome className="nav-icon" />;
                                case 'Trending':
                                    return <FaFire className="nav-icon" />;
                                case 'About':
                                    return <FaInfoCircle className="nav-icon" />;
                                case 'FAQ':
                                    return <FaQuestionCircle className="nav-icon" />;
                                case 'Login':
                                    return <FaSignInAlt className="nav-icon" />;
                                case 'Profile':
                                    return <CgProfile className="nav-icon" />;
                                case 'Contacts':
                                    return <FaInfoCircle className="nav-icon" />;
                                default:
                                    return null;
                            }
                        };

                        return (
                            <Link
                                href={link.path}
                                key={link.title}
                                className={pathname == link.path ? "active" : ""}
                                onClick={(e) => { setIsMenuOpen(false); }}
                                id={link.id}
                            >
                                {getIcon()}
                                <span>{link.title}</span>
                            </Link>
                        )
                    })
                }
            </div>
        </nav>
    );
}

export default Nav;