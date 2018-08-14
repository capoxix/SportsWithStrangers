import * as API from "../util/waitlist_api_util";

export const RECEIVE_SINGLE_WAITLIST = 'RECEIVE_SINGLE_WAITLIST';
export const RECEIVE_WAITLIST_ERRORS = 'RECEIVE_WAITLIST_ERRORS';

const receiveSingleWaitlist = (waitlist) => ({
  type: RECEIVE_SINGLE_WAITLIST,
  waitlist
});

const receiveWaitlistErrors = errors => ({
  type: RECEIVE_WAITLIST_ERRORS,
  errors
});

export const createWaitlist = (waitlist) => dispatch => API.createWaitlist(waitlist)
  .then(waitlistServer => dispatch(receiveSingleWaitlist(waitlistServer)))
  .fail((errors) => dispatch(receiveWaitlistErrors(errors.responseJSON)));
