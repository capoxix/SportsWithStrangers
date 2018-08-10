import React from 'react';
import EventIndexItem from  './event_index_item';

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
  }

  render(){
    console.log("EVENT INDEX");
    if (this.props.events === undefined){
      return <div>Loading.....</div>;
    }

    const eventIndex = Object.values(this.props.events).map(event => (
      <div>
        <EventIndexItem event={event} user={this.props.users[event.user_id]}/>
      </div>
    ));


    return(
      <div className='index-wrapper'>
        {eventIndex}
      </div>
    );
  }
}

export default EventIndex;
