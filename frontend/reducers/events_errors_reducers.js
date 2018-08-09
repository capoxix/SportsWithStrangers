import {
    RECEIVE_EVENT_ERRORS,
   RECEIVE_SINGLE_EVENT,
   RECEIVE_SINGLE_EVENT_SHOW,
}from '../actions/event_actions';
import { CLEAR_ERRORS} from '../actions/session_actions';

const eventErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    case RECEIVE_SINGLE_EVENT:
      return [];
    case RECEIVE_SINGLE_EVENT_SHOW:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
export default eventErrorsReducer;
