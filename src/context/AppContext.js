import React, { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [containerScrollTop, setcontainerScrollTop] = useState(0);
  const [isopenSidenav, setisopenSidenav] = useState(false);
  const value = {
    containerScrollTop,
    setcontainerScrollTop,
    isopenSidenav,
    setisopenSidenav,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
