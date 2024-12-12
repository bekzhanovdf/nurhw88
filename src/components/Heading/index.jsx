import React from "react";
import "./styles.css";

function Heading({ level, children }) {
  const HeadingTag = `h${level}`;
  return <HeadingTag className={`heading heading-level-${level}`}>{children}</HeadingTag>;
}

export default Heading;
