import {connect} from 'react-redux';
import EventForm from './event_form';
import {createEvent} from '../../actions/event_actions';
import {clearErrors} from '../../actions/session_actions';
import {fetchCities, fetchCategories} from  '../../actions/filter_actions';
var moment = require('moment');

let date = new Date(Date.now('UTC'));
date.setMinutes(0);
if (date.getHours() < 24) {
  date.setHours(date.getHours() + 1);
}

const msp = (state) => ({
  errors: state.errors,
  formType: 'Create Sports Time',
  event: {
    date_time: date,
    address: '',
    country: '',
    city_id: '',
    category_id: '',
    num_of_members: '',
    description: '',
  },
  cities: state.entities.cities,
  categories: state.entities.categories,
});

const mdp = (dispatch, ownProps) => ({
  processForm: (event) => dispatch(createEvent(event)),
  clearErrors: () => dispatch(clearErrors()),
  fetchCities: () => dispatch(fetchCities()),
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(msp, mdp)(EventForm);
