import React, { useContext, useEffect, useState } from "react";
import { Context } from "../App";
import { LaunchCard } from "./LaunchCard";
import { Pagination } from "./Pagination";

export const LaunchList = ({ data }) => {
  const { currentPage } = useContext(Context);

  const pageLimit = 5;
  const [, /*totalPageCount*/ setTotalPageCount] = useState(0);
  const [itemToDisplay, setItemToDisplay] = useState([]);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const totalPageCount = Math.ceil(data.length / pageLimit);
      setTotalPageCount(totalPageCount);
      setPages([...Array.from({ length: totalPageCount }, (_, i) => i + 1)]);
    }
  }, [data]);

  useEffect(() => {
    const offset = (currentPage - 1) * pageLimit;
    setItemToDisplay(data.slice(offset, offset + pageLimit));
  }, [currentPage, data]);

  return (
    <>
      <div className="container">
        <h4>Launch Info</h4>
        <div className="row g-2 my-3">
          {itemToDisplay.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 border" key={index}>
              <LaunchCard launchDetail={item}/>
            </div>
          ))}
        </div>
        <Pagination pages={pages} />
      </div>
    </>
  );
};
