import React from "react";
import "./styles.css";

function Tooltip({ text, position = "top", children }) {
  return (
    <div className="tooltip-container">
      {children}
      <div className={`tooltip tooltip-${position}`}>{text}</div>
    </div>
  );
}

export default Tooltip;
