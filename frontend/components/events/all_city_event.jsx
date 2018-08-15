import React from 'react';
import EventIndexItem from './event_index_item';

class AllCityEvent extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const {users, city, events, categories, currentUser} = this.props;
    // console.log(categories);
    let cityIndex = [];

    console.log("IN ALL CIITYYY");
    console.log(events);

    for(let id in events){
      // console.log("id", id);
      let event = events[id];
      if (event.city_id === city.id) {
        cityIndex.push(
          <div>
            <EventIndexItem
              key={event.id}
              event={event}
              user={users[event.user_id]}
              city={city}
              categories={categories}
              currentUser = {currentUser}/>
          </div>
        );
      }
    }
    return (
      <div className='index-city-wrapper'>
        {cityIndex}
      </div>
    );
  }
}

export default AllCityEvent;
