import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.showNav = this.showNav.bind(this);
  }

  showNav(e){
    // e.preventDefault();
    if (document.getElementById('center').style.display === "none") {
      document.getElementById('center').style.display = "block";
    } else {
      document.getElementById('center').style.display = "none";
    }
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
            <button onClick={() => this.props.login()}>DEMO LOGIN</button>
            <Link onClick={() => this.props.clearErrors()} to='/login'>SIGN IN</Link>
            <Link onClick={() => this.props.clearErrors()} to='/signup' className='signup-button'>SIGN UP</Link>
          </nav>
          <div className="empty-space">
            <button onClick={() => this.showNav()}><img src={window.images.hamburger}></img></button>
          </div>
          <nav className="center" id='center'>
            <div className= "hamburger-dropdown">
              <Link to='/events'>SPORT EVENTS</Link>
              <Link to='/events/new'>HOSTING</Link>
              <button onClick={() => this.props.login()}>DEMO LOGIN</button>
              <Link onClick={() => this.props.clearErrors()} to='/login'>SIGN IN</Link>
              <Link onClick={() => this.props.clearErrors()} to='/signup' className='signup-button'>SIGN UP</Link>
            </div>
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
              <Link to='/dashboard'>DASHBOARD</Link>
              <button onClick={this.props.logout}>SIGN OUT</button>
            </nav>
            <div className="empty-space">
              <button onClick={() => this.showNav()}><img src={window.images.hamburger}></img></button>
            </div>
            <nav className="center" id='center'>
              <div className= "hamburger-dropdown">
                <Link to='/events'>SPORT EVENTS</Link>
                <Link to='/events/new'>HOSTING</Link>
                <Link to='/dashboard'>DASHBOARD</Link>
                <button onClick={this.props.logout}>SIGN OUT</button>
              </div>
            </nav>
          </div>
        </header>
      );
    }
  }
}


export default Header;
