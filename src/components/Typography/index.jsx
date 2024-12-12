import React from "react";
import "./styles.css";

function Typography({ textSize = "md", children }) {
  return <p className={`typography ${textSize}`}>{children}</p>;
}

export default Typography;
