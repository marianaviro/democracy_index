import useMeasure from "react-use-measure";
import { LineChart } from "./LineChart";

export function ChartWrapper({ data, index, colKey }) {
  const [ref, bounds] = useMeasure();

  let margin = {
    top: 80,
    right: 20,
    bottom: 50,
    left: 75,
  };

  return (
    <div className="chart-wrapper" ref={ref}>
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
