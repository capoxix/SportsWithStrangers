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

    // console.log("EVENT INDEX");
    if (this.props.events === undefined){
      return <div>Loading.....</div>;
    }

    const eventIndex = Object.values(this.props.events).map(event => (
      <div>
        <EventIndexItem
          key={event.id}
          event={event}
          user={this.props.users[event.user_id]}
          cities={this.props.cities}
          categories={this.props.categories}/>
      </div>
    ));


    return(
      <div className= 'index-container'>
        <div className='index-wrapper'>
          {eventIndex}
        </div>
      </div>
    );
  }
}

export default EventIndex;
