import React from "react";
import './style.css';
import Button from "../../base/button";
import { useState } from "react";

const Navbar = ()=>{
    const [search, setSearch] = useState('');

    const searchHandler = async()=>{
        const response = await fetch(`http://localhost/recipe-Backend/api/get-recipe-by-name.php?name=${search}`,{
            
        })
        const data = await response.json()
        console.log(data)
    }

    return(
        <div className="flex space-between black-bg">
            <h1 className="white-text">MY RECIPE</h1>
            <div className="flex center right-side space-between">
            <div className="search-bar flex">
                <input className="full-height border input" type="text"
                onChange={(e)=>setSearch(e.target.value)} />
                <Button text="search" onclick={searchHandler}/>
            </div>
            <Button text="Login"/>
            </div>
        </div>
    )
}
export default Navbar;