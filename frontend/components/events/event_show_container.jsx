import {connect} from 'react-redux';
import EventShow from './event_show';
import {fetchEvent, deleteEvent} from '../../actions/event_actions';
import {fetchCities, fetchCategories} from  '../../actions/filter_actions';
import {createJoinedEvent} from '../../actions/joined_event_actions';
import {createWaitlist} from '../../actions/waitlist_actions';

const msp = (state) => ({
  errors: state.errors,
  events: state.entities.events,
  users: state.entities.users,
  currentUserId: state.session.id,
  cities: state.entities.cities,
  categories: state.entities.categories,
});

const mdp = (dispatch) => ({
  fetchEvent: (id) => dispatch(fetchEvent(id)),
  deleteEvent: (id) => dispatch(deleteEvent(id)),
  fetchCities: () => dispatch(fetchCities()),
  fetchCategories: () => dispatch(fetchCategories()),
  createJoinedEvent: (event) => dispatch(createJoinedEvent(event)),
  createWaitlist: (event) => dispatch(createWaitlist(event))
});

export default connect(msp, mdp)(EventShow);
