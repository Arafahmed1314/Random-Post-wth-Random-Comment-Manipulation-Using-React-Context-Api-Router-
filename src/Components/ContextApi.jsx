import { createContext, useContext, useState } from "react";
export const Context = createContext();

export const Provider = ({ children }) => {
  const [value, setValue] = useState();
  const [searchResult, setSearchResults] = useState();

  return (
    <Context.Provider value={{ value, setValue,searchResult,setSearchResults }}>
      {children}
    </Context.Provider>
  );
};
export const useCustomContext = () => {
  return useContext(Context);
};
