import React from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import Button from "../UI/Button";

import "./Item.css"

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
const Item = (props) => {
  return (
    <>
      <div className="item-container">
      <p className="item-name">{props.children}</p>
        <div className="action-btns">
          <Button
            className="icon"
            onClick={props.onEditing}
            dataId={props.listId}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </Button>
          <Button
            className="icon"
            onClick={props.onDelete}
            dataId={props.itemId}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </Button>
        </div>
      </div>
    </>
  );
};

//-----------------------------------------------------------------------
export default Item;
