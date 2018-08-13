import * as API from "../util/join_event_api_util";

export const RECEIVE_SINGLE_JOINED_EVENT = 'RECEIVE_SINGLE_JOINED_EVENT';
export const RECEIVE_JOINED_EVENT_ERRORS = 'RECEIVE_JOINED_EVENT_ERRORS';
export const REMOVE_JOINED_EVENT = 'REMOVE_JOINED_EVENT';


const receiveSingleJoinedEvent = (joinedEvent) => ({
  type: RECEIVE_SINGLE_JOINED_EVENT,
  joinedEvent
});

const receiveJoinedEventErrors = errors => ({
  type: RECEIVE_JOINED_EVENT_ERRORS,
  errors
});

const removeJoinedEvent = (joinedEvent) => ({
  type: REMOVE_JOINED_EVENT,
  joinedEvent
});


export const createJoinedEvent = (joined_event) => dispatch => API.createJoinedEvent(joined_event)
  .then(eventServer => dispatch(receiveSingleJoinedEvent(eventServer)))
  .fail((errors) => dispatch(receiveJoinedEventErrors(errors.responseJSON)));

export const deleteJoinedEvent = (eventId) => dispatch => API.deleteJoinedEvent(eventId)
  .then((event) => dispatch(removeJoinedEvent(event)))
  .fail((errors) => dispatch(receiveJoinedEventErrors(errors.responseJSON)));
