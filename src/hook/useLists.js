import { useState, useEffect } from "react";

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------


//-----------------------------------------------------------------------

const useList = (data, isEditing) => {
  
  const [lists, setLists] = useState();

  useEffect(() => {
    if(isEditing === true) {
      console.log("Editing");
      return;
    }

    console.log("should no running");
    const newList = () => {
      const getData = localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        : [];

      if (data && data.id !== undefined) {
        getData.push(data);
      }
      localStorage.setItem("list", JSON.stringify(getData));
      setLists(getData)
      
    };
    
    return newList();
  }, [data, isEditing]);

  return lists;
};

//-----------------------------------------------------------------------
export default useList;
