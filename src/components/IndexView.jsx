import * as d3 from "d3";
import { useState } from "react";
import { IndexChooser } from "./IndexChooser";
import { CountryList } from "./CountryList";
import { INDICES } from "../utils/indices";

export function IndexView({ data }) {
  const [index, setIndex] = useState(INDICES[0].name);
  const [colKey, setColkey] = useState(INDICES[0].col);
  const [startYear, setStartYear] = useState(1950);
  const [endYear, setEndYear] = useState(2024);

  const handleIndexChange = (e) => {
    setIndex(e.target.value);
    setColkey(INDICES.find((d) => d.name === e.target.value).col);
  };

  const countries = d3.group(data, (d) => d.country_name);

  // TO DO: Create diverging color scale. Add min and max.
  const changes = Array.from(countries, ([country, rows]) => {
    const start = rows.find((r) => r.year === startYear)?.[colKey];
    const end = rows.find((r) => r.year === endYear)?.[colKey];

    if (
      start == null ||
      end == null ||
      Number.isNaN(start) ||
      Number.isNaN(end)
    )
      return null;

    // Percent change relative to start. If start is 0, fall back to absolute change.
    if (start === 0) return end - start;
    return ((end - start) / Math.abs(start)) * 100;
  }).filter((v) => v != null && !Number.isNaN(v));

  let [chgMin, chgMax] = d3.extent(changes);

  // Guard for empty or flat cases
  if (chgMin == null || chgMax == null) {
    chgMin = -1;
    chgMax = 1;
  } else if (chgMin === chgMax) {
    const eps = 1e-6;
    chgMin -= eps;
    chgMax += eps;
  }

  const colorByChange = d3
    .scaleDiverging(d3.interpolateRdYlGn)
    .domain([chgMin, 0, chgMax]);

  return (
    <div>
      <IndexChooser index={index} handleIndexChange={handleIndexChange} />
      <CountryList
        countries={countries}
        index={index}
        startYear={startYear}
        endYear={endYear}
        colorByChange={colorByChange}
      />
    </div>
  );
}
