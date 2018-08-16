import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_SINGLE_EVENT_SHOW, RECEIVE_ALL_EVENT} from '../actions/event_actions';
import merge from 'lodash/merge';

import {
  RECEIVE_SINGLE_JOINED_EVENT,
  RECEIVE_JOINED_EVENT_ERRORS,
  REMOVE_JOINED_EVENT
} from '../actions/joined_event_actions';

import {
  RECEIVE_SINGLE_WAITLIST,
  RECEIVE_WAITLIST_ERRORS
} from '../actions/waitlist_actions';

export default (state = {}, action ) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
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
      let userId = action.joinedEvent.user_id;
      let eventId = action.joinedEvent.event_id;
      newState[userId].attending_event_ids.push(eventId);
      return newState;
    case REMOVE_JOINED_EVENT:
      let uId = action.joinedEvent.user_id;
      let eId = action.joinedEvent.event_id;
      let newArray = newState[uId].attending_event_ids
                  .filter(id => id != eId);
      newState[uId].attending_event_ids = newArray;
      return newState;
    case RECEIVE_SINGLE_WAITLIST:
      let wuId = action.waitlist.user_id;
      let weId = action.waitlist.event_id;
      newState[wuId].waiting_event_ids.push(weId);
      return newState;
    default:
      return state;
  }
};
