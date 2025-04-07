"use client"

import Heading from "../components/Heading"
import { useState } from "react"
import "./style.scss"

function FAQ() {
    const [question, setQuestion] = useState("")
    const [color, setColor] = useState("magenta")

    function handleChange(e) {
        const input = e.target
        const val = input.value
        const input_name = input.name

        if (input_name === "question") {
            setQuestion(val)
        } else if (input_name === "color") {
            setColor(val)
        }
    }

    return (
        <div className="faq-page-wrapper">
            <Heading>FAQ</Heading>

            <div className="box">
                <input type="text" 
                    placeholder="Enter your question: " 
                    value={question}
                    name="question"
                    onChange={handleChange}
                />
                <p style={{ color:color }}>{question}</p>
                <hr />
                <input 
                    type="color" 
                    name="color" 
                    value={color}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default FAQ