import * as API from "../util/event_api_util";

export const RECEIVE_SINGLE_EVENT = 'RECEIVE_SINGLE_EVENT';
export const RECEIVE_ALL_EVENT = 'RECEIVE_ALL_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_SINGLE_EVENT_SHOW = 'RECEIVE_SINGLE_EVENT_SHOW';

const receiveSingleEventShow = payload => ({
  type: RECEIVE_SINGLE_EVENT_SHOW,
  payload
});

const receiveAllEvents = payload => ({
  type: RECEIVE_ALL_EVENT,
  payload
});

const receiveSingleEvent = event => ({
  type: RECEIVE_SINGLE_EVENT,
  event
});

const receiveEventErrors = errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});

const removeEvent = (eventId) => ({
  type: REMOVE_EVENT,
  eventId
});

export const fetchEvents = () => dispatch => API.getAllEvents()
  .then(payload => dispatch(receiveAllEvents(payload)))
  .fail((errors) => dispatch(receiveEventErrors(errors.responseJSON)));

export const fetchEvent = (id) => dispatch => API.getEvent(id)
  .then(payload => dispatch(receiveSingleEventShow(payload)))
  .fail((errors) => dispatch(receiveEventErrors(errors.responseJSON)));


export const updateEvent = (event) => dispatch => API.updateEvent(event)
  .then(eventServer => dispatch(receiveSingleEvent(eventServer)))
  .fail((errors) => dispatch(receiveEventErrors(errors.responseJSON)));


export const createEvent = (event) => dispatch => API.createEvent(event)
  .then(eventServer => dispatch(receiveSingleEvent(eventServer)))
  .fail((errors) => dispatch(receiveEventErrors(errors.responseJSON)));


export const deleteEvent = (eventId) => dispatch => API.deleteEvent(eventId)
  .then(() => dispatch(removeEvent(eventId)))
  .fail((errors) => dispatch(receiveEventErrors(errors.responseJSON)));
