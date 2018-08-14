import React from 'react';
import EventIndexItem from  './event_index_item';
import Cities from './cities';
import EventCityIndex from  './event_city_index';

class EventIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      city: '',
      category: '',
    };
  }

  componentDidMount(){
    this.props.fetchEvents();
    this.props.fetchCities();
    this.props.fetchCategories();
  }

  render(){
    // have a group container that takes in city instead of cities
    // and takes in all events too
    // <EventIndexGroup
    //  events={this.props.events}
    // users={this.props.users}
    //  city={city} //iterating on cities to create the groups
    //  categories={this.props.categories}
    // currentUser={this.props.currentUser}/>
    if (this.props.events != {} && this.props.users != {}){
    //

      let citiesEvent = [];
      Object.values(this.props.cities).forEach(city => {
        citiesEvent.push(
          <EventCityIndex
          users={this.props.users}
          city={city}
          events={this.props.events}
          categories={this.props.categories}
          currentUser={this.props.currentUser}
          />
        );
      }

    );
      return(
        <div>
          <div className= 'index-container'>
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
