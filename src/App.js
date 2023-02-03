import { createContext, useEffect, useState } from "react";
import SpaceX from "./pages/SpaceX";

export const Context = createContext(null);
function App() {
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPage") || 1
  );
  const setActivePage = (page) => {
    setCurrentPage(page);
    localStorage.setItem("currentPage", page);
  };

  // Set Current page to local storage
  useEffect(() => {
    if (!localStorage.getItem("currentPage")) {
      localStorage.setItem("currentPage", 1);
    }
  }, []);

  return (
    <Context.Provider value={{ currentPage, setActivePage }}>
      <SpaceX />
    </Context.Provider>
  );
}

export default App;
