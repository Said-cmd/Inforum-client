import React from "react";
import { FaSearch } from "react-icons/fa";

function Search({ setSearch }){ 

    function handleChange(e){
        setSearch(e.target.value)
    }
    return(
        <div className="search">
            <FaSearch className="search-icon" size="1.5em" />
            <input type='text' placeholder="Search" onChange={handleChange}/>
        </div>
    )
}

export default Search;