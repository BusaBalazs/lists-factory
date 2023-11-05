import React from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

import "./Add.input.css";

//------------------------------------------------------
const AddList = (props) => {
  return (
    <form className="addlist-form" onSubmit={props.onSubmit}>
      <Input id="list-name" label="List Name"/>
      <Button className="btn">{props.textContent}</Button>
    </form>
  );
};

export default AddList;
