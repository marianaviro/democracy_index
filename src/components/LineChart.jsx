import * as d3 from "d3";
import { useState, useEffect } from "react";
import { XAxis } from "./xAxis";
import { YAxis } from "./yAxis";
import { CountryLine } from "./CountryLine";

export function LineChart({ data, width, height, margin, index, colKey }) {
  let groupedData = d3.groups(data, (d) => d.country_name);

  const show = true;

  const [hovered, setHovered] = useState(null);
  const [tooltip, setTooltip] = useState({
    show: false,
    x: 0,
    y: 0,
    text: null,
  });

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

  const handleMouseOver = (event, d) => {
    const [mouseX, mouseY] = d3.pointer(event);
    const year = Math.round(yScale.invert(mouseY));
    const dataPoint = d.find((p) => p.year === year);
    if (dataPoint) {
      console.log(dataPoint);
      setTooltip({
        show: true,
        x: mouseX,
        y: mouseY,
        text: {
          country_name: dataPoint.country_name,
          index: dataPoint[colKey],
          year: dataPoint.year,
        },
      });
    }
  };
  const handleMouseMove = (event) => {
    const [mouseX, mouseY] = d3.pointer(event);
    setTooltip((prevTooltip) => ({
      ...prevTooltip,
      x: mouseX,
      y: mouseY,
    }));
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, x: 0, y: 0, text: "" });
  };

  return (
    <>
      <svg className="" viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <linearGradient id="grad" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="20%" stop-color="#c1f7d6ff" />
            <stop offset="80%" stop-color="#c4c4c4ff" />
          </linearGradient>
        </defs>
        <rect
          id="bg"
          x={0}
          y={0}
          width={width}
          height={height}
          rx="10"
          ry="10"
          fill="url(#grad)"
          opacity={0.3}
        />
        {groupedData.map((country) => {
          return (
            <CountryLine
              key={country}
              country={country}
              xScale={xScale}
              yScale={yScale}
              lineBuilder={lineBuilder}
              index={index}
              colKey={colKey}
              hovered={hovered}
              setHovered={setHovered}
              handleMouseOver={handleMouseOver}
              handleMouseLeave={handleMouseLeave}
              handleMouseMove={handleMouseMove}
            />
          );
        })}
        <XAxis xScale={xScale} height={height} margin={margin} />
        {/* <YAxis yScale={yScale} width={width} margin={margin} /> */}
        {/* Tooltip */}
        {tooltip.show && (
          <g transform={`translate(${tooltip.x},${tooltip.y})`}>
            <rect
              x="0"
              y="25"
              width="200"
              height="140"
              fill="white"
              stroke="black"
              rx="5"
              ry="5"
              pointerEvents="none"
            />
            <text x="15" y="50" fontSize="14px" pointerEvents="none">
              <tspan x="15" dy="0" stroke="black">
                Species:
              </tspan>{" "}
              <tspan x="15" dy="1.3em">
                {tooltip.text.country_name}
              </tspan>{" "}
              <tspan x="15" dy="1.4em" stroke="black">
                Index:
              </tspan>{" "}
              <tspan x="15" dy="1.3em">
                {tooltip.text.index}
              </tspan>{" "}
              <tspan x="15" dy="1.4em" stroke="black">
                Year:
              </tspan>{" "}
              <tspan x="15" dy="1.3em">
                {tooltip.text.year}
              </tspan>{" "}
            </text>
          </g>
        )}
      </svg>
    </>
  );
}
