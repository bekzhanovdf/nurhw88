import React, { useState } from "react";
import "./styles.css";

function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
  label,
  danger = false,
  defaultValue = "",
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="input-container">
      {label && (
        <label
          className={`label ${danger ? "danger" : ""} ${isFocused ? "focused" : ""}`}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        className={`input ${danger ? "danger" : ""}`}
        onFocus={() => setIsFocused(true)} 
        onBlur={() => setIsFocused(false)} 
      />
      {danger && <span className="error-text">Danger</span>}
    </div>
  );
}

export default Input;
