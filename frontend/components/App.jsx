import GreetingContainer from './greeting/greeting_container';
import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import {AuthRoute} from '../util/route_util';
// import SitIndexContainer from './sit/sit_index_container';
// import SearchContainer from './search_container';

const App = () => (
  <div>
    <header>
      <h1>Exercise With Strangers!!!</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
