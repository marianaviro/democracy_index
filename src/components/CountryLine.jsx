import { motion } from "motion/react";

export function CountryLine({
  country,
  xScale,
  yScale,
  lineBuilder,
  index,
  colKey,
}) {
  let countryName = country[0];
  let data = country[1];
  let path = lineBuilder(country[1]);
  let ranBlue = Math.floor(Math.random() * 120) + 1;
  let ranRed = Math.floor(Math.random() * 120);
  return (
    <g>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 24, ease: "easeOut" }}
        key={country[0]}
        id={country[0]}
        d={path}
        fill="none"
        stroke={`rgb(${ranRed}, 180, ${ranBlue})`}
        strokeWidth={2}
      />
      {data.map((d, i) => (
        <motion.circle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: i * 0.65 }}
          key={`${countryName}-${d.year}`}
          id={`${countryName}-${d.year}`}
          r="2"
          cx={xScale(d[colKey] * 10)}
          cy={yScale(d.year)}
          fill={`rgb(${ranRed}, 180, ${ranBlue})`}
        />
      ))}
    </g>
  );
}
