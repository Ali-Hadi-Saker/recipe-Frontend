import React from "react";
import './style.css'

const RecipePage =({
    name, description, steps
})=>{
    return(
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{steps}</p>
        </div>
    )
}

export default RecipePage