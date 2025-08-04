import { useEffect, useState } from "react";
import * as d3 from "d3";
// image in source folder:
// import reactLogo from "./assets/react.svg";
// image in public folder
// import viteLogo from "/vite.svg";
import "./App.css";
import { IndexView } from "./components/IndexView";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.csv("/data/latam-v-dem.csv", d3.autoType)
      .then((loadedData) => {
        // console.log("Data loaded:", loadedData);
        setData(loadedData);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  }, []);

  console.log(data, "APP data");

  return (
    <div>{data ? <IndexView data={data} /> : <div> Loading data... </div>}</div>
  );
}

export default App;
