import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class EventForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dateTime: new Date(Date.now('UTC')),//need to add datetime
      userId: 1, //need to get information of user somehow
      address: '',
      country: '',
      cityId: 1,
      categoryId: 1,
      numOfMembers: 2,
      description: '',
    };//this.props.event;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const event = Object.assign({}, this.state); //need to add category_id & city_id
    this.props.processForm(event);
  }

  update(field){
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  render(){
    // const errorsList = this.props.errors.event.map((error) =>
    //   <li>{error}</li>
    // );
    let members = [];
    for (let i = 1; i <= 10; i++){
      members.push(<option value={`${i}`}>{`${i}`}</option>);
    }

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

                  <select>
                    <option value="" disabled selected>Select City</option>
                    <option value="1">Los Angeles</option>
                    <option value="2">San Francisco</option>
                    <option value="3">Oakland</option>
                  </select>

                <input
                  type="text"
                  onChange={this.update("country")}
                  value={this.state.country}
                  placeholder="Country"
                  />
              </div>

                <select>
                 <option value="" disabled selected>Select Sports Category</option>
                  <option value="1">Basketball</option>
                  <option value="2">Soccer</option>
                  <option value="3">Tennis</option>
                  <option value="4"></option>
                </select>

                <select>
                  <option value="" disabled selected>Select Number of Members</option>
                  {members}
                </select>

              <textarea
                onChange={this.update("description")}
                value={this.state.description}
                placeholder="Description">
              </textarea>


          <input type='submit' value="CREATE SPORTS TIME"/>
          </form>

        </div>
      </div>
    );
  }
}

export default withRouter(EventForm);
