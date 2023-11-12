import React from "react";
import "./List.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
const List = (props) => {
 
  return (
    <>
      <div className="list-container">
        <Link to={`items/${props.listId}`} className="link">
          <p>{props.children}</p>
        </Link>
        <div className="action-btns">
          <Button className="icon" onClick={props.onClick}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </Button>
          <Button className="icon">
            <FontAwesomeIcon icon={faTrashCan} />
          </Button>
        </div>
      </div>
    </>
  );
};

//-----------------------------------------------------------------------
export default List;
