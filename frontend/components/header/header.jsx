import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.showNav = this.showNav.bind(this);
    this.logoutAndClear = this.logoutAndClear.bind(this);
    this.clear = this.clear.bind(this);
    this.loginAndSendToEvents = this.loginAndSendToEvents.bind(this);
  }

  showNav(e){
    if (document.getElementById('center').style.display === "none") {
      document.getElementById('header').style.height = '100px';
      document.getElementById('center').style.display = "block";
    } else {
      document.getElementById('center').style.display = "none";
      document.getElementById('header').style.height = '80px';
    }
  }

  clear(){
    this.props.clearErrors();
    this.props.clearJoinedEvents();
  }

  logoutAndClear(){
    this.props.logout()
    .then(() =>this.props.clearJoinedEvents())
    .then(() => this.props.history.push('/'));
  }

  loginAndSendToEvents(){
    this.props.login().then(() => this.props.history.push('/events'));
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
            <button onClick={() => this.loginAndSendToEvents()}>DEMO LOGIN</button>
            <Link onClick={() => this.clear()} to='/login'>SIGN IN</Link>
            <Link onClick={() => this.clear()} to='/signup' className='signup-button'>SIGN UP</Link>
          </nav>
          <div className="empty-space">
            <button onClick={() => this.showNav()}><img src={window.images.hamburger}></img></button>
          </div>
          <nav className="center" id='center'>
            <div className= "hamburger-dropdown">
              <Link to='/events'>SPORT EVENTS</Link>
              <Link to='/events/new'>HOSTING</Link>
              <button onClick={() => this.loginAndSendToEvents()}>DEMO LOGIN</button>
              <Link onClick={() => this.clear()} to='/login'>SIGN IN</Link>
              <Link onClick={() => this.clear()} to='/signup' className='signup-button'>SIGN UP</Link>
            </div>
            </nav>

        </div>
      );
    } else {
      return (
        <header id='header'>
          <div className='header-nav'>
            <nav className="left">
              <Link to ='/'><img src={window.images.logo}></img></Link>
              <p>Hello, {this.props.currentUser.name}</p>
            </nav>
            <nav className="right">
              <Link to='/events'>SPORT EVENTS</Link>
              <Link to='/events/new'>HOSTING</Link>
              <Link to='/dashboard'>DASHBOARD</Link>
              <button onClick={()=> this.logoutAndClear()}>SIGN OUT</button>
            </nav>
            <div className="empty-space">
              <button onClick={() => this.showNav()}><img src={window.images.hamburger}></img></button>
            </div>
            <nav className="center" id='center'>
              <div className= "hamburger-dropdown">
                <Link to='/events'>SPORT EVENTS</Link>
                <Link to='/events/new'>HOSTING</Link>
                <Link to='/dashboard'>DASHBOARD</Link>
                <button onClick={()=> this.logoutAndClear()}>SIGN OUT</button>
              </div>
            </nav>
          </div>
        </header>
      );
    }
  }
}


export default Header;
