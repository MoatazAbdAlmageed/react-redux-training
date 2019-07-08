import { SIGNUP } from '../actions/signUp.action';

export default (state = {}, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};
