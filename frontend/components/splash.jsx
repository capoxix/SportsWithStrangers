import React from 'react';
import {Link} from 'react-router-dom';


class Splash extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="splash">

        <div className="row-1">
          <div className="inner">
            <h2>Everyone is interesting</h2>
            <span>But you don't discover that when you're staring at a screen.</span>
            <Link to='/'>LET'S PLAY SPORTS TOGETHER</Link>
          </div>
        </div>
        <div className='outer-row-2'>
          <div className="row-2">
            <div className="inner">
              <h2>Show up for sport time</h2>
              <span>You and a few others join a host at a location</span>
            </div>
            <div className="inner">
              <h2>Have a real game</h2>
              <span>You play sports for two hours</span>
            </div>
            <div className="inner">
              <h2> See what happens</h2>
              <span> That's it. No strings attached.</span>
            </div>
          </div>
        </div>

        <div className="row-3">

          <h3>SO WHY ARE THOUSANDS OF PEOPLE DOING IT?</h3>

          <div className="inner">
            <img src={window.images.huddle}></img>
            <div className='content-right'>
              <h2>It's weird.</h2>
              <span>Everyone at sport time is stepping a little out of their
                comfort zone. This makes it so much easier to actually learn
                something unexpected about the people around you.
                Because open minds are a prerequisite around here.
              </span>
            </div>
          </div>

          <div className="inner">
            <div className='content-left'>
              <h2>We won't meet otherwise</h2>
              <span>In all likelihood, our paths won't cross for any reason.
                So often, we only meet people through work, school, or friends
                of friends. And even then, it's questionable. So basically,
                we manufacture serendipity.
              </span>
            </div>
            <img src={window.images.strangers}></img>
          </div>

          <div className="inner">
            <img src={window.images.highFive}></img>
            <div className='content-right'>
              <h2>Your hands are made for high fiving!</h2>
              <span>And your eyes are made…for eye contact!
                Real humans are so much cooler than their tweets or Instagram pictures.
                Sport time has real humans! #nofilter!
              </span>
            </div>
          </div>

        </div>

        <div className="row-4">
          <div className="content">
            <h2>Do we get to high five yet?</h2>
            <Link to='/events'>YES</Link>
          </div>
        </div>

      </div>
    );

  }
}

export default Splash;
