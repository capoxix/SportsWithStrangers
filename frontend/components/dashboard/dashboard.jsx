import React from 'react';
import DashboardEventList from './dashboard_event_list';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.sendToEventsIndex = this.sendToEventsIndex.bind(this);
  }

  sendToEventsIndex(e){
    e.preventDefault();
    this.props.history.push(`/events`);
  }

  render(){
    const {joinedEventsArr, waitlistedEvents, hostedEvents, users
          ,cities, categories, currentUser,
          deleteJoinedEvent, deleteEvent } = this.props;
          // console.log(joinedEvents);
          console.log('joinedEventsArr', joinedEventsArr);
    // if (!joinedEvents) return <div>Loading....</div>;
    return (
      <div className='dashboard-container'>
        <div>
          <div className='dashboard-user'>
            <h2> Welcome home, {currentUser.name}!</h2>
            <h3>What are you grateful for today?</h3>
            <input type='submit' onClick={this.sendToEventsIndex}value='FIND ANOTHER SPORTS TIME!'/>
          </div>
        </div>
        <div className='dashboard-events'>
          <DashboardEventList
            type="joined"
            events={joinedEventsArr}
            cities={cities}
            categories={categories}
            currentUser= {currentUser}
            users={users}
            action={deleteJoinedEvent}/>

          <DashboardEventList
            type="waitlist"
            events={waitlistedEvents}
            cities={cities}
            categories={categories}
            currentUser= {currentUser}
            users={users}
            action={deleteJoinedEvent}/>

        <DashboardEventList
          type="hosting"
          events={hostedEvents}
          cities={cities}
          categories={categories}
          currentUser= {currentUser}
          users={users}
          action={deleteEvent}/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
// <DashboardEventList
// events={joinedEvents},
// cities={cities},
// categories={categories},
// currentUser= {currentUser},
// users={users},
// action={deleteJoinedEvent}/>
