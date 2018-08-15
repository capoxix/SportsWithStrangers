import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import eventsReducer from './events_reducer';
import categoriesReducer from './categories_reducer';
import citiesReducer from './cities_reducer';
import joinedEventsReducer from './join_events_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  events: eventsReducer,
  cities: citiesReducer,
  categories: categoriesReducer,
  joinedEvents: joinedEventsReducer
});

export default entitiesReducer;
