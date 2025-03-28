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