import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Datetime from 'react-datetime';
var moment = require('moment');

//Npm install -- save react-datetime
// Npm installl moment -- save

class EventForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.event;
    // {
    //   date_time: new Date(Date.now('UTC')), //moment().format('MMMM Do YYYY, h:mm:ss a'),//need to add datetime
    //   user_id: 1, //need to get information of user somehow
    //   address: '',
    //   country: '',
    //   city_id: 1,
    //   category_id: 1,
    //   num_of_members: 2,
    //   description: '',
    // };//this.props.event;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    // const event = Object.assign({}, this.state); //need to add category_id & city_id
    // this.props.processForm(event);
    this.state.date_time = this.state.date_time.toString();
    window.state = this.state;
  }

  update(field){
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  handleDate(date){
    this.setState({date_time: date});
  }

  render(){
    // const errorsList = this.props.errors.event.map((error) =>
    //   <li>{error}</li>
    // );
    let members = [];
    for (let i = 1; i <= 10; i++){
      members.push(<option value={`${i}`}>{`${i}`}</option>);
    }
    let cities = [<option value="" disabled selected>Select City</option>];

    this.props.cities.forEach((city) => cities.push(
      <option value={`${city.id}`}>{city.name}</option>
    ));

    let categories = [ <option value="" disabled selected>Select Sports Category</option>];
    this.props.categories.forEach((category) => categories.push(
      <option value={`${category.id}`}>{category.name}</option>
    ));
    // console.log(this.state.date_time, "datetime");

    return(
      <div className= "form-container">
        <div className="form">


          <form onSubmit={this.handleSubmit}>
              <div className="full-address">
                <input
                  type="text"
                  onChange={this.update("address")}
                  value={this.state.address}
                  placeholder="Street Address (Ex. 1111 Name Street)"
                  />

                <select onChange={this.update("city_id")}>
                  {cities}
                  </select>

                <input
                  type="text"
                  onChange={this.update("country")}
                  value={this.state.country}
                  placeholder="Country"
                  />
              </div>

                <select onChange={this.update("category_id")}>
                 {categories}
                </select>

                <select onChange={this.update("num_of_members")}>
                  <option value="" disabled selected>Select Number of Members</option>
                  {members}
                </select>

              <textarea
                onChange={this.update("description")}
                value={this.state.description}
                placeholder="Description">
              </textarea>

          <Datetime value={this.state.date_time} onChange={this.handleDate}/>
          <input type='submit' value="CREATE SPORTS TIME"/>
          </form>

        </div>
      </div>
    );
  }
}

export default withRouter(EventForm);
