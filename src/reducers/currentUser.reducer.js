import { CURRENT_USER } from '../actions/currentUser.action';

export default (state = {}, action) => {
  switch (action.type) {
    case CURRENT_USER:

      if (typeof action.payload.password === 'undefined') {
        localStorage.removeItem('token');
      } else {
        localStorage.setItem('token', '123');
      }
      return action.payload;
    default:
      return state;
  }
};
