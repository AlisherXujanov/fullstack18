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
                <Image 
                    src={LogoPng} 
                    alt="logo-image" 
                    width={50} height={50} 
                />
                <input type="search" placeholder="Search..." />
            </div>
            <div className="right"></div>
        </nav>
    );
}

export default Nav;