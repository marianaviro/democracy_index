import * as d3 from "d3";
import { useState } from "react";
import { IndexChooser } from "./IndexChooser";
import { CountryList } from "./CountryList";

export function IndexView({ data }) {
  const selectedIndices = [
    {
      "name": "Electoral Democracy",
      "col": "v2x_polyarchy",
    },
    {
      "name": "Liberal Democracy",
      "col": "v2x_libdem",
    },
    {
      "name": "Participatory Democracy",
      "col": "v2x_partipdem",
    },
    {
      "name": "Deliberative Democracy",
      "col": "v2x_delibdem",
    },
    {
      "name": "Egalitarian Democracy",
      "col": "v2x_egaldem",
    },
  ];

  const [index, setIndex] = useState(selectedIndices[0].name);
  const [startYear, setStartYear] = useState(1950);
  const [endYear, setEndYear] = useState(2024);

  const handleIndexChange = (e) => {
    setIndex(e.target.value);
  };

  const countries = d3.group(data, (d) => d.country_name);

  return (
    <div>
      <IndexChooser
        index={index}
        handleIndexChange={handleIndexChange}
        selectedIndices={selectedIndices}
      />
      <CountryList
        countries={countries}
        index={index}
        startYear={startYear}
        endYear={endYear}
        selectedIndices={selectedIndices}
      />
    </div>
  );
}
