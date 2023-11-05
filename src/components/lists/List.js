import React from "react";
import "./List.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

//------------------------------------------------------------------
const List = (props) => {
  return (
    <Link to="items">
      <div className="list">
        <p>{props.children}</p>
        <div className="action-btns">
          <span className="icon">
            <FontAwesomeIcon icon={faPenToSquare} />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faTrashCan} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default List;
