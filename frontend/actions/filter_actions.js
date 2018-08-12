import * as API from "../util/filter_api_util";

export const RECEIVE_ALL_FILTERS = 'RECEIVE_ALL_FILTERS';

const receiveAllCities = cities => ({
  type: RECEIVE_ALL_FILTERS,
  cities
});

const receiveAllCategories = categories => ({
  type: RECEIVE_ALL_FILTERS,
  categories
});

export const fetchCities = () => dispatch => API.getAllCities()
  .then(cities => dispatch(receiveAllCities(cities)));

export const fetchCategories = () => dispatch => API.getAllCities()
  .then(categories => dispatch(receiveAllCategories(categories)));
