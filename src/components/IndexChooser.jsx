export function IndexChooser({ index, handleIndexChange, selectedIndices }) {
  return (
    <div>
      <label for="cars">Choose an index:</label>

      <select id="indices" value={index} onChange={handleIndexChange}>
        {selectedIndices.map((d) => {
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
