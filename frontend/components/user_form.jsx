import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class UserForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.user;
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
    const errorsList = this.props.errors.signup.map((error) =>
      <li>{error}</li>
    );

      <Link to = '/login'>If you've already done this before, click here to log in</Link>;


    return(
      <div className="signup">

        <ul className="error">
          {errorsList}
        </ul>
        <h1>Join for sports time</h1>
        <p>1000s of strangers across the world have come together for sports. Create an account and you'll be on your way to join the community.</p>
        <form onSubmit={this.handleSubmit}>

            <input
              type="text"
              onChange={this.update("name")}
              value={this.state.name}
              placeholder="First name (or nickname)"
              />

          <input
            type="text"
            onChange={this.update("email")}
            value={this.state.email}
            placeholder="Email address"
            />

          <input
            type="password"
            onChange={this.update("password")}
            value={this.state.password}
            placeholder="Password (at least 6 characters you won't forget!)"
            />

          <textarea
            onChange={this.update("user_catchphrase")}
            value={this.state.user_catchphrase}
            placeholder="Catchphrase">
          </textarea>

          <textarea
            onChange={this.update("user_description")}
            value={this.state.user_description}
            placeholder="Description">
          </textarea>

        <input type='submit' value="LET'S DO SPORTS"/>
        </form>
        <Link to = '/login'>If you've already done this before, click here to log in</Link>

      </div>
    );
  }
}

export default withRouter(UserForm);
