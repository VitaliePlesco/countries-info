import "./countrydetails.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CountryDetails() {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    async function fetchCountryData() {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const results = await response.json();

      if (results) {
        setIsLoading(false);
      }
      setCountry(results);
    }
    fetchCountryData();
  }, [name]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="container">
      <Link to="/main">
        <button className="btn-back">Back</button>
      </Link>
      <div className="row  g-5">
        <div className="col-lg-6">
          <img src={country[0].flags.svg} alt="country.name.common" />
        </div>
        <div className="col-lg-6">
          <h2>{country[0].name.official}</h2>
          <div className="info">
            <p>
              <span>Population: </span>
              {country[0].population}
            </p>
            <p>
              <span>Region: </span>
              {country[0].region}
            </p>
            <p>
              <span>Sub Region: </span>
              {country[0].subregion}
            </p>
            <p>
              <span>Capital: </span>
              {country[0].capital}
            </p>
            <p>
              <span>Top Level Domain: </span>
              {country[0].tld}
            </p>
            <div>
              <span>Border Countries: </span>
              <ul>
                {!country[0].hasOwnProperty("borders") ? (
                  <>No border countries</>
                ) : (
                  country[0].borders.map((border) => (
                    <li key={border}>{border}</li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
