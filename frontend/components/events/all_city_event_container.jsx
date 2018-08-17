import {connect} from 'react-redux';
import AllCity from './all_city_event';
import {fetchEvents} from '../../actions/event_actions';
import {fetchCities, fetchCategories} from  '../../actions/filter_actions';
import {getFilteredEvents} from '../../reducers/selectors';

const msp = (state, ownProps) => ({
  errors: state.errors,
  events: state.entities.events,
  users: state.entities.users,
  cities: state.entities.cities,
  city: state.entities.cities[ownProps.match.params.cityId],
  categories: state.entities.categories,
  currentUser: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchCities: () => dispatch(fetchCities()),
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(msp, mdp)(AllCity);
