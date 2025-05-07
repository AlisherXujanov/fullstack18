"use client"

import { useReducer } from "react"
import Heading from "../components/Heading"
import "./style.scss"

const initialState = {
    firstName: "",
    lastName: "",
    age: 0,
    dob: "",
    gender: "",
}

function reducerFunction(state, action) {
    // action => payload
    switch(action.type) {
        case 'firstName':
            return { ...state, firstName: action.value }
        case 'lastName':
            return { ...state, lastName: action.value }
        case 'age':
            return { ...state, age: action.value }
        case 'dob':
            return { ...state, dob: action.value }
        case 'gender':
            return { ...state, gender: action.value }
        default:
            return state
    }

    // const KEYS = Object.keys(state)
    // if (KEYS.includes(action.type)) {
    //     return { ...state, [action.type]:action.value }
    // }
    // return state
}   

function Trending() {
    const [state, dispatch] = useReducer(reducerFunction, initialState)

    const handleInputChange = (type) => (e) => {
        const value = e.target.value
        dispatch({ type, value })
    }

    return (
        <div className="trending-page-wrapper">
            <Heading>Trending</Heading>
            
            <form className="form-container" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        id="firstName"
                        type="text" 
                        value={state.firstName}
                        onChange={handleInputChange('firstName')}
                        aria-label="First Name"
                    />
                    <p className="form-value">{state.firstName}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        id="lastName"
                        type="text" 
                        value={state.lastName}
                        onChange={handleInputChange('lastName')}
                        aria-label="Last Name"
                    />
                    <p className="form-value">{state.lastName}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input 
                        id="age"
                        type="number" 
                        value={state.age}
                        onChange={handleInputChange('age')}
                        aria-label="Age"
                        min="0"
                    />
                    <p className="form-value">{state.age}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input 
                        id="dob"
                        type="date" 
                        value={state.dob}
                        onChange={handleInputChange('dob')}
                        aria-label="Date of Birth"
                    />
                    <p className="form-value">{state.dob}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <input 
                        id="gender"
                        type="text" 
                        value={state.gender}
                        onChange={handleInputChange('gender')}
                        aria-label="Gender"
                    />
                    <p className="form-value">{state.gender}</p>
                </div>
            </form>
        </div>
    );
}

export default Trending;