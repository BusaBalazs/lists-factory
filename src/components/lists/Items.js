import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import useList from "../../hook/useLists";
import AddInput from "./Add.input";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./Items.css";

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
const Items = () => {
  const [item, setItem] = useState();
  const [value, setValue] = useState("");
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
  };

  //-----------------------------------------------------------------------
  const handlSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      return;
    }

    setItem({
      listId: listId,
      items: {
        itemId: uuidv4(),
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
          textContent="Add"
          label={`Add item to ${listInit && listInit[0].name}`}
          value={value}
        />
      </section>
      {items && items.length === 0 ? (
        <></>
      ) : (
        <section className="items-container">
          {items &&
            items.map((item) => {
              return (
                <Item itemId={item.itemId} key={item.itemId}>
                  {item.value}
                </Item>
              );
            })}
        </section>
      )}
    </>
  );
};

//-----------------------------------------------------------------------
export default Items;
