import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

//---------------------------------------------------------------------
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return <div className="list-name">{props.children}</div>;
};
const htmlElement = document.getElementById("backdrop");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, htmlElement)}
      
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        htmlElement
      )}
    </>
  );
};

export default Modal;
