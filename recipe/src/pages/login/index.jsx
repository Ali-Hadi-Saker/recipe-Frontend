import React, { useState, useEffect } from "react";
import "./style.css";
import Input from "../../base/Input";
import Button from "../../base/button";

const Login = () => {  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  return (
    <div className="flex column center page">
      <div className="flex column center white-bg rounded auth-box">
        <h3>Login</h3>

        <Input
          label={"Email"}
          placeholder={"john@example.io"}
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

        <Button text="Login"  />
        <Button
          text="Sign up"
          bgColor="white-bg"
          textColor="black-text"
          onMouseClick={() => {
            console.log("Sign up");
          }}
        />
      </div>
    </div>
  );
};

export default Login;
