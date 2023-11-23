import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import useList from "../../hook/useLists";
import AddInput from "./Add.input";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";

import "./Items.css";
import Button from "../UI/Button";

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
const Items = () => {
  const [item, setItem] = useState();
  const [value, setValue] = useState("");
  const [editId, setEditId] = useState();
  const [alert, setAlert] = useState(false);

  const { listId } = useParams();
  const lists = useList(null, item);

  //-----------------------------------------------------------------------
  let listInit;
  let items;
  if (lists) {
    listInit = lists.filter((item) => item.id === listId);
    items = listInit[0].item;
  }

  //-----------------------------------------------------------------------
  const handlChange = (e) => {
    setValue(e.currentTarget.value);
    setAlert(false);
  };

  //-----------------------------------------------------------------------
  const handlEdit = (e) => {
    setEditId(e.currentTarget.getAttribute("data-id"));
    for (const item of items) {
      if (item.itemId === e.currentTarget.getAttribute("data-id")) {
        setValue(item.value);
      }
    }
  };

  //-----------------------------------------------------------------------
  const handlDelete = (e) => {
    const itemId = e.currentTarget.getAttribute("data-id");
    setItem({
      listId: listId,
      deleteId: itemId,
    });
  };

  //-----------------------------------------------------------------------
  const handlDeleteAll = () => {
    setItem({
      deleteAll: true,
      listId: listId,
    })
  }

  //-----------------------------------------------------------------------
  const handlDone = (e) => {
    setEditId(true);

    items
      .filter((item) => item.itemId === e.currentTarget.getAttribute("data-id"))
      .map((item) => (item.complete = !item.complete));

    setItem({
      editId: e.currentTarget.getAttribute("data-id"),
      listId: listId,
      items: items,
    });

    setEditId();
  };

  //-----------------------------------------------------------------------
  const handlSubmit = (e) => {
    e.preventDefault();

    //-----------------------------------------------------------------------
    if (value.trim() === "") {
      setAlert(true);
      return;
    }

    //-----------------------------------------------------------------------
    if (editId) {
      items
        .filter((item) => item.itemId === editId)
        .map((item) => (item.value = value));

      setItem({
        editId,
        listId: listId,
        items: items,
      });

      setEditId();
      setValue("");
      return;
    }

    //-----------------------------------------------------------------------
    setItem({
      listId: listId,
      items: {
        itemId: uuidv4(),
        complete: false,
        value: value,
      },
    });

    setValue("");
  };

  //-----------------------------------------------------------------------
  return (
    <>
      <Link to="/">
        <header className="items-header">
          <nav className="items-nav">
            <FontAwesomeIcon icon={faCircleArrowLeft} />
          </nav>
        </header>
      </Link>
      <section className="item-input">
        <AddInput
          onSubmit={handlSubmit}
          onChange={handlChange}
          textContent={!editId ? "Add" : "Edit"}
          label={`Add item to ${listInit && listInit[0].name}`}
          value={value}
        />
        {alert && <p className="alert">Please set a valid list name!</p>}
      </section>
      {items && items.length === 0 ? (
        <></>
      ) : (
        <section className="items-container">
          {items &&
            items.map((item) => {
              return (
                <Item
                  itemId={item.itemId}
                  key={item.itemId}
                  onDelete={handlDelete}
                  onEditing={handlEdit}
                  onDone={handlDone}
                >
                  {item.value}
                  {item.complete && <FontAwesomeIcon icon={faCheck} className="check"/>}
                </Item>
              );
            })}
            <Button className="clear-btn" onClick={handlDeleteAll}>Clear All</Button>
        </section>
      )}
    </>
  );
};

//-----------------------------------------------------------------------
export default Items;
