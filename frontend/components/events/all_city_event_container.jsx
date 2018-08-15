import {connect} from 'react-redux';
import EventIndex from './event_index';
import {fetchEvents} from '../../actions/event_actions';
import {fetchCities, fetchCategories} from  '../../actions/filter_actions';
import {getFilteredEvents} from '../../reducers/selectors';

const msp = (state, ownProps) => ({
  errors: state.errors,
  events: getFilteredEvents(
    {events : state.entities.events, cityId: ownProps.match.params.id}
  ),
  users: state.entities.users,
  cities: state.entities.cities,
  categories: state.entities.categories,
  currentUser: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchCities: () => dispatch(fetchCities()),
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(msp, mdp)(EventIndex);
