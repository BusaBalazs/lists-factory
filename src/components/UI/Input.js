import React, { forwardRef } from "react";
import "./Input.css";

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
const Input = forwardRef((props, ref) => {
  return (
    <>
      <label htmlFor={props.id} className={props.className}>
        {props.label}
      </label>
      <input
        onChange={props.onChange}
        value={props.value}
        ref={ref}
        id={props.id}
        type="text"
        className={props.className}
        required
      />
    </>
  );
});

//-----------------------------------------------------------------------
export default Input;
