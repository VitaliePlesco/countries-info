import "./search.css";

export default function Search(props) {
  function handleChange(e) {
    props.setQuery(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleChange}
      />
    </div>
  );
}
