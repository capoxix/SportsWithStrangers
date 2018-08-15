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

const DashboardEventList = ({type, events,cities, categories, currentUser,users, actions}) => {
  let listName, actionName;
  // console.log('type', type);
  console.log("IN EVENT LIST DASHBOARD");
  switch (type) {
    case 'joined':
      listName="Sport times you're attending";
      actionName="cancel my spot";
      break;
    case 'waitlist':
      listName="Sport times for which you're on the waitlist";
      actionName="";
      break;
    case 'hosting':
      listName="Sport times you're hosting";
      actionName="cancel sport time";
      break;
    default:
      console.log('type', type);
      console.log('in default');
      listName='';
      actionName='';
  }
  const eventList = events.map(event => {
    const {day, dateArr, hour, until} = getDateInfo(event);
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
