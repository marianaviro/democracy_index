import { motion } from "motion/react";

export function CountryLine({
  country,
  xScale,
  yScale,
  lineBuilder,
  index,
  colKey,
  hovered,
  setHovered,
  handleMouseOver,
  handleMouseLeave,
  handleMouseMove,
}) {
  let countryName = country[0];
  let data = country[1];
  let path = lineBuilder(country[1]);
  let ranBlue = Math.floor(Math.random() * 120) + 1;
  let ranRed = Math.floor(Math.random() * 120);
  let last = data[data.length - 1];
  return (
    <g>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
        key={country[0]}
        id={country[0]}
        d={path}
        fill="none"
        stroke={`rgb(${ranRed}, 180, ${ranBlue})`}
        strokeWidth={2}
        strokeOpacity={hovered && country[0] !== hovered ? 0.1 : 1}
        onMouseOver={(e) => {
          setHovered(country[0]);
          handleMouseOver(e, country[1]);
        }}
        onMouseLeave={() => {
          setHovered(null);
          handleMouseLeave();
        }}
        onMouseMove={(e) => handleMouseMove(e)}
        style={{ cursor: "pointer" }}
      />
      {data.map((d, i) => (
        <motion.circle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, ease: "easeOut", delay: i * 0.2 }}
          key={`${countryName}-${d.year}`}
          id={`${countryName}-${d.year}`}
          r="2"
          cx={xScale(d[colKey] * 10)}
          cy={yScale(d.year)}
          fill={`rgb(${ranRed}, 180, ${ranBlue})`}
          fillOpacity={hovered && country[0] !== hovered ? 0.1 : 1}
          onMouseOver={(e) => {
            setHovered(country[0]);
            handleMouseOver(e, country[1]);
          }}
          onMouseLeave={() => {
            setHovered(null);
            handleMouseLeave();
          }}
          onMouseMove={(e) => handleMouseMove(e)}
          style={{ cursor: "pointer" }}
        />
      ))}
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 5 }}
        key={`flower-${countryName}`}
        id={`flower-${countryName}`}
        r="15"
        cx={xScale(last[colKey] * 10)}
        cy={yScale(last.year)}
        fill={`rgba(130, ${ranRed}, 250, 0.35)`}
        fillOpacity={hovered && country[0] !== hovered ? 0.1 : 1}
        onMouseOver={(e) => {
          setHovered(country[0]);
          handleMouseOver(e, country[1]);
        }}
        onMouseLeave={() => {
          setHovered(null);
          handleMouseLeave();
        }}
        onMouseMove={(e) => handleMouseMove(e)}
        style={{ cursor: "pointer" }}
      />
    </g>
  );
}
