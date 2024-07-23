import React from "react";
import './style.css'
import Navbar from "../../components/navbar";
import DisplayCard from "../../components/display-card";

const FavoritePage = ()=>{

    return(
        <div className="page">
            <Navbar/>
            <DisplayCard apiURL={'http://localhost/recipe-Backend/api/get-all-star-recipe.php'}/>
        </div>
    )
}

export default FavoritePage