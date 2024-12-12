import React from "react";
import "./styles.css";

function Button({ type = "button", onClick, disabled = false, size = "md", variant = "primary", children }) {
  return (
    <button
      type={type}
      className={`button ${size} ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
