import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.currentUser === undefined){
      return (
        <div>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Log In</Link>
        </div>
      );
    } else {
      return (
        <div>
          <p>Hello, {this.props.currentUser.name}</p>
          <button onClick={this.props.logout}>logout</button>
        </div>
      );
    }
  }
}

export default Greeting;
