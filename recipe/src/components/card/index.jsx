import React from "react";
import './style.css'

const Card = ({imgURL, name, description})=>{

    return(
        <div className="padding">
            <div className="card flex column border center shadow">
            <img src={imgURL} alt="Recipe Image" class="recipe-image" />
            <div class="recipe-details flex column center">
                <h2 class="recipe-name">{name}</h2>
                <p class="recipe-description">{description}</p>
            </div>
        </div>
        </div>
    )
}

export default Card;