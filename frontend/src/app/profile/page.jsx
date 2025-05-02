"use client"

import "./style.scss"
import { useAuth } from "@/hooks/useAuth"
import { auth } from "@/firebase/config"
import { removeSessionCookie } from "@/utils/cookies"
import { FaSignOutAlt } from 'react-icons/fa'
import { useEffect } from "react"


function Profile() {
    const { user, loading } = useAuth()
    const profileImage = user?.photoURL || "https://static-00.iconduck.com/assets.00/profile-default-icon-256x256-tsi8241r.png"

    const handleLogout = async (e) => {
        const ID = e.target.id
        if (ID === 'logout-btn') {
            try {
                await auth.signOut()
                removeSessionCookie()
                toast.success('Logged out successfully', { theme: 'dark' })
                router.push('/')
            } catch (error) {
                toast.error(error.message, { theme: 'dark' })
            }
        }
    }

    useEffect(() => {
        console.log("User: ",user)
    }, [user])

    
    return (
        <div className="profile-page-wrapper">
            {
                !loading && 
                <>
                    <div className="profile-header">
                        <img 
                            style={{borderRadius: "50%"}} 
                            src={profileImage} 
                            width={100} height={100} 
                            alt="image-not-found"
                        />
                        <h1>Profile
                            {
                                user?.displayName 
                                    ?
                                    ` ${user.displayName}` 
                                    : 
                                    " page"
                            }
                        </h1>
                    </div>

                    <button className="danger-btn" id="logout-btn" onClick={handleLogout}>
                        <FaSignOutAlt />
                        Logout
                    </button>
                </>
            }
        </div>
    );
}

export default Profile;