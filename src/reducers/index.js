import combineReducers from 'redux/src/combineReducers';

import signInReducer from './signIn.reducer';
import signUpReducer from './signUp.reducer';
import signOutReducer from './signOut.reducer';

export default combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  signOut: signOutReducer,
});
