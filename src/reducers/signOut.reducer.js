import { SIGNOUT } from '../actions/signOut.action';

export default (state = {}, action) => {
  switch (action.type) {
    case SIGNOUT:
      return {
        ...state,
        auth: {},
      };
    default:
      return state;
  }
};
