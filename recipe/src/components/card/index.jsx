import React from "react";
import './style.css'
import Button from "../../base/button";
import { useNavigate } from "react-router-dom";

const Card = ({name, description, id, steps})=>{
    const navigate = useNavigate()
    const handleSave = async ()=>{
        console.log(`${id}`)
        try {
            const response = await fetch(`http://localhost/recipe-Backend/api/add-star.php?recipe_id=${id}`)
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return(        
        <div className="card primary-bg flex column border center shadow">            
            <div className="card-header flex">
                <h2 class="recipe-name">{name}</h2>
                <button className="save-icon flex clickable" onClick={handleSave}>★</button>
            </div>
            <p class="recipe-description">{description}</p>
            <Button text={'View recipe'} onclick={()=>navigate(`/recipe?${id}`)}/> 
        </div>
        )
}

export default Card;