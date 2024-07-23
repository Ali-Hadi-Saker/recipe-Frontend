import React from "react";
import './style.css'
import Navbar from "../../components/navbar";
import DisplayCard from "../../components/display-card";

const HomePage = ()=>{

    return(
        <div className="page">
            <Navbar/>
            <DisplayCard apiURL={'http://localhost/recipe-Backend/api/get-recipe-by-name.php'}/>
        </div>
    )
}

export default HomePage