import React from 'react';

const Cities = ({cities}) => {
  let cityList = Object.values(cities).map(city =>
  <a href={`#/events/${city.name}`}>{city.name}</a>);

  return(
    <div className="city-list">
      {cityList}
    </div>
  );
};

export default Cities;
