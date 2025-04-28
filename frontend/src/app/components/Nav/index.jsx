"use client"

import "./style.scss"
import Image from "next/image"
import LogoPng from "../../../assets/icons/logo.png"
import Link from "next/link"
import Searchbox from "../Searchbox"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { auth } from '@/firebase/config'
import { useRouter } from 'next/navigation'
import { registeredLinks, nonRegisteredLinks } from "@/store"

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


    const handleLogout = async (e) => {
        const ID = e.target.id
        if (ID === 'logout-btn') {
            try {
                await auth.signOut()
                // Clear session cookie
                document.cookie = 'session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; samesite=strict'
                toast.success('Logged out successfully', { theme: 'dark' })
                router.push('/')
            } catch (error) {
                toast.error(error.message, { theme: 'dark' })
            }
        }
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
                        return (
                            <Link
                                href={link.path}
                                key={link.title}
                                className={pathname == link.path ? "active" : ""}
                                onClick={(e) => {
                                    setIsMenuOpen(false);
                                    handleLogout(e);
                                }}
                                id={link.id}
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