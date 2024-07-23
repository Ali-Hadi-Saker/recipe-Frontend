import React, { useState, useEffect } from "react";
import "./style.css";
import Input from "../../base/Input";
import Button from "../../base/button";

const Signup = () => {  
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const SignupHandler = async ()=>{
        const response = await fetch('http://localhost/recipe-Backend/auth/signup.php',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                name,
                email
            })
        })
        const data = await response.json()
        console.log(typeof(data))
        
    }
  
  return (
    <div className="flex column center page">
      <div className="flex column center white-bg rounded auth-box">
        <h3>Signup</h3>
        <Input 
        label={"name"}
        placeholder={"name"}
        onTextChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          label={"username"}
          placeholder={"username"}
          onTextChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          label={"email"}
          placeholder={"email"}
          onTextChange={(e) => {
            setEmail(e.target.value);
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
          text="Sign up"
          bgColor="white-bg"
          textColor="black-text"
          onclick={SignupHandler}
        />
      </div>
    </div>
  );
};

export default Signup;
