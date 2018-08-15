import {connect} from 'react-redux';
import Dashboard from './dashboard';
import {deleteJoinedEvent} from '../../actions/joined_event_actions';
import {deleteEvent} from '../../actions/event_actions';
import {getHostedEvents,
  getJoinedEvents,
  getWaitlistedEvents} from '../../reducers/selectors';

const msp = (state) => ({
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
  currentUser: state.entities.users[state.session.id],
  joinedEventsArr: getJoinedEvents(
    {events: state.entities.events,
      currentUser: state.entities.users[state.session.id],
    joinedEvents: state.entities.joinedEvents})
});

//deletejoinedEvent needs to be modified
const mdp = (dispatch) => ({
  deleteJoinedEvent: (id) => dispatch(deleteJoinedEvent(id)),
  deleteEvent: (id) => dispatch(deleteEvent(id)),
});

export default connect(msp, mdp)(Dashboard);
