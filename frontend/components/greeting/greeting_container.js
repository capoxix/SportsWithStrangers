import {connect} from 'react-redux';
import {logout, login} from '../../actions/session_actions';
import Greeting from './greeting';

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
  logout: ()=> dispatch(logout()),
  login: () => dispatch(login({email: 'garbocheng93@gmail.com', password:'123456'}))
});

export default connect(msp, mdp)(Greeting);
