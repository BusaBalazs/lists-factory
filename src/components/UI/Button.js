import React from "react";

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
const Button = (props) => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      type={props.type}
      data-id={props.dataId}
    >
      {props.children}
    </button>
  );
};

//-----------------------------------------------------------------------
export default Button;
