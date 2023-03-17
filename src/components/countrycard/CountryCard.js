import "./countrycard.css";
import { Link } from "react-router-dom";

export default function CountryCard(country) {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 ">
      <Link to={`/${country.name}`}>
        <div className="card card-bg h-100">
          <div>
            <img
              src={country.flag}
              alt={country.alt}
              className="card-img-top"
              width="100%"
            />
          </div>
          <div className="card-body">
            <h3 className="card-title">{country.name}</h3>

            <p>
              <span>Population: </span>
              {country.population}
            </p>
            <p>
              <span>Region: </span>
              {country.region}
            </p>
            <p>
              <span>Capital: </span>
              {country.capital}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
