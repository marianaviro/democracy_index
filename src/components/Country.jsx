import "../styles/Country.css";
import { INDICES } from "../utils/indices.jsx";

export function Country({
  name,
  data,
  index,
  startYear,
  endYear,
  colorByChange,
}) {
  const colu = INDICES.find((d) => d.name == index).col;
  const firstValue = data.find((d) => d.year == startYear);
  const secondValue = data.find((d) => d.year == endYear);

  let startVal = data.find((d) => d.year == startYear)[colu];
  let endVal = data.find((d) => d.year == endYear)[colu];
  let pctChange = ((endVal - startVal) / Math.abs(startVal)) * 100;
  // let startVal;
  // let endVal;
  // let pctChange;

  // useEffect(() => {
  //   startVal = data.find((d) => d.year == startYear)[colu];
  //   endVal = data.find((d) => d.year == endYear)[colu];
  //   pctChange = ((endVal - startVal) / Math.abs(startVal)) * 100;
  // }, []);

  const bgColor = colorByChange(pctChange);
  console.log(startVal);
  console.log(pctChange);

  return (
    <div
      style={{ backgroundColor: bgColor, padding: "1rem", margin: "0.5rem" }}
      className={
        firstValue[colu] > secondValue[colu]
          ? "red"
          : firstValue[colu] < secondValue[colu]
          ? "green"
          : "gray"
      }
    >
      <h2>
        {name}{" "}
        <span>
          {firstValue[colu] > secondValue[colu]
            ? "↓"
            : firstValue[colu] < secondValue[colu]
            ? "↑"
            : "="}
        </span>
      </h2>
      <p>
        From {firstValue[colu]} to {secondValue[colu]}
      </p>
    </div>
  );
}
