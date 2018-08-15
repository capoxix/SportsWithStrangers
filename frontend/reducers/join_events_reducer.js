import {
  RECEIVE_ALL_JOINED_EVENT,
  RECEIVE_SINGLE_JOINED_EVENT,
  REMOVE_JOINED_EVENT,
} from '../actions/joined_event_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_JOINED_EVENT:
      return merge({}, state, {[action.joinedEvent.id] : action.joinedEvent});
    case RECEIVE_ALL_JOINED_EVENT:
      return merge({}, state, action.joinedEvents);
    case REMOVE_JOINED_EVENT:
    let newState = Object.assign({}, state);
    delete newState[action.joinedEvent.id];
    return newState;
    default:
      return state;
  }
};
