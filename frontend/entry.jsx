import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPI from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import * as EventAPI from './util/event_api_util';
import * as EventACTION from  './actions/event_actions';
import * as FilterACTION from './actions/filter_actions';
// import * as JoinedEventAPI from './util/join_event_api_util';
import * as JoinedEventACTION from './actions/joined_event_actions';
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // window.logout = SessionAPI.logout;
  // window.login = SessionAPI.login;
  // window.updateEvent = EventACTION.updateEvent; //confirmed
  // window.deleteEvent = EventACTION.deleteEvent; //confirmed
  //
  //
  // window.fetchEvents = EventACTION.fetchEvents; //confirmed
  // window.fetchEvent = EventACTION.fetchEvent; //confirmed
  // window.createEvent = EventACTION.createEvent; //confirmed
  // EventAPI.getAllEvents().then(response => (window.events = response.events));

  // window.fetchCities = FilterACTION.fetchCities; //confirmed
  // window.fetchCategories = FilterACTION.fetchCategories; //confirmed
  // window.createJoinedEvent = JoinedEventACTION.createJoinedEvent; //confirmed;
  window.deleteJoinedEvent = JoinedEventACTION.deleteJoinedEvent; //confirmed

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, root);

  // ReactDOM.render(<h1>WELCOME!!!!!! </h1>, root);
});

/*
  {
  city_id: 2,
  category_id: 1,
  date_time: String(new Date(Date.now())).slice(0,24),
  address: '1122 street',
  country: 'USA',
  description: 'Testing',
  num_of_members: 3
  }
*/
