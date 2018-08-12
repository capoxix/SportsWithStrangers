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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    // console.log("SUBMIT BUTTON HIT");
    this.state.date_time = this.state.date_time.toString();
    this.props.processForm(this.state).then(() => this.props.history.push('/events'));
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleDate(date){
    this.setState({date_time: date});
  }

  componentDidMount(){
    this.props.fetchCities();
    this.props.fetchCategories();
  }

  render(){

    // console.log("event form, event props", this.props.event);

    let members = [];
    for (let i = 1; i <= 10; i++){
      if (this.props.event.num_of_members === i) {
        members.push(<option value={`${i}`} selected>{`${i}`}</option>);
      } else {
      members.push(<option value={`${i}`}>{`${i}`}</option>);
    }
    }
    let cities = [<option value="" disabled selected>Select City</option>];

    Object.values(this.props.cities).forEach((city) => {
      if(this.props.event.city_id === city.id){
        cities.push(<option value={`${city.id}`} selected>{city.name}</option>);
      } else{
        cities.push(<option value={`${city.id}`}>{city.name}</option>);
        }
    });

    let categories = [ <option value="" disabled selected>Select Sports Category</option>];
    Object.values(this.props.categories).forEach((category) => {
      if(this.props.event.category_id === category.id) {
        categories.push(<option value={`${category.id}`} selected>{category.name}</option>);

      } else {
      categories.push(<option value={`${category.id}`}>{category.name}</option>);
      }
    });
    // console.log(this.state.date_time, "datetime");
    // console.log("cities",cities);
    // console.log("categories", categories);
    const errorsList = this.props.errors.event.map((error) =>
      <li>{error}</li>
    );
    while (this.props.event === undefined || this.props.cities === {} || this.props.categories === {}){
      return(<div>Loading......</div>);
    }
    return(
      <div className= "form-container">
        <div className="form">
          <ul className='error'>
            {errorsList}
          </ul>

          <form onSubmit={this.handleSubmit}>

              <div className="form-address">
                <input
                  type="text"
                  onChange={this.update("address")}
                  value={this.state.address}
                  placeholder="Street Address (Ex. 1111 Name Street)"
                  />
              </div>

              <div className="form-city-country">
                  <select onChange={this.update("city_id")}>
                    {cities}
                    </select>

                  <input
                    className="form-country"
                    type="text"
                    onChange={this.update("country")}
                    value={this.state.country}
                    placeholder="Country"
                    />
                </div>

              <div className="form-category-members">
                <select onChange={this.update("category_id")}>
                 {categories}
                </select>

                <select onChange={this.update("num_of_members")}>
                  <option value="" disabled selected>Select Number of Members</option>
                  {members}
                </select>
              </div>

              <div className="form-description">
                <textarea
                  onChange={this.update("description")}
                  value={this.state.description}
                  placeholder="Description">
                </textarea>
              </div>

            <div className="form-date">
              <Datetime value={this.state.date_time} onChange={this.handleDate}/>
            </div>

            <div className="form-create-button">
              <input type='submit' value={this.props.formType}/>
            </div>
        </form>

        </div>
      </div>
    );
  }
}

export default withRouter(EventForm);
