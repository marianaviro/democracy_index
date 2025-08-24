import useMeasure from "react-use-measure";
import { LineChart } from "./LineChart";

export function ChartWrapper({ data, index, colKey }) {
  const [ref, bounds] = useMeasure();

  let margin = {
    top: 80,
    right: 40,
    bottom: 60,
    left: 80,
  };

  return (
    <div className="chart-wrapper" ref={ref}>
      <div className="legend">
        <div className="left">
          <img src="/arrow-icon.svg" />
          <p>
            <b>Less</b> {index}
          </p>
        </div>
        <div className="right">
          <img src="/arrow-icon.svg" />
          <p>
            <b>More</b> {index}
          </p>
        </div>
      </div>
      <LineChart
        key={index}
        data={data}
        width={bounds.width}
        height={bounds.height}
        margin={margin}
        index={index}
        colKey={colKey}
      />
    </div>
  );
}
