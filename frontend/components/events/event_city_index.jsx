import React from 'react';
import EventIndexItem from './event_index_item';

const EventCityIndex = ({users, city, events, categories, currentUser}) =>
  {
    // console.log(categories);
    return (
      Object.values(events).map(event => (
      <div>
        <EventIndexItem
          key={event.id}
          event={event}
          user={users[event.user_id]}
          city={city}
          categories={categories}
          currentUser = {currentUser}/>
      </div>
    ))
  );
};

export default EventCityIndex;
