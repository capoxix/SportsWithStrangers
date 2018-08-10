import {connect} from 'react-redux';
import EventIndex from './event_index';
import {fetchEvents} from '../../actions/event_actions';

const msp = (state) => ({
  errors: state.errors,
  events: state.entities.events,
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
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(msp, mdp)(EventIndex);
