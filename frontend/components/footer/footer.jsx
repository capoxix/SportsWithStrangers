import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Footer = () => (
   <div>
     <div className="container">
       <div className="footer-links">
         <ul>
           <li><Link to='/events'>Sport Times</Link></li>
           <li><a href='https://garbocheng.netlify.com'>About</a></li>
           <li><a href='https://www.linkedin.com/in/garbo-cheng-ye/'>LinkedIn</a></li>
           <li><a href='https://github.com/capoxix'>GitHub</a></li>

         </ul>


       </div>
       <div className="footer-info">
         <span>
           Sports With Strangers is all about making our cities feel more
           like neighborhoods. We're more "connected" than ever before,
           but we're also more alone. And all we want to do is bring people
           together because, well, the world is better that way.
         </span>
         <span>
           We're not doing anything groundbreaking. We're creating
           something that would've been incredibly unnecessary 20 years
           ago. But while we get busier, it's easy to forget the value
           of playing sports for no reason.
         </span>
       </div>
     </div>
  </div>
);

export default Footer;
