// There are 2 types of components:
// 1. Client components  =>  Компоненты, которые выполняются на клиентских устройствах
// 2. Server components  =>  Компоненты, которые выполняются на сервере
"use client"
import { useState } from "react"
import "./style.scss"

// hook  ->  хуки, которые выполняются на клиентских устройствах
// state ->  состояние компонента (или же память)

function Searchbox() {
    const [search, setSearch] = useState("")

    function handleInput(event) {
        setSearch(event.target.value)
    }

    return (
        <>
            <div className="search-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                <input
                    type="search"
                    placeholder="Search"
                    className="search-input"
                    value={search}
                    onChange={handleInput}
                />
                {/* JSX syntax  =>  {...} */}
            </div>
        </>
    );
}

export default Searchbox;