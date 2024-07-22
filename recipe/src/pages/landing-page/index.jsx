import React from "react";
import { useState, useEffect } from "react";
import './style.css'
import Navbar from "../../components/navbar";
import Card from "../../components/card";

const LandingPage = ()=>{
    const [recipes, setRecipe] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await fetch('http://localhost/recipe-Backend/api/get-recipe-by-name.php')
                const data = await response.json()
                setRecipe(data)
                console.log('useEffect')

            }catch (error){
                console.error(error)
            }
        }
        fetchData()
    },[])
    return(
        <div>
            <Navbar/>
            <div className="flex">
            {recipes.map((recipe)=>{
                return (
                    <Card name={recipe.name} description={recipe.desciption}/>
                )
            })}
            </div>
        </div>
    )
}

export default LandingPage