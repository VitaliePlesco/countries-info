import CountriesList from "../../pages/CountriesList";
import { useState, useEffect } from "react";
import Search from "../../components/search/Search";
import FilterSelect from "../../components/filterselect/FilterSelect";
import "./main.css";

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const results = await response.json();
      setCountries(results);
    }
    fetchData();
  }, []);

  // input search
  const foundCountry = findCountry(query);

  function findCountry(query) {
    const result = countries.filter((country) =>
      country.name.common.toLowerCase().startsWith(query.toLowerCase())
    );

    return result;
  }

  const filteredCountries = filterCountriesList(selectedFilter);

  function filterCountriesList(selectedFilter) {
    const result =
      selectedFilter === "All"
        ? countries
        : countries.filter((country) => country.region === selectedFilter);

    return result;
  }

  function clearInput() {
    setQuery("");
  }

  return (
    <section>
      <div className="search-filter">
        <Search setQuery={setQuery} />
        <FilterSelect
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          clearInput={clearInput}
        />
      </div>

      <CountriesList
        filteredCountries={query ? foundCountry : filteredCountries}
      />
    </section>
  );
}
