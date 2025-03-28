import "./style.scss";
import Image from "next/image";
import ImageNFT from "../../../assets/images/image_NFT.png";

function Wallet() {
    return (
        <div className="connect-wallet-div">
            <div className="left">
                <h5>WEB 3 NON-FUNGIBLE TOKENS</h5>
                <h1>Unlock Unique Digital Ownership with NFTs</h1>
                <p>Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace</p>
                <div className="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wallet2" viewBox="0 0 16 16">
                        <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
                    </svg> Connect Wallet
                </div>
            </div>
            <div className="right">
            <Image src={ImageNFT} alt="NFT" />
            </div>


        </div>
    );
}

export default Wallet;