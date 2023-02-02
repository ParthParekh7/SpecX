import React, { useContext, useEffect, useState } from "react";
import { Context } from "../App";

export const LaunchList = ({ data }) => {
  const { setActivePage, currentPage } = useContext(Context);

  // console.log(currentPage, setActivePage);
  const pageLimit = 10;
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [itemToDisplay, setItemToDisplay] = useState([]);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const totalPageCount = Math.ceil(data.length / pageLimit);
      setTotalPageCount(totalPageCount);
      setPages([...Array.from({ length: totalPageCount }, (_, i) => i + 1)]);
    }
  }, []);

  useEffect(() => {
    const offset = (currentPage - 1) * pageLimit;
    setItemToDisplay(data.slice(offset, offset + pageLimit));
  }, [currentPage]);

  const handleNext = () => {
    setActivePage(parseInt(currentPage) + 1);
  };
  const handlePrevious = () => {
    setActivePage(parseInt(currentPage) - 1);
  };

  const setDataCurrentPage = (page) => {
    let offset = 0;
    if (!page) {
      offset = (currentPage - 1) * pageLimit;
    } else {
      offset = (page - 1) * pageLimit;
    }
    setItemToDisplay(data.slice(offset, offset + pageLimit));
  };

  return (
    <>
      <div className="container my-3">
        LaunchList
        <h1>React ....</h1>
        <ul className="pagination">
          <li className="page-item disabled" onClick={handlePrevious}>
            <a className="page-link">Previous</a>
          </li>
          {pages.map((item, index) => (
            <li
              className={[
                "page-item",
                currentPage == index + 1 ? " active" : "",
              ]}
              key={item}
              onClick={() => setDataCurrentPage(index + 1)}
            >
              <a className="page-link" href="#">
                {item}
              </a>
            </li>
          ))}
          {/* <li className="page-item active" aria-current="page">
                <a className="page-link" href="#">
                  2 <span className="visually-hidden">(current)</span>
                </a>
              </li> */}
          {/* <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li> */}

          <li className="page-item">
            <a className="page-link" href="#" onClick={handleNext}>
              Next
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
