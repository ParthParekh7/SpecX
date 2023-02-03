import React, { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../App";
import { LaunchCard } from "./LaunchCard";
import { filterObj } from "./Navbar";
import { Pagination } from "./Pagination";

export const LaunchList = ({ data }) => {
  const { currentPage, filterBy } = useContext(Context);

  const pageLimit = 10;
  const [itemToDisplay, setItemToDisplay] = useState([]);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (data) {
      // Calculate total page count
      const totalPageCount = Math.ceil(data.length / pageLimit);
      // Make array of total pages.
      setPages([...Array.from({ length: totalPageCount }, (_, i) => i + 1)]);
    }
  }, [data]);

  useEffect(() => {
    // Calculate offset according to current page
    const offset = (currentPage - 1) * pageLimit;
    // Set Launch items to display to page
    setItemToDisplay(data.slice(offset, offset + pageLimit));
  }, [currentPage, data]);

  const pagination = useMemo(() => <Pagination pages={pages} />, [pages]);

  return (
    <>
      <div className="container">
        <span className="lead">
          Launch Infomation : Filter by {filterObj[filterBy]}
        </span>
        <div className="row g-2 my-3">
          {itemToDisplay.map((item, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 border"
              key={index}
            >
              <LaunchCard launchDetail={item} />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center">{pagination}</div>
      </div>
    </>
  );
};
