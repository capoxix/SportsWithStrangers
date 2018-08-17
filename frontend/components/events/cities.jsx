import React from 'react';
import {NavLink} from 'react-router-dom';

const Cities = ({cities, cityId}) => {
  let cityList = Object.values(cities).map(city => {
    if (cityId === city.id) {
      return  <NavLink key={city.id} to={`/events/city/${city.id}`}>{city.name}</NavLink>;

    } else {
      return <NavLink key={city.id} to={`/events/city/${city.id}`}>{city.name}</NavLink>;

    }
  });

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
