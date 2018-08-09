import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPI from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import * as EventAPI from './util/event_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // window.logout = SessionAPI.logout;
  // window.login = SessionAPI.login;
  window.createEvent = EventAPI.createEvent; //confirmed
  // window.updateEvent = EventAPI.updateEvent; //confirmed
  window.getEvent = EventAPI.getEvent; //confirmed
  window.getAllEvents = EventAPI.getAllEvents; //confirmed
  // window.deleteEvent = EventAPI.deleteEvent; //confirmed

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
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
