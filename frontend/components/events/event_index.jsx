import React from 'react';
import EventIndexItem from  './event_index_item';
import Cities from './cities';
import EventCityIndex from  './event_city_index';

class EventIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchEvents();
    this.props.fetchCities();
    this.props.fetchCategories();
    this.props.getJoinedEvents();
  }

  render(){
    if (this.props.events != {} && this.props.users != {}){
      let citiesEvent = [];
      Object.values(this.props.cities).forEach(city => {
        citiesEvent.push(
          <EventCityIndex
          key={city.id}
          users={this.props.users}
          city={city}
          events={this.props.events}
          categories={this.props.categories}
          currentUser={this.props.currentUser}
          />
        );
      }


    );
    let date = new Date();
    let monthArr = ["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
    let month = monthArr[date.getMonth()];
    let nextMonth = monthArr[date.getMonth() + 1];
    let day = 30 - date.getDate();
    
      return(
        <div>
          <div className="banner">
            <div className="banner-words">
              <h1>PLAY SPORTS</h1>
              <span>IT'S GOOD FOR YOU</span>
            </div>
          </div>
          <div className= 'index-container'>
            <div className="month-info">
              <div className="current-month">
                <div className="emoji"><img src={window.images.calendarIcon}></img></div>
                  <p>TEA TIMES IN {month}</p>
                </div>

                <div className="days-left">
                  <p>{`${nextMonth}'s SPORTS TIME AVAILABLE IN ${day} DAYS`}</p>
                </div>
              </div>


            <Cities cities={this.props.cities}/>
            <div className='index-wrapper'>
              {citiesEvent}
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading....</div>;
      }
    }
}

export default EventIndex;
