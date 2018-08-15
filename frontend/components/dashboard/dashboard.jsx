import React from 'react';

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
    const {joinedEvents, waitlistedEvents, hostedEvents, users
          ,cities, categories, currentUser,
          deleteJoinedEvent, deleteEvent } = this.props;
    return (
      <div className='dashboard-container'>
        <div className='dashboard-user'>
          <h2> Welcome home, {currentUser.name}!</h2>
          <h3>What are you grateful for today?</h3>
          <input type='submit' onClick={this.sendToEventsIndex}value='FIND ANOTHER SPORTS TIME!'/>
        </div>
        <div className='dashboard-events'>
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
