import { useState } from "react";
import { INDICES } from "../utils/indices";
import { ChartWrapper } from "./ChartWrapper";
import { IndexChooser } from "./IndexChooser";

export function GardenView({ data }) {
  const [index, setIndex] = useState(INDICES[0].name);
  const [colKey, setColkey] = useState(INDICES[0].col);

  const handleIndexChange = (e) => {
    setIndex(e.target.value);
    setColkey(INDICES.find((d) => d.name === e.target.value).col);
  };

  return (
    <div className="layout">
      <IndexChooser index={index} handleIndexChange={handleIndexChange} />
      <ChartWrapper key={index} data={data} index={index} colKey={colKey} />
    </div>
  );
}
