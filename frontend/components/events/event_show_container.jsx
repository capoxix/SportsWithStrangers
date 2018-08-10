import {connect} from 'react-redux';
import EventShow from './event_index';
import {fetchEvent} from '../../actions/event_actions';

const msp = (state, ownProps) => ({
  errors: state.errors,
  event: state.entities.events[ownProps.match.params.eventId],
  user: {},
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

const mdp = (dispatch) => ({
  fetchEvent: (id) => dispatch(fetchEvent(id))
});

export default connect(msp, mdp)(EventShow);
