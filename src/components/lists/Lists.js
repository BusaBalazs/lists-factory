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
  const [actionList, setActionList] = useState([]);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [alert, setAlert] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [editId, setEditId] = useState(null);
  const [value, setValue] = useState("");

  const listName = useRef();

  const lists = useList(actionList);

  //-----------------------------------------------------------------------
  const isListEmpty = lists && lists.length === 0 ? true : false;

  //-----------------------------------------------------------------------
  const statesInit = () => {
    setValue("");
    setShowBackdrop(false);
    setEditId(null);
    setDeleteId(null);
  };

  //-----------------------------------------------------------------------
  const handleCreateList = () => {
    setShowBackdrop(true);
  };

  //-----------------------------------------------------------------------
  const onHideModal = () => {
    setShowBackdrop(false);
    statesInit();
  };

  //-----------------------------------------------------------------------
  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  };

  //-----------------------------------------------------------------------
  const handlEdit = (e) => {
    setShowBackdrop(true);
    setEditId(e.currentTarget.getAttribute("data-id"));
    for (const item of lists) {
      if (item.id === e.currentTarget.getAttribute("data-id")) {
        setValue(item.name);
      }
    }
  };

  //-----------------------------------------------------------------------
  const handlDeleting = (e) => {
    setShowBackdrop(true);
    setDeleteId(e.currentTarget.getAttribute("data-id"));

    for (const item of lists) {
      if (item.id === e.currentTarget.getAttribute("data-id")) {
        setValue(item.name);
      }
    }

    if (deleteId !== null) {
      setActionList({
        deleteId: deleteId,
      });
      statesInit();
    }
  };

  //-----------------------------------------------------------------------
  const handleInputFocus = () => {
    setAlert(false);
  };

  //-----------------------------------------------------------------------
  const handlSubmitForm = (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      setAlert(true);
      return;
    }

    if (editId !== null) {
      setActionList({
        id: editId,
        name: value,
        isEditing: true,
      });
      statesInit();
      return;
    }

    setActionList({
      id: uuidv4(),
      name: value,
      item: [],
    });

    statesInit();
  };

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
      <header className="lists-header">
        <div className="btn-container">
          <Button className="add-list-btn" onClick={handleCreateList}>
            <FontAwesomeIcon icon={faPlus} className="add-list-btn-icon" />
          </Button>
        </div>
      </header>
      <h2 className="title">All Lists:</h2>
      <ul className="lists-section">
        {lists &&
          lists.map((list) => {
            return (
              <li key={list.id}>
                <List
                  listId={list.id}
                  onEditing={handlEdit}
                  onDelete={handlDeleting}
                >
                  {list.name}
                </List>
              </li>
            );
          })}
      </ul>
    </>
  );

  //-----------------------------------------------------------------------
  const modalInput = (
    <AddInput
      onFocus={handleInputFocus}
      ref={listName}
      textContent="Ok"
      onSubmit={handlSubmitForm}
      onChange={handleChange}
      value={value}
      label="List Name"
    />
  );

  //-----------------------------------------------------------------------
  const modalDelete = (
    <>
      <p>{`Are you sure to delete the "${value}" list?`}</p>
      <Button onClick={handlDeleting} className="btn">
        Delete
      </Button>
    </>
  );

  //-----------------------------------------------------------------------
  return (
    <>
      {showBackdrop && (
        <Modal onClick={onHideModal}>
          {alert && <p className="alert">Please set a valid list name!</p>}
          {deleteId === null ? modalInput : modalDelete}
        </Modal>
      )}
      {isListEmpty ? emptyList : list}
    </>
  );
};

//-----------------------------------------------------------------------
export default Lists;
