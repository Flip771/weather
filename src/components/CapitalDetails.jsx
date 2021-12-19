const CapitalDetails = (prop) => {
  if (prop.proper.length === 0 && prop.isloading === false) {
    return <p>Try again</p>;
  } else if (prop.isloading === true) {
    return <p>isloading true</p>;
  }

  return (
    <>
      <div className="special">
        <p>Name:</p>
        <p>{prop.proper.location.name}</p>
      </div>
      <div className="special">
        <p>Temperature:</p>
        <p>{prop.proper.current.temperature}</p>
      </div>
      <div className="special">
        <p>Wind Speed:</p>
        <p>{prop.proper.current.wind_speed}</p>
      </div>
      <div className="special">
        <p>Precipitation</p>
        <p>{prop.proper.current.precip}</p>
      </div>
      <div className="special">
        <p>Forecast:</p>
        <p>{prop.proper.current.weather_descriptions[0]}</p>

        <img
          className="forecast"
          src={prop.proper.current.weather_icons[0]}
          alt="test"
        />
      </div>
    </>
  );
};

export default CapitalDetails;
