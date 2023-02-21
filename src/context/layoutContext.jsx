import { createContext, useContext, useState } from "react";

const ViewContext = createContext();

export const useView = () => useContext(ViewContext);

const ViewContextProvidor = ({ children }) => {
  const [gridView, setGridView] = useState(true);
  return (
    <ViewContext.Provider value={{ gridView, setGridView }}>
      {children}
    </ViewContext.Provider>
  );
};

export default ViewContextProvidor;
