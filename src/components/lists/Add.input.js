import React, {forwardRef} from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

import "./Add.input.css";

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
const AddList = forwardRef((props, ref) => {
  return (
    <form className="addlist-form" onSubmit={props.onSubmit}>
      <Input onChange={props.onChange} value={props.value} ref={ref} id="list-name" label={props.label}/>
      <Button className="btn">{props.textContent}</Button>
    </form>
  );
});

//-----------------------------------------------------------------------
export default AddList;
