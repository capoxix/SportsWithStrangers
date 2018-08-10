import React from 'react';

class EventShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  render(){
    if (this.props.event === undefined){
      return <div>Loading.....</div>;
    }
    return(
      <div>
        <ul>
          <li>Event Info</li>
          <li>Sport Category Id: {this.props.event.category_id}</li>
          <li>Datetime: {this.props.event.date_time}</li>
          <li>Address: {this.props.event.address}</li>
          <li>City Id: {this.props.event.city_id}</li>
          <li>Country: {this.props.event.country}</li>
          <li>Description: {this.props.event.description}</li>
        </ul>

        <ul>
          <li>Author Info</li>
          <li>Name: {this.props.user.name}</li>
          <li>user_catchphrase: {this.props.user.user_catchphrase}</li>
          <li>user_description: {this.props.user.user_description}</li>
        </ul>
      </div>
    );
  }
}
