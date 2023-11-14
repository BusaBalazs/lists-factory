import { useState, useEffect } from "react";

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------

const useList = (data) => {
  const [lists, setLists] = useState();

  useEffect(() => {
    const newList = () => {
      //----------GET DATA------------------------------------------------
      const getData = localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        : [];

      //----------DELETING------------------------------------------------
      
      if (data && data.deleteId) {
        const newData = getData.filter(item => item.id !== data.deleteId);
        localStorage.setItem("list", JSON.stringify(newData));
        setLists(newData);
        return
      }

      //----------EDITING------------------------------------------------
      if (data && data.isEditing) {
        for (const item of getData) {
          if (item.id === data.id) {
            item.name = data.name;
          }
          localStorage.setItem("list", JSON.stringify(getData));
          setLists(getData);
        }
        return;
      }

      //----------ADD NEW LIST ITEM--------------------------------------
      if (data && data.id !== undefined) {
        getData.push(data);
      }
      localStorage.setItem("list", JSON.stringify(getData));
      setLists(getData);
    };

    return newList();
  }, [data]);

  return lists;
};

//-----------------------------------------------------------------------
export default useList;
