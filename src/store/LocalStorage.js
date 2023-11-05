import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
//-------------------------------------------------------

const Ctx = React.createContext();

export const LocalStorageCtx = () => {
  return useContext(Ctx);
};
//-------------------------------------------------------

export const LocalStorageProvider = (props) => {
  const addItemToStorage = (item) => {
    const id = uuidv4();
    
    localStorage.setItem(id, item);
  };

  const value = {
    test: "ctx working",
    addItemToStorage,
  };
  return <Ctx.Provider value={value}>{props.children}</Ctx.Provider>;
};
