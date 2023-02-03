import { createContext, useEffect, useState } from "react";
import SpaceX from "./pages/SpaceX";

export const Context = createContext();

function App() {
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPage") || 1
  );
  const [filterBy, setFilterBy] = useState(
    localStorage.getItem("filterBy") || "launches"
  );

  // Set Active page to state and local storage
  const setActivePage = (page) => {
    setCurrentPage(page);
    localStorage.setItem("currentPage", page);
  };

  const handleFilter = (filter) => {
    localStorage.setItem("filterBy", filter);
    localStorage.setItem("currentPage", 1);
    setFilterBy(filter);
    setCurrentPage(1);
  };

  // Set Current page and filter to local storage
  useEffect(() => {
    if (!localStorage.getItem("currentPage")) {
      localStorage.setItem("currentPage", 1);
    }
    if (!localStorage.getItem("filterBy")) {
      localStorage.setItem("filterBy", "launches");
    }
  }, []);

  return (
    <Context.Provider
      value={{
        currentPage,
        setActivePage,
        filterBy,
        handleFilter,
      }}
    >
      <SpaceX />
    </Context.Provider>
  );
}

export default App;
