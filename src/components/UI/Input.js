import React from "react";
import "./Input.css";

//--------------------------------------------------------
const Input = (props) => {
  return (
    <>
      <label htmlFor={props.id} className={props.className}>
        {props.label}
      </label>
      <input id={props.id} type="text" className={props.className} />
    </>
  );
};

export default Input;
