import React from 'react';
import EventIndexItem from  './event_index_item';
import Cities from './cities';

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
    //   let citiesEvent = {};
    //   Object.values(this.props.cities).forEach(city =>
    //     Object.values(this.props.events).forEach(event =>
    //       if (event.city_id === city.id) ci
    //     );
    //   );

      const eventIndex = Object.values(this.props.events).map(event => (
        <div>
          <EventIndexItem
            key={event.id}
            event={event}
            user={this.props.users[event.user_id]}
            cities={this.props.cities}
            categories={this.props.categories}
            currentUser = {this.props.currentUser}/>
        </div>
      ));


      return(
        <div>
          <Cities cities={this.props.cities}/>
          <div className= 'index-container'>
            <div className='index-wrapper'>
              {eventIndex}
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
