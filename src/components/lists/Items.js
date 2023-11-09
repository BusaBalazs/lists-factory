import React from "react";
import { useParams } from "react-router-dom";
import useList from "../../hook/useLists";
const Items = () => {
  const { listId } = useParams();
  const lists = useList();
  let listInit
  if (lists) {
    listInit = lists.filter((item) => item.id === listId);
  }
 
  return (
    <>
      {listId}
      {listInit && <p>{listInit[0].name}</p>}
    </>
  );
};

export default Items;
