import React from 'react';
import {Link} from 'react-router-dom';



export const getDateInfo= (event) => {
  let date = new Date(event.date_time);
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let monthArr = ["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
  let day = days[date.getDay()];
  let hour = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
  let until = date.setHours((date.getHours() + 2) % 24);
   until = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
  let dateArr = date.toString().split(" ");

  let month = monthArr[date.getMonth()];
  return {day, hour, until, dateArr, month};
};

export const getEventInfo = (type, event, users) => {
  let actionName,hostQuote, userLook, actionId;
  const author = users[event.user_id];

  switch (type) {
    case 'joined':
      actionName="cancel my spot";
      hostQuote='Get to know your host';
      userLook=`Keep an eye open for ${author.name}! So it's easier,
      here's what they look like :).`;
      actionId = event.joinId;
      break;
    case 'waitlist':
      actionName="YOU'RE STILL ON THE WAITLIST!";
      hostQuote='Your host (well, maybe)';
      userLook=`This is what ${author.name} looks like in case you need to find them
      if you get off the waitlist).`;
      break;
    case 'hosting':
      actionName="cancel sport time";
      hostQuote="You are the host";
      userLook=`This is what your current picture looks like.`;
      actionId = event.id;
      break;
    default:
      actionName='';
  }

  return {actionName, hostQuote, userLook, author, actionId};
};

const DashboardEventList = ({type, events,cities, categories, currentUser,users, action}) => {
  let listName;

  switch (type) {
    case 'joined':
      listName="Sport times you're attending";
      break;
    case 'waitlist':
      listName="Sport times for which you're on the waitlist";
      break;
    case 'hosting':
      listName="Sport times you're hosting";
      break;
    default:
      listName='';
  }
  const eventList = events.map(event => {
    const {day, dateArr, hour, until, month} = getDateInfo(event);
    let  {actionName, hostQuote, userLook, author, actionId} = getEventInfo(type,event,users);
    let actionButton;
    if (actionName === "YOU'RE STILL ON THE WAITLIST!"){
      actionButton = <p>YOU'RE STILL ON THE WAITLIST!</p>;
    } else if(actionName === "cancel my spot"){
      actionButton = <Link to='/dashboard' onClick={()=> action(actionId)}>{actionName}</Link>;
      } else {
        actionButton = [<Link to={`/events/${event.id}`}>EDIT SPORT TIME</Link>,
          <Link to='/dashboard' onClick={()=> action(actionId)}>{actionName}</Link>];
      }
    return (
      <div className='event-user-info'>
        <div className='event-info'>
          <div className='event-info-box'>
            <div className="event-category">
              <div className="emoji"><img src={window.images[categories[event.category_id].name]}></img></div>
              <div className=""><h3>{categories[event.category_id].name.toUpperCase()}</h3></div>
            </div>
            <div className='event-day'>
                <h5>{day}</h5>
            </div>
            <div className="event-date">
              <div className=""><h4>{`${month} ${dateArr[2]}`}</h4></div>
            </div>
            <div className="event-time">
              <div className=""><h4>{`${hour}-${until}`}</h4></div>
            </div>

            <div className="event-address">
              <div className=""><h5>{event.address}, {cities[event.city_id].name}</h5></div>
            </div>

            <hr></hr>

            <div className="action">
              {actionButton}
            </div>
          </div>
        </div>
        <div className='user-info'>
          <h3>{hostQuote}</h3>
          <div className='author-img-quote'>
            <div className='author-photo'>
              <img src={author.imgUrl}></img>
            </div>
            <p>{userLook}</p>
            <Link to="">{author.name} PROFILE</Link>
            <Link to="">EMAIL {author.name}</Link>
          </div>
        </div>
      </div>
    );
  });


  if(eventList.length < 1) listName ='';

  return(
    <div className='dashboard-event-list'>
      <h2>{listName}</h2>
      {eventList}

    </div>
  );
};

export default DashboardEventList;
