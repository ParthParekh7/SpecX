import React, { useContext } from "react";
import { Context } from "../App";

export const Pagination = ({ pages }) => {
  const { setActivePage, currentPage } = useContext(Context);
  const handleNext = () => {
    setActivePage(parseInt(currentPage) + 1);
  };
  const handlePrevious = () => {
    setActivePage(parseInt(currentPage) - 1);
  };

  const setCurrentPage = (page) => {
    setActivePage(page);
  };

  return pages.length > 0 ? (
    <ul className="pagination">
      <li
        className={[
          "page-item",
          parseInt(currentPage) === 1 ? " disabled" : "",
        ]}
      >
        {parseInt(currentPage) === 1 ? (
          <button className="page-link">Previous</button>
        ) : (
          <button className="page-link" onClick={handlePrevious}>
            Previous
          </button>
        )}
      </li>
      {pages.map((item, index) => (
        <li
          className={[
            "page-item",
            parseInt(currentPage) === index + 1 ? " active" : "",
          ]}
          key={item}
        >
          <button
            className="page-link"
            onClick={() => setCurrentPage(index + 1)}
          >
            {item}
          </button>
        </li>
      ))}

      <li className="page-item">
        {pages.length === parseInt(currentPage) ? (
          <button className="page-link disabled">Next</button>
        ) : (
          <button className="page-link" onClick={handleNext}>
            Next
          </button>
        )}
      </li>
    </ul>
  ) : (
    <span>No data found...</span>
  );
};
