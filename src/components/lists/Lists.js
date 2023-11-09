import React, { useState, useRef } from "react";
//import { LocalStorageCtx } from "../../store/LocalStorage";
import useList from "../../hook/useLists";
import { v4 as uuidv4 } from "uuid";

import Button from "../UI/Button";
import Modal from "../layout/Modal";
import AddInput from "./Add.input";
import List from "./List";

import "./List.css";
import "./Lists.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------

const Lists = () => {
  const [addList, setAddList] = useState([]);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [alert, setAlert] = useState(false);

  const listName = useRef();
  const lists = useList(addList);

  //const { addItemToStorage } = LocalStorageCtx();

  const isListEmpty = lists && lists.length === 0 ? true : false 

  const handleCreateList = () => {
    setShowBackdrop(true);
  };

  const onHideModal = () => {
    setShowBackdrop(false);
  };

  const handlAddListForm = (e) => {
    e.preventDefault();
    const enteredListName = listName.current.value

    if(enteredListName.trim() === "") {
      setAlert(true)
      return;
    }

    setAddList({
      id: uuidv4(),
      name: enteredListName,
      item: [],
    });

    listName.current.value = "";

    setShowBackdrop(false);
  };

  const handleInputFocus = () => {
    setAlert(false);
  }
  //-----------------------------------------------------------------------
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
  //-----------------------------------------------------------------------
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
        {lists && (
          lists.map(list => {
            return <List key={list.id} listId={list.id}>{list.name}</List>
          })
        )}
      </section>
    </>
  );
  //-----------------------------------------------------------------------
  return (
    <>
      {showBackdrop && (
        <Modal onClick={onHideModal}>
          {alert && <p className="alert">Please set a valid list name!</p>}
          <AddInput
            onFocus = {handleInputFocus}
            ref={listName}
            textContent="Ok"
            onSubmit={handlAddListForm}
          />
        </Modal>
      )}
      {isListEmpty ? emptyList : list}
    </>
  );
};

//-----------------------------------------------------------------------
export default Lists;
