import React from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import Button from "../UI/Button";

import "./Item.css"

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
const Item = ({children, onDone, onDelete, onEditing, itemId}) => {
  return (
    <>
      <div className="item-container">
      <p className="item-name" onClick={onDone}>{children}</p>
        <div className="action-btns">
          <Button
            className="icon"
            onClick={onEditing}
            dataId={itemId}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </Button>
          <Button
            className="icon"
            onClick={onDelete}
            dataId={itemId}
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
