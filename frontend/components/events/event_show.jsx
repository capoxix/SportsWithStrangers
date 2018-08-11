import React from 'react';

class EventShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  render(){


    console.log("IN EVENT SHOW");
    console.log('SHOW PROPS', this.props);
    if (this.props.events === undefined){
      return <div>Loading.....</div>;
    }
    const event = this.props.events[this.props.match.params.eventId];
    const user = this.props.users[event.user_id];


      let date = new Date(event.date_time);
      let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      let day = days[date.getDay()];
      // let hour = date.getHours();
      let hour = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
      let until = date.setHours((date.getHours() + 2) % 24);
       until = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
      let dateArr = date.toString().split(" ");
    return(
      <div>
        <div className="event-info">
          <div className="event-author">
            Join {user.name} for sport time
          </div>

          <div className="event-date">
            <div className="emoji"></div>
            <div className="">{`${dateArr[1]} ${dateArr[2]}`}</div>
          </div>

          <div className="event-time">
            <div className="emoji"></div>
            <div className="">{`${hour}-${until}`}</div>
          </div>
          <div className="event-address">
            <div className="emoji"></div>
            <div className="">{event.address}</div>
          </div>

          <div className="event-city-country">
            <div className="emoji"></div>
            <div className="">{event.city_id}, {event.country}</div>
          </div>

          <div className='event-spots'>
            {event.num_of_members} SPOTS LEFT!
          </div>
        </div>
        <ul>
          <li>Event Info</li>
          <li>Sport Category Id: {event.category_id}</li>
          <li>Description: {event.description}</li>
        </ul>

        <ul>
          <li>Author Info</li>
          <li>Name: {user.name}</li>
          <li>user_catchphrase: {user.user_catchphrase}</li>
          <li>user_description: {user.user_description}</li>
        </ul>
      </div>
    );
  }
}

export default EventShow;
