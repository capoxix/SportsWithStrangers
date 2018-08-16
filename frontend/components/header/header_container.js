import {connect} from 'react-redux';
import {logout, login, clearErrors} from '../../actions/session_actions';
import Header from './header';
import {clearJoinedEvents} from '../../actions/joined_event_actions';

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
  logout: ()=> dispatch(logout()),
  login: () => dispatch(login({email: 'garbocheng93@gmail.com', password:'123456'})),
  clearErrors: () => dispatch(clearErrors()),
  clearJoinedEvents: () => dispatch(clearJoinedEvents())
});

export default connect(msp, mdp)(Header);
