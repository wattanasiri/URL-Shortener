import React from "react"

import { CgSearch } from "react-icons/cg"

export const SearchBox = ({ filter, setFilter }) => {

    return (
        <span className="search-box">
            <input 
            value={filter || ""}
            onChange={e => setFilter(e.target.value)} />
            <CgSearch size={24} />
        </span>
    )
}