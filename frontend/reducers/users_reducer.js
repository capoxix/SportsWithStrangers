import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_SINGLE_EVENT_SHOW} from '../actions/event_actions';
import merge from 'lodash/merge';

//added default state = {}
export default (state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(
        {}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_SINGLE_EVENT_SHOW:
      return merge({}, state,
         {[action.payload.user.id]: action.payload.user});
    default:
      return state;
  }
};
