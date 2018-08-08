import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    if(this.props.currentUser === undefined){
      return(
        <div className='header-nav'>
          <nav className="left">
            <p>Sports With Strangers</p>
          </nav>
          <nav className="right">
            <Link to='/events'>Sport Events</Link>
            <Link to='/events/new'>Hosting</Link>
            <Link to='/about'>About</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Sign In</Link>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
            <p>Hello, {this.props.currentUser.name}</p>
              <Link to='/events'>Sport Events</Link>
              <Link to='/events/new'>Hosting</Link>
              <Link to='/users/dashboard'>Dashboard</Link>
              <Link to='/signup'>Sign Up</Link>
              <Link to='/login'>Sign In</Link>
            <button onClick={this.props.logout}>logout</button>
        </div>
      );
    }
  }
}


export default Greeting;
