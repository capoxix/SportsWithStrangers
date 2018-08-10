import {connect} from 'react-redux';
import EventForm from './event_form';
import {createEvent} from '../../actions/event_actions';
import {clearErrors} from '../../actions/session_actions';

const msp = (state) => ({
  errors: state.errors,
  formType: 'Create Sports Time',
  event: {
    date_time: new Date(Date.now('UTC')), //moment().format('MMMM Do YYYY, h:mm:ss a'),//need to add datetime
    address: '',
    country: '',
    city_id: '',
    category_id: '',
    num_of_members: '',
    description: '',
  },
  cities: Object.values({
    1 : {id: 1, name: 'San Francisco'},
    2 : {id: 2, name: 'Oakland'},
    3 : {id: 3, name: 'Los Angeles'}
  }),
  categories: Object.values({
    2: {id: 2, name: 'Basketball'},
    3: {id: 3, name: 'Soccer'},
    4: {id: 4, name: 'Tennis'}
  }),
});

const mdp = (dispatch, ownProps) => ({
  processForm: (event) => dispatch(createEvent(event)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(EventForm);
