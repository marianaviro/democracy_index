import * as d3 from "d3";
import { useState, useEffect } from "react";
import { XAxis } from "./xAxis";
import { YAxis } from "./yAxis";
import { CountryLine } from "./CountryLine";

export function LineChart({ data, width, height, margin, index, colKey }) {
  let groupedData = d3.groups(data, (d) => d.country_name);

  let xScale = d3
    .scaleLinear()
    .domain([10, 0])
    .range([margin.left, width - margin.right]);

  let yScale = d3
    .scaleLinear()
    .domain([2000, 2024])
    .range([height - margin.bottom, margin.top]);

  let lineBuilder = d3
    .line()
    .x((d) => xScale(d[colKey] * 10))
    .y((d) => yScale(d.year))
    .curve(d3.curveCatmullRom.alpha(0.5));

  return (
    <>
      <svg className="" viewBox={`0 0 ${width} ${height}`}>
        {groupedData.map((country) => {
          return (
            <CountryLine
              country={country}
              xScale={xScale}
              yScale={yScale}
              lineBuilder={lineBuilder}
              index={index}
              colKey={colKey}
            />
          );
        })}
        <XAxis xScale={xScale} height={height} margin={margin} />
        {/* <YAxis yScale={yScale} width={width} margin={margin} /> */}
      </svg>
    </>
  );
}
