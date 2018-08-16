import HeaderContainer from './header/header_container';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './user/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SplashContainer from './splash_container';
import Footer from './footer/footer';
import CreateEventContainer from './events/create_event_container';
import UpdateEventContainer from './events/update_event_container';
import EventIndexContainer from  './events/event_index_container';
import EventShowContainer from './events/event_show_container';
import AllCityEventContainer from './events/all_city_event_container';
import DashboardContainer from './dashboard/dashboard_container';
// import SearchContainer from './search_container';

const App = () => (
  <div>
    <header className='header'>
      <HeaderContainer />
    </header>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path='/events/city/:cityId' component={AllCityEventContainer}/>
        <ProtectedRoute exact path="/events/new" component={CreateEventContainer}/>
        <ProtectedRoute exact path="/events/:eventId/edit" component={UpdateEventContainer}/>
        <ProtectedRoute exact path="/events/:eventId" component={EventShowContainer}/>
        <ProtectedRoute exact path="/dashboard" component={DashboardContainer}/>
      <Route exact path="/events" component={EventIndexContainer}/>
        <Route exact path= "/" component= {SplashContainer} />
        <Redirect to='/'/>
      </Switch>
    <footer className='footer'>
      <Footer/>
    </footer>
  </div>
);

export default App;
