import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_SINGLE_EVENT_SHOW, RECEIVE_ALL_EVENT} from '../actions/event_actions';
import merge from 'lodash/merge';

import {
  RECEIVE_SINGLE_JOINED_EVENT,
  RECEIVE_JOINED_EVENT_ERRORS,
  REMOVE_JOINED_EVENT
} from '../actions/joined_event_actions';



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
    case RECEIVE_ALL_EVENT:
      return merge({}, state, action.payload.users);
    case RECEIVE_SINGLE_JOINED_EVENT:
      //get newState
      let newState = Object.assign({}, state);
      //get array attending_events ids from user and add to it
      let userId = action.joinedEvent.user_id;
      let eventId = action.joinedEvent.event_id;
      newState[userId].attending_event_ids.push(eventId);
      return newState;
    case REMOVE_JOINED_EVENT:
      let nState = Object.assign({}, state);
      let uId = action.joinedEvent.user_id;
      let eId = action.joinedEvent.event_id;
      let newArray = nState[uId].attending_event_ids
                  .filter(id => id != eId);
      nState[uId].attending_event_ids = newArray;
      return nState;
    default:
      return state;
  }
};
