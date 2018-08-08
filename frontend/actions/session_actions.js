import * as API from "../util/session_api_util";


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveSignupErrors = errors => ({
  type: RECEIVE_SIGNUP_ERRORS,
  errors
});

export const signup = formUser => dispatch => API.signup(formUser)
  .then((user) => dispatch(receiveCurrentUser(user)))
  .fail((errors) => dispatch(receiveSignupErrors(errors.responseJSON)));

export const login = formUser => dispatch => API.login(formUser)
  .then((user) => dispatch(receiveCurrentUser(user)))
  .fail((errors) => dispatch(receiveErrors(errors.responseJSON)));

export const logout = () => dispatch => API.logout()
  .then(() => dispatch(logoutCurrentUser()));
