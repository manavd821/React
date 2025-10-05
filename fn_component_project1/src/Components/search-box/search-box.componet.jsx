import { Component } from "react";
import './search-box.style.css'
const SearchBox = (props) => {
        console.log("render SearchBox")
        const { onChangeHandler, placeholder = "", className } = props 
        return (
            <div>
                <input
                    type="search"
                    className={`search-box ${className}`}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                />
            </div>
        )
}

export default SearchBox