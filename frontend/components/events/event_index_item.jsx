import React from 'react';
import {Link} from 'react-router-dom';

const EventIndexItem = (props) => {
  let date = new Date(props.event.date_time);
  let days = ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'];
  let day = days[date.getDay()];
  let hour = date.getHours();
  let dateArr = date.toString().split(" ");

  return(
  <div className='index-item-wrapper'>
      <div>{props.event.category_id}</div>

      <div className='date-wrapper'>
        <div>{day}</div>
        <div>{`${dateArr[1]} ${dateArr[2]}`}</div>
        <div>{hour}</div>
      </div>
        <div>{props.user.name}</div>
      <div>{`${props.event.address}  ${props.event.city_id}`}</div>
  </div>
  );
};

export default EventIndexItem;
