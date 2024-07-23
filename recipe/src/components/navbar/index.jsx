import React from "react";
import './style.css';
import Button from "../../base/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ()=>{
    const navigate = useNavigate()
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
            <ul className="flex white-text option clickable padding">
                <li onClick={()=>(navigate("/favorite"))}>Favorite</li>
                <li onClick={()=>(navigate("/login"))}>Login</li>
            </ul>
                
            </div>
        </div>
    )
}
export default Navbar;