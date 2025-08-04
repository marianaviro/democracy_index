import { Country } from "./Country";
export function CountryList({
  countries,
  index,
  startYear,
  endYear,
  selectedIndices,
}) {
  const indexByCountry = Array.from(countries, ([country, values]) => ({
    country,
    values,
  }));

  return (
    <div>
      {indexByCountry.map((c) => {
        return (
          <Country
            key={c.country}
            name={c.country}
            data={c.values}
            index={index}
            startYear={startYear}
            endYear={endYear}
            selectedIndices={selectedIndices}
          />
        );
      })}
    </div>
  );
}
