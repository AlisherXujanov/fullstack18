"use client";

import { useState, useEffect } from "react";
import "./style.scss";
import Image from "next/image";
import img from "../../assets/images/bitcoin-nft.jpg"

const API_URL = 'http://localhost:3001';

function Trending() {
    const [trendingNFTs, setTrendingNFTs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        fetchTrendingNFTs();
    }, []);

    async function fetchTrendingNFTs() {
        try {
            const response = await fetch(`${API_URL}/trandingNfts`);
            if (!response.ok) throw new Error('Ошибка при получении данных');
            const data = await response.json();
            setTrendingNFTs(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }

    const filters = [
        { id: 'all', label: 'All of NFTs' },
        { id: 'art', label: 'Bitcoin NFT' },
        // { id: 'music', label: 'Music' },
        // { id: 'collectibles', label: 'Collectible' },
    ];

    const filteredNFTs = activeFilter === 'all'
        ? trendingNFTs
        : trendingNFTs.filter(nft => nft.category === activeFilter);

    if (loading) return (
        <div className="trending-page-wrapper loading">
            <div className="loader"></div>
        </div>
    );

    if (error) return (
        <div className="trending-page-wrapper error">
            <h2>Произошла ошибка 😢</h2>
            <p>{error}</p>
            <button onClick={fetchTrendingNFTs}>Попробовать снова</button>
        </div>
    );

    return (
        <div className="trending-page-wrapper">
            <div className="trending-header">
                <h1>Trending NFTs</h1>
                <p>Explore the most popular NFTs in our collection</p>
            </div>

            <div className="filters">
                {filters.map(filter => (
                    <button
                        key={filter.id}
                        className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                        onClick={() => setActiveFilter(filter.id)}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            <div className="trending-grid">
                {filteredNFTs.length === 0 ? (
                    activeFilter === 'art' ? (
                        <>
                            <div className="trending-card">
                                <div className="card-image">
                                    <Image src={img} alt="BITCOIN-NFT" width={200} height={200}></Image>
                                    <div className="card-overlay">
                                        <button className="bid-btn">Сделать ставку</button>
                                    </div>
                                </div>
                                <div className="card-info">
                                    <h3>Bitcoin NFT</h3>
                                    <div className="card-details">
                                        <span className="author">🧠 Nakamoto</span>
                                        <span className="price">💎 3.14 BTC</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : activeFilter === 'music' ? (
                        <div className="empty-state">
                            <p>🎵 Музыка загружается... Ожидайте релиза!</p>
                        </div>
                    ) : (
                        <div className="empty-state">
                            <p>🎁 Новые коллекции появятся совсем скоро!</p>
                        </div>
                    )
                ) : (
                    filteredNFTs.map(nft => (
                        <div key={nft.id} className="trending-card">
                            <div className="card-image">
                                <img src={nft.image} alt={nft.name} />
                                <div className="card-overlay">
                                    <button className="bid-btn">Сделать ставку</button>
                                </div>
                            </div>
                            <div className="card-info">
                                <h3>{nft.name}</h3>
                                <div className="card-details">
                                    <span className="author">🎨 {nft.authorName}</span>
                                    <span className="price">💎 {nft.price} ETH</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Trending;
