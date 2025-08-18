import { Radar } from "./Radar";

export function RadarView({ data }) {
  const width = 400;
  const height = 400;
  const variables = [];
  return (
    <div>
      <Radar width={width} height={height} data={data} variables={variables} />
    </div>
  );
}
