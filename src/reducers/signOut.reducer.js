import { SIGNOUT } from '../actions/signOut.action';

export default (state = {}, action) => {
  switch (action.type) {
    case SIGNOUT:
      return action.payload;
    default:
      return state;
  }
};
