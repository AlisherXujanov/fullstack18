import "./style.scss";
import Image from "next/image"
import LogoPng from "../../../assets/icons/logo.png"

function Nav() {
    return (
        <nav className="nav-wrapper">
            <div className="left">
                <Image 
                    src={LogoPng} 
                    alt="logo-image" 
                    width={50} height={50} 
                />
            </div>
            <div className="right"></div>
        </nav>
    );
}

export default Nav;