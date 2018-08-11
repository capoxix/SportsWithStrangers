import HeaderContainer from './header/header_container';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './user/signup_form_container';
import {AuthRoute} from '../util/route_util';
import Splash from './splash';
import Footer from './footer/footer';
import CreateEventContainer from './events/create_event_container';
import UpdateEventContainer from './events/update_event_container';
import EventIndexContainer from  './events/event_index_container';
import EventShowContainer from './events/event_show_container';
// import SearchContainer from './search_container';

const App = () => (
  <div>
    <header className='header'>
      <HeaderContainer />
    </header>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/events/new" component={CreateEventContainer}/>
        <Route exact path="/events/:eventId/edit" component={UpdateEventContainer}/>
        <Route exact path="/events" component={EventIndexContainer}/>
          <Route exact path="/events/:eventId" component={EventShowContainer}/>

        <Route exact path= "/" component= {Splash} />
        <Redirect to='/'/>
      </Switch>
    <footer className='footer'>
      <Footer/>
    </footer>
  </div>
);

export default App;
