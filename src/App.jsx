import { useEffect, useState } from "react";
import * as d3 from "d3";
import "./App.css";
import { GardenView } from "./components/GardenView";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.csv("/data/latam-v-dem-2000.csv", d3.autoType)
      .then((loadedData) => {
        setData(loadedData);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  }, []);

  console.log(data, "APP data");

  return (
    <>{data ? <GardenView data={data} /> : <div> Loading data... </div>}</>
  );
}

export default App;
