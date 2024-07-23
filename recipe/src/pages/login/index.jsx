import React, { useState, useEffect } from "react";
import "./style.css";
import Input from "../../base/Input";
import Button from "../../base/button";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {  
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = async ()=>{
        const response = await fetch('http://localhost/recipe-Backend/auth/signin.php',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
            })
        })
        const data = await response.json()
        if(data.success){
            navigate("/home")
        }
        
    }
  
  return (
    <div className="flex column center page">
      <div className="flex column center white-bg rounded auth-box">
        <h3>Login</h3>

        <Input
          label={"username"}
          placeholder={"username"}
          onTextChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <Input
          label={"Password"}
          placeholder={"1234@#$%"}
          onTextChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        
        <Button
          text="Signin"
          bgColor="white-bg"
          textColor="black-text"
          onclick={loginHandler}
        />
      </div>
    </div>
  );
};

export default Login;
