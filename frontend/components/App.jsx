import GreetingContainer from './greeting/greeting_container';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import {AuthRoute} from '../util/route_util';
import Splash from './splash';
// import SitIndexContainer from './sit/sit_index_container';
// import SearchContainer from './search_container';

const App = () => (
  <div>
    <header className='header'>
      <GreetingContainer />
    </header>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path= "/" component= {Splash} />
        <Redirect to='/'/>
      </Switch>
  </div>
);

export default App;
