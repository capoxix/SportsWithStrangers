import React from 'react';
import {Link} from 'react-router-dom';

const getDisplayLink = (currentUser, event ,count) => {
  let displayLink;
  let signedUpLink = <div className='signed-up-link'>
                      <Link to={`/events/${event.id}`}> SIGNED UP</Link>
                    </div>;

  let showLink = <div className='show-link'>
                    <Link to={`/events/${event.id}`}> THIS ONE → </Link>
                  </div>;

  let waitlistLink = <div className='waitlist-link'>
                      <Link to={`/events/${event.id}`}> JOIN WAITLIST</Link>
                    </div>;


  let waitlistedLink = <div className='waitlisted-link'>
                      <Link to={`/events/${event.id}`}> WAITLISTED</Link>
                    </div>;

  let yourLink = <div className='show-link'>
                    <Link to={`/events/${event.id}`}> HOSTING</Link>
                  </div>;
  if (currentUser) {
    if(currentUser.id === event.user_id) {
      return yourLink;
    }
    if (currentUser.attending_event_ids.includes(event.id))
      return signedUpLink;
    if (currentUser.waiting_event_ids.includes(event.id))
      return waitlistedLink;
    if (count <= 0) return waitlistLink;

      return showLink;
    } else if (count <= 0){
      return waitlistLink;
    } else {
      return showLink;
  }

};

const EventIndexItem = ({event, categories, city, user, currentUser}) => {
  let date = new Date(event.date_time);
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let day = days[date.getDay() - 1];
  let hour = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
  let until = date.setHours((date.getHours() + 2) % 24);
   until = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
  let dateArr = date.toString().split(" ");

  if (categories[event.category_id] === undefined || city === undefined){
    return <div>Loading....</div>;
  } else {
    let count = event.num_of_members - event.joinedCount;
    let displayLink = getDisplayLink(currentUser, event, count);

    if (count <= 0) {
      count = 'PACKED!';
    } else {
      count = `${count} SPOTS LEFT!`;
    }

    const category = categories[event.category_id].name;
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
          <div className='address'>{`${event.address},  ${city.name}`}</div>
            <hr></hr>
          <div className='spots'>{count}</div>
          {displayLink}
      </div>
    );
  }
};

export default EventIndexItem;
