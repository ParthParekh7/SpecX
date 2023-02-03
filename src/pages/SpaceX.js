import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Fuse from "fuse.js";
import { Context } from "../App";
import { LaunchList } from "../components/LaunchList";
import { Navbar } from "../components/Navbar";

const SpaceX = () => {
  const { filterBy } = useContext(Context);
  const [launchData, setLaunchData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  // Use Fuse.js package for fuzzy search
  const fuse = new Fuse(launchData, {
    keys: ["flight_number", "mission_name", "rocket.rocket_name"],
  });

  // Call launch api according to filter
  useEffect(() => {
    (async () => {
      let launchPath = filterBy;
      if (filterBy !== "launches") {
        launchPath = `launches/${filterBy}`;
      }
      try {
        const launchesData = await axios.get(
          `https://api.spacexdata.com/v3/${launchPath}`
        );

        if (launchesData && launchesData.data) {
          if (Array.isArray(launchesData.data)) {
            setLaunchData(launchesData.data);
            setOriginalData(launchesData.data);
          } else {
            setLaunchData([launchesData.data]);
            setOriginalData([launchesData.data]);
          }
        }
      } catch (error) {
        // Handle error one of api will give 404
        if (error.response.status === 404) {
          setLaunchData([]);
        }
      }
    })();
  }, [filterBy]);

  return (
    <div className="container">
      <Navbar
        fuse={fuse}
        setData={setLaunchData}
        data={launchData}
        originalData={originalData}
      />
      <LaunchList data={launchData} />
    </div>
  );
};

export default SpaceX;
