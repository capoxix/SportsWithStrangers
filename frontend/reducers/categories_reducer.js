import {
  RECEIVE_ALL_FILTERS,
} from '../actions/filter_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_FILTERS:
      return merge({}, state, action.categories);
    default:
      return state;
  }
};
