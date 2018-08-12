import React from 'react';
import {Link} from 'react-router-dom';

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
    this.props.fetchCities();
    this.props.fetchCategories();
  }

  render(){


    // console.log("IN EVENT SHOW");
    // console.log('SHOW PROPS', this.props.events);
    // console.log(this.props.match.params.eventId);
    if (this.props.events[this.props.match.params.eventId] === undefined) {
      return <div>Loading....</div>;
    } else {
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
            <div className="event-sign-info">
              <div className="event-info">
                <div className="event-author">
                  <h2>Join GARBO for sport time</h2>
                </div>
                <hr></hr>
                <div className="event-category">
                  <div className="emoji"></div>
                  <div className=""><h4>{event.category_id}</h4></div>
                </div>
                <div className="event-date">
                  <div className="emoji"></div>
                  <div className=""><h4>{`${day}, ${dateArr[1]} ${dateArr[2]}`}</h4></div>
                </div>

                <div className="event-time">
                  <div className="emoji"></div>
                  <div className=""><h4>{`${hour}-${until}`}</h4></div>
                </div>
                <div className="event-address">
                  <div className="emoji"></div>
                  <div className=""><h5>{event.address}</h5></div>
                </div>

                <div className="event-city-country">
                  <div className="emoji"></div>
                  <div className=""><h5>{event.city_id}, {event.country}</h5></div>
                </div>
                <hr></hr>
                <div className='event-spots'>
                  <p className='description'>{event.num_of_members} SPOTS LEFT!</p>
                </div>
              </div>

              <div className="current-user">
                <div className="user-info">
                  <label className="show-label">NAME</label>
                  <input className="attendance" value={currentUser.name}></input>
                  <label className="show-label">EMAIL</label>
                  <input className="attendance" value={currentUser.email}></input>
                  <div className="join-container">
                    <input onClick={()=> console.log(`${currentUser.id} joins event...`)} type='submit' value='SIGN ME UP'/>
                    <Link to="/events">See Other Sport Times</Link>
                </div>
                </div>
              </div>
            </div>

            <div className="more-info">


              <div className="author-info">
                <div className=""><h2> Meet your Host, {user.name}.</h2></div>
                <div className=""><h5>(It'll be helpful to know what they look like
                  when you're looking for a group of confused strangers at the court.)</h5></div>
                <div className="author-img">
                  <img></img>
                </div>
              </div>

              <div className="author-event-description">
                <div className="user-catchphrase">
                  <p>{user.user_catchphrase}</p>
                </div>

                <div className="user-description">
                  <h3>What's your story?</h3>
                  <p>{user.user_description}</p>
                </div>

                <div className="event-description">
                  <h3>What might we do?</h3>
                  <p>{event.description}</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      );
    }
  }
}

export default EventShow;
