import React from 'react';

class EventShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(ownProps){
    if (this.props.match.params.eventId != ownProps.match.params.eventId){
      this.props.fetchEvent(ownProps.match.params.eventId);
    }
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
    const currentUser = this.props.users[this.props.currentUserId];


      let date = new Date(event.date_time);
      let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      let day = days[date.getDay()];
      // let hour = date.getHours();
      let hour = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
      let until = date.setHours((date.getHours() + 2) % 24);
       until = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
      let dateArr = date.toString().split(" ");
    return(
      <div className= "event-show-container">
        <div className="event-show-wrapper">
          <div className="event-info">
            <div className="event-author">
              Join {user.name} for sport time
            </div>
            <div className="event-category">
              <div className="emoji"></div>
              <div className="">{event.category_id}</div>
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


            <div className="current-user">
              <div className="user-info">
                <div>NAME</div>
                <div>{currentUser.name}</div>
                <div>EMAIL</div>
                <div>{currentUser.email}</div>
                <div><input onClick={()=> console.log(`${currentUser.id} joins event...`)} type='submit' value='SIGN ME UP'/></div>
              </div>
            </div>
          </div>

          <div className="author-info">
            <div className=""> Meet your Host, {user.name}</div>
            <div className="">(It'll be helpful to know what they look like
              when you're looking for a group of confused strangers at the court.)</div>
            <div className="author-img"></div>


          <div className="author-event-description">
            <div className="user-catchphrase">
              {user.user_catchphrase}
            </div>

            <div className="user-description">
              <h2>What's your story?</h2>
              <div>{user.user_description}</div>
            </div>

            <div className="event-description">
              <h2>What might we play?</h2>
              <div>{event.description}</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default EventShow;
