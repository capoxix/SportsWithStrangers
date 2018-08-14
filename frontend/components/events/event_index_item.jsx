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
  if (currentUser) {
    // console.log('inside if statement');
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

  // return displayLink;
};

const EventIndexItem = ({event, categories, city, user, currentUser}) => {
  let date = new Date(event.date_time);
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let day = days[date.getDay()];
  // let hour = date.getHours();
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

    // console.log(user);
    // console.log("user attending events", currentUser.attending_event_ids);
    // console.log("current event id", event.id);




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
