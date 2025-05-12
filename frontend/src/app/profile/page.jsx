"use client"

import "./style.scss"
import { useAuth } from "@/hooks/useAuth"
import { auth } from "@/firebase/config"
import { removeSessionCookie } from "@/utils/cookies"
import { FaSignOutAlt } from 'react-icons/fa'
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { useState, useCallback } from "react"

function Profile() {
    const { user, loading } = useAuth()
    const profileImage = user?.photoURL || "https://static-00.iconduck.com/assets.00/profile-default-icon-256x256-tsi8241r.png"
    const router = useRouter()

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleLogout = useCallback(async () => {
        try {
            await auth.signOut()
            removeSessionCookie()
            toast.success('Logged out successfully', { theme: 'dark' })
            router.push('/')
        } catch (error) {
            toast.error(error.message, { theme: 'dark' })
        }
    }, [router])

    const username = user?.displayName?.toLowerCase().replace(/\s/g, "_") || "anonymous"
    const joinDate = user?.metadata?.creationTime
        ? new Date(user.metadata.creationTime).toLocaleDateString()
        : "Unknown"

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <div className="profile-page-wrapper">
            {!loading && (
                <>
                    <div className="profile-header">
                        <div className="left">
                            <img
                                style={{ borderRadius: "50%" }}
                                src={profileImage}
                                width={80}
                                height={80}
                                alt={user?.displayName || "Default profile image"}
                            />
                            <h1>{user?.displayName || "Anonymous"}</h1>
                        </div>
                        <div className="right">
                            <button
                                className="danger-btn"
                                onClick={handleLogout}
                                aria-label="Logout"
                            >
                                <FaSignOutAlt />
                                <b>Logout</b>
                            </button>
                        </div>
                    </div>

                    <div className="profile-body">
                        <p><b>Username:</b> {username}</p>
                        <p><b>Email:</b> {user?.email || "Not provided"}</p>
                        <p><b>Phone:</b> {user?.phoneNumber || "Not provided"}</p>
                        <p><b>Joined:</b> {joinDate}</p>
                        <p><b>Status:</b> Online</p>

                        {/* Show Bio Button */}
                        <button
                            className="update-bio-btn"
                            onClick={toggleModal}
                        >
                            <b>Show My Biography</b>
                        </button>

                        {/* Recent Activity Section */}
                        <div className="recent-activity">
                            <h3>Recent Activity</h3>
                            <ul>
                                <li>Completed a web development project.</li>
                                <li>Joined a new team at work.</li>
                                <li>Started learning Next.js Native!</li>
                            </ul>
                        </div>
                    </div>

                    {/* Modal for Biography */}
                    {isModalOpen && (
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <h2>My Biography</h2>
                                <p>Hi! My name is {user?.displayName || 'Anonymous'}, and I am a developer. I specialize in web development, and I love learning new technologies. My goal is to improve my skills and contribute to exciting projects!</p>
                                <button className="close-modal-btn" onClick={toggleModal}>Close</button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default Profile
