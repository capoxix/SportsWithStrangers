import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    if(this.props.currentUser === undefined){
      return(
        <div className='header-nav'>
          <nav className="left">

            <Link to ='/'><img src={window.images.logo}></img></Link>
          </nav>
          <nav className="right">
            <Link to='/events'>SPORT EVENTS</Link>
            <Link to='/events/new'>HOSTING</Link>
            <Link to='/about'>ABOUT</Link>
            <button onClick={() => this.props.clearErrors()}><Link to='/login'>SIGN IN</Link></button>
            <button onClick={() => this.props.clearErrors()}><Link to='/signup' className='signup-button'>SIGN UP</Link></button>
            <button onClick={() => this.props.login()}>DEMO LOGIN</button>
          </nav>
        </div>
      );
    } else {
      return (
        <header>
          <div className='header-nav'>
            <nav className="left">
              <Link to ='/'><img src={window.images.logo}></img></Link>
              <p>Hello, {this.props.currentUser.name}</p>
            </nav>
            <nav className="right">
              <Link to='/events'>SPORT EVENTS</Link>
              <Link to='/events/new'>HOSTING</Link>
              <Link to='/users/dashboard'>DASHBOARD</Link>
              <button onClick={this.props.logout}>LOGOUT</button>
            </nav>
          </div>
        </header>
      );
    }
  }
}


export default Header;
