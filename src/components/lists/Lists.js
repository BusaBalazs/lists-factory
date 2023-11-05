import React from "react";
import { useState } from "react";
import { LocalStorageCtx } from "../../store/LocalStorage";

import Button from "../UI/Button";
import Modal from "../layout/Modal";
import AddInput from "./Add.input";
import List from "./List";

import "./List.css";
import "./Lists.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Lists = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const {addItemToStorage} = LocalStorageCtx();

  const isListEmpty = false;

  const handleCreateList = () => {
    setShowBackdrop(true);
  };

  const onHideModal = () => {
    setShowBackdrop(false);
  };

  const handlAddListForm = (e) => {
    e.preventDefault();
    addItemToStorage("testList2")
    console.log("add list");

    setShowBackdrop(false);
  };

  const emptyList = (
    <section className="empty-list">
      <div className="create-list-container">
        <p>Create New List</p>
        <div className="new-list">
          <Button className="add-list-btn-empty" onClick={handleCreateList}>
            <FontAwesomeIcon
              icon={faPlus}
              className="add-list-btn-icon-empty"
            />
          </Button>
        </div>
      </div>
    </section>
  );

  const list = (
    <>
      <header>
        <div className="btn-container">
          <Button className="add-list-btn" onClick={handleCreateList}>
            <FontAwesomeIcon icon={faPlus} className="add-list-btn-icon" />
          </Button>
        </div>
      </header>
      <h2 className="title">All List:</h2>
      <section className="lists-section">
        <List>list1</List>
        <List>list2</List>
      </section>
    </>
  );

  return (
    <>
      {showBackdrop && (
        <Modal onClick={onHideModal}>
          <AddInput textContent="Ok" onSubmit={handlAddListForm} />
        </Modal>
      )}
      {isListEmpty ? emptyList : list}
    </>
  );
};

export default Lists;
