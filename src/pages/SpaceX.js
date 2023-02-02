import React, { useState } from "react";
import { LaunchList } from "../components/LaunchList";
const SpaceX = () => {
  //   useEffect(() => {
  //     // (async () => {
  //     //   const d = await axios.get("https://api.spacexdata.com/v3/launches");
  //     //   console.log(d);
  //     // })();
  //   }, []);
  const [data, setData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  return (
    <div className="container">
      <LaunchList data={data} />
    </div>
  );
};

export default SpaceX;
