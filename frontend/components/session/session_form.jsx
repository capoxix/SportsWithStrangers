import React from 'react';
import {Link, withRouter} from 'react-router-dom';



class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field){
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  render(){
    const errorsList = this.props.errors.session.map((error) =>
      <li>{error}</li>
    );
    return(
      <div className='form-container'>
        <div className='form'>
          <ul className='error'>
            {errorsList}
          </ul>
          <h1>Hey stranger!</h1>
          <p>It's good to have you back. Sign in here and sign up for your next sport time!</p>

          <form onSubmit={this.handleSubmit}>

            <input
              type="email"
              onChange={this.update("email")}
              value={this.state.email}
              placeholder="Email Address"
              />

            <input
              type="password"
              onChange={this.update("password")}
              value={this.state.password}
              placeholder="Password"
              />


            <input type='submit' value='SIGN IN'/>
              <Link onClick={() => this.props.clearErrors()} to ='/signup'>If you've never signed up before, click here and do that</Link>

          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
