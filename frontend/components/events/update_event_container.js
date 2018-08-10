import {connect} from 'react-redux';
import EventForm from './event_form';
import {updateEvent} from '../../actions/event_actions';
import {clearErrors} from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
  errors: state.errors,
  formType: 'Update Sports Time',
  event: state.entities.events[ownProps.match.params.eventId],
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
//call fetchAllEvents(index page) => call fetchEvent (show page)
const mdp = (dispatch) => ({
  processForm: (event) => dispatch(updateEvent(event)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(msp, mdp)(EventForm);
