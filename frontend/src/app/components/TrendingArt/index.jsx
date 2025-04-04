"use client"

import "./style.scss"
import TrendingNFTs from "../../../store/db.json"
import Item from "./item"
import GlobalModal from "../GlobalModal"
import { useState } from "react"
import { toast } from 'react-toastify';



function TrendingArt(props) {
    const [form, setForm] = useState({ authorName: "", nftName: "", nftPrice: "", image: "", id: "" })
    const [updateMode, setUpdateMode] = useState(false)

    function cleanUp() {
        setForm({})
        setUpdateMode(false)
    }

    function handleFormChange(e) {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    async function submitForm(e) {
        e.preventDefault()

        const URL = "http://localhost:3001/trandingNfts"
        try {
            const dataToSend = {
                authorName: form.authorName,
                name: form.nftName,
                price: form.nftPrice,
                image: form.image
            }

            const response = await fetch(updateMode ? URL + `/${form.id}` : URL, {
                method: updateMode ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataToSend),
            })
            console.log("Response: ", response)
            toast.success(updateMode ? "NFT updated successfully" : "NFT created successfully", { theme: "dark" })
        }
        catch (e) {
            toast.error("Ooops!...Error happened", { theme: "dark" })
        }
        props.handleShowModal(e, false)
        cleanUp()
    }
    function handleUpdateMode(nft) {
        setForm({
            authorName: nft.authorName,
            nftName: nft.name,
            nftPrice: nft.price,
            image: nft.image,
            id: nft.id
        })
        setUpdateMode(true)
    }

    return (
        <div className="trending-art-wrapper">
            <div className="intro">
                <h1>Trending Art 🔥</h1>
                <p>
                    <button className="create-nft-button"
                        onClick={(e) => { props.handleShowModal(e, true); cleanUp() }}>
                        Create new NFT
                    </button>
                </p>
                {
                    props.showModal &&
                    <GlobalModal handleShowModal={props.handleShowModal}>
                        <form className="create-nft-form" onSubmit={submitForm}>
                            <h1>{updateMode ? "Update NFT" : "Create NFT"}</h1>
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
                                {
                                    form.image &&
                                    <img
                                        src={form.image}
                                        alt="NFT"
                                        width={100} height={100}
                                        onClick={() => { setForm({ ...form, image: "" }) }}
                                        style={{ borderRadius: '10px', cursor: 'pointer' }}
                                    />
                                }
                            </div>
                            <div className="form-field">
                                <button type="submit">
                                    {updateMode ? "Update NFT" : "Create NFT"}
                                </button>
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
                            updateNFT={(e) => { props.handleShowModal(e, true); handleUpdateMode(nft) }}
                        />
                    )
                })}
            </div>

        </div>
    );
}

export default TrendingArt;
