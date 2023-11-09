import React, {forwardRef} from "react";
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
      <input onFocus={props.onFocus} ref={ref} id={props.id} type="text" className={props.className} required/>
    </>
  );
});

//-----------------------------------------------------------------------
export default Input;
