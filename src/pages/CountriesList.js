import CountryCard from "../components/countrycard/CountryCard";

export default function CountriesList({ filteredCountries }) {
  return (
    <div className="container">
      <div className="row g-5">
        {filteredCountries.map((country) => (
          <CountryCard
            flag={country.flags.svg}
            alt={country.flags.alt}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            key={country.cca3}
          />
        ))}
      </div>
    </div>
  );
}
