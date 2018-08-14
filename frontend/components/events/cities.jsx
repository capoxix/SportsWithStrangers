import React from 'react';

const Cities = ({cities}) => {
  let cityList = Object.values(cities).map(city =>
  <a href={`#/events/${city.name}`}>{city.name}</a>);

  return(
    <div className="city-container">
      <h5>Jump to your city's sports times</h5>
      <div className="city-list">
        {cityList}
      </div>
    </div>
  );
};

export default Cities;
