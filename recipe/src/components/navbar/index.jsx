import React from "react";
import './style.css';

const Navbar = ()=>{
    return(
        <div className="flex space-between black-bg">
            <h1 className="white-text">MY RECIPE</h1>
            <div className="flex center right-side space-between">
            <div className="search-bar flex">
                <input className="full-height border input" type="text" />
                <button className="clickable center flex btn border">search</button>
            </div>
            <button className="clickable center flex btn border">Login</button>
            </div>
        </div>
    )
}
export default Navbar;