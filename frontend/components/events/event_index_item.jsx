import React from 'react';
import {Link} from 'react-router-dom';

const EventIndexItem = ({event, categories, cities, user, currentUser}) => {
  let date = new Date(event.date_time);
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let day = days[date.getDay()];
  // let hour = date.getHours();
  let hour = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
  let until = date.setHours((date.getHours() + 2) % 24);
   until = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
  let dateArr = date.toString().split(" ");


  if (categories[event.category_id] === undefined || cities[event.city_id] === undefined){
    return <div>Loading....</div>;
  } else {

    let showLink;
    // console.log(user);
    // console.log("user attending events", currentUser.attending_event_ids);
    // console.log("current event id", event.id);
    if (currentUser.attending_event_ids !== []) {
      // console.log('inside if statement');
      if (currentUser.attending_event_ids.includes(event.id)) {
        // console.log("MATCHED");
        showLink = <div className='signed-up-link'><Link to={`/events/${event.id}`}> SIGNED UP</Link></div>;
      } else {
        showLink = <div className='show-link'><Link to={`/events/${event.id}`}> THIS ONE → </Link></div>;
      }
    }
    else {
      showLink = <div className='show-link'><Link to={`/events/${event.id}`}> THIS ONE → </Link></div>;
    }

    let count = event.num_of_members - event.joinedCount;

    const category = categories[event.category_id].name;
    const city = cities[event.city_id].name;
    return(
      <div className='index-item-wrapper'>

          <div className='date-user-wrapper'>
            <div className='date-wrapper'>
              <div className='category'><img src={window.images[category]}></img></div>
              <div className= 'day'>{day}</div>
              <div className='date'>{`${dateArr[1]} ${dateArr[2]}`}</div>
              <div className='hour'>{`${hour}-${until}`}</div>
            </div>
            <div className= 'user'>
              <img src={user.imgUrl}></img>
              <p>{user.name}</p>
            </div>
          </div>
          <div className='address'>{`${event.address},  ${city}`}</div>
            <hr></hr>
          <div className='spots'>{`${count} spots left!`}</div>
          {showLink}
      </div>
    );
  }
};

export default EventIndexItem;
