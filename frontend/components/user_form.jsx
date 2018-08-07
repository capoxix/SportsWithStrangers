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
    const errorsList = this.props.errors.session.map((error) =>
      <li>error</li>
    );
    let link;
    if (this.props.formType === 'login') {
      link = <Link to ='/signup'>Sign Up</Link>;
    }
    else {
      link= <Link to = '/login'>Login</Link>;
    }

    return(
      <div>
        <ul>
          {errorsList}
        </ul>
        {link}
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>name:
            <input
              type="text"
              onChange={this.update("name")}
              value={this.state.name}
              />
          </label>

        <label>email:
          <input
            type="text"
            onChange={this.update("email")}
            value={this.state.email}
            />
        </label>

        <label>password:
          <input
            type="text"
            onChange={this.update("password")}
            value={this.state.password}
            />
        </label>

        <label>catchphrase:
          <textarea
            onChange={this.update("user_catchphrase")}
            value={this.state.user_catchphrase}>
          </textarea>
        </label>

        <label>description:
          <textarea
            onChange={this.update("user_description")}
            value={this.state.user_description}>
          </textarea>
        </label>

        <input type='submit' value={this.props.formType}/>
        </form>
      </div>
    );
  }
}

export default withRouter(UserForm);
