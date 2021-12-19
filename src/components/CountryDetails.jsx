import React from "react";
import { Link } from "react-router-dom";

const CountryDetails = ({ countries, isloading, selCon }) => {
  if (countries.length === 0 && isloading === false) {
    return <p>Try again</p>;
  } else if (isloading === true) {
    return <p></p>;
  }
  return (
    <div className="countries">
      {countries.map((country) => {
        return (
          <div key={country.name}>
            <div className="country-details">
              <div>
                <p>
                  Country Name: <span>{country.name}</span>
                </p>
                <p>
                  Country Capital:
                  <Link
                    to="/CapitalDetails"
                    className="capital"
                    onClick={() => {
                      selCon(country);
                    }}
                  >
                    {country.capital}
                  </Link>
                </p>
                <p>
                  Country Population: <span>{country.population}</span>
                </p>
                <p>
                  Country Latlng: <span>{country.latlng}</span>
                </p>
              </div>
              <img
                className="flag"
                src={country.flags.png}
                alt={country.name}
              />
            </div>

            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default CountryDetails;
