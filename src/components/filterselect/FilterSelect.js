import "./filterselect.css";

export default function FilterSelect(props) {
  function handleChange(e) {
    props.setSelectedFilter(e.target.value);
  }
  return (
    <div>
      <label htmlFor="Filter by Region">
        <select
          defaultValue={props.selectedFilter}
          onChange={handleChange}
          onFocus={props.clearInput}
        >
          <option disabled={true}>Filter by Region</option>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </label>
    </div>
  );
}
