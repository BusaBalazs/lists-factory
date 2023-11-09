import { useState, useEffect } from "react";

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
const useList = (data) => {
  const [lists, setLists] = useState();

  useEffect(() => {
    const newList = () => {
      const getData = localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        : [];

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
export default useList