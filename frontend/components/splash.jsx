import React from 'react';
import {Link} from 'react-router-dom';

const Splash = () => (
  <div>
    <div className="splash1">
      <h2>Everyone is interesting</h2>
      <p>But you don't discover that whhen you're starting at a sreen.</p>
      <Link to='/'>LET'S PLAY SPORTS TOGETHER</Link>
    </div>
    <div className="splash2">
      <div>
        <h2>Show up for sport time</h2>
        <p>You and a few others join a host at a sport's location</p>
      </div>
      <div>
        <h2>Have a real game</h2>
        <p>You play sports for two hours</p>
      </div>
      <div>
        <h2> See what happens</h2>
        <p> That's it. No strings attached.</p>
      </div>
    </div>
    <div className="splash3">
    </div>

  </div>

);

export default Splash;
