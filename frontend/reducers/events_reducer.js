import {
  RECEIVE_SINGLE_EVENT,
  RECEIVE_ALL_EVENT,
  RECEIVE_SINGLE_EVENT_SHOW,
  REMOVE_EVENT,
} from '../actions/event_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_EVENT:
      return merge({}, state, {[action.event.id] : action.event});
    case RECEIVE_ALL_EVENT:
      return merge({}, state, action.payload.events);
    case RECEIVE_SINGLE_EVENT_SHOW:
      return merge({}, state,
        {[action.payload.event.id]: action.payload.event});
    case REMOVE_EVENT:
      let newState = merge({}, state);
      delete newState[action.eventId];
      return newState;
    default:
      return state;
  }
};
