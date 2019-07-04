import combineReducers from 'redux/src/combineReducers';

import signInReducer from './signIn.reducer';
import signOutReducer from './signOut.reducer';

export default combineReducers({
  signInReducer,
  signOutReducer,
});
