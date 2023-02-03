import React, { useContext, useRef } from "react";
import { Context } from "../App";

export const filterObj = {
  launches: "All Launches",
  past: "Past Launches",
  upcoming: "Upcoming Launches",
  latest: "Latest Launches",
  next: "Next Launches",
};

export const Navbar = ({ fuse, setData, data, originalData }) => {
  const { filterBy, handleFilter, setActivePage } = useContext(Context);
  const search = useRef();

  const filterOptions = Object.keys(filterObj).map((key) => (
    <li key={key} className="my-2">
      <button
        className={[
          "btn dropdown-item",
          key === filterBy ? "  btn-light border active" : "",
        ]}
        onClick={() => {
          handleFilter(key);
          search.current.value = "";
        }}
      >
        {filterObj[key]}
      </button>
    </li>
  ));

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.current.value) {
      const result = fuse.search(search.current.value);
      const refIndexes = result.map((item) => item.refIndex);
      const matchingResult = data.filter((item, index) =>
        refIndexes.includes(index)
      );
      setData(matchingResult);
      setActivePage(1);
    } else {
      // set original data when search string is empty
      setData(originalData);
      setActivePage(1);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand h3 my-auto lead">SpaceX</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end align-items-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-2 mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-light"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter By
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ width: "180px" }}
              >
                {filterOptions}
              </ul>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              ref={search}
            />
            <button className="btn btn-outline-success">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};
