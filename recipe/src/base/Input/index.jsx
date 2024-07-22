import React from "react";
import "./style.css";

const Input = ({ label, placeholder, onTextChange }) => {
  return (
    <div className="flex column full-width my-input">
      <label className="bold black-text">{label}</label>
      <input
        onChange={(e) => onTextChange(e)}
        type="text"
        className="rounded full-width"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
