import {
  RECEIVE_SIGNUP_ERRORS,
   RECEIVE_CURRENT_USER
 } from '../actions/session_actions';

const userErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SIGNUP_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
export default userErrorsReducer;
