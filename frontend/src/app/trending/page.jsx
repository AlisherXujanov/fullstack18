"use client"

import { useState } from "react";
import Heading from "../components/Heading";
import "./style.scss"

function Trending() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState(0)
    const [dob, setDob] = useState("")
    const [gender, setGender] = useState("")

    return (
        <div className="trending-page-wrapper">
            <Heading>Trending</Heading>
            
            <form>
                <div>
                    <input type="text" 
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <p>{firstName}</p>
                </div>
                <div>
                    <input type="text" 
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <p>{lastName}</p>
                </div>
                <div>
                    <input type="number" 
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <p>{age}</p>
                </div>
                <div>
                    <input type="date" 
                        onChange={(e) => setDob(e.target.value)}
                    />
                    <p>{dob}</p>
                </div>
                <div>
                    <input type="text" 
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <p>{gender}</p>
                </div>
            </form>
        </div>
    );
}

export default Trending;