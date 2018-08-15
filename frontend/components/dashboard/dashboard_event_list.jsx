import React from 'react';

export const getDateInfo= (event) => {
  let date = new Date(event.date_time);
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let day = days[date.getDay()];
  // let hour = date.getHours();
  let hour = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
  let until = date.setHours((date.getHours() + 2) % 24);
   until = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
  let dateArr = date.toString().split(" ");

  return {day, hour, until, dateArr};
};

export const getEventInfo = (type, event, users) => {
  let listName, actionName,hostQuote, userLook;
  const author = users[event.user_id];

  switch (type) {
    case 'joined':
      actionName="cancel my spot";
      hostQuote='Get to know your host';
      userLook=`Keep an eye open for ${author.name}! So it's easier,
      here's what they look like :).`;
      break;
    case 'waitlist':
      actionName="You'RE STILL ON THE WAITLIST!";
      hostQuote='Your host(well, maybe)';
      userLook=`This is what ${author.name} looks like in case you need to find them
      if you get off the waitlist).`;
      break;
    case 'hosting':
      actionName="cancel sport time";
      hostQuote="You are the host";
      userLook=`This is your current picture being displayed`;
      break;
    default:
      listName='';
      actionName='';
  }

  return {listName, actionName, hostQuote, userLook, author};
};

const DashboardEventList = ({type, events,cities, categories, currentUser,users, actions}) => {
  let listName;

  switch (type) {
    case 'joined':
      listName="Sport times you're attending";
      break;
    case 'waitlist':
      listName="Sport times for which you're on the waitlist";
      break;
    case 'hosting':
      console.log("IN HOSTING");
      listName="Sport times you're hosting";
      break;
    default:
      listName='';
  }
  const eventList = events.map(event => {
    const {day, dateArr, hour, until} = getDateInfo(event);
    let  {actionName, hostQuote, userLook, author} = getEventInfo(type,event,users);
    return (
      <div className='event-user-info'>
        <div className='event-info'>
          <div className="event-category">
            <div className="emoji"><img src={window.images[categories[event.category_id].name]}></img></div>
            <div className=""><h4>{categories[event.category_id].name.toUpperCase()}</h4></div>
          </div>
          <div className="event-date">
            <div className=""><h4>{`${day}, ${dateArr[1]} ${dateArr[2]}`}</h4></div>
          </div>
          <div className="event-time">
            <div className=""><h4>{`${hour}-${until}`}</h4></div>
          </div>

          <div className="event-address">
            <div className=""><h5>{event.address}, {cities[event.city_id].name}</h5></div>
          </div>

          <hr></hr>

          <div className="action">
            {actionName}
          </div>
        </div>
        <div className='user-info'>
          <h3>{hostQuote}</h3>
          <div className='author-img-quote'>
            <img src={author.imgUrl}></img>
            <p>{userLook}</p>
            <div>{author.name} PROFILE</div>
            <div>EMAIL {author.name}</div>
          </div>
        </div>
      </div>
    );
  });


  return(
    <div className='dashboard-event-list'>
      <h2>{listName}</h2>
      {eventList}

    </div>
  );
};

export default DashboardEventList;
