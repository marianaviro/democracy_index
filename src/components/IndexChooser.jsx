import { INDICES } from "../utils/indices.jsx";

export function IndexChooser({ index, handleIndexChange }) {
  return (
    <div className="control">
      <label for="index">Choose an index:</label>
      <select id="index" value={index} onChange={handleIndexChange}>
        {INDICES.map((d) => {
          return (
            <option key={d.col} value={d.name}>
              {d.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
