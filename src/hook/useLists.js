import { useState, useEffect } from "react";

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------

const useList = (data, item) => {
  const [lists, setLists] = useState();

  //-----------------------------------------------------------------------
  const updateData = (data) => {
    localStorage.setItem("list", JSON.stringify(data));
    setLists(data);
  };

  //-----------------------------------------------------------------------
  useEffect(() => {
    const newList = () => {
      //----------GET DATA------------------------------------------------
      const getData = localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        : [];

      //----------LIST DELETING------------------------------------------------
      if (data && data.deleteId) {
        const newData = getData.filter((item) => item.id !== data.deleteId);
        updateData(newData);
        return;
      }

      //----------LIST EDITING------------------------------------------------
      if (data && data.isEditing) {
        for (const item of getData) {
          if (item.id === data.id) {
            item.name = data.name;
          }
          updateData(getData);
        }
        return;
      }

      //----------ADD LIST--------------------------------------
      if (data && data.id !== undefined) {
        getData.push(data);
        updateData(getData);
        return;
      }

      //----------EDIT ITEM------------------------------------------------
     if (item && item.editId) {
       for (const listItem of getData) {
          if (item.listId === listItem.id) {
            listItem.item = item.items
          }
        }
        
        updateData(getData);
        return;
      }

      //----------DELETE ITEM------------------------------------------------
      if (item && item.deleteId) {
        let items;
        for (const listItem of getData) {
          if (item.listId === listItem.id) {
            items = listItem.item.filter(
              (deleteItem) => deleteItem.itemId !== item.deleteId
            );
            listItem.item = [...items];
          }
        }
        updateData(getData);
        return;
      }

      //----------ADD ITEM------------------------------------------------
      if (item) {
        for (const listItem of getData) {
          if (item.listId === listItem.id) {
            listItem.item = [...listItem.item, item.items];
          }
        }
      }

      updateData(getData);
    };

    return newList();
  }, [data, item]);

  return lists;
};

//-----------------------------------------------------------------------
export default useList;
