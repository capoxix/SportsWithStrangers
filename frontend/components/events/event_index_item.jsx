import React from 'react';
import {Link} from 'react-router-dom';

const EventIndexItem = (props) => (
  <div className='index-item-wrapper'>

    <div>{props.event.category_id}</div>
    <div>{props.user.name}</div>
    <div>Datetime: {props.event.date_time}</div>
    <li>Address: {props.event.address}</li>
    <li>City Id: {props.event.city_id}</li>
  </div>
);

export default EventIndexItem;
