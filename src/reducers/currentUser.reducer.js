import { CURRENT_USER } from '../actions/currentUser.action';

export default (state = {}, action) => {
  switch (action.type) {
    case CURRENT_USER:
      console.log('action.payload');
      console.log(action.payload);
      if (typeof action.payload.password === 'undefined') {
        localStorage.removeItem('token');
      } else if (action.payload.email === 'admin@admin.com' && action.payload.password === 'password') {
        localStorage.setItem('token', '123');
      }
      return action.payload;
    default:
      return state;
  }
};
