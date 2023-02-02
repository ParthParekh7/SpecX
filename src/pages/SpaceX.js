import axios from "axios";
import React, { useEffect, useState } from "react";
import { LaunchList } from "../components/LaunchList";
const SpaceX = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const launchesData = await axios.get("https://api.spacexdata.com/v3/launches");
      setData(launchesData.data)
    })();
  }, []);
  
  return (
    <div className="container">
      <LaunchList data={data} />
    </div>
  );
};

export default SpaceX;
