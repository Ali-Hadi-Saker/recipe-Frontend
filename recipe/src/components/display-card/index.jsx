import React from "react";
import { useState, useEffect } from "react";
import './style.css'
import Card from "../card";

const DisplayCard = ({apiURL})=>{
    const [recipes, setRecipe] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await fetch(`${apiURL}`)
                const data = await response.json()
                setRecipe(data)
                console.log('useEffect')
                console.log(data)

            }catch (error){
                console.error(error)
            }
        }
        fetchData()
    },[])
    return(
        <div className="page">
            <div className="flex ">
            {recipes.map((recipe)=>{
                return (
                    
                    <Card name={recipe.name} 
                    description={recipe.description}
                    id={recipe.id_recipe}/>
                )
            })}
            </div>
        </div>
    )
}

export default DisplayCard