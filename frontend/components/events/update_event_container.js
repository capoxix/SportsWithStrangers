import {connect} from 'react-redux';
import EventForm from './event_form';
import {updateEvent} from '../../actions/event_actions';
import {clearErrors} from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import {fetchCities, fetchCategories} from  '../../actions/filter_actions';


const msp = (state, ownProps) => ({
  errors: state.errors,
  formType: 'Update Sports Time',
  event: state.entities.events[ownProps.match.params.eventId],
  cities: state.entities.cities,
  categories: state.entities.categories,
});
//call fetchAllEvents(index page) => call fetchEvent (show page)
const mdp = (dispatch) => ({
  processForm: (event) => dispatch(updateEvent(event)),
  clearErrors: () => dispatch(clearErrors()),
  fetchCities: () => dispatch(fetchCities()),
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(msp, mdp)(EventForm);
