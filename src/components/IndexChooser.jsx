import { INDICES } from "../utils/indices.jsx";
import "./IndexChooser.css";

export function IndexChooser({ index, handleIndexChange }) {
  return (
    <div className="control">
      <label for="index">What defines a Democracy?</label>
      <div className="btn-container">
        {INDICES.map((d) => {
          return (
            <button key={d.col} value={d.name} onClick={handleIndexChange}>
              {d.def}
            </button>
          );
        })}
      </div>
    </div>
  );
}
