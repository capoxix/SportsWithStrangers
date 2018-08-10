import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import userErrorsReducer from './user_errors_reducer';
import eventErrorsReducer from './events_errors_reducer';

const errorsReducer = combineReducers ({
  session: sessionErrorsReducer,
  signup: userErrorsReducer,
  event: eventErrorsReducer
});

export default errorsReducer;
