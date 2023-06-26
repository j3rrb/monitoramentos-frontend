import { createContext, useContext, useState } from "react";
import { IMainContext, IMainContextProvider } from "../interfaces";

export const MainContext = createContext<IMainContext>({} as IMainContext);

export const useMainContext = () => useContext(MainContext);

export function MainContextProvider({ children }: IMainContextProvider) {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <MainContext.Provider value={{ drawer, toggleDrawer }}>
      {children}
    </MainContext.Provider>
  );
}
