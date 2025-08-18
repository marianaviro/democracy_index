export function YAxis({ yScale, width, margin }) {
  return (
    <>
      {yScale.ticks().map((max) => (
        <g transform={`translate(0, ${yScale(max)})`} key={max}>
          <line
            x1={margin.left}
            x2={width - margin.right}
            stroke="currentColor"
            opacity="0.1"
          />
          <text
            x={margin.left - 50}
            key={max}
            alignmentBaseline="middle"
            fill="currentColor"
          >
            {max}
          </text>
        </g>
      ))}
    </>
  );
}
