import React from 'react';
import EventIndexItem from './event_index_item';

const EventCityIndex = ({users, city, events, categories, currentUser}) =>
  {
    // console.log(categories);
    let cityIndex = [<div className="city" name={`${city.name}`}>
                      <h3>{city.name}<br></br>👉</h3>
                      </div>];

    //
    for(let id in events){
      // console.log("id", id);
      let event = events[id];
      if (cityIndex.length === 4){
        break;
      }
      if (event.city_id === city.id && cityIndex.length < 4) {
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
    //   console.log(id);
    //   let event = events[id];
    //   console.log("event", event);
    //   if (event.city_id === city.id && cityIndex.length < 5) {
    //     cityIndex.push(
    //       <div>
    //         <EventIndexItem
    //           key={event.id}
    //           event={event}
    //           user={users[event.user_id]}
    //           city={city}
    //           categories={categories}
    //           currentUser = {currentUser}/>
    //       </div>
    //     );
    //   } else {
    //     break;
    //   }
    // }
    //
    //   Object.values(events).forEach(event => {
    //   if (event.city_id === city.id && cityIndex.length < 4) {
    //     cityIndex.push(
    //       <div>
    //         <EventIndexItem
    //           key={event.id}
    //           event={event}
    //           user={users[event.user_id]}
    //           city={city}
    //           categories={categories}
    //           currentUser = {currentUser}/>
    //       </div>
    //     );
    //   }
    // });

    return (
      <div className='index-city-wrapper'>
        {cityIndex}
      </div>
    );
};

export default EventCityIndex;
