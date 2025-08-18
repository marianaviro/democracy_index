export function XAxis({ xScale, height, margin }) {
  return (
    <>
      {xScale.ticks().map((max) => (
        <g transform={`translate(${xScale(max)}, 0)`} key={max}>
          <line
            y1={margin.top}
            y2={height - margin.bottom}
            stroke="currentColor"
            opacity="0.1"
          />
          <text
            textAnchor="middle"
            y={height - margin.bottom + 30}
            key={max}
            fill="currentColor"
          >
            {max}
          </text>
        </g>
      ))}
    </>
  );
}
