"use client"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify"
import { auth } from "@/firebase/config"
import Link from "next/link"
import "../style.scss"
import { useRouter } from 'next/navigation'

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const router = useRouter()

    function submitForm(e) {
        e.preventDefault()

        for (let key in formData) {
            if (formData[key] === "") {
                toast.error("Please fill in all fields", { theme: "dark" })
                alert("Please fill in all fields")
                return
            }
        }

        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user)
                toast.success("Signed in successfully!", { theme: "dark" })
                alert("Signed in successfully!")
                router.push('/')
            })
            .catch((error) => {
                toast.error(error.message, { theme: "dark" })
                alert(error.message)
                router.push('/auth/login')
            })
    }


    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="auth-container auth-signin-container">
            <h1>Sign In</h1>
            <form onSubmit={submitForm}>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <button type="submit">Sign in</button>
                </div>
            </form>

            <p>
                <small>
                    Don't have an account? <Link href="/auth/register">Register</Link>
                </small>
            </p>
        </div>
    )
} 

export default Login