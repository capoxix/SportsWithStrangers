import React from 'react';
import EventIndexItem from './event_index_item';
import Cities from './cities';


class AllCityEvent extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    const {users, city, events, categories, currentUser, cities} = this.props;
    // console.log(categories);
    let cityIndex = [];
    let date = new Date();
    let monthArr = ["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
    let month = monthArr[date.getMonth()];
    let nextMonth = monthArr[date.getMonth() + 1];
    let day = 30 - date.getDate();


    let eventsArr = Object.values(events).sort(function(a, b) {
          if (Date.parse(a.date_time) < Date.parse(b.date_time)) {
            return -1;
          } else {
            return 1;
          }
        });



      eventsArr.forEach(event => {
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
        });
    // for(let id in events){
    //   // console.log("id", id);
    //   let event = events[id];;
    //   if (event.city_id === city.id) {
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
    // }




      // if (nameA > nameB) {
      //   return 1;
      // }
      //
      // // names must be equal
      // return 0;
    // });
    return (
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

            <Cities cities={cities} cityId={city.id}/>
            <div className='index-wrapper'>
              <div className='index-city-wrapper'>
                {cityIndex}
              </div>
            </div>
        </div>
    );
  }
}

export default AllCityEvent;
