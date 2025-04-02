"use client"

import "./style.scss"
import TrendingNFTs from "../../../store/db.json"
import Item from "./item"
import GlobalModal from "../GlobalModal"
import { useState } from "react"


function TrendingArt(props) {
    const [form, setForm] = useState({
        authorName: "",
        nftName: "",
        nftPrice: "",
        image: ""
    })

    function handleFormChange(e) {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    async function submitForm(e) {
        e.preventDefault()
        console.log("Form submitted: ", form)

        try {
            const response = await fetch("http://localhost:3001/trandingNfts", {
                method: "POST",
                body: JSON.stringify(form),
            })
            console.log("Response: ", response)
        }
        catch (e) {
            console.log("Error: ", e)
        }
        props.handleShowModal(e, false)
        setForm({
            authorName: "",
            nftName: "",
            nftPrice: "",
            image: ""
        })
    }
    return (
        <div className="trending-art-wrapper">
            <div className="intro">
                <h1>Trending Art 🔥</h1>
                <p>
                    <button onClick={(e) => { props.handleShowModal(e, true) }}>
                        Create new NFT
                    </button>
                </p>
                {
                    props.showModal &&
                    <GlobalModal handleShowModal={props.handleShowModal}>
                        <form className="create-nft-form" onSubmit={submitForm}>
                            <div className="form-field">
                                <label htmlFor="author-name">Author Name</label>
                                <input
                                    type="text"
                                    id="author-name"
                                    name="authorName"
                                    placeholder="Enter author name"
                                    value={form.authorName}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="nft-name">NFT Name</label>
                                <input
                                    type="text"
                                    id="nft-name"
                                    name="nftName"
                                    placeholder="Enter NFT name"
                                    value={form.nftName}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="nft-price">NFT Price</label>
                                <input
                                    type="text"
                                    id="nft-price"
                                    name="nftPrice"
                                    placeholder="Enter NFT price"
                                    value={form.nftPrice}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="nft-image">NFT Image</label>
                                <input
                                    type="url"
                                    id="nft-image"
                                    name="image"
                                    placeholder="Enter NFT image URL"
                                    value={form.image}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="form-field">
                                <button type="submit">Create NFT</button>
                            </div>
                        </form>
                    </GlobalModal>
                }
            </div>

            <div className="nft-items-wrapper">
                {TrendingNFTs.trandingNfts.map(nft => {
                    return (
                        <Item
                            key={nft.id}
                            name={nft.name}
                            price={nft.price}
                            authorName={nft.authorName}
                            image={nft.image}
                        />
                    )
                })}
            </div>

        </div>
    );
}

export default TrendingArt;
