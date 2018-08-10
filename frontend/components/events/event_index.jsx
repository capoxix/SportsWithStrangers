import React from 'react';

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
    const eventIndex = Object.values(this.props.events).map(event => (
      <ul>
        <li>Sport Category: {event.category_id}</li>
        <li>Datetime: {event.date_time}</li>
        <li>Address: {event.address}</li>
        <li>City: {event.city_id}</li>
      </ul>
    ));

    if (this.props.events === undefined){
      return <div>Loading.....</div>;
    }
    return(
      <div>
        {eventIndex}
      </div>
    );
  }
}

export default EventIndex;
