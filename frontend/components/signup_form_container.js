import {connect} from 'react-redux';
import UserForm from './user_form';
import {signup} from '../actions/session_actions';

const msp = (state, ownProps) => ({
  errors: state.errors,
  formType: 'signup',
  user: {
    name: '',
    email: '',
    password: '',
    user_catchphrase: '',
    user_description: ''}
});

const mdp = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(msp, mdp)(UserForm);
