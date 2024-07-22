import React from "react";
import './style.css'

const Card = ()=>{

    return(
        <div className="padding">
            <div className="card flex column border center shadow">
            <img src="" alt="Recipe Image" class="recipe-image" />
            <div class="recipe-details flex column center">
                <h2 class="recipe-name">Recipe Name</h2>
                <p class="recipe-description">This is a brief description of the recipe. It provides an overview of what to expect.</p>
            </div>
        </div>
        </div>
    )
}

export default Card;