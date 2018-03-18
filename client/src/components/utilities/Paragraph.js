import React from "react";

const Paragraph = props => {
  const { font, size, align, children, body } = props;
  const style ={
    textAlign: `${align || "inherit"}`,
    fontSize: `${size || "inherit"}`,
    fontFamily: `${font || "inherit"}`
  };
  return (
    <p style={style} children={
      children || body
    } />
  );
}

export default Paragraph;
