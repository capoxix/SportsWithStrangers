import {connect} from 'react-redux';
import EventIndex from './event_index';
import {fetchEvents} from '../../actions/event_actions';
import {fetchCities, fetchCategories} from  '../../actions/filter_actions';
import {getJoinedEvents} from '../../actions/joined_event_actions';

const msp = (state) => ({
  errors: state.errors,
  events: state.entities.events,
  users: state.entities.users,
  cities: state.entities.cities,
  categories: state.entities.categories,
  currentUser: state.entities.users[state.session.id],
  joinedEvents: state.entities.joinedEvents
});

const mdp = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchCities: () => dispatch(fetchCities()),
  fetchCategories: () => dispatch(fetchCategories()),
  getJoinedEvents: () => dispatch(getJoinedEvents())
});

export default connect(msp, mdp)(EventIndex);
