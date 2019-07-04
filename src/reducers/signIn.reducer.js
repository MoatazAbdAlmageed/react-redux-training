import { SIGNIN } from '../actions/signIn.action';

export default (state = {}, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        auth: action.payload,
      };
    default:
      return state;
  }
};
