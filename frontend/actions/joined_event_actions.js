import * as API from "../util/join_event_api_util";

export const RECEIVE_SINGLE_JOINED_EVENT = 'RECEIVE_SINGLE_JOINED_EVENT';
export const RECEIVE_JOINED_EVENT_ERRORS = 'RECEIVE_JOINED_EVENT_ERRORS';
export const REMOVE_JOINED_EVENT = 'REMOVE_JOINED_EVENT';
export const RECEIVE_ALL_JOINED_EVENT = 'RECEIVE_ALL_JOINED_EVENT';
export const CLEAR_JOINED_EVENTS = 'CLEAR_JOINED_EVENTS';

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

const receiveAllJoinedEvents = (joinedEvents) => ({
  type: RECEIVE_ALL_JOINED_EVENT,
  joinedEvents
});

export const clearJoinedEvents = () => ({
  type: CLEAR_JOINED_EVENTS
});

export const createJoinedEvent = (joined_event) => dispatch => API.createJoinedEvent(joined_event)
  .then(eventServer => dispatch(receiveSingleJoinedEvent(eventServer)))
  .fail((errors) => dispatch(receiveJoinedEventErrors(errors.responseJSON)));

export const deleteJoinedEvent = (eventId) => dispatch => API.deleteJoinedEvent(eventId)
  .then((event) => dispatch(removeJoinedEvent(event)))
  .fail((errors) => dispatch(receiveJoinedEventErrors(errors.responseJSON)));

export const getJoinedEvents = () => dispatch => API.getJoinedEvents()
  .then((eventServers) => dispatch(receiveAllJoinedEvents(eventServers)));
