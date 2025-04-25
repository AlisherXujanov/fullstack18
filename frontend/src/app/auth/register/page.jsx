"use client"
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "@/firebase/config"
import { toast } from 'react-toastify'


function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    })

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function submitForm(e) {
        e.preventDefault()

        for (let key in formData) {
            if (formData[key] === "") {
                toast.error("Please fill in all fields", { theme: "dark" })
                return
            }
        }

        if (formData.password !== formData.password2) {
            toast.error("Passwords do not match", { theme: "dark" })
            return
        }

        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user
                toast.success("Account created successfully!", { theme: "dark" })
                alert("Account created successfully!")
            })
            .catch((error) => {
                toast.error(error.message, { theme: "dark" })
                alert(error.message)
            })
    }


    return (

        <div className="auth-container auth-signup-container">
            <h1>Sign Up</h1>
            <form onSubmit={submitForm}>
                <div className="form-field">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={handleFormChange}
                        required
                    />
                </div>
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
                    <label htmlFor="password2">Password confirmation</label>
                    <input
                        id="password2"
                        type="password"
                        placeholder="Password confirmation"
                        name="password2"
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div className="form-field">
                    <button type="submit">Create account</button>
                </div>
            </form>
            <p>
                <small>
                    Already have an account? <Link href="/auth/login">Login</Link>
                </small>
            </p>
        </div>
    )
}

export default Register;