import "./style.scss";
import Image from "next/image"
import LogoPng from "../../../assets/icons/logo.png"
import Link from "next/link"

// This is OLD version react.js
// RU: это старый способ
// import { Link } from "react-router-dom";
// -----------------------------------------
// This is NEW version from next.js
// RU: это новый способ
// import Link from "next/link";


function Nav() {
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
                <div className="search-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                    <input
                        type="search"
                        placeholder="Search"
                        className="search-input"
                    />
                </div>
            </div>

            <div className="right">
                <Link href="/">Explore</Link>
                <Link href="/about">About</Link>
                <Link href="/trending">Trending</Link>
                <Link href="/faq">FAQ</Link>
            </div>
        </nav>
    );
}

export default Nav;