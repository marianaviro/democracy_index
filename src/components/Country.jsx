import "../styles/Country.css";

export function Country({
  name,
  data,
  index,
  startYear,
  endYear,
  selectedIndices,
}) {
  const firstValue = data.find((d) => d.year == startYear);
  const secondValue = data.find((d) => d.year == endYear);
  const col = selectedIndices.find((d) => d.name == index).col;

  console.log(col);
  return (
    <div
      className={
        firstValue[col] > secondValue[col]
          ? "red"
          : firstValue[col] < secondValue[col]
          ? "green"
          : "gray"
      }
    >
      <h2>
        {name}{" "}
        <span>
          {firstValue[col] > secondValue[col]
            ? "↓"
            : firstValue[col] < secondValue[col]
            ? "↑"
            : "="}
        </span>
      </h2>
      <p>
        From {firstValue[col]} to {secondValue[col]}
      </p>
    </div>
  );
}
