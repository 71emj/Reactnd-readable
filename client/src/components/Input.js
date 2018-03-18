import React from "react";

const preventDefault = evt => evt.preventDefault();
const Input = props =>
  <input
    name={props.name}
    type={props.type}
    onChange={
      props.changeHandler && props.changeHandler
    }
    onClick={
      props.type === "submit" ? props.onClick : preventDefault
    }
    placeholder={props.placeholder || ""}
    value={props.children || props.value || ""}
  />

export default Input;
