import {connect} from 'react-redux';
import Dashboard from './dashboard';
import {deleteJoinedEvent} from '../../actions/joined_event_actions';
import {deleteEvent} from '../../actions/event_actions';
import {getHostedEvents,
  getJoinedEvents,
  getWaitlistedEvents} from '../../reducers/selectors';

const msp = (state) => ({
  joinedEvents: getJoinedEvents({
      events: state.entities.events,
      currentUser: state.entities.users[state.session.id]
    }
  ),
  waitlistedEvents: getWaitlistedEvents({
      events: state.entities.events,
      currentUser: state.entities.users[state.session.id]
    }
  ),
  hostedEvents: getHostedEvents({
    events: state.entities.events,
    currentUser: state.entities.users[state.session.id]
    }
  ),
  users: state.entities.users,
  cities: state.entities.cities,
  categories: state.entities.categories,
  currentUser: state.entities.users[state.session.id]
});

//deletejoinedEvent needs to be modified
const mdp = (dispatch) => ({
  deleteJoinedEvent: () => dispatch(deleteJoinedEvent()),
  deleteEvent: (id) => dispatch(deleteEvent(id))
});

export default connect(msp, mdp)(Dashboard);
