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
    this.props.fetchCities();
    this.props.fetchCategories();
  }

  render(){

    if (this.props.events != {} && this.props.users != {}){
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
        <div className= 'index-container'>
          <div className='index-wrapper'>
            {eventIndex}
          </div>
        </div>
      );
    } else {
      return <div>Loading....</div>;
      }
    }
}

export default EventIndex;
