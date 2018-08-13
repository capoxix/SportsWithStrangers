import React from 'react';
import {Link} from 'react-router-dom';

class EventShow extends React.Component{
  constructor(props){
    super(props);
    this.sendToEditPage = this.sendToEditPage.bind(this);
    this.deleteSendToIndex = this.deleteSendToIndex.bind(this);
    this.joinEvent = this.joinEvent.bind(this);
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

  sendToEditPage(id){
    return () => this.props.history.push(`/events/${id}/edit`);
  }

  deleteSendToIndex(id){
    return () => this.props.deleteEvent(id).then(this.props.history.push(`/events`));
  }

  joinEvent(e){
    e.preventDefault();
    let event = this.props.events[this.props.match.params.eventId];
    this.props.createJoinedEvent({user_id: this.props.currentUserId, event_id: event.id})
      .then(this.props.history.push(`/events`));
  }

  render(){
    //when i refresh page...sometimes things do not load on time...(if statement not working?)
    const {events, users, cities, categories} = this.props;
    // console.log("IN EVENT SHOW");
    // console.log('SHOW PROPS', this.props.events);
    // console.log(this.props.match.params.eventId);
    if (events[this.props.match.params.eventId] && cities != {} && categories !== {}) {
      const event = events[this.props.match.params.eventId];
      const user = users[event.user_id];
      const currentUser = users[this.props.currentUserId];


      let date = new Date(event.date_time);
      let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      let day = days[date.getDay()];
      // let hour = date.getHours();
      let hour = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
      let until = date.setHours((date.getHours() + 2) % 24);
       until = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
      let dateArr = date.toString().split(" ");
      let count = event.num_of_members - event.joinedCount;

      if (count <= 0) {
        count = 'PACKED';
      } else {
        count = `${count} SPOTS LEFT!`;
      }

      let options;
      if (currentUser.id != event.user_id) {
        if (!currentUser.attending_event_ids.includes(event.id))
        //add an if statement to allow users to join waitlist if count <= 0
          options = [<input onClick={this.joinEvent} type='submit' value='SIGN ME UP'/>];
      } else {
        options = [
            <input className="edit" onClick={this.sendToEditPage(this.props.match.params.eventId)} type='submit' value="EDIT"/>,
            <input className="delete" onClick={this.deleteSendToIndex(this.props.match.params.eventId)} type='submit' value="DELETE"/>
      ];
      }

      return(
        <div className= "event-show-container">
          <div className="event-show-wrapper">
            <div className="event-sign-info">
              <div className="event-info">
                <div className="event-author">
                  <h2>Join {user.name} for sport time</h2>
                </div>
                <hr></hr>
                <div className="event-category">
                  <div className="emoji"><img src={window.images[categories[event.category_id].name]}></img></div>
                  <div className=""><h4>{categories[event.category_id].name.toUpperCase()}</h4></div>
                </div>
                <div className="event-date">
                  <div className="emoji"><img src={window.images.calendarIcon}></img></div>
                  <div className=""><h4>{`${day}, ${dateArr[1]} ${dateArr[2]}`}</h4></div>
                </div>

                <div className="event-time">
                  <div className="emoji"><img src={window.images.clockIcon}></img></div>
                  <div className=""><h4>{`${hour}-${until}`}</h4></div>
                </div>
                <div className="event-address">
                  <div className="emoji"><img src={window.images.addressIcon}></img></div>
                  <div className=""><h5>{event.address}</h5></div>
                </div>

                <div className="event-city-country">
                  <div className="emoji"><img src={window.images.cityIcon}></img></div>
                  <div className=""><h5>{cities[event.city_id].name}, {event.country}</h5></div>
                </div>
                <hr></hr>
                <div className='event-spots'>
                  <p className='description'>{count}</p>
                </div>
              </div>

              <div className="current-user">
                <div className="user-info">
                  <label className="show-label">NAME</label>
                  <input className="attendance" value={currentUser.name}></input>
                  <label className="show-label">EMAIL</label>
                  <input className="attendance" value={currentUser.email}></input>
                  <div className="options-container">
                    {options}
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
                  <img src ={user.imgUrl}></img>
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
      else {
        return <div>Loading....</div>;
    }
  }
}

export default EventShow;
