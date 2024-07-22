import React from "react";
import './style.css';

const Button = ({text, onclick})=>{
    return(        
        <button className="clickable center flex btn border"
        onClick={onclick}>{text}</button>            
    )
}
export default Button;